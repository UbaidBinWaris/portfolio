import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // CSRF Protection: Verify custom header, Origin, and Referer headers
    const reqHeaders = request.headers;
    const requestedWith = reqHeaders.get('x-requested-with');
    const csrfToken = reqHeaders.get('x-csrf-token');
    const origin = reqHeaders.get('origin');
    const referer = reqHeaders.get('referer');
    
    // Determine the allowed domain dynamically
    const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL || 'https://uabidbinwaris.dev';

    // 1. Check for the custom AJAX headers (prevent standard cross-site requests)
    if (requestedWith !== 'XMLHttpRequest' || csrfToken !== 'portfolio-csrf-secure') {
      return NextResponse.json(
        { error: 'CSRF Blocked: Invalid request headers' },
        { status: 403 }
      );
    }

    // 2. Validate Origin (if present)
    if (origin && !origin.startsWith(allowedOrigin) && !origin.startsWith('http://localhost') && !origin.startsWith('http://127.0.0.1')) {
      return NextResponse.json(
        { error: 'CSRF Blocked: Invalid Origin' },
        { status: 403 }
      );
    }

    // 3. Validate Referer (if present)
    if (referer && !referer.startsWith(allowedOrigin) && !referer.startsWith('http://localhost') && !referer.startsWith('http://127.0.0.1')) {
      return NextResponse.json(
        { error: 'CSRF Blocked: Invalid Referer' },
        { status: 403 }
      );
    }

    const { name, email, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.EMAIL_TO || 'ubaidbinwaris@example.com',
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #63B8B2;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}

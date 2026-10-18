import Link from "next/link";
export default function NotFound() {
  return (
    <main
      id="main-content"
      className="detail-page min-h-[70vh] flex items-center"
    >
      <div className="detail-container py-20">
        <p className="eyebrow">404 / PAGE NOT FOUND</p>
        <h1 className="text-5xl text-fg mb-6">A small detour.</h1>
        <p className="text-fg-muted mb-9">
          That page doesn’t exist. Find the services and project walkthroughs on
          the portfolio.
        </p>
        <Link href="/" className="primary-link">
          Back to the portfolio →
        </Link>
      </div>
    </main>
  );
}

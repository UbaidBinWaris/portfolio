"use client";
import React from "react";
import blogPosts from "@/app/data/blogPosts";
import { motion } from "framer-motion";

export const BlogSection = () => {
  return (
    <section 
      id="blog" 
      className="w-full bg-[#0A1930] py-16 px-8 flex flex-col items-center justify-center"
      aria-labelledby="blog-heading"
    >
      <div className="w-full max-w-7xl">
        <h2 id="blog-heading" className="text-3xl md:text-4xl font-bold text-[#63B8B2] mb-4 text-left">Latest Articles</h2>
        <p className="text-gray-400 mb-12 text-left max-w-2xl">
          Sharing insights about web development, best practices, and modern technologies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            className="bg-[#112240] rounded-xl p-6 shadow-lg hover:shadow-[#63B8B2]/20 transition-all duration-300 hover:scale-105 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h3 className="text-xl font-semibold text-[#63B8B2] mb-3 hover:text-white transition-colors">
              {post.title}
            </h3>

            <p className="text-gray-300 mb-4 flex-grow">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-[#0A1930] text-[#63B8B2] text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button 
              className="mt-auto text-[#63B8B2] hover:text-white transition-colors font-medium flex items-center gap-2 group"
              aria-label={`Read article: ${post.title}`}
            >
              Read More 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.article>
        ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Ubaid Bin Waris Blog",
            "description": "Technical articles about web development and programming",
            "url": `${process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://uabidbinwaris.dev'}/#blog`,
            "author": {
              "@type": "Person",
              "name": "Ubaid Bin Waris"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "keywords": post.tags.join(", ")
            }))
          })
        }}
      />
    </section>
  );
};

export default BlogSection;

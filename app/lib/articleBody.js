// Small Markdown subset for articlesData.js, parsed once and rendered two ways:
// React elements for pages (ArticleBody) and an HTML string for the RSS feed (articleHtml).
// Blocks are separated by blank lines:
//   ## Heading / ### Subheading / > quote / "- " bullets / "1. " numbered / paragraphs
// Inline: **bold**, `code`, [text](https://url)
import { Fragment } from "react";

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g;

function parseInline(text) {
  return text.split(INLINE).filter(Boolean).map((part) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) return { type: "strong", text: part.slice(2, -2) };
    if (/^`[^`]+`$/.test(part)) return { type: "code", text: part.slice(1, -1) };
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) return { type: "link", text: link[1], href: link[2] };
    return { type: "text", text: part };
  });
}

export function parseArticle(source) {
  return source
    .trim()
    .split(/\n\s*\n/)
    .map((block) => {
      const lines = block.split("\n").map((l) => l.trim());
      const text = lines.join(" ");
      if (block.startsWith("### ")) return { type: "h3", inline: parseInline(text.slice(4)) };
      if (block.startsWith("## ")) return { type: "h2", inline: parseInline(text.slice(3)) };
      if (lines.every((l) => l.startsWith("> ")))
        return { type: "blockquote", inline: parseInline(lines.map((l) => l.slice(2)).join(" ")) };
      if (lines.every((l) => /^[-*] /.test(l)))
        return { type: "ul", items: lines.map((l) => parseInline(l.slice(2))) };
      if (lines.every((l) => /^\d+\. /.test(l)))
        return { type: "ol", items: lines.map((l) => parseInline(l.replace(/^\d+\. /, ""))) };
      return { type: "p", inline: parseInline(text) };
    });
}

const isExternal = (href) =>
  /^https?:\/\//.test(href) && !href.startsWith("https://ubaidbinwaris.com");

// ---- React rendering (pages) ----
function renderInline(tokens, prefix) {
  return tokens.map((t, i) => {
    const key = `${prefix}-${i}`;
    if (t.type === "strong") return <strong key={key}>{t.text}</strong>;
    if (t.type === "code") return <code key={key}>{t.text}</code>;
    if (t.type === "link")
      return (
        <a key={key} href={t.href} {...(isExternal(t.href) && { target: "_blank", rel: "noopener" })}>
          {t.text}
        </a>
      );
    return <Fragment key={key}>{t.text}</Fragment>;
  });
}

export function ArticleBody({ source }) {
  return parseArticle(source).map((b, i) => {
    const key = `b${i}`;
    if (b.type === "ul" || b.type === "ol") {
      const List = b.type;
      return (
        <List key={key} className={b.type === "ul" ? "work-list" : undefined}>
          {b.items.map((item, j) => <li key={j}>{renderInline(item, `${key}-${j}`)}</li>)}
        </List>
      );
    }
    const Tag = b.type;
    return <Tag key={key}>{renderInline(b.inline, key)}</Tag>;
  });
}

// ---- HTML string rendering (RSS feed) ----
const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function inlineHtml(tokens) {
  return tokens
    .map((t) => {
      if (t.type === "strong") return `<strong>${esc(t.text)}</strong>`;
      if (t.type === "code") return `<code>${esc(t.text)}</code>`;
      if (t.type === "link") return `<a href="${esc(t.href)}">${esc(t.text)}</a>`;
      return esc(t.text);
    })
    .join("");
}

export function articleHtml(source) {
  return parseArticle(source)
    .map((b) => {
      if (b.type === "ul" || b.type === "ol")
        return `<${b.type}>${b.items.map((i) => `<li>${inlineHtml(i)}</li>`).join("")}</${b.type}>`;
      return `<${b.type}>${inlineHtml(b.inline)}</${b.type}>`;
    })
    .join("\n");
}

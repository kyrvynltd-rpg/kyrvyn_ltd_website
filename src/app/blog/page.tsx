import { GlassCard } from "@/components/ui/GlassCard";
import { client } from "@/sanity/sanity.client";
import type { TypedObject } from "@portabletext/types";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export const dynamic = "force-static";

type Post = {
  _id: string;
  title: string;
  slug: string;
  authorName?: string;
  publishedAt?: string;
  body?: TypedObject[];
};

function excerptFromPortableText(body?: TypedObject[], maxLen = 220) {
  if (!body || body.length === 0) return "";
  const text = body
    .flatMap((b) => {
      const children = (b as unknown as { children?: unknown }).children;
      if (!Array.isArray(children)) return [];
      return children.flatMap((c) => {
        const t = (c as unknown as { text?: unknown }).text;
        return typeof t === "string" ? [t] : [];
      });
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return "";
  return text.length > maxLen ? `${text.slice(0, maxLen - 1)}…` : text;
}

export default async function Blog() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "authorName": author->name,
    publishedAt,
    body
  }`;

  // Await the GROQ query
  const posts = await client.fetch<Post[]>(query).catch(() => []);

  return (
    <div className="py-12 max-w-4xl mx-auto z-10 relative px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <GlassCard className="p-8 md:flex-1 shadow-xl">
          <h1 className="text-5xl font-bold mb-4 font-serif text-slate-900 dark:text-white">
            Insights
          </h1>
          <p className="text-slate-900 dark:text-slate-400">
            Digital transformation guidance, engineering playbooks, and practical notes on building
            resilient platforms.
          </p>
        </GlassCard>

        <NewsletterForm compact />
      </div>

      <div className="flex flex-col gap-12">
        {posts.length === 0 && (
          <GlassCard className="p-8 text-center text-slate-500">
            No articles published yet. Check back soon for new insights.
          </GlassCard>
        )}
        {posts.map((post) => (
          <div key={post._id} className="block">
            <GlassCard className="group p-8 transition-transform hover:-translate-y-1">
              <time className="text-sm font-medium text-accent-maroon dark:text-accent-blood mb-2 block">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "Unpublished"}
              </time>
              <h2 className="text-3xl font-serif font-bold mb-3 group-hover:text-accent-maroon dark:group-hover:text-accent-blood transition-colors">
                {post.title}
              </h2>
              {post.authorName && (
                <p className="text-xs text-slate-400 mb-4">By {post.authorName}</p>
              )}
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {excerptFromPortableText(post.body) || "No summary provided."}
              </p>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
}

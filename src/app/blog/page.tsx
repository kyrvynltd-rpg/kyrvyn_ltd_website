import { Mail } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { client } from "@/sanity/sanity.client";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

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
  const posts = await client.fetch(query).catch(() => []);

  return (
    <div className="py-12 max-w-4xl mx-auto z-10 relative px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <GlassCard className="p-8 md:flex-1 shadow-xl">
          <h1 className="text-5xl font-bold mb-4 font-serif text-slate-900 dark:text-white">Research & Operations</h1>
          <p className="text-slate-900 dark:text-slate-400">Technical whitepapers, protocol upgrades, and security audits.</p>
        </GlassCard>
        
        {/* Newsletter Box */}
        <GlassCard className="w-full md:max-w-sm p-1 shadow-lg">
          <form className="flex items-center gap-2 focus-within:ring-2 ring-accent-maroon dark:ring-accent-blood rounded-2xl w-full">
            <div className="pl-4 text-cool-grey"><Mail size={18} /></div>
          <input 
            type="email" 
            required
            aria-label="Institutional email address"
            placeholder="Institutional email address..." 
            className="w-full bg-transparent outline-none text-sm py-2 placeholder:text-cool-grey/60 peer"
          />
          <button type="submit" className="bg-accent-maroon dark:bg-accent-blood text-white px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity peer-invalid:opacity-50 peer-invalid:pointer-events-none">
            Subscribe
          </button>
          </form>
        </GlassCard>
      </div>

      <div className="flex flex-col gap-12">
        {posts.length === 0 && (
          <GlassCard className="p-8 text-center text-slate-500">
            No research papers published yet. Establish CMS connection to ingest documents.
          </GlassCard>
        )}
        {posts.map((post: any) => (
          <Link href={`/blog/${post.slug}`} key={post._id} className="block">
            <GlassCard className="group cursor-pointer p-8 transition-transform hover:-translate-y-1">
              <time className="text-sm font-medium text-accent-maroon dark:text-accent-blood mb-2 block">
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "Unpublished"}
              </time>
              <h2 className="text-3xl font-serif font-bold mb-3 group-hover:text-accent-maroon dark:group-hover:text-accent-blood transition-colors">
                {post.title}
              </h2>
              {post.authorName && <p className="text-xs text-slate-400 mb-4">By {post.authorName}</p>}
              <div className="prose prose-lg dark:prose-invert prose-p:text-slate-900 dark:prose-p:text-slate-400 prose-a:text-accent-maroon dark:prose-a:text-accent-blood line-clamp-2">
                {post.body ? <PortableText value={post.body} /> : <p>No summary provided.</p>}
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}

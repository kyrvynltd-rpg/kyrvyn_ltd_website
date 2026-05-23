import { client } from "@/sanity/sanity.client";
import { GlassCard } from "@/components/ui/GlassCard";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const revalidate = 60;

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "authorName": author->name,
    publishedAt,
    body
  }`;
  
  // Await the GROQ query parameter extraction
  const post = await client.fetch(query, { slug }).catch(() => null);

  if (!post) {
    return (
      <div className="py-24 max-w-3xl mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">404 - Document Destroyed</h1>
        <Link href="/blog" className="text-accent-maroon hover:underline">Abort and return to Research Hub</Link>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 z-10 relative">
      <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors font-medium">
        <ArrowLeft size={16} /> Operations Console
      </Link>
      
      <GlassCard className="p-8 md:p-12 shadow-2xl">
        <header className="mb-12 border-b border-black/10 dark:border-white/10 pb-8">
          <time className="text-sm font-medium text-accent-maroon dark:text-accent-blood mb-4 block">
            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "Unpublished Draft"}
          </time>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-slate-900 dark:text-white leading-tight">
            {post.title}
          </h1>
          {post.authorName && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white/20 shadow-inner" />
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{post.authorName}</p>
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Core Protocol Engineer</p>
              </div>
            </div>
          )}
        </header>

        <div className="prose prose-lg dark:prose-invert prose-blue max-w-none prose-headings:font-serif prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-a:text-accent-maroon dark:prose-a:text-accent-blood leading-loose">
          {post.body ? <PortableText value={post.body} /> : <p>Encrypted block payload empty.</p>}
        </div>
      </GlassCard>
    </div>
  );
}

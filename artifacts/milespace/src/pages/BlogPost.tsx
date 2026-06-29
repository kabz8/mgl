import { useRoute, Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, ArrowRight, Eye, Heart, Share2, Bookmark, Check } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NotFound from "@/pages/not-found";
import { useBlogInteractions } from "@/hooks/useBlogInteractions";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPost() {
  const [, navigate] = useLocation();
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = blogPosts.find((p) => p.slug === slug);
  const { views, liked, bookmarked, copied, toggleLike, toggleBookmark, share } = useBlogInteractions(slug);

  if (!post) return <NotFound />;

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 2);

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Back nav */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 py-4">
          <button
            onClick={() => navigate("~/blog")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} /> Back to Blog
          </button>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-primary text-primary-foreground pt-14 pb-12">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Badge className="mb-5 bg-secondary text-primary font-semibold">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-primary-foreground/75 leading-relaxed mb-8">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {formatDate(post.date)}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime} min read</span>
              <span className="flex items-center gap-1.5"><Eye size={14} /> {views > 0 ? views.toLocaleString() : "—"} views</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="w-full max-h-[420px] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Body */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-primary prose-blockquote:bg-muted/30 prose-blockquote:rounded-r-lg prose-blockquote:py-1"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm px-3 py-1">{tag}</Badge>
            ))}
          </div>

          {/* Engagement bar */}
          <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-border">
            <div className="flex items-center gap-1">
              <button
                onClick={toggleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  liked
                    ? "bg-red-50 text-red-500 border border-red-200"
                    : "bg-muted text-muted-foreground hover:bg-red-50 hover:text-red-500 border border-border"
                }`}
                aria-label={liked ? "Unlike" : "Like"}
              >
                <Heart size={15} className={liked ? "fill-red-500" : ""} />
                {liked ? "Liked" : "Like"}
              </button>

              <button
                onClick={() => share(post.title)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-primary hover:text-white border border-border transition-all duration-200"
                aria-label="Share"
              >
                {copied ? <Check size={15} /> : <Share2 size={15} />}
                {copied ? "Copied!" : "Share"}
              </button>
            </div>

            <button
              onClick={toggleBookmark}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                bookmarked
                  ? "bg-primary/10 text-primary border-primary/30"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary border-border"
              }`}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark"}
            >
              <Bookmark size={15} className={bookmarked ? "fill-primary" : ""} />
              {bookmarked ? "Saved" : "Save"}
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to grow your business?</h2>
          <p className="text-primary-foreground/70 mb-8 text-lg">
            Milespace builds the digital foundations that turn traffic into revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold h-13 px-8">
              <a href={getWhatsAppLink(`Hi Milespace, I read your article on "${post.title}" and I'd like to discuss my project.`)} target="_blank" rel="noopener noreferrer">
                Chat With Us <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-13 px-8">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-14 bg-muted/20 border-t border-border">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-xl font-semibold text-muted-foreground uppercase tracking-widest mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 p-6">
                  <Badge variant="secondary" className="text-xs mb-3">{p.category}</Badge>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

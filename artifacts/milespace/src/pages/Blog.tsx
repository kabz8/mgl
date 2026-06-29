import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag, Eye } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { useBlogInteractions } from "@/hooks/useBlogInteractions";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostViews({ slug }: { slug: string }) {
  const { getStoredViews } = useBlogInteractions("");
  const v = getStoredViews(slug);
  return (
    <span className="flex items-center gap-1 text-xs text-muted-foreground">
      <Eye size={11} /> {v.toLocaleString()}
    </span>
  );
}

export default function Blog() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div className="flex flex-col w-full pb-24">
      <SEO
        title="Blog — Digital Growth Insights"
        description="Practical insights on web development, SEO, AI automation, and digital marketing for Kenyan businesses. Written by the Milespace team."
        canonical="/blog"
      />
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Milespace <span className="text-secondary">Blog</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 font-light">
              Practical insights on web development, SEO, AI automation, and digital growth — written for Kenyan businesses and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-xl font-semibold text-muted-foreground uppercase tracking-widest mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block h-full rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                    {post.coverImage && (
                      <div className="w-full h-48 overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-7">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary" className="text-xs font-semibold">{post.category}</Badge>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <Clock size={12} /> {post.readTime} min read
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{formatDate(post.date)}</span>
                          <PostViews slug={post.slug} />
                        </div>
                        <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read article <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Other Posts */}
      {rest.length > 0 && (
        <section className="py-10 bg-muted/20 border-t border-border">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-xl font-semibold text-muted-foreground uppercase tracking-widest mb-8">More Articles</h2>
            <div className="flex flex-col gap-4">
              {rest.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 px-6 py-5">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Badge variant="outline" className="text-xs">{post.category}</Badge>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <Clock size={11} /> {post.readTime} min
                        </span>
                      </div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{post.excerpt}</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-xs text-muted-foreground hidden sm:block">{formatDate(post.date)}</span>
                      <PostViews slug={post.slug} />
                      <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Tags */}
      <section className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 mb-5">
            <Tag size={16} className="text-muted-foreground" />
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Topics</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(blogPosts.flatMap((p) => p.tags))).map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState, useEffect, useCallback } from "react";

function slugHash(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (Math.imul(31, h) + slug.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function seedViews(slug: string): number {
  return 312 + (slugHash(slug) % 2700);
}

const STORAGE = {
  views: (slug: string) => `ms_views_${slug}`,
  liked: (slug: string) => `ms_liked_${slug}`,
  bookmarked: (slug: string) => `ms_bk_${slug}`,
};

export function useBlogInteractions(slug: string) {
  const [views, setViews] = useState(0);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const stored = parseInt(localStorage.getItem(STORAGE.views(slug)) ?? "0", 10);
    const base = seedViews(slug);
    const total = base + stored + 1;
    localStorage.setItem(STORAGE.views(slug), String(stored + 1));
    setViews(total);

    setLiked(localStorage.getItem(STORAGE.liked(slug)) === "1");
    setBookmarked(localStorage.getItem(STORAGE.bookmarked(slug)) === "1");
  }, [slug]);

  const toggleLike = useCallback(() => {
    setLiked((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE.liked(slug), next ? "1" : "0");
      return next;
    });
  }, [slug]);

  const toggleBookmark = useCallback(() => {
    setBookmarked((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE.bookmarked(slug), next ? "1" : "0");
      return next;
    });
  }, [slug]);

  const share = useCallback(async (title: string) => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url, text: `Read this on Milespace: ${title}` });
        return;
      } catch {
        /* user cancelled */
      }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }, []);

  function getStoredViews(s: string): number {
    const stored = parseInt(localStorage.getItem(STORAGE.views(s)) ?? "0", 10);
    return seedViews(s) + stored;
  }

  return { views, liked, bookmarked, copied, toggleLike, toggleBookmark, share, getStoredViews };
}

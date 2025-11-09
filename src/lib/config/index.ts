import type { Link } from "../types";

export const SITE = {
  title: "BazzBuzz",
  description: "A news website built with Astro",
  author: "M Riduan",
  url: "https://www.bazz.buzz",
  github: "",
  locale: "en-US",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/technology",
    text: "Technology",
  },
  {
    href: "/categories/programming",
    text: "Programming",
  },
  {
    href: "/categories/lifestyle",
    text: "Lifestyle",
  },
  {
    href: "/categories/productivity",
    text: "Productivity",
  },
  {
    href: "/categories/health",
    text: "Health",
  },
  {
    href: "/categories/finance",
    text: "Finance",
  },
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "About us",
  },
  {
    href: "/authors",
    text: "Authors",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/privacy",
    text: "Privacy",
  },
  {
    href: "/terms",
    text: "Terms",
  },
  {
    href: "/cookie-policy",
    text: "Cookie Policy",
  },
  {
    href: "https://www.bazz.buzz/rss.xml",
    text: "RSS",
  },
  {
    href: "https://www.bazz.buzz/sitemap-index.xml",
    text: "Sitemap",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com/mriduanpro",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "httpe://t.me/emri_id",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://www.facebook.com/cakdumek",
    text: "Facebook",
    icon: "facebook",
  },
];

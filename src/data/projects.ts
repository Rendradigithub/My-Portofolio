import type { ProjectCardProps } from "@/components/projects/project-card";
import type { ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

/**
 * ======================================================
 * PROJECT SHOWCASE (Homepage)
 * ======================================================
 */

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Zyroo",
    href: "/projects",
    tags: ["Vite", "Node.js", "React", "MongoDB", "Vercel"],
    image: {
      LIGHT: "/images/projects/ScreenshotZyroo.webp",
      DARK: "/images/projects/ScreenshotZyroo2.webp",
    },
  },
  {
    index: 1,
    title: "My Portfolio",
    href: "/projects",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    image: {
      LIGHT: "/images/projects/MyPortofolio1.webp",
      DARK: "/images/projects/MyPortofolio2.webp",
    },
  },
];

/**
 * ======================================================
 * PROJECT CARDS (Projects Page)
 * ======================================================
 */

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "My Portfolio",
    favicon: "/images/projects/logos/portfolio.svg",
    imageUrl: [
      "/images/projects/MyPortofolio1.webp",
      "/images/projects/MyPortofolio2.webp",
    ],
    description:
      "Personal portfolio website built with Next.js and Tailwind CSS. Showcases projects, skills, and experience with responsive design and smooth animations.",
    sourceCodeHref: "https://github.com/Rendradigithub/My-Portofolio",
    liveWebsiteHref: "https://my-portofolio-five-wheat.vercel.app/",
  },
  {
    name: "Zyroo",
    favicon: "/images/projects/logos/zyroo.svg",
    imageUrl: [
      "/images/projects/ScreenshotZyroo.webp",
      "/images/projects/ScreenshotZyroo2.webp",
    ],
    description:
      "Career platform built using React, Node.js, and MongoDB. Features authentication, job listings, dashboards, and scalable backend architecture.",
    sourceCodeHref: "https://github.com/Rendradigithub/Zyroo",
    liveWebsiteHref: "https://zyroo-low-build.vercel.app/",
  },
];

import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Zyroo",
    href: "/projects",
    tags: ["Nodejs", "ReactJS", "MongoDB", "Vercel"],
    image: {
      LIGHT: "/images/projects/ScreenshotZyroo.webp",
      DARK: "/images/projects/ScreenshotZyroo2.webp",
    },
  },
  {
    index: 1,
    title: "My Portofolio",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Nextjs"],
    image: {
      LIGHT: "/images/projects/kanbanLight.webp",
      DARK: "/images/projects/kanbanDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "My Portofolio",
    favicon: "/images/projects/logos/",
    imageUrl: [
      "/images/projects/MyPortofolio1.webp",
      "/images/projects/MyPortofolio2.webp",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    sourceCodeHref: "https://github.com/Rendradigithub/My-Portofolio",
    liveWebsiteHref: "https://my-portofolio-five-wheat.vercel.app/",
  },
  {
    name: "Zyroo",
    favicon: "/images/projects/logos/",
    imageUrl: [
      "/images/projects/ScreenshotZyroo.webp",
      "/images/projects/ScreenshotZyroo2.webp",
    ],
    description:
      "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
    sourceCodeHref: "https://github.com/Rendradigithub/Zyroo/tree/master",
    liveWebsiteHref: "https://zyroo-low-build.vercel.app/",
  },
];

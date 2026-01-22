import Head from "next/head";

import { PROJECTS_CARD } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Satrio Dwi Syairendra</title>
        <meta
          name="description"
          content="Kumpulan project yang pernah saya kembangkan menggunakan React, Next.js, Node.js, dan teknologi web modern."
        />
      </Head>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-primary mb-10 text-4xl font-bold">Projects</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS_CARD.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}

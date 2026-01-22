import ContactButton from "@/components/contact-form/contact-button";
import { siteMetadata } from "@/data/siteMetaData.mjs";

// ICON RESMI
import { FaGithub, FaInstagram, FaGitlab } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <ContactButton />

      <div className="flex w-full flex-col items-center justify-between gap-8 text-center md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-foreground">©2026 Satrio Dwi Syairendra</span>

        <div className="flex gap-8 text-2xl">
          {/* GITHUB */}
          <a
            href={siteMetadata.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent transition hover:text-accent-foreground"
          >
            <FaGithub />
          </a>

          {/* INSTAGRAM */}
          <a
            href={siteMetadata.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 transition hover:text-pink-600"
          >
            <FaInstagram />
          </a>

          {/* GITLAB */}
          <a
            href={siteMetadata.gitlab}
            target="_blank"
            rel="noreferrer"
            className="text-orange-500 transition hover:text-orange-600"
          >
            <FaGitlab />
          </a>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import "./case-study.css";
import { notFound } from "next/navigation";
import { Link } from "next-view-transitions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudy from "@/components/CaseStudy";
import ArrowIcon from "@/components/ArrowIcon";
import ProjectScrollReset from "@/components/ProjectScrollReset";
import { getProject, getAdjacentProjects, projects } from "@/lib/projects";
import media from "@/lib/project-media.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  const cover = project.caseStudyImage ?? project.heroImage;
  const size = (media as Record<string, { width: number; height: number }>)[
    cover
  ];

  return {
    title: `${project.title}: ${project.role}`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title}: ${project.role}`,
      description: project.description,
      type: "article",
      images: [
        {
          url: cover,
          ...(size ?? {}),
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title}: ${project.role}`,
      description: project.description,
      images: [cover],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(slug);
  const nextProject = next ?? projects[0];

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `https://sifat.tech/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: "Sifat Bhatia",
      url: "https://sifat.tech",
    },
    genre: project.role,
    keywords: project.stack.join(", "),
    ...(project.url && { sameAs: project.url }),
    image: `https://sifat.tech${project.caseStudyImage ?? project.heroImage}`,
  };

  return (
    <>
      <ProjectScrollReset />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <Navbar />
      <main id="main-content">
        <CaseStudy project={project} />

        <nav className="cs-project-nav" aria-label="More projects">
          <div className="cs-project-nav-top">
            <Link href="/projects" className="cs-back">
              <ArrowIcon direction="left" />
              All projects
            </Link>
            {prev && (
              <Link href={`/projects/${prev.slug}`} className="cs-text-link">
                <ArrowIcon direction="left" />
                {prev.title}
              </Link>
            )}
          </div>
          <Link href={`/projects/${nextProject.slug}`} className="cs-next">
            <div className="cs-next-image">
              <Image
                src={nextProject.caseStudyImage ?? nextProject.heroImage}
                alt=""
                width={960}
                height={600}
                sizes="(max-width: 767px) calc(100vw - 48px), 45vw"
              />
            </div>
            <div>
              <span className="cs-label">Next project</span>
              <span className="cs-next-title">
                {nextProject.title}
                <ArrowIcon />
              </span>
              <span className="cs-next-role">{nextProject.role}</span>
            </div>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

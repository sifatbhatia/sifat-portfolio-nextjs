import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "next-view-transitions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudy from "@/components/CaseStudy";
import { getProject, getAdjacentProjects, projects } from "@/lib/projects";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — ${project.role}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.role}`,
      description: project.description,
      type: "article",
      images: [{ url: project.heroImage, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.role}`,
      description: project.description,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(slug);

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
    dateCreated: `${project.year}-01-01`,
    genre: project.role,
    keywords: project.stack.join(", "),
    ...(project.url && { sameAs: project.url }),
    image: `https://sifat.tech${project.heroImage}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <Navbar />
      <main>
        <CaseStudy project={project} />

        <nav style={{
          maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(1.5rem, 6vw, 4rem) clamp(4rem, 8vh, 6rem)",
          display: "flex", justifyContent: "space-between", gap: "2rem",
          borderTop: "1px solid rgba(241,238,231,0.15)", paddingTop: "2rem",
        }}>
          <div>
            {prev && (
              <Link href={`/projects/${prev.slug}`} style={{ color: "rgba(241,238,231,0.55)", textDecoration: "none", fontSize: "0.875rem", fontFamily: "var(--font-body)" }}>
                ← {prev.title}
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link href={`/projects/${next.slug}`} style={{ color: "rgba(241,238,231,0.55)", textDecoration: "none", fontSize: "0.875rem", fontFamily: "var(--font-body)" }}>
                {next.title} →
              </Link>
            )}
          </div>
        </nav>
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

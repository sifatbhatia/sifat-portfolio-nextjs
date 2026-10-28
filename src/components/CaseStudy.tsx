import { Link } from "next-view-transitions";
import type { ProjectData } from "@/lib/projects";
import media from "@/lib/project-media.json";
import ArrowIcon from "./ArrowIcon";
import ProjectImage from "./ProjectImage";

const dimensions: Record<string, { width: number; height: number }> = media;

function Prose({ text }: { text: string }) {
  return (
    <div className="cs-prose">
      {text
        .split("\n\n")
        .filter(Boolean)
        .map((block, index) => {
          const lines = block.split("\n").filter(Boolean);
          if (lines.every((line) => line.startsWith("- "))) {
            return (
              <ul key={index}>
                {lines.map((line) => (
                  <li key={line}>{line.slice(2)}</li>
                ))}
              </ul>
            );
          }
          return <p key={index}>{block}</p>;
        })}
    </div>
  );
}

function Screen({
  src,
  caption,
  priority = false,
  className = "",
}: {
  src: string;
  caption: string;
  priority?: boolean;
  className?: string;
}) {
  const size = dimensions[src] ?? { width: 1440, height: 1000 };
  return (
    <ProjectImage
      src={src}
      caption={caption}
      width={size.width}
      height={size.height}
      priority={priority}
      className={className}
    />
  );
}

export default function CaseStudy({ project }: { project: ProjectData }) {
  const cover = project.caseStudyImage ?? project.heroImage;
  const views = project.screenshots.filter((screen) => screen.src !== cover);
  const portraitViews = views.filter((screen) => {
    const size = dimensions[screen.src];
    return size && size.width / size.height < 0.8;
  });
  const wideViews = views.filter((screen) => !portraitViews.includes(screen));
  const coverCaption =
    project.screenshots.find((screen) => screen.src === cover)?.caption ??
    `${project.title}: project view`;
  const hasDetails = Boolean(
    project.highlights?.length || project.metrics?.length,
  );

  return (
    <article className="cs-page">
      <header className="cs-header">
        <div className="cs-topline">
          <Link href="/projects" className="cs-back">
            <ArrowIcon direction="left" />
            All projects
          </Link>
          <span className="cs-year">{project.year}</span>
        </div>
        <h1 className="cs-title">{project.title}</h1>
        <div className="cs-intro-grid">
          <div>
            <p className="cs-intro">{project.summary ?? project.description}</p>
            <div className="cs-actions">
              {project.previewUrl && (
                <a
                  className="sf-button sf-button--secondary"
                  href={project.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project preview
                  <ArrowIcon direction="up-right" />
                </a>
              )}
              {project.url && (
                <a
                  className="sf-button sf-button--secondary"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.previewUrl ? "Official website" : "Visit website"}
                  <ArrowIcon direction="up-right" />
                </a>
              )}
              {project.conceptLinks?.map((concept) => (
                <a
                  key={concept.url}
                  className="sf-button sf-button--secondary"
                  href={concept.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {concept.label}
                  <ArrowIcon direction="up-right" />
                </a>
              ))}
              <a href="#project-context" className="cs-text-link">
                About the project
                <ArrowIcon className="cs-down-arrow" />
              </a>
            </div>
          </div>
          <dl className="cs-credits">
            <div>
              <dt>Focus</dt>
              <dd>{project.role}</dd>
            </div>
            {project.engagement && (
              <div>
                <dt>Engagement</dt>
                <dd>{project.engagement}</dd>
              </div>
            )}
            {project.client && (
              <div>
                <dt>Client</dt>
                <dd>{project.client}</dd>
              </div>
            )}
            <div>
              <dt>Tools & disciplines</dt>
              <dd>{project.stack.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </header>

      <Screen
        src={cover}
        caption={coverCaption}
        priority
        className="cs-cover"
      />

      <div className="cs-body">
        <aside className="cs-sidebar">
          <nav aria-label="In this project">
            <p className="cs-label">In this project</p>
            <a href="#project-context">Context</a>
            {wideViews.length > 0 && (
              <a href="#project-views">Selected views</a>
            )}
            <a href="#project-approach">Approach</a>
            <a href="#project-outcome">Outcome</a>
            {hasDetails && <a href="#project-details">Project details</a>}
          </nav>
        </aside>

        <div className="cs-content">
          <section id="project-context" className="cs-section">
            <h2>Context</h2>
            <Prose text={project.challenge} />
          </section>

          {wideViews.length > 0 && (
            <section id="project-views" className="cs-section cs-views">
              <div className="cs-section-heading">
                <h2>Selected views</h2>
                <span className="cs-image-hint">
                  Select an image to enlarge
                </span>
              </div>
              <div className="cs-gallery">
                {wideViews.map((view, index) => (
                  <Screen
                    key={view.src}
                    src={view.src}
                    caption={
                      view.caption ?? `${project.title}: view ${index + 1}`
                    }
                    className={
                      index === 0 || wideViews.length === 2
                        ? "cs-gallery-lead"
                        : ""
                    }
                  />
                ))}
              </div>
            </section>
          )}

          <section
            id="project-approach"
            className={`cs-section${portraitViews.length ? " cs-approach-with-media" : ""}`}
          >
            <div>
              <h2>Approach</h2>
              <Prose text={project.approach} />
            </div>
            {portraitViews.length > 0 && (
              <div className="cs-mobile-views">
                {portraitViews.map((view) => (
                  <Screen
                    key={view.src}
                    src={view.src}
                    caption={view.caption ?? `${project.title}: mobile view`}
                  />
                ))}
              </div>
            )}
          </section>

          <section id="project-outcome" className="cs-section">
            <h2>Outcome</h2>
            <Prose text={project.outcome} />
          </section>

          {hasDetails && (
            <section id="project-details" className="cs-section cs-details">
              <h2>Project details</h2>
              {project.metrics && project.metrics.length > 0 && (
                <dl className="cs-facts">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt>{metric.label}</dt>
                      <dd>{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="cs-deliverables">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {project.testimonial && (
            <figure className="cs-testimonial">
              <blockquote>{project.testimonial.quote}</blockquote>
              <figcaption>{project.testimonial.attribution}</figcaption>
            </figure>
          )}
        </div>
      </div>
    </article>
  );
}

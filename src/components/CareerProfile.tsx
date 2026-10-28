import { capabilities, education, experience } from "@/lib/profile";

const sectionStyle = {
  marginTop: "clamp(4rem, 8vh, 6rem)",
  fontFamily: "var(--font-body)",
};
const headingStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  fontWeight: 400,
  letterSpacing: "-0.02em",
  margin: "0 0 1.5rem",
};
const rowStyle = {
  borderTop: "1px solid rgba(var(--sf-ink-rgb), 0.12)",
  padding: "1.75rem 0",
};
const detailStyle = {
  maxWidth: "72ch",
  color: "rgba(var(--sf-ink-rgb), 0.6)",
  fontSize: "1rem",
  lineHeight: 1.75,
  margin: "0.75rem 0 0",
};

export default function CareerProfile() {
  return (
    <>
      <section aria-labelledby="experience-heading" style={sectionStyle}>
        <h2 id="experience-heading" style={headingStyle}>
          Experience
        </h2>
        <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {experience.map((item) => (
            <li key={item.organization} style={rowStyle}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: "0.5rem 1.5rem",
                  alignItems: "baseline",
                }}
              >
                <h3 style={{ fontSize: "1.2rem", fontWeight: 500, margin: 0 }}>
                  {item.organization}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(var(--sf-ink-rgb), 0.6)",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.dates}
                </p>
              </div>
              <p style={{ margin: "0.5rem 0 0", fontSize: "1rem" }}>
                {item.role}
              </p>
              <p
                style={{
                  margin: "0.35rem 0 0",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  color: "rgba(var(--sf-ink-rgb), 0.5)",
                }}
              >
                {item.context}
              </p>
              <p style={detailStyle}>{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="capabilities-heading" style={sectionStyle}>
        <h2 id="capabilities-heading" style={headingStyle}>
          Capabilities
        </h2>
        <dl style={{ margin: 0 }}>
          {capabilities.map((item) => (
            <div key={item.name} style={rowStyle}>
              <dt style={{ fontSize: "1rem", fontWeight: 500 }}>{item.name}</dt>
              <dd style={{ ...detailStyle, marginLeft: 0 }}>{item.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="education-heading" style={sectionStyle}>
        <h2 id="education-heading" style={headingStyle}>
          Education & recognition
        </h2>
        {education.map((item) => (
          <div key={item.institution} style={rowStyle}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "0.5rem 1.5rem",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", fontWeight: 500, margin: 0 }}>
                {item.institution}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  color: "rgba(var(--sf-ink-rgb), 0.6)",
                }}
              >
                {item.dates}
              </p>
            </div>
            <p style={detailStyle}>{item.study}</p>
          </div>
        ))}
        <p style={detailStyle}>
          Course Director&apos;s Award and Advanced Achiever Award, Full Sail
          University.
        </p>
        <p style={detailStyle}>
          Featured interviews in VoyageLA, Shoutout LA, and Bold Journey.
        </p>
      </section>
    </>
  );
}

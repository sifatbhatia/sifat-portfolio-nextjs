/** Keep the reader header as the title without changing stored article content. */
export function journalBodyWithoutTitle(
  content: string,
  title: string,
): string {
  const heading = content.match(
    /^\uFEFF?(?:[ \t]*\r?\n)* {0,3}#{1,6}[ \t]+([^\r\n]+)(?:\r?\n|$)/,
  );
  if (!heading) return content;

  const normalize = (value: string) => value.trim().replace(/\s+/g, " ");
  const headingTitle = heading[1].replace(/[ \t]+#+[ \t]*$/, "");
  if (normalize(headingTitle) !== normalize(title)) return content;

  // Remove only a matching opening heading, never genuine section headings.
  return content.slice(heading[0].length).replace(/^(?:[ \t]*\r?\n)+/, "");
}

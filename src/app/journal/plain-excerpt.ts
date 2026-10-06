/**
 * Strip common markdown patterns so list/card previews show readable plain text
 * (headings, lists, emphasis, links, fences). Detail pages still use full markdown.
 */
export function plainExcerptFromMarkdown(raw: string, maxLen = 160): string {
  if (!raw?.trim()) return ''

  let s = raw.replace(/\r\n/g, '\n')

  s = s.replace(/^#{1,6}\s*/gm, '')
  s = s.replace(/^\s{0,3}[-*+]\s+/gm, '')
  s = s.replace(/^\s{0,3}\d+\.\s+/gm, '')
  s = s.replace(/\*\*([^*]+)\*\*/g, '$1')
  s = s.replace(/\*([^*]+)\*/g, '$1')
  s = s.replace(/__([^_]+)__/g, '$1')
  s = s.replace(/_([^_]+)_/g, '$1')
  s = s.replace(/`{3}[\s\S]*?`{3}/g, ' ')
  s = s.replace(/`([^`]+)`/g, '$1')
  s = s.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
  s = s.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
  s = s.replace(/\n{2,}/g, ' ')
  s = s.replace(/\n/g, ' ')
  s = s.replace(/\s{2,}/g, ' ')

  s = s.trim()
  if (s.length > maxLen) {
    const cut = s.lastIndexOf(' ', maxLen)
    return (cut > maxLen * 0.6 ? s.slice(0, cut) : s.slice(0, maxLen)) + '…'
  }
  return s
}

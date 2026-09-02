export type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] };

/** Pull "Effective Date: … | Last Updated: …" from the first paragraph(s). */
export function extractMetaLine(paragraphs: string[]): string | null {
  for (const p of paragraphs) {
    const line = p.trim();
    if (/effective\s*date/i.test(line) || /last\s*updated/i.test(line)) {
      // Prefer a clean single-line meta; drop long draft notes if present.
      const match = line.match(
        /Effective Date:\s*[^|\n]+(?:\s*\|\s*Last Updated:\s*[^\n]+)?/i
      );
      return match ? match[0].trim() : line.split("\n")[0].trim();
    }
  }
  return null;
}

function isHeading(line: string): { level: 2 | 3; text: string } | null {
  const h2 = line.match(/^##\s+(.+)$/);
  if (h2) return { level: 2, text: h2[1].trim() };

  const h3 = line.match(/^###\s+(.+)$/);
  if (h3) return { level: 3, text: h3[1].trim() };

  // Fallback: "1.2 Definitions" / "10.2 User Roles..." style section titles
  // (only when the whole line looks like a short numbered heading)
  if (/^\d+(\.\d+)*(\.\d+)*\s+[A-Z].{0,80}$/.test(line) && line.length < 100) {
    return { level: 2, text: line };
  }

  return null;
}

function isBullet(line: string): string | null {
  // • item  |  - item  |  * item
  const m = line.match(/^[•\-\*]\s+(.+)$/);
  return m ? m[1].trim() : null;
}

function isOrderedItem(line: string): string | null {
  const m = line.match(/^\d+[\.\)]\s+(.+)$/);
  return m ? m[1].trim() : null;
}

/**
 * Turns the flat `paragraphs: string[]` array into structured blocks
 * (headings, paragraphs, grouped lists) for clean rendering.
 */
export function parseLegalContent(
  paragraphs: string[],
  _documentTitle?: string
): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  let currentList: { ordered: boolean; items: string[] } | null = null;

  const flushList = () => {
    if (currentList && currentList.items.length > 0) {
      blocks.push({
        type: "list",
        ordered: currentList.ordered,
        items: currentList.items,
      });
    }
    currentList = null;
  };

  for (const raw of paragraphs) {
    // One array entry may contain multiple lines (legacy single-string docs)
    const lines = raw.split(/\n/).map((l) => l.trim()).filter(Boolean);

    for (const line of lines) {
      // Skip pure meta lines — they are shown in the page header
      if (
        (/effective\s*date/i.test(line) || /last\s*updated/i.test(line)) &&
        line.length < 120
      ) {
        continue;
      }
      // Skip the short draft note if it sits alone
      if (/^internal working draft/i.test(line) || /^full-length version/i.test(line)) {
        continue;
      }

      const heading = isHeading(line);
      if (heading) {
        flushList();
        blocks.push({ type: "heading", level: heading.level, text: heading.text });
        continue;
      }

      const bullet = isBullet(line);
      if (bullet !== null) {
        if (!currentList || currentList.ordered) {
          flushList();
          currentList = { ordered: false, items: [] };
        }
        currentList.items.push(bullet);
        continue;
      }

      const ordered = isOrderedItem(line);
      if (ordered !== null) {
        if (!currentList || !currentList.ordered) {
          flushList();
          currentList = { ordered: true, items: [] };
        }
        currentList.items.push(ordered);
        continue;
      }

      // Normal paragraph
      flushList();
      blocks.push({ type: "paragraph", text: line });
    }
  }

  flushList();
  return blocks;
}
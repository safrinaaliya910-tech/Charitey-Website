import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { brand } from "@/config/brand";
import documents from "./documents.json";
import { extractMetaLine, parseLegalContent, ContentBlock } from "./parse-content";

export type LegalSlug = keyof typeof documents;

export type LegalDocument = {
  title: string;
  slug: string;
  paragraphs: string[];
};

export const legalDocuments = documents as Record<LegalSlug, LegalDocument>;

export const legalSlugs = Object.keys(legalDocuments) as LegalSlug[];

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments[slug as LegalSlug];
}

export function createLegalMetadata(slug: LegalSlug): Metadata {
  const document = legalDocuments[slug];

  return {
    title: document?.title ?? "Legal",
    description: document
      ? `${document.title} for ${brand.name}. ${brand.tagline}`
      : `${brand.name} legal documentation.`,
  };
}

type LegalDocumentPageProps = {
  slug: LegalSlug;
};

// --- Perf fix: cache parsed blocks per-slug -------------------------------
// parseLegalContent() walks every line of a document and does regex/grouping
// work to build headings/paragraphs/lists. For short documents (Disclaimer,
// Cookie Policy, Accessibility, etc.) this is cheap and invisible. For the
// three large documents (Privacy Policy, Terms & Conditions, Community
// Guidelines) it is expensive enough that re-running it on every render -
// and then having React diff a brand-new, unrelated content tree against the
// previous page's tree - produces a visible flash/blink when navigating.
// Caching by slug means the parse only ever runs once per document, no
// matter how many times the component re-renders or how the user navigates.
const parsedBlocksCache = new Map<string, ContentBlock[]>();

function getParsedBlocks(slug: LegalSlug, document: LegalDocument): ContentBlock[] {
  const cached = parsedBlocksCache.get(slug);
  if (cached) return cached;

  const blocks = parseLegalContent(document.paragraphs, document.title);
  parsedBlocksCache.set(slug, blocks);
  return blocks;
}
// ---------------------------------------------------------------------------

function LegalBreadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <li>
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3.5 w-3.5" />
        </li>
        <li>
          <span className="text-muted">Legal</span>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3.5 w-3.5" />
        </li>
        <li>
          <span className="font-medium text-foreground" aria-current="page">
            {title}
          </span>
        </li>
      </ol>
    </nav>
  );
}

function LegalContent({ slug }: { slug: LegalSlug }) {
  const document = legalDocuments[slug];
  if (!document) return null;

  const blocks = getParsedBlocks(slug, document);

  return (
    <div className="legal-prose">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          if (block.level === 2) {
            return (
              <h2 key={`${slug}-h2-${index}`} id={`section-${index}`}>
                {block.text}
              </h2>
            );
          }

          return (
            <h3 key={`${slug}-h3-${index}`} id={`section-${index}`}>
              {block.text}
            </h3>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag key={`${slug}-list-${index}`}>
              {block.items.map((item, itemIndex) => (
                <li key={`${slug}-list-${index}-item-${itemIndex}`}>
                  {linkifyText(item)}
                </li>
              ))}
            </ListTag>
          );
        }

        return <p key={`${slug}-p-${index}`}>{linkifyText(block.text)}</p>;
      })}
    </div>
  );
}

function linkifyText(text: string) {
  const parts = text.split(/(\S+@\S+\.\S+)/g);

  return parts.map((part, index) => {
    if (/^\S+@\S+\.\S+$/.test(part)) {
      return (
        <a key={`${part}-${index}`} href={`mailto:${part}`}>
          {part}
        </a>
      );
    }

    return part;
  });
}

export function LegalDocumentPage({ slug }: LegalDocumentPageProps) {
  const document = legalDocuments[slug];
  if (!document) return null;

  const metaLine = extractMetaLine(document.paragraphs);

  return (
    // key={slug} forces React to fully remount this tree when the slug
    // changes instead of diffing two unrelated (and, for these 3 documents,
    // very large) content trees against each other. That diffing is what
    // caused the visible blink on Privacy Policy / Terms & Conditions /
    // Community Guidelines specifically - they're the only documents big
    // enough for the diff cost to be visible.
    <main key={slug} className="min-h-screen w-full bg-gradient-subtle">
      <div className="mx-auto w-full max-w-[850px] px-6 py-16 md:px-8 md:py-24">
        <LegalBreadcrumb title={document.title} />

        <header className="mb-12 border-b border-border/70 pb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Legal Documentation
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {document.title}
          </h1>
          {metaLine && (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {metaLine}
            </p>
          )}
        </header>

        <article className="rounded-2xl border border-border/60 bg-secondary/80 px-6 py-8 shadow-soft md:px-10 md:py-10">
          <LegalContent slug={slug} />
        </article>
      </div>
    </main>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { brand } from "@/config/brand";
import documents from "./documents.json";
import {
  extractMetaLine,
  parseLegalContent,
  type ContentBlock,
} from "./parse-content";

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

// Cache parsed blocks per slug so large docs are only parsed once
const parsedBlocksCache = new Map<string, ContentBlock[]>();

function getParsedBlocks(
  slug: LegalSlug,
  document: LegalDocument
): ContentBlock[] {
  const cached = parsedBlocksCache.get(slug);
  if (cached) return cached;

  const blocks = parseLegalContent(document.paragraphs, document.title);
  parsedBlocksCache.set(slug, blocks);
  return blocks;
}

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

        return (
          <p key={`${slug}-p-${index}`}>{linkifyText(block.text)}</p>
        );
      })}
    </div>
  );
}

export function LegalDocumentPage({ slug }: LegalDocumentPageProps) {
  const document = legalDocuments[slug];
  if (!document) return null;

  const metaLine = extractMetaLine(document.paragraphs);

  return (
    <main key={slug} className="min-h-screen w-full bg-background">
      {/* Full-width header band */}
      <div className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 md:px-10 md:py-14">
          <LegalBreadcrumb title={document.title} />

          <header>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Legal Documentation
            </p>
            <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
              {document.title}
            </h1>
            {metaLine && (
              <p className="mt-3 text-sm text-muted-foreground md:text-[15px]">
                {metaLine}
              </p>
            )}
          </header>
        </div>
      </div>

      {/* Full-width content area */}
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 md:px-10 md:py-14">
        <article className="rounded-2xl border border-border/50 bg-card px-5 py-8 shadow-sm sm:px-8 md:px-12 md:py-12">
          <LegalContent slug={slug} />
        </article>
      </div>
    </main>
  );
}
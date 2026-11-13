import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { brand } from "@/config/brand";
import { FaqAccordion } from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Role-based FAQs for Donors, NGOs and Volunteers on ${brand.name}. ${brand.tagline}`,
};

export default function FaqsPage() {
  return (
    <main className="min-h-screen w-full bg-background">
      <div className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 md:px-10 md:py-14">
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
                <span className="font-medium text-foreground" aria-current="page">
                  FAQs
                </span>
              </li>
            </ol>
          </nav>

          <header>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Help Centre
            </p>
            <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 text-sm text-muted-foreground md:text-[15px]">
              30 role-based FAQs for Donors, NGOs and Volunteers.
            </p>
          </header>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 md:px-10 md:py-14">
        <FaqAccordion />
        <p className="mt-8 text-sm text-muted-foreground">
          Still have questions? Read our{" "}
          <Link href="/terms-and-conditions" className="text-primary underline-offset-4 hover:underline">
            Terms &amp; Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="text-primary underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          , or reach us from the Contact section on the home page.
        </p>
      </div>
    </main>
  );
}
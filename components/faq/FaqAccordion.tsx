"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqGroups } from "@/lib/faqs";

export function FaqAccordion() {
  const [activeId, setActiveId] = useState<string>(faqGroups[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const group = faqGroups.find((g) => g.id === activeId) ?? faqGroups[0];

  const selectGroup = (id: string) => {
    setActiveId(id);
    setOpenIndex(0);
  };

  return (
    <div>
      {/* Role tabs */}
      <div
        role="tablist"
        aria-label="FAQ categories"
        className="mb-8 inline-flex flex-wrap gap-2 rounded-full border border-border/60 bg-secondary/40 p-1.5"
      >
        {faqGroups.map((g) => {
          const active = g.id === activeId;
          return (
            <button
              key={g.id}
              type="button"
              role="tab"
              id={`faq-tab-${g.id}`}
              aria-selected={active}
              aria-controls={`faq-panel-${g.id}`}
              onClick={() => selectGroup(g.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                active
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {g.label}
            </button>
          );
        })}
      </div>

      {/* Questions */}
      <div
        role="tabpanel"
        id={`faq-panel-${group.id}`}
        aria-labelledby={`faq-tab-${group.id}`}
        className="divide-y divide-border/60 rounded-2xl border border-border/50 bg-card shadow-sm"
      >
        {group.items.map((item, index) => {
          const open = openIndex === index;
          const panelId = `faq-${group.id}-${index}`;
          return (
            <div key={item.question}>
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left text-base font-medium text-foreground transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset sm:px-8"
                >
                  <span>
                    <span className="mr-2 text-primary">{index + 1}.</span>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      open ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
              </h3>
              <div
                id={panelId}
                hidden={!open}
                className="px-5 pb-6 text-[15px] leading-relaxed text-muted-foreground sm:px-8"
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
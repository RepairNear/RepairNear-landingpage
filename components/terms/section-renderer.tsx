import type { ContentBlock, Section } from "@/lib/terms-content";

function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={i}
                className="text-[15px] md:text-[16px] leading-relaxed text-ink mb-4"
              >
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul
                key={i}
                className="list-disc pl-6 space-y-2 mb-4 text-[15px] md:text-[16px] leading-relaxed text-ink"
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );

          case "definitions":
            return (
              <dl key={i} className="space-y-3 mb-4">
                {block.items.map((item, j) => (
                  <div key={j}>
                    <dt className="font-bold text-ink">{item.term}</dt>
                    <dd className="text-[15px] leading-relaxed text-ink-soft pl-4">
                      {item.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            );

          case "subsection":
            return (
              <div key={i}>
                <h3 className="text-lg md:text-xl font-bold mt-8 mb-4">
                  {block.number} {block.title}
                </h3>
                <Blocks blocks={block.content} />
              </div>
            );

          case "emphasis":
            return (
              <div
                key={i}
                className="border-l-4 border-accent bg-accent-tint/30 pl-4 py-4 my-8 text-[14px] font-semibold uppercase tracking-wide text-ink leading-relaxed"
              >
                {block.text}
              </div>
            );
        }
      })}
    </>
  );
}

export function SectionRenderer({ section }: { section: Section }) {
  return (
    <section id={section.id} className="scroll-mt-32 mb-16">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-6">
        {section.number}. {section.title}
      </h2>
      <Blocks blocks={section.content} />
    </section>
  );
}

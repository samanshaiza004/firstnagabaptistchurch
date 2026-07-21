import type { PortableBlock } from "./types";

export function paragraphs(...values: string[]): PortableBlock[] {
  return values.map((text, index) => ({
    _key: `paragraph-${index + 1}`,
    _type: "block",
    style: "normal",
    children: [{ _key: `span-${index + 1}`, _type: "span", text, marks: [] }],
    markDefs: [],
  }));
}

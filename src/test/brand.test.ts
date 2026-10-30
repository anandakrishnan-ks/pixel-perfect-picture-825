import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, sep } from "node:path";
import { describe, expect, it } from "vitest";

// Brand rules the site must hold to:
// - old email and old brand name never reappear in source
// - the official email is used in contact + footer
const SRC_ROOT = join(import.meta.dirname, "..", "..");

function listFiles(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) listFiles(full, acc);
    else if (/\.(tsx?|css|html)$/.test(entry) || /\.(tsx?|css|html)$/.test(full)) acc.push(full);
  }
  return acc;
}

const FILES = listFiles(SRC_ROOT).filter(
  (f) =>
    !f.includes("node_modules") &&
    !f.includes("routeTree.gen") &&
    !f.includes(`${sep}test${sep}`)
);

describe("Brand rules", () => {
  it("never mentions the old email address in source", () => {
    const offenders = FILES.filter((f) => readFileSync(f, "utf8").includes("hello@sanmedia.in"));
    expect(offenders).toEqual([]);
  });

  it("never mentions the old SANMEDIA wordmark in source", () => {
    const offenders = FILES.filter((f) => readFileSync(f, "utf8").includes("SANMEDIA"));
    expect(offenders).toEqual([]);
  });

  it("uses contact@sanmediacompany.in in the contact and footer", () => {
    for (const file of ["src/routes/contact.tsx", "src/components/sanmedia/Footer.tsx"]) {
      expect(readFileSync(join(SRC_ROOT, file), "utf8")).toContain("contact@sanmediacompany.in");
    }
  });

  it("positions the company as SAN MEDIA COMPANY in the hero and root metadata", () => {
    expect(readFileSync(join(SRC_ROOT, "src/components/sanmedia/Hero.tsx"), "utf8")).toContain(
      "SAN MEDIA"
    );
    expect(readFileSync(join(SRC_ROOT, "src/routes/index.tsx"), "utf8")).toContain(
      "SAN MEDIA COMPANY"
    );
  });
});

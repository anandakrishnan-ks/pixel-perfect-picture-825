import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
function matches(path: string) {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  return router.matchRoutes(path);
}

describe("App routing", () => {
  const pages = ["/", "/about", "/services", "/work", "/process", "/team", "/contact"];

  it.each(pages)("matches a page for %s instead of falling back to not found", (path) => {
    const matches2 = matches(path);
    expect(matches2.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches a project detail page under /work/$slug", () => {
    const m = matches("/work/the-inheritance");
    expect(m.at(-1)?.routeId).toBe("/work/$slug");
  });

  it("matches the /work portfolio grid page itself", () => {
    const m = matches("/work");
    expect(m.at(-1)?.routeId).toBe("/work/");
  });
});

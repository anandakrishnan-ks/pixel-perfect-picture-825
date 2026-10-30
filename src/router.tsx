import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// After a new publish, old page chunks are removed. A tab still running the
// previous version fails to load them — reload once to pick up the new build.
if (typeof window !== "undefined") {
  window.addEventListener("vite:preloadError", (event) => {
    const key = "chunk-reload-at";
    const last = Number(sessionStorage.getItem(key) || 0);
    if (Date.now() - last > 10_000) {
      event.preventDefault();
      sessionStorage.setItem(key, String(Date.now()));
      window.location.reload();
    }
  });
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};

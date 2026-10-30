import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "@/components/sanmedia/Nav";
import { Footer } from "@/components/sanmedia/Footer";
import { GrainOverlay } from "@/components/sanmedia/GrainOverlay";
import { registerGsap, reducedMotion } from "@/components/sanmedia/anim";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-7xl text-foreground">404</h1>
        <h2 className="subhead mt-4 text-2xl text-foreground">Final scene not found</h2>
        <p className="lead mt-2 text-sm text-muted-foreground">
          The reel you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-medium tracking-widest uppercase text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to the film
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="subhead text-2xl text-foreground">
          This scene didn't load
        </h1>
        <p className="lead mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SAN MEDIA COMPANY — Film & Video Production Company in Kerala" },
      {
        name: "description",
        content:
          "SAN MEDIA COMPANY is a creative media and production company based in Thiruvananthapuram, Kerala. Advertising films, brand films, corporate films, photography and cinematic campaigns across Kerala and beyond.",
      },
      { property: "og:site_name", content: "SAN MEDIA COMPANY" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@300..700&family=Hanken+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Site-wide smooth scrolling — the same cinematic feel on every page.
  useEffect(() => {
    if (reducedMotion()) return;
    registerGsap();
    const lenis = new Lenis({ duration: 1.25, smoothWheel: true });
    const win = window as unknown as { __lenis?: Lenis | undefined };
    win.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      win.__lenis = undefined;
    };
  }, []);

  // Recalculate scroll triggers whenever a new page mounts.
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <GrainOverlay />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}

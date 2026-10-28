import { Outlet, createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/sanmedia/PageShell";

export const Route = createFileRoute("/work")({
  component: WorkLayout,
});

/** Layout for /work and /work/$slug — keeps the shared page-transition entrance. */
function WorkLayout() {
  return (
    <PageShell>
      <Outlet />
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { TathyaWorkspace } from "@/components/TathyaWorkspace";
import { AGENT_NAME } from "@/agent/identity";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: AGENT_NAME },
      {
        name: "description",
        content:
          "Ask Tathya about India: Census C-series rates (currently 2001 and 2011) plus live search for policy, news, and later census rounds.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return <TathyaWorkspace />;
}

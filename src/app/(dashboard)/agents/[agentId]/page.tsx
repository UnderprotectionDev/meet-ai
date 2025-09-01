import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import AgentIdView, {
  AgentIdViewError,
  AgentIdViewLoading,
} from "@/modules/agents/ui/views/agent-id-view";

interface AgentPageProps {
  params: Promise<{ agentId: string }>;
}

export default async function AgentPage({ params }: AgentPageProps) {
  const { agentId } = await params;

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(
    trpc.agents.getOne.queryOptions({ id: agentId })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<AgentIdViewLoading />}>
        <ErrorBoundary fallback={<AgentIdViewError />}>
          <AgentIdView agentId={agentId} />
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  );
}

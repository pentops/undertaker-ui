import { useInfiniteQuery } from '@tanstack/react-query';
import { KeyBase } from '@/data/api/client.ts';
import { O5DeployerV1ServiceListDeploymentsRequest, O5DeployerV1ServiceListDeploymentsResponse } from '@/data/types';
import { getNextPageParam } from '@/data/api/pagination.ts';
import { useSelectedRealmBaseUrl } from '@/context/api-context.ts';
import { buildMergedRequestInit, makeRequest } from '@pentops/jsonapi-request';

export const LIST_DEPLOYMENTS_KEY: KeyBase = { scope: 'deployments', entity: 'list', service: 'DeployerService.ListDeployments' } as const;

export async function listDeployments(baseUrl: string, request: O5DeployerV1ServiceListDeploymentsRequest | undefined) {
  return makeRequest<O5DeployerV1ServiceListDeploymentsResponse, O5DeployerV1ServiceListDeploymentsRequest>(
    ...buildMergedRequestInit('POST', baseUrl, '/deployer/v1/q/deployments', request),
  );
}

export function useListDeployments(request?: O5DeployerV1ServiceListDeploymentsRequest) {
  const [baseUrl, loadingRealm] = useSelectedRealmBaseUrl();

  return useInfiniteQuery({
    queryKey: [LIST_DEPLOYMENTS_KEY, request, baseUrl],
    queryFn: async ({ pageParam }) => listDeployments(baseUrl, pageParam ? { ...request, page: { token: pageParam } } : request),
    getNextPageParam,
    initialPageParam: undefined,
    enabled: !loadingRealm,
  });
}

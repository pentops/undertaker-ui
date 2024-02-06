import { useInfiniteQuery } from '@tanstack/react-query';
import { KeyBase } from '@/data/api/client.ts';
import { O5DeployerV1ServiceListStacksRequest, O5DeployerV1ServiceListStacksResponse } from '@/data/types';
import { getNextPageParam } from '@/data/api/pagination.ts';
import { useSelectedRealmBaseUrl } from '@/context/api-context.ts';
import { buildMergedRequestInit, makeRequest } from '@pentops/jsonapi-request';

export const LIST_STACKS_KEY: KeyBase = { scope: 'stacks', entity: 'list', service: 'DeployerService.ListStacks' } as const;

export async function listStacks(baseUrl: string, request: O5DeployerV1ServiceListStacksRequest | undefined) {
  return makeRequest<O5DeployerV1ServiceListStacksResponse, O5DeployerV1ServiceListStacksRequest>(
    ...buildMergedRequestInit('POST', baseUrl, '/deployer/v1/q/stacks', request),
  );
}

export function useListStacks(request?: O5DeployerV1ServiceListStacksRequest) {
  const [baseUrl, loadingRealm] = useSelectedRealmBaseUrl();

  return useInfiniteQuery({
    queryKey: [LIST_STACKS_KEY, request, baseUrl],
    queryFn: async ({ pageParam }) => listStacks(baseUrl, pageParam ? { ...request, page: { token: pageParam } } : request),
    getNextPageParam,
    initialPageParam: undefined,
    enabled: !loadingRealm,
  });
}

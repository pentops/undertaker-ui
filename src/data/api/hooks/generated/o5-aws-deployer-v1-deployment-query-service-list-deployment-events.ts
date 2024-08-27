/**
 * @generated by @pentops/jsonapi-jdef-ts-generator (Plugin: NormalizedQueryPlugin) - do not edit */

import {
  O5AwsDeployerV1DeploymentQueryServiceListDeploymentEventsResponse,
  O5AwsDeployerV1DeploymentQueryServiceListDeploymentEventsRequest,
} from '../../../types/generated';
import { o5AwsDeployerV1DeploymentQueryServiceListDeploymentEvents } from '../../generated';
import { o5AwsDeployerV1DeploymentStateEntity } from '../../../entities/generated/o5-aws-deployer-v1-deployment-state';
import { useInfiniteQuery, type UseInfiniteQueryOptions, type InfiniteData, type QueryKey } from '@tanstack/react-query';

/**
 * @generated by NormalizedQueryPlugin (post /deployer/v1/q/deployment/:deploymentId/events) */
export function useO5AwsDeployerV1DeploymentQueryServiceListDeploymentEvents(
  request: O5AwsDeployerV1DeploymentQueryServiceListDeploymentEventsRequest | undefined,
  options?: Partial<
    UseInfiniteQueryOptions<
      O5AwsDeployerV1DeploymentQueryServiceListDeploymentEventsResponse | undefined,
      Error,
      InfiniteData<O5AwsDeployerV1DeploymentQueryServiceListDeploymentEventsResponse | undefined>,
      O5AwsDeployerV1DeploymentQueryServiceListDeploymentEventsResponse | undefined,
      QueryKey,
      string | undefined
    >
  >,
) {
  return useInfiniteQuery({
    queryKey: [o5AwsDeployerV1DeploymentStateEntity.key, request],
    queryFn: async ({ pageParam }) =>
      o5AwsDeployerV1DeploymentQueryServiceListDeploymentEvents(
        '',
        request ? { ...request, page: pageParam ? { token: pageParam } : undefined } : undefined,
      ),
    enabled: Boolean(request?.deploymentId),
    getNextPageParam: (response) => response?.page?.nextToken,
    initialPageParam: undefined,
    ...options,
  });
}

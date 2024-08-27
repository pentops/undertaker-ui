/**
 * @generated by @pentops/jsonapi-jdef-ts-generator (Plugin: NormalizedQueryPlugin) - do not edit */

import {
  O5AwsDeployerV1DeploymentQueryServiceGetDeploymentResponse,
  O5AwsDeployerV1DeploymentQueryServiceGetDeploymentGetDeploymentRequest,
} from '../../../types/generated';
import { o5AwsDeployerV1DeploymentQueryServiceGetDeployment } from '../../generated';
import { schema } from 'normalizr';
import { o5AwsDeployerV1DeploymentStateEntity } from '../../../entities/generated/o5-aws-deployer-v1-deployment-state';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { usePreloadDataFromNormalizedCache } from '@pentops/normalized-query-cache';

export const o5AwsDeployerV1DeploymentQueryServiceGetDeploymentResponseEntity =
  new schema.Object<O5AwsDeployerV1DeploymentQueryServiceGetDeploymentResponse>({
    state: o5AwsDeployerV1DeploymentStateEntity,
  });
/**
 * @generated by NormalizedQueryPlugin (get /deployer/v1/q/deployment/:deploymentId) */
export function useO5AwsDeployerV1DeploymentQueryServiceGetDeployment(
  request: O5AwsDeployerV1DeploymentQueryServiceGetDeploymentGetDeploymentRequest | undefined,
  options?: Partial<UseQueryOptions<O5AwsDeployerV1DeploymentQueryServiceGetDeploymentResponse | undefined>>,
) {
  const preloadData = usePreloadDataFromNormalizedCache<O5AwsDeployerV1DeploymentQueryServiceGetDeploymentResponse, 'state'>(
    o5AwsDeployerV1DeploymentQueryServiceGetDeploymentResponseEntity,
    { state: request?.deploymentId },
  );

  return useQuery({
    queryKey: [o5AwsDeployerV1DeploymentStateEntity.key, request],
    queryFn: async () => o5AwsDeployerV1DeploymentQueryServiceGetDeployment('', request),
    enabled: Boolean(request?.deploymentId),
    meta: { normalizationSchema: o5AwsDeployerV1DeploymentQueryServiceGetDeploymentResponseEntity },
    placeholderData: preloadData,
    ...options,
  });
}

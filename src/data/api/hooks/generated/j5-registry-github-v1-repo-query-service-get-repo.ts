/**
 * @generated by @pentops/jsonapi-jdef-ts-generator (Plugin: NormalizedQueryPlugin) - do not edit */

import { usePreloadDataFromNormalizedCache } from '@pentops/normalized-query-cache';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { schema } from 'normalizr';
import { j5RegistryGithubV1RepoStateEntity } from '../../../entities/generated/j5-registry-github-v1-repo-state';
import { J5RegistryGithubV1RepoQueryServiceGetRepoResponse, J5RegistryGithubV1RepoQueryServiceGetRepoGetRepoRequest } from '../../../types/generated';
import { j5RegistryGithubV1RepoQueryServiceGetRepo } from '../../generated';

export const j5RegistryGithubV1RepoQueryServiceGetRepoResponseEntity = new schema.Object<J5RegistryGithubV1RepoQueryServiceGetRepoResponse>({
  repo: j5RegistryGithubV1RepoStateEntity,
});
/**
 * @generated by NormalizedQueryPlugin (get /registry/github/v1/q/repo/:owner/:name) */

export function buildJ5RegistryGithubV1RepoQueryServiceGetRepoKey(request?: J5RegistryGithubV1RepoQueryServiceGetRepoGetRepoRequest) {
  const entityId = j5RegistryGithubV1RepoStateEntity.getId(request || {}, {}, '');
  if (entityId) return [j5RegistryGithubV1RepoStateEntity.key, 'detail', entityId] as const;
  return [j5RegistryGithubV1RepoStateEntity.key] as const;
}

export function useJ5RegistryGithubV1RepoQueryServiceGetRepo(
  request: J5RegistryGithubV1RepoQueryServiceGetRepoGetRepoRequest | undefined,
  options?: Partial<UseQueryOptions<J5RegistryGithubV1RepoQueryServiceGetRepoResponse | undefined>>,
) {
  const preloadData = usePreloadDataFromNormalizedCache<J5RegistryGithubV1RepoQueryServiceGetRepoResponse, 'repo'>(
    j5RegistryGithubV1RepoQueryServiceGetRepoResponseEntity,
    { repo: j5RegistryGithubV1RepoStateEntity.getId({ owner: request?.owner, name: request?.name }, {}, '') },
  );

  return useQuery({
    queryKey: buildJ5RegistryGithubV1RepoQueryServiceGetRepoKey(request),
    queryFn: async () => j5RegistryGithubV1RepoQueryServiceGetRepo('', request),
    enabled: Boolean(request?.owner && request?.name),
    meta: { normalizationSchema: j5RegistryGithubV1RepoQueryServiceGetRepoResponseEntity },
    placeholderData: preloadData,
    ...options,
  });
}

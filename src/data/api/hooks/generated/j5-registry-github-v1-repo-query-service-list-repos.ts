/**
 * @generated by @pentops/jsonapi-jdef-ts-generator (Plugin: NormalizedQueryPlugin) - do not edit */

import { useInfiniteQuery, type UseInfiniteQueryOptions, type InfiniteData, type QueryKey } from '@tanstack/react-query';
import { schema } from 'normalizr';
import { j5RegistryGithubV1RepoStateEntity } from '../../../entities/generated/j5-registry-github-v1-repo-state';
import {
  J5RegistryGithubV1RepoQueryServiceListReposResponse,
  J5RegistryGithubV1RepoQueryServiceListReposListReposRequest,
} from '../../../types/generated';
import { j5RegistryGithubV1RepoQueryServiceListRepos } from '../../generated';

export const j5RegistryGithubV1RepoQueryServiceListReposResponseEntity = new schema.Object<J5RegistryGithubV1RepoQueryServiceListReposResponse>({
  repos: [j5RegistryGithubV1RepoStateEntity],
});
/**
 * @generated by NormalizedQueryPlugin (get /registry/github/v1/q/repo) */

export function buildJ5RegistryGithubV1RepoQueryServiceListReposKey(request?: J5RegistryGithubV1RepoQueryServiceListReposListReposRequest) {
  const { page, ...rest } = request || {};
  if (rest) return [j5RegistryGithubV1RepoStateEntity.key, 'list', rest] as const;
  return [j5RegistryGithubV1RepoStateEntity.key] as const;
}

export function useJ5RegistryGithubV1RepoQueryServiceListRepos(
  request?: J5RegistryGithubV1RepoQueryServiceListReposListReposRequest | undefined,
  options?: Partial<
    UseInfiniteQueryOptions<
      J5RegistryGithubV1RepoQueryServiceListReposResponse | undefined,
      Error,
      InfiniteData<J5RegistryGithubV1RepoQueryServiceListReposResponse | undefined>,
      J5RegistryGithubV1RepoQueryServiceListReposResponse | undefined,
      QueryKey,
      string | undefined
    >
  >,
) {
  return useInfiniteQuery({
    queryKey: buildJ5RegistryGithubV1RepoQueryServiceListReposKey(request),
    queryFn: async ({ pageParam }) =>
      j5RegistryGithubV1RepoQueryServiceListRepos(
        '',
        request || pageParam ? { ...request, page: pageParam ? { token: pageParam } : undefined } : undefined,
      ),
    enabled: true,
    meta: { normalizationSchema: j5RegistryGithubV1RepoQueryServiceListReposResponseEntity },
    getNextPageParam: (response) => response?.page?.nextToken,
    initialPageParam: undefined,
    ...options,
  });
}

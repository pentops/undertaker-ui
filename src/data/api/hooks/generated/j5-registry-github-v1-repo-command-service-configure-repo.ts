/**
 * @generated by @pentops/jsonapi-jdef-ts-generator (Plugin: NormalizedQueryPlugin) - do not edit */

import {
  J5RegistryGithubV1RepoCommandServiceConfigureRepoResponse,
  J5RegistryGithubV1RepoCommandServiceConfigureRepoRequest,
} from '../../../types/generated';
import { j5RegistryGithubV1RepoCommandServiceConfigureRepo } from '../../generated';
import { schema } from 'normalizr';
import { j5RegistryGithubV1RepoStateEntity } from '../../../entities/generated/j5-registry-github-v1-repo-state';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

export const j5RegistryGithubV1RepoCommandServiceConfigureRepoResponseEntity =
  new schema.Object<J5RegistryGithubV1RepoCommandServiceConfigureRepoResponse>({
    repo: j5RegistryGithubV1RepoStateEntity,
  });
/**
 * @generated by NormalizedQueryPlugin (post /registry/github/v1/c/repo/:owner/:name/configure) */
export function useJ5RegistryGithubV1RepoCommandServiceConfigureRepo(
  options?: Partial<
    UseMutationOptions<
      J5RegistryGithubV1RepoCommandServiceConfigureRepoResponse | undefined,
      Error,
      J5RegistryGithubV1RepoCommandServiceConfigureRepoRequest,
      unknown
    >
  >,
) {
  return useMutation({
    mutationKey: [j5RegistryGithubV1RepoStateEntity.key],
    mutationFn: async (request: J5RegistryGithubV1RepoCommandServiceConfigureRepoRequest) =>
      j5RegistryGithubV1RepoCommandServiceConfigureRepo('', request),
    meta: { normalizationSchema: j5RegistryGithubV1RepoCommandServiceConfigureRepoResponseEntity },
    ...options,
  });
}

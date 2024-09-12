/**
 * @generated by @pentops/jsonapi-jdef-ts-generator (Plugin: NormalizedQueryPlugin) - do not edit */

import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { J5RegistryRegistryV1DownloadServiceDownloadImageDownloadImageRequest } from '../../../types/generated';
import { j5RegistryRegistryV1DownloadServiceDownloadImage } from '../../generated';

/**
 * @generated by NormalizedQueryPlugin (get /registry/v1/:owner/:name/:version/image.bin) */

export function buildJ5RegistryRegistryV1DownloadServiceDownloadImageKey(
  request?: J5RegistryRegistryV1DownloadServiceDownloadImageDownloadImageRequest,
) {
  return ['j5RegistryRegistryV1DownloadServiceDownloadImage', 'detail', request] as const;
}

export function useJ5RegistryRegistryV1DownloadServiceDownloadImage(
  request: J5RegistryRegistryV1DownloadServiceDownloadImageDownloadImageRequest | undefined,
  options?: Partial<UseQueryOptions<undefined>>,
) {
  return useQuery({
    queryKey: buildJ5RegistryRegistryV1DownloadServiceDownloadImageKey(request),
    queryFn: async () => j5RegistryRegistryV1DownloadServiceDownloadImage('', request),
    enabled: Boolean(request?.owner && request?.name && request?.version),
    ...options,
  });
}

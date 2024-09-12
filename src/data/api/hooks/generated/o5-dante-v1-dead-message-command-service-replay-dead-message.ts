/**
 * @generated by @pentops/jsonapi-jdef-ts-generator (Plugin: NormalizedQueryPlugin) - do not edit */

import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { schema } from 'normalizr';
import { o5DanteV1DeadMessageStateEntity } from '../../../entities/generated/o5-dante-v1-dead-message-state';
import {
  O5DanteV1DeadMessageCommandServiceReplayDeadMessageResponse,
  O5DanteV1DeadMessageCommandServiceReplayDeadMessageRequest,
} from '../../../types/generated';
import { o5DanteV1DeadMessageCommandServiceReplayDeadMessage } from '../../generated';

export const o5DanteV1DeadMessageCommandServiceReplayDeadMessageResponseEntity =
  new schema.Object<O5DanteV1DeadMessageCommandServiceReplayDeadMessageResponse>({
    message: o5DanteV1DeadMessageStateEntity,
  });
/**
 * @generated by NormalizedQueryPlugin (post /dante/v1/c/messages/:messageId/replay) */

export function buildO5DanteV1DeadMessageCommandServiceReplayDeadMessageKey() {
  return ['/o5.dante.v1.DeadMessageCommandService/ReplayDeadMessage'] as const;
}

export function useO5DanteV1DeadMessageCommandServiceReplayDeadMessage(
  options?: Partial<
    UseMutationOptions<
      O5DanteV1DeadMessageCommandServiceReplayDeadMessageResponse | undefined,
      Error,
      O5DanteV1DeadMessageCommandServiceReplayDeadMessageRequest,
      unknown
    >
  >,
) {
  return useMutation({
    mutationKey: buildO5DanteV1DeadMessageCommandServiceReplayDeadMessageKey(),
    mutationFn: async (request: O5DanteV1DeadMessageCommandServiceReplayDeadMessageRequest) =>
      o5DanteV1DeadMessageCommandServiceReplayDeadMessage('', request),
    meta: { normalizationSchema: o5DanteV1DeadMessageCommandServiceReplayDeadMessageResponseEntity },
    ...options,
  });
}

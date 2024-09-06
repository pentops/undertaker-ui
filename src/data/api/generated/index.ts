/**
 * @generated by @pentops/jsonapi-jdef-ts-generator - do not edit */

import { buildMergedRequestInit, makeRequest } from '@pentops/jsonapi-request';
import type {
  O5DanteV1DeadMessageQueryServiceGetDeadMessageResponse,
  O5DanteV1DeadMessageQueryServiceGetDeadMessageGetDeadMessageRequest,
  O5DanteV1DeadMessageQueryServiceListDeadMessagesResponse,
  O5DanteV1DeadMessageQueryServiceListDeadMessagesListDeadMessagesRequest,
  O5DanteV1DeadMessageQueryServiceListDeadMessageEventsResponse,
  O5DanteV1DeadMessageQueryServiceListDeadMessageEventsListDeadMessageEventsRequest,
  O5DanteV1DeadMessageCommandServiceUpdateDeadMessageResponse,
  O5DanteV1DeadMessageCommandServiceUpdateDeadMessageRequest,
  O5DanteV1DeadMessageCommandServiceReplayDeadMessageResponse,
  O5DanteV1DeadMessageCommandServiceReplayDeadMessageRequest,
  O5DanteV1DeadMessageCommandServiceRejectDeadMessageResponse,
  O5DanteV1DeadMessageCommandServiceRejectDeadMessageRequest,
  O5AwsDeployerV1EnvironmentQueryServiceListEnvironmentsResponse,
  O5AwsDeployerV1EnvironmentQueryServiceListEnvironmentsRequest,
  O5AwsDeployerV1EnvironmentQueryServiceGetEnvironmentResponse,
  O5AwsDeployerV1EnvironmentQueryServiceGetEnvironmentGetEnvironmentRequest,
  O5AwsDeployerV1EnvironmentQueryServiceListEnvironmentEventsResponse,
  O5AwsDeployerV1EnvironmentQueryServiceListEnvironmentEventsRequest,
  O5AwsDeployerV1StackQueryServiceGetStackResponse,
  O5AwsDeployerV1StackQueryServiceGetStackGetStackRequest,
  O5AwsDeployerV1StackQueryServiceListStacksResponse,
  O5AwsDeployerV1StackQueryServiceListStacksRequest,
  O5AwsDeployerV1StackQueryServiceListStackEventsResponse,
  O5AwsDeployerV1StackQueryServiceListStackEventsRequest,
  O5AwsDeployerV1DeploymentQueryServiceGetDeploymentResponse,
  O5AwsDeployerV1DeploymentQueryServiceGetDeploymentGetDeploymentRequest,
  O5AwsDeployerV1DeploymentQueryServiceListDeploymentEventsResponse,
  O5AwsDeployerV1DeploymentQueryServiceListDeploymentEventsRequest,
  O5AwsDeployerV1DeploymentQueryServiceListDeploymentsResponse,
  O5AwsDeployerV1DeploymentQueryServiceListDeploymentsRequest,
  O5AwsDeployerV1DeploymentCommandServiceTriggerDeploymentResponse,
  O5AwsDeployerV1DeploymentCommandServiceTriggerDeploymentRequest,
  O5AwsDeployerV1DeploymentCommandServiceTerminateDeploymentResponse,
  O5AwsDeployerV1DeploymentCommandServiceTerminateDeploymentRequest,
  O5AwsDeployerV1DeploymentCommandServiceUpsertClusterResponse,
  O5AwsDeployerV1DeploymentCommandServiceUpsertClusterRequest,
  O5AwsDeployerV1DeploymentCommandServiceUpsertEnvironmentResponse,
  O5AwsDeployerV1DeploymentCommandServiceUpsertEnvironmentRequest,
  O5AwsDeployerV1DeploymentCommandServiceUpsertStackResponse,
  O5AwsDeployerV1DeploymentCommandServiceUpsertStackRequest,
  O5RealmV1AuthServiceWhoamiResponse,
  J5RegistryRegistryV1DownloadServiceDownloadImageDownloadImageRequest,
  J5RegistryRegistryV1DownloadServiceDownloadSwaggerDownloadSwaggerRequest,
  J5RegistryRegistryV1DownloadServiceDownloadJDefDownloadJDefRequest,
  J5RegistryRegistryV1DownloadServiceDownloadClientApiResponse,
  J5RegistryRegistryV1DownloadServiceDownloadClientApiDownloadClientApiRequest,
  J5RegistryGithubV1RepoQueryServiceGetRepoResponse,
  J5RegistryGithubV1RepoQueryServiceGetRepoGetRepoRequest,
  J5RegistryGithubV1RepoQueryServiceListReposResponse,
  J5RegistryGithubV1RepoQueryServiceListReposListReposRequest,
  J5RegistryGithubV1RepoQueryServiceListRepoEventsResponse,
  J5RegistryGithubV1RepoQueryServiceListRepoEventsListRepoEventsRequest,
  J5RegistryGithubV1RepoCommandServiceConfigureRepoResponse,
  J5RegistryGithubV1RepoCommandServiceConfigureRepoRequest,
  J5RegistryGithubV1RepoCommandServiceTriggerResponse,
  J5RegistryGithubV1RepoCommandServiceTriggerRequest,
} from '../../types/generated';

export async function o5DanteV1DeadMessageQueryServiceGetDeadMessage(
  baseUrl: string | undefined,
  request?: O5DanteV1DeadMessageQueryServiceGetDeadMessageGetDeadMessageRequest,
  requestInit?: RequestInit,
): Promise<O5DanteV1DeadMessageQueryServiceGetDeadMessageResponse | undefined> {
  return makeRequest<O5DanteV1DeadMessageQueryServiceGetDeadMessageResponse, O5DanteV1DeadMessageQueryServiceGetDeadMessageGetDeadMessageRequest>(
    ...buildMergedRequestInit('GET', baseUrl || '', '/dante/v1/q/message/:messageId', request, requestInit),
  );
}

export async function o5DanteV1DeadMessageQueryServiceListDeadMessages(
  baseUrl: string | undefined,
  request?: O5DanteV1DeadMessageQueryServiceListDeadMessagesListDeadMessagesRequest,
  requestInit?: RequestInit,
): Promise<O5DanteV1DeadMessageQueryServiceListDeadMessagesResponse | undefined> {
  return makeRequest<
    O5DanteV1DeadMessageQueryServiceListDeadMessagesResponse,
    O5DanteV1DeadMessageQueryServiceListDeadMessagesListDeadMessagesRequest
  >(...buildMergedRequestInit('GET', baseUrl || '', '/dante/v1/q/messages', request, requestInit));
}

export async function o5DanteV1DeadMessageQueryServiceListDeadMessageEvents(
  baseUrl: string | undefined,
  request?: O5DanteV1DeadMessageQueryServiceListDeadMessageEventsListDeadMessageEventsRequest,
  requestInit?: RequestInit,
): Promise<O5DanteV1DeadMessageQueryServiceListDeadMessageEventsResponse | undefined> {
  return makeRequest<
    O5DanteV1DeadMessageQueryServiceListDeadMessageEventsResponse,
    O5DanteV1DeadMessageQueryServiceListDeadMessageEventsListDeadMessageEventsRequest
  >(...buildMergedRequestInit('GET', baseUrl || '', '/dante/v1/q/message/:messageId/events', request, requestInit));
}

export async function o5DanteV1DeadMessageCommandServiceUpdateDeadMessage(
  baseUrl: string | undefined,
  request?: O5DanteV1DeadMessageCommandServiceUpdateDeadMessageRequest,
  requestInit?: RequestInit,
): Promise<O5DanteV1DeadMessageCommandServiceUpdateDeadMessageResponse | undefined> {
  return makeRequest<O5DanteV1DeadMessageCommandServiceUpdateDeadMessageResponse, O5DanteV1DeadMessageCommandServiceUpdateDeadMessageRequest>(
    ...buildMergedRequestInit('POST', baseUrl || '', '/dante/v1/c/messages/:messageId/update', request, requestInit),
  );
}

export async function o5DanteV1DeadMessageCommandServiceReplayDeadMessage(
  baseUrl: string | undefined,
  request?: O5DanteV1DeadMessageCommandServiceReplayDeadMessageRequest,
  requestInit?: RequestInit,
): Promise<O5DanteV1DeadMessageCommandServiceReplayDeadMessageResponse | undefined> {
  return makeRequest<O5DanteV1DeadMessageCommandServiceReplayDeadMessageResponse, O5DanteV1DeadMessageCommandServiceReplayDeadMessageRequest>(
    ...buildMergedRequestInit('POST', baseUrl || '', '/dante/v1/c/messages/:messageId/replay', request, requestInit),
  );
}

export async function o5DanteV1DeadMessageCommandServiceRejectDeadMessage(
  baseUrl: string | undefined,
  request?: O5DanteV1DeadMessageCommandServiceRejectDeadMessageRequest,
  requestInit?: RequestInit,
): Promise<O5DanteV1DeadMessageCommandServiceRejectDeadMessageResponse | undefined> {
  return makeRequest<O5DanteV1DeadMessageCommandServiceRejectDeadMessageResponse, O5DanteV1DeadMessageCommandServiceRejectDeadMessageRequest>(
    ...buildMergedRequestInit('POST', baseUrl || '', '/dante/v1/c/messages/:messageId/shelve', request, requestInit),
  );
}

export async function o5AwsDeployerV1EnvironmentQueryServiceListEnvironments(
  baseUrl: string | undefined,
  request?: O5AwsDeployerV1EnvironmentQueryServiceListEnvironmentsRequest,
  requestInit?: RequestInit,
): Promise<O5AwsDeployerV1EnvironmentQueryServiceListEnvironmentsResponse | undefined> {
  return makeRequest<O5AwsDeployerV1EnvironmentQueryServiceListEnvironmentsResponse, O5AwsDeployerV1EnvironmentQueryServiceListEnvironmentsRequest>(
    ...buildMergedRequestInit('POST', baseUrl || '', '/deployer/v1/q/environments', request, requestInit),
  );
}

export async function o5AwsDeployerV1EnvironmentQueryServiceGetEnvironment(
  baseUrl: string | undefined,
  request?: O5AwsDeployerV1EnvironmentQueryServiceGetEnvironmentGetEnvironmentRequest,
  requestInit?: RequestInit,
): Promise<O5AwsDeployerV1EnvironmentQueryServiceGetEnvironmentResponse | undefined> {
  return makeRequest<
    O5AwsDeployerV1EnvironmentQueryServiceGetEnvironmentResponse,
    O5AwsDeployerV1EnvironmentQueryServiceGetEnvironmentGetEnvironmentRequest
  >(...buildMergedRequestInit('GET', baseUrl || '', '/deployer/v1/q/environment/:environmentId', request, requestInit));
}

export async function o5AwsDeployerV1EnvironmentQueryServiceListEnvironmentEvents(
  baseUrl: string | undefined,
  request?: O5AwsDeployerV1EnvironmentQueryServiceListEnvironmentEventsRequest,
  requestInit?: RequestInit,
): Promise<O5AwsDeployerV1EnvironmentQueryServiceListEnvironmentEventsResponse | undefined> {
  return makeRequest<
    O5AwsDeployerV1EnvironmentQueryServiceListEnvironmentEventsResponse,
    O5AwsDeployerV1EnvironmentQueryServiceListEnvironmentEventsRequest
  >(...buildMergedRequestInit('POST', baseUrl || '', '/deployer/v1/q/environment/:environmentId/events', request, requestInit));
}

export async function o5AwsDeployerV1StackQueryServiceGetStack(
  baseUrl: string | undefined,
  request?: O5AwsDeployerV1StackQueryServiceGetStackGetStackRequest,
  requestInit?: RequestInit,
): Promise<O5AwsDeployerV1StackQueryServiceGetStackResponse | undefined> {
  return makeRequest<O5AwsDeployerV1StackQueryServiceGetStackResponse, O5AwsDeployerV1StackQueryServiceGetStackGetStackRequest>(
    ...buildMergedRequestInit('GET', baseUrl || '', '/deployer/v1/q/stack/:stackId', request, requestInit),
  );
}

export async function o5AwsDeployerV1StackQueryServiceListStacks(
  baseUrl: string | undefined,
  request?: O5AwsDeployerV1StackQueryServiceListStacksRequest,
  requestInit?: RequestInit,
): Promise<O5AwsDeployerV1StackQueryServiceListStacksResponse | undefined> {
  return makeRequest<O5AwsDeployerV1StackQueryServiceListStacksResponse, O5AwsDeployerV1StackQueryServiceListStacksRequest>(
    ...buildMergedRequestInit('POST', baseUrl || '', '/deployer/v1/q/stacks', request, requestInit),
  );
}

export async function o5AwsDeployerV1StackQueryServiceListStackEvents(
  baseUrl: string | undefined,
  request?: O5AwsDeployerV1StackQueryServiceListStackEventsRequest,
  requestInit?: RequestInit,
): Promise<O5AwsDeployerV1StackQueryServiceListStackEventsResponse | undefined> {
  return makeRequest<O5AwsDeployerV1StackQueryServiceListStackEventsResponse, O5AwsDeployerV1StackQueryServiceListStackEventsRequest>(
    ...buildMergedRequestInit('POST', baseUrl || '', '/deployer/v1/q/stack/:stackId/events', request, requestInit),
  );
}

export async function o5AwsDeployerV1DeploymentQueryServiceGetDeployment(
  baseUrl: string | undefined,
  request?: O5AwsDeployerV1DeploymentQueryServiceGetDeploymentGetDeploymentRequest,
  requestInit?: RequestInit,
): Promise<O5AwsDeployerV1DeploymentQueryServiceGetDeploymentResponse | undefined> {
  return makeRequest<
    O5AwsDeployerV1DeploymentQueryServiceGetDeploymentResponse,
    O5AwsDeployerV1DeploymentQueryServiceGetDeploymentGetDeploymentRequest
  >(...buildMergedRequestInit('GET', baseUrl || '', '/deployer/v1/q/deployment/:deploymentId', request, requestInit));
}

export async function o5AwsDeployerV1DeploymentQueryServiceListDeploymentEvents(
  baseUrl: string | undefined,
  request?: O5AwsDeployerV1DeploymentQueryServiceListDeploymentEventsRequest,
  requestInit?: RequestInit,
): Promise<O5AwsDeployerV1DeploymentQueryServiceListDeploymentEventsResponse | undefined> {
  return makeRequest<
    O5AwsDeployerV1DeploymentQueryServiceListDeploymentEventsResponse,
    O5AwsDeployerV1DeploymentQueryServiceListDeploymentEventsRequest
  >(...buildMergedRequestInit('POST', baseUrl || '', '/deployer/v1/q/deployment/:deploymentId/events', request, requestInit));
}

export async function o5AwsDeployerV1DeploymentQueryServiceListDeployments(
  baseUrl: string | undefined,
  request?: O5AwsDeployerV1DeploymentQueryServiceListDeploymentsRequest,
  requestInit?: RequestInit,
): Promise<O5AwsDeployerV1DeploymentQueryServiceListDeploymentsResponse | undefined> {
  return makeRequest<O5AwsDeployerV1DeploymentQueryServiceListDeploymentsResponse, O5AwsDeployerV1DeploymentQueryServiceListDeploymentsRequest>(
    ...buildMergedRequestInit('POST', baseUrl || '', '/deployer/v1/q/deployments', request, requestInit),
  );
}

export async function o5AwsDeployerV1DeploymentCommandServiceTriggerDeployment(
  baseUrl: string | undefined,
  request?: O5AwsDeployerV1DeploymentCommandServiceTriggerDeploymentRequest,
  requestInit?: RequestInit,
): Promise<O5AwsDeployerV1DeploymentCommandServiceTriggerDeploymentResponse | undefined> {
  return makeRequest<
    O5AwsDeployerV1DeploymentCommandServiceTriggerDeploymentResponse,
    O5AwsDeployerV1DeploymentCommandServiceTriggerDeploymentRequest
  >(...buildMergedRequestInit('POST', baseUrl || '', '/deployer/v1/c/deployments/:deploymentId', request, requestInit));
}

export async function o5AwsDeployerV1DeploymentCommandServiceTerminateDeployment(
  baseUrl: string | undefined,
  request?: O5AwsDeployerV1DeploymentCommandServiceTerminateDeploymentRequest,
  requestInit?: RequestInit,
): Promise<O5AwsDeployerV1DeploymentCommandServiceTerminateDeploymentResponse | undefined> {
  return makeRequest<
    O5AwsDeployerV1DeploymentCommandServiceTerminateDeploymentResponse,
    O5AwsDeployerV1DeploymentCommandServiceTerminateDeploymentRequest
  >(...buildMergedRequestInit('DELETE', baseUrl || '', '/deployer/v1/c/deployments/:deploymentId', request, requestInit));
}

export async function o5AwsDeployerV1DeploymentCommandServiceUpsertCluster(
  baseUrl: string | undefined,
  request?: O5AwsDeployerV1DeploymentCommandServiceUpsertClusterRequest,
  requestInit?: RequestInit,
): Promise<O5AwsDeployerV1DeploymentCommandServiceUpsertClusterResponse | undefined> {
  return makeRequest<O5AwsDeployerV1DeploymentCommandServiceUpsertClusterResponse, O5AwsDeployerV1DeploymentCommandServiceUpsertClusterRequest>(
    ...buildMergedRequestInit('POST', baseUrl || '', '/deployer/v1/c/clusters/config', request, requestInit),
  );
}

export async function o5AwsDeployerV1DeploymentCommandServiceUpsertEnvironment(
  baseUrl: string | undefined,
  request?: O5AwsDeployerV1DeploymentCommandServiceUpsertEnvironmentRequest,
  requestInit?: RequestInit,
): Promise<O5AwsDeployerV1DeploymentCommandServiceUpsertEnvironmentResponse | undefined> {
  return makeRequest<
    O5AwsDeployerV1DeploymentCommandServiceUpsertEnvironmentResponse,
    O5AwsDeployerV1DeploymentCommandServiceUpsertEnvironmentRequest
  >(...buildMergedRequestInit('POST', baseUrl || '', '/deployer/v1/c/environments/:environmentId/config', request, requestInit));
}

export async function o5AwsDeployerV1DeploymentCommandServiceUpsertStack(
  baseUrl: string | undefined,
  request?: O5AwsDeployerV1DeploymentCommandServiceUpsertStackRequest,
  requestInit?: RequestInit,
): Promise<O5AwsDeployerV1DeploymentCommandServiceUpsertStackResponse | undefined> {
  return makeRequest<O5AwsDeployerV1DeploymentCommandServiceUpsertStackResponse, O5AwsDeployerV1DeploymentCommandServiceUpsertStackRequest>(
    ...buildMergedRequestInit('POST', baseUrl || '', '/deployer/v1/c/stacks/:stackId/config', request, requestInit),
  );
}

export async function o5RealmV1AuthServiceWhoami(
  baseUrl: string | undefined,
  requestInit?: RequestInit,
): Promise<O5RealmV1AuthServiceWhoamiResponse | undefined> {
  return makeRequest<O5RealmV1AuthServiceWhoamiResponse>(
    ...buildMergedRequestInit('GET', baseUrl || '', '/o5-auth/v1/whoami', undefined, requestInit),
  );
}

export async function j5RegistryRegistryV1DownloadServiceDownloadImage(
  baseUrl: string | undefined,
  request?: J5RegistryRegistryV1DownloadServiceDownloadImageDownloadImageRequest,
  requestInit?: RequestInit,
): Promise<undefined> {
  return makeRequest<undefined, J5RegistryRegistryV1DownloadServiceDownloadImageDownloadImageRequest>(
    ...buildMergedRequestInit('GET', baseUrl || '', '/registry/v1/:owner/:name/:version/image.bin', request, requestInit),
  );
}

export async function j5RegistryRegistryV1DownloadServiceDownloadSwagger(
  baseUrl: string | undefined,
  request?: J5RegistryRegistryV1DownloadServiceDownloadSwaggerDownloadSwaggerRequest,
  requestInit?: RequestInit,
): Promise<undefined> {
  return makeRequest<undefined, J5RegistryRegistryV1DownloadServiceDownloadSwaggerDownloadSwaggerRequest>(
    ...buildMergedRequestInit('GET', baseUrl || '', '/registry/v1/:owner/:name/:version/swagger.json', request, requestInit),
  );
}

export async function j5RegistryRegistryV1DownloadServiceDownloadJDef(
  baseUrl: string | undefined,
  request?: J5RegistryRegistryV1DownloadServiceDownloadJDefDownloadJDefRequest,
  requestInit?: RequestInit,
): Promise<undefined> {
  return makeRequest<undefined, J5RegistryRegistryV1DownloadServiceDownloadJDefDownloadJDefRequest>(
    ...buildMergedRequestInit('GET', baseUrl || '', '/registry/v1/:owner/:name/:version/jdef.json', request, requestInit),
  );
}

export async function j5RegistryRegistryV1DownloadServiceDownloadClientApi(
  baseUrl: string | undefined,
  request?: J5RegistryRegistryV1DownloadServiceDownloadClientApiDownloadClientApiRequest,
  requestInit?: RequestInit,
): Promise<J5RegistryRegistryV1DownloadServiceDownloadClientApiResponse | undefined> {
  return makeRequest<
    J5RegistryRegistryV1DownloadServiceDownloadClientApiResponse,
    J5RegistryRegistryV1DownloadServiceDownloadClientApiDownloadClientApiRequest
  >(...buildMergedRequestInit('GET', baseUrl || '', '/registry/v1/:owner/:name/:version/api.json', request, requestInit));
}

export async function j5RegistryGithubV1RepoQueryServiceGetRepo(
  baseUrl: string | undefined,
  request?: J5RegistryGithubV1RepoQueryServiceGetRepoGetRepoRequest,
  requestInit?: RequestInit,
): Promise<J5RegistryGithubV1RepoQueryServiceGetRepoResponse | undefined> {
  return makeRequest<J5RegistryGithubV1RepoQueryServiceGetRepoResponse, J5RegistryGithubV1RepoQueryServiceGetRepoGetRepoRequest>(
    ...buildMergedRequestInit('GET', baseUrl || '', '/registry/github/v1/q/repo/:owner/:name', request, requestInit),
  );
}

export async function j5RegistryGithubV1RepoQueryServiceListRepos(
  baseUrl: string | undefined,
  request?: J5RegistryGithubV1RepoQueryServiceListReposListReposRequest,
  requestInit?: RequestInit,
): Promise<J5RegistryGithubV1RepoQueryServiceListReposResponse | undefined> {
  return makeRequest<J5RegistryGithubV1RepoQueryServiceListReposResponse, J5RegistryGithubV1RepoQueryServiceListReposListReposRequest>(
    ...buildMergedRequestInit('GET', baseUrl || '', '/registry/github/v1/q/repo', request, requestInit),
  );
}

export async function j5RegistryGithubV1RepoQueryServiceListRepoEvents(
  baseUrl: string | undefined,
  request?: J5RegistryGithubV1RepoQueryServiceListRepoEventsListRepoEventsRequest,
  requestInit?: RequestInit,
): Promise<J5RegistryGithubV1RepoQueryServiceListRepoEventsResponse | undefined> {
  return makeRequest<J5RegistryGithubV1RepoQueryServiceListRepoEventsResponse, J5RegistryGithubV1RepoQueryServiceListRepoEventsListRepoEventsRequest>(
    ...buildMergedRequestInit('GET', baseUrl || '', '/registry/github/v1/q/repo/:owner/:name/events', request, requestInit),
  );
}

export async function j5RegistryGithubV1RepoCommandServiceConfigureRepo(
  baseUrl: string | undefined,
  request?: J5RegistryGithubV1RepoCommandServiceConfigureRepoRequest,
  requestInit?: RequestInit,
): Promise<J5RegistryGithubV1RepoCommandServiceConfigureRepoResponse | undefined> {
  return makeRequest<J5RegistryGithubV1RepoCommandServiceConfigureRepoResponse, J5RegistryGithubV1RepoCommandServiceConfigureRepoRequest>(
    ...buildMergedRequestInit('POST', baseUrl || '', '/registry/github/v1/c/repo/:owner/:name/configure', request, requestInit),
  );
}

export async function j5RegistryGithubV1RepoCommandServiceTrigger(
  baseUrl: string | undefined,
  request?: J5RegistryGithubV1RepoCommandServiceTriggerRequest,
  requestInit?: RequestInit,
): Promise<J5RegistryGithubV1RepoCommandServiceTriggerResponse | undefined> {
  return makeRequest<J5RegistryGithubV1RepoCommandServiceTriggerResponse, J5RegistryGithubV1RepoCommandServiceTriggerRequest>(
    ...buildMergedRequestInit('POST', baseUrl || '', '/registry/github/v1/c/repo/:owner/:repo/trigger', request, requestInit),
  );
}

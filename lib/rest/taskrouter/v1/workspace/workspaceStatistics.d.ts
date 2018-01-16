/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');

declare function WorkspaceStatisticsList(version: V1, workspaceSid: string): WorkspaceStatisticsListInstance

interface WorkspaceStatisticsResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The cumulative
   */
  cumulative: string;
  /**
   * The realtime
   */
  realtime: string;
  /**
   * The url
   */
  url: string;
  /**
   * The workspace_sid
   */
  workspace_sid: string;
}

interface WorkspaceStatisticsPayload extends WorkspaceStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkspaceStatisticsSolution {
  workspaceSid: string;
}

interface WorkspaceStatisticsListInstance {
  /**
   * Gets context of a single WorkspaceStatistics resource
   */
  (): WorkspaceStatisticsContext;
  /**
   * Gets context of a single WorkspaceStatistics resource
   */
  get(): WorkspaceStatisticsContext;
}

interface WorkspaceStatisticsListFetchOptions {
  /**
   * The end_date
   */
  endDate?: Date;
  /**
   * The minutes
   */
  minutes?: number;
  /**
   * The split_by_wait_time
   */
  splitByWaitTime?: string;
  /**
   * The start_date
   */
  startDate?: Date;
  /**
   * The task_channel
   */
  taskChannel?: string;
}

interface WorkspaceStatisticsListFetchOptions {
  /**
   * The end_date
   */
  endDate?: Date;
  /**
   * The minutes
   */
  minutes?: number;
  /**
   * The split_by_wait_time
   */
  splitByWaitTime?: string;
  /**
   * The start_date
   */
  startDate?: Date;
  /**
   * The task_channel
   */
  taskChannel?: string;
}

declare class WorkspaceStatisticsPage extends Page<V1, WorkspaceStatisticsPayload, WorkspaceStatisticsResource, WorkspaceStatisticsInstance> {
  constructor(version: V1, response: Response<string>, solution: WorkspaceStatisticsSolution);

  /**
   * Build an instance of WorkspaceStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkspaceStatisticsPayload): WorkspaceStatisticsInstance;
}

declare class WorkspaceStatisticsInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: V1, payload: WorkspaceStatisticsPayload, workspaceSid: string);

  private _proxy: WorkspaceStatisticsContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The cumulative
   */
  cumulative: string;
  /**
   * fetch a WorkspaceStatisticsInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed WorkspaceStatisticsInstance
   */
  fetch(opts?: WorkspaceStatisticsListFetchOptions): Promise<WorkspaceStatisticsInstance>;
  /**
   * fetch a WorkspaceStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts: WorkspaceStatisticsListFetchOptions, callback: (error: Error | null, items: WorkspaceStatisticsInstance) => any): void;
  /**
   * fetch a WorkspaceStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: WorkspaceStatisticsInstance) => any): void;
  /**
   * The realtime
   */
  realtime: string;
  /**
   * The url
   */
  url: string;
  /**
   * The workspace_sid
   */
  workspaceSid: string;
}

declare class WorkspaceStatisticsContext {
  constructor(version: V1, workspaceSid: string);

  /**
   * fetch a WorkspaceStatisticsInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed WorkspaceStatisticsInstance
   */
  fetch(opts?: WorkspaceStatisticsListFetchOptions): Promise<WorkspaceStatisticsInstance>;
  /**
   * fetch a WorkspaceStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts: WorkspaceStatisticsListFetchOptions, callback: (error: Error | null, items: WorkspaceStatisticsInstance) => any): void;
  /**
   * fetch a WorkspaceStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: WorkspaceStatisticsInstance) => any): void;
}

export {WorkspaceStatisticsSolution, WorkspaceStatisticsPage, WorkspaceStatisticsList, WorkspaceStatisticsListFetchOptions, WorkspaceStatisticsResource, WorkspaceStatisticsListInstance, WorkspaceStatisticsPayload, WorkspaceStatisticsInstance, WorkspaceStatisticsContext}

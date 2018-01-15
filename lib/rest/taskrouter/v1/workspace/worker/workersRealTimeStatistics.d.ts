/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');

declare function WorkersRealTimeStatisticsList(version: V1, workspaceSid: string): WorkersRealTimeStatisticsListInstance

interface WorkersRealTimeStatisticsResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The activity_statistics
   */
  activity_statistics: string;
  /**
   * The total_workers
   */
  total_workers: number;
  /**
   * The url
   */
  url: string;
  /**
   * The workspace_sid
   */
  workspace_sid: string;
}

interface WorkersRealTimeStatisticsPayload extends WorkersRealTimeStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkersRealTimeStatisticsSolution {
  workspaceSid: string;
}

interface WorkersRealTimeStatisticsListInstance {
  /**
   * Gets context of a single WorkersRealTimeStatistics resource
   */
  (): WorkersRealTimeStatisticsContext;
  /**
   * Gets context of a single WorkersRealTimeStatistics resource
   */
  get(): WorkersRealTimeStatisticsContext;
}

interface WorkersRealTimeStatisticsListFetchOptions {
  /**
   * The task_channel
   */
  taskChannel?: string;
}

interface WorkersRealTimeStatisticsListFetchOptions {
  /**
   * The task_channel
   */
  taskChannel?: string;
}

declare class WorkersRealTimeStatisticsPage extends Page<V1, WorkersRealTimeStatisticsPayload, WorkersRealTimeStatisticsResource, WorkersRealTimeStatisticsInstance> {
  constructor(version: V1, response: Response<string>, solution: WorkersRealTimeStatisticsSolution);

  /**
   * Build an instance of WorkersRealTimeStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkersRealTimeStatisticsPayload): WorkersRealTimeStatisticsInstance;
}

declare class WorkersRealTimeStatisticsInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: V1, payload: WorkersRealTimeStatisticsPayload, workspaceSid: string);

  private _proxy: WorkersRealTimeStatisticsContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The activity_statistics
   */
  activityStatistics: string;
  /**
   * fetch a WorkersRealTimeStatisticsInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed WorkersRealTimeStatisticsInstance
   */
  fetch(opts?: WorkersRealTimeStatisticsListFetchOptions): Promise<WorkersRealTimeStatisticsInstance>;
  /**
   * fetch a WorkersRealTimeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts: WorkersRealTimeStatisticsListFetchOptions, callback: (error: Error | null, items: WorkersRealTimeStatisticsInstance) => any): void;
  /**
   * fetch a WorkersRealTimeStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: WorkersRealTimeStatisticsInstance) => any): void;
  /**
   * The total_workers
   */
  totalWorkers: number;
  /**
   * The url
   */
  url: string;
  /**
   * The workspace_sid
   */
  workspaceSid: string;
}

declare class WorkersRealTimeStatisticsContext {
  constructor(version: V1, workspaceSid: string);

  /**
   * fetch a WorkersRealTimeStatisticsInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed WorkersRealTimeStatisticsInstance
   */
  fetch(opts?: WorkersRealTimeStatisticsListFetchOptions): Promise<WorkersRealTimeStatisticsInstance>;
  /**
   * fetch a WorkersRealTimeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts: WorkersRealTimeStatisticsListFetchOptions, callback: (error: Error | null, items: WorkersRealTimeStatisticsInstance) => any): void;
  /**
   * fetch a WorkersRealTimeStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: WorkersRealTimeStatisticsInstance) => any): void;
}

export {WorkersRealTimeStatisticsPayload, WorkersRealTimeStatisticsResource, WorkersRealTimeStatisticsSolution, WorkersRealTimeStatisticsList, WorkersRealTimeStatisticsInstance, WorkersRealTimeStatisticsListFetchOptions, WorkersRealTimeStatisticsPage, WorkersRealTimeStatisticsContext, WorkersRealTimeStatisticsListInstance}

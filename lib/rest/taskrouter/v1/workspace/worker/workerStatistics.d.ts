/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');

declare function WorkerStatisticsList(version: V1, workspaceSid: string, workerSid: string): WorkerStatisticsListInstance

interface WorkerStatisticsResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The cumulative
   */
  cumulative: string;
  /**
   * The url
   */
  url: string;
  /**
   * The worker_sid
   */
  worker_sid: string;
  /**
   * The workspace_sid
   */
  workspace_sid: string;
}

interface WorkerStatisticsPayload extends WorkerStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkerStatisticsSolution {
  workerSid: string;
  workspaceSid: string;
}

interface WorkerStatisticsListInstance {
  /**
   * Gets context of a single WorkerStatistics resource
   */
  (): WorkerStatisticsContext;
  /**
   * Gets context of a single WorkerStatistics resource
   */
  get(): WorkerStatisticsContext;
}

interface WorkerStatisticsListFetchOptions {
  /**
   * The end_date
   */
  endDate?: Date;
  /**
   * The minutes
   */
  minutes?: number;
  /**
   * The start_date
   */
  startDate?: Date;
  /**
   * The task_channel
   */
  taskChannel?: string;
}

interface WorkerStatisticsListFetchOptions {
  /**
   * The end_date
   */
  endDate?: Date;
  /**
   * The minutes
   */
  minutes?: number;
  /**
   * The start_date
   */
  startDate?: Date;
  /**
   * The task_channel
   */
  taskChannel?: string;
}

declare class WorkerStatisticsPage extends Page<V1, WorkerStatisticsPayload, WorkerStatisticsResource, WorkerStatisticsInstance> {
  constructor(version: V1, response: Response<string>, solution: WorkerStatisticsSolution);

  /**
   * Build an instance of WorkerStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkerStatisticsPayload): WorkerStatisticsInstance;
}

declare class WorkerStatisticsInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param workerSid - The worker_sid
   */
  constructor(version: V1, payload: WorkerStatisticsPayload, workspaceSid: string, workerSid: string);

  private _proxy: WorkerStatisticsContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The cumulative
   */
  cumulative: string;
  /**
   * fetch a WorkerStatisticsInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed WorkerStatisticsInstance
   */
  fetch(opts?: WorkerStatisticsListFetchOptions): Promise<WorkerStatisticsInstance>;
  /**
   * fetch a WorkerStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts: WorkerStatisticsListFetchOptions, callback: (error: Error | null, items: WorkerStatisticsInstance) => any): void;
  /**
   * fetch a WorkerStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: WorkerStatisticsInstance) => any): void;
  /**
   * The url
   */
  url: string;
  /**
   * The worker_sid
   */
  workerSid: string;
  /**
   * The workspace_sid
   */
  workspaceSid: string;
}

declare class WorkerStatisticsContext {
  constructor(version: V1, workspaceSid: string, workerSid: string);

  /**
   * fetch a WorkerStatisticsInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed WorkerStatisticsInstance
   */
  fetch(opts?: WorkerStatisticsListFetchOptions): Promise<WorkerStatisticsInstance>;
  /**
   * fetch a WorkerStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts: WorkerStatisticsListFetchOptions, callback: (error: Error | null, items: WorkerStatisticsInstance) => any): void;
  /**
   * fetch a WorkerStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: WorkerStatisticsInstance) => any): void;
}

export { WorkerStatisticsContext, WorkerStatisticsInstance, WorkerStatisticsList, WorkerStatisticsListFetchOptions, WorkerStatisticsListInstance, WorkerStatisticsPage, WorkerStatisticsPayload, WorkerStatisticsResource, WorkerStatisticsSolution }

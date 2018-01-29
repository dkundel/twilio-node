/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';

declare function TaskQueuesStatisticsList(version: V1, workspaceSid: string): TaskQueuesStatisticsListInstance

interface TaskQueuesStatisticsResource {
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
   * The task_queue_sid
   */
  task_queue_sid: string;
  /**
   * The workspace_sid
   */
  workspace_sid: string;
}

interface TaskQueuesStatisticsPayload extends TaskQueuesStatisticsResource, Page.TwilioResponsePayload {
}

interface TaskQueuesStatisticsSolution {
  workspaceSid: string;
}

interface TaskQueuesStatisticsListEachOptions extends ListEachOptions<TaskQueuesStatisticsInstance> {
  /**
   * The end_date
   */
  endDate?: Date;
  /**
   * The friendly_name
   */
  friendlyName?: string;
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

interface TaskQueuesStatisticsListOptions extends ListOptions<TaskQueuesStatisticsInstance> {
  /**
   * The end_date
   */
  endDate?: Date;
  /**
   * The friendly_name
   */
  friendlyName?: string;
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

interface TaskQueuesStatisticsListPageOptions extends PageOptions<TaskQueuesStatisticsPage> {
  /**
   * The end_date
   */
  endDate?: Date;
  /**
   * The friendly_name
   */
  friendlyName?: string;
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

interface TaskQueuesStatisticsListInstance {
  /**
   * Streams TaskQueuesStatisticsInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  each(opts?: TaskQueuesStatisticsListEachOptions): void;
  /**
   * Streams TaskQueuesStatisticsInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  each(callback: (item: TaskQueuesStatisticsInstance, done: (err?: Error) => void) => void): any;
  /**
   * Retrieve a single target page of TaskQueuesStatisticsInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<TaskQueuesStatisticsPage>;
  /**
   * Retrieve a single target page of TaskQueuesStatisticsInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: TaskQueuesStatisticsPage) => any): void;
  /**
   * Lists TaskQueuesStatisticsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: TaskQueuesStatisticsListOptions): Promise<TaskQueuesStatisticsInstance[]>;
  /**
   * Lists TaskQueuesStatisticsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: TaskQueuesStatisticsListOptions, callback: (error: Error | null, items: TaskQueuesStatisticsInstance[]) => any): void;
  /**
   * Lists TaskQueuesStatisticsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: TaskQueuesStatisticsInstance[]) => any): void;
  /**
   * Retrieve a single page of TaskQueuesStatisticsInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: TaskQueuesStatisticsListPageOptions): Promise<TaskQueuesStatisticsPage>;
  /**
   * Retrieve a single page of TaskQueuesStatisticsInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: TaskQueuesStatisticsListPageOptions, callback: (error: Error | null, items: TaskQueuesStatisticsPage) => any): void;
  /**
   * Retrieve a single page of TaskQueuesStatisticsInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: TaskQueuesStatisticsPage) => any): void;
}

declare class TaskQueuesStatisticsPage extends Page<V1, TaskQueuesStatisticsPayload, TaskQueuesStatisticsResource, TaskQueuesStatisticsInstance> {
  constructor(version: V1, response: Response<string>, solution: TaskQueuesStatisticsSolution);

  /**
   * Build an instance of TaskQueuesStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TaskQueuesStatisticsPayload): TaskQueuesStatisticsInstance;
}

declare class TaskQueuesStatisticsInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: TaskQueuesStatisticsPayload);

  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The cumulative
   */
  cumulative: string;
  /**
   * The realtime
   */
  realtime: string;
  /**
   * The task_queue_sid
   */
  taskQueueSid: string;
  /**
   * The workspace_sid
   */
  workspaceSid: string;
}

export { TaskQueuesStatisticsInstance, TaskQueuesStatisticsList, TaskQueuesStatisticsListEachOptions, TaskQueuesStatisticsListInstance, TaskQueuesStatisticsListOptions, TaskQueuesStatisticsListPageOptions, TaskQueuesStatisticsPage, TaskQueuesStatisticsPayload, TaskQueuesStatisticsResource, TaskQueuesStatisticsSolution }

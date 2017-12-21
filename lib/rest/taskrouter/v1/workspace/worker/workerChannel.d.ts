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

declare function WorkerChannelList(version: V1, workspaceSid: string, workerSid: string): WorkerChannelListInstance

interface WorkerChannelResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The assigned_tasks
   */
  assigned_tasks: number;
  /**
   * The available
   */
  available: boolean;
  /**
   * The available_capacity_percentage
   */
  available_capacity_percentage: number;
  /**
   * The configured_capacity
   */
  configured_capacity: number;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The links
   */
  links: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The task_channel_sid
   */
  task_channel_sid: string;
  /**
   * The task_channel_unique_name
   */
  task_channel_unique_name: string;
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

interface WorkerChannelPayload extends WorkerChannelResource, Page.TwilioResponsePayload {
}

interface WorkerChannelSolution {
  workerSid: string;
  workspaceSid: string;
}

interface WorkerChannelListEachOptions extends ListEachOptions<WorkerChannelInstance> {
}

interface WorkerChannelListOptions extends ListOptions<WorkerChannelInstance> {
}

interface WorkerChannelListPageOptions extends PageOptions<WorkerChannelPage> {
}

interface WorkerChannelListInstance {
  /**
   * Gets context of a single WorkerChannel resource
   *
   * @param sid - The sid
   */
  (sid: string): WorkerChannelContext;
  /**
   * Streams WorkerChannelInstance records from the API.
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
  each(opts?: WorkerChannelListEachOptions): void;
  /**
   * Streams WorkerChannelInstance records from the API.
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
  each(callback: (item: WorkerChannelInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single WorkerChannel resource
   *
   * @param sid - The sid
   */
  get(sid: string): WorkerChannelContext;
  /**
   * Retrieve a single target page of WorkerChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<WorkerChannelPage>;
  /**
   * Retrieve a single target page of WorkerChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: WorkerChannelPage) => any): void;
  /**
   * Lists WorkerChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: WorkerChannelListOptions): Promise<WorkerChannelInstance[]>;
  /**
   * Lists WorkerChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: WorkerChannelListOptions, callback: (error: Error | null, items: WorkerChannelInstance[]) => any): void;
  /**
   * Lists WorkerChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: WorkerChannelInstance[]) => any): void;
  /**
   * Retrieve a single page of WorkerChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: WorkerChannelListPageOptions): Promise<WorkerChannelPage>;
  /**
   * Retrieve a single page of WorkerChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: WorkerChannelListPageOptions, callback: (error: Error | null, items: WorkerChannelPage) => any): void;
  /**
   * Retrieve a single page of WorkerChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: WorkerChannelPage) => any): void;
}

interface WorkerChannelListFetchOptions {
  /**
   * The available
   */
  available?: boolean;
  /**
   * The capacity
   */
  capacity?: number;
}

interface WorkerChannelListFetchOptions {
  /**
   * The available
   */
  available?: boolean;
  /**
   * The capacity
   */
  capacity?: number;
}

declare class WorkerChannelPage extends Page<V1, WorkerChannelPayload, WorkerChannelResource, WorkerChannelInstance> {
  constructor(version: V1, response: Response<string>, solution: WorkerChannelSolution);

  /**
   * Build an instance of WorkerChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkerChannelPayload): WorkerChannelInstance;
}

declare class WorkerChannelInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param workerSid - The worker_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: WorkerChannelPayload, workspaceSid: string, workerSid: string, sid: string);

  private _proxy: WorkerChannelContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The assigned_tasks
   */
  assignedTasks: number;
  /**
   * The available
   */
  available: boolean;
  /**
   * The available_capacity_percentage
   */
  availableCapacityPercentage: number;
  /**
   * The configured_capacity
   */
  configuredCapacity: number;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * fetch a WorkerChannelInstance
   *
   * @returns Promise that resolves to processed WorkerChannelInstance
   */
  fetch(): Promise<WorkerChannelInstance>;
  /**
   * fetch a WorkerChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: WorkerChannelInstance) => any): void;
  /**
   * The links
   */
  links: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The task_channel_sid
   */
  taskChannelSid: string;
  /**
   * The task_channel_unique_name
   */
  taskChannelUniqueName: string;
  /**
   * update a WorkerChannelInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed WorkerChannelInstance
   */
  update(opts?: WorkerChannelListFetchOptions): Promise<WorkerChannelInstance>;
  /**
   * update a WorkerChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: WorkerChannelListFetchOptions, callback: (error: Error | null, items: WorkerChannelInstance) => any): void;
  /**
   * update a WorkerChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: WorkerChannelInstance) => any): void;
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

declare class WorkerChannelContext {
  constructor(version: V1, workspaceSid: string, workerSid: string, sid: string);

  /**
   * fetch a WorkerChannelInstance
   *
   * @returns Promise that resolves to processed WorkerChannelInstance
   */
  fetch(): Promise<WorkerChannelInstance>;
  /**
   * fetch a WorkerChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: WorkerChannelInstance) => any): void;
  /**
   * update a WorkerChannelInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed WorkerChannelInstance
   */
  update(opts?: WorkerChannelListFetchOptions): Promise<WorkerChannelInstance>;
  /**
   * update a WorkerChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: WorkerChannelListFetchOptions, callback: (error: Error | null, items: WorkerChannelInstance) => any): void;
  /**
   * update a WorkerChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: WorkerChannelInstance) => any): void;
}

export {WorkerChannelList, WorkerChannelResource, WorkerChannelListPageOptions, WorkerChannelListFetchOptions, WorkerChannelListInstance, WorkerChannelPayload, WorkerChannelContext, WorkerChannelListOptions, WorkerChannelListEachOptions, WorkerChannelPage, WorkerChannelSolution, WorkerChannelInstance}

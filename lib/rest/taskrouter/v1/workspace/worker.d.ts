/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { ReservationListInstance } from './worker/reservation';
import { WorkerChannelListInstance } from './worker/workerChannel';
import { WorkerStatisticsListInstance } from './worker/workerStatistics';
import { WorkersCumulativeStatisticsListInstance } from './worker/workersCumulativeStatistics';
import { WorkersRealTimeStatisticsListInstance } from './worker/workersRealTimeStatistics';

declare function WorkerList(version: V1, workspaceSid: string): WorkerListInstance

interface WorkerResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The activity_name
   */
  activity_name: string;
  /**
   * The activity_sid
   */
  activity_sid: string;
  /**
   * The attributes
   */
  attributes: string;
  /**
   * The available
   */
  available: boolean;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_status_changed
   */
  date_status_changed: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The friendly_name
   */
  friendly_name: string;
  /**
   * The links
   */
  links: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The url
   */
  url: string;
  /**
   * The workspace_sid
   */
  workspace_sid: string;
}

interface WorkerPayload extends WorkerResource, Page.TwilioResponsePayload {
}

interface WorkerSolution {
  workspaceSid: string;
}

interface WorkerListEachOptions extends ListEachOptions<WorkerInstance> {
  /**
   * The activity_name
   */
  activityName?: string;
  /**
   * The activity_sid
   */
  activitySid?: string;
  /**
   * The available
   */
  available?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The target_workers_expression
   */
  targetWorkersExpression?: string;
  /**
   * The task_queue_name
   */
  taskQueueName?: string;
  /**
   * The task_queue_sid
   */
  taskQueueSid?: string;
}

interface WorkerListOptions extends ListOptions<WorkerInstance> {
  /**
   * The activity_name
   */
  activityName?: string;
  /**
   * The activity_sid
   */
  activitySid?: string;
  /**
   * The available
   */
  available?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The target_workers_expression
   */
  targetWorkersExpression?: string;
  /**
   * The task_queue_name
   */
  taskQueueName?: string;
  /**
   * The task_queue_sid
   */
  taskQueueSid?: string;
}

interface WorkerListPageOptions extends PageOptions<WorkerPage> {
  /**
   * The activity_name
   */
  activityName?: string;
  /**
   * The activity_sid
   */
  activitySid?: string;
  /**
   * The available
   */
  available?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The target_workers_expression
   */
  targetWorkersExpression?: string;
  /**
   * The task_queue_name
   */
  taskQueueName?: string;
  /**
   * The task_queue_sid
   */
  taskQueueSid?: string;
}

interface WorkerListCreateOptions {
  /**
   * The activity_sid
   */
  activitySid?: string;
  /**
   * The attributes
   */
  attributes?: string;
  /**
   * The friendly_name
   */
  friendlyName: string;
}

interface WorkerListInstance {
  /**
   * Gets context of a single Worker resource
   *
   * @param sid - The sid
   */
  (sid: string): WorkerContext;
  /**
   * create a WorkerInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed WorkerInstance
   */
  create(opts: WorkerListCreateOptions): Promise<WorkerInstance>;
  /**
   * create a WorkerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: WorkerListCreateOptions, callback: (error: Error | null, items: WorkerInstance) => any): void;
  /**
   * Streams WorkerInstance records from the API.
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
  each(opts?: WorkerListEachOptions): void;
  /**
   * Streams WorkerInstance records from the API.
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
  each(callback: (item: WorkerInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Worker resource
   *
   * @param sid - The sid
   */
  get(sid: string): WorkerContext;
  /**
   * Retrieve a single target page of WorkerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<WorkerPage>;
  /**
   * Retrieve a single target page of WorkerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: WorkerPage) => any): void;
  /**
   * Lists WorkerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: WorkerListOptions): Promise<WorkerInstance[]>;
  /**
   * Lists WorkerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: WorkerListOptions, callback: (error: Error | null, items: WorkerInstance[]) => any): void;
  /**
   * Lists WorkerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: WorkerInstance[]) => any): void;
  /**
   * Retrieve a single page of WorkerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: WorkerListPageOptions): Promise<WorkerPage>;
  /**
   * Retrieve a single page of WorkerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: WorkerListPageOptions, callback: (error: Error | null, items: WorkerPage) => any): void;
  /**
   * Retrieve a single page of WorkerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: WorkerPage) => any): void;
}

interface WorkerListFetchOptions {
  /**
   * The activity_sid
   */
  activitySid?: string;
  /**
   * The attributes
   */
  attributes?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
}

interface WorkerListFetchOptions {
  /**
   * The activity_sid
   */
  activitySid?: string;
  /**
   * The attributes
   */
  attributes?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
}

declare class WorkerPage extends Page<V1, WorkerPayload, WorkerResource, WorkerInstance> {
  constructor(version: V1, response: Response<string>, solution: WorkerSolution);

  /**
   * Build an instance of WorkerInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkerPayload): WorkerInstance;
}

declare class WorkerInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: WorkerPayload, workspaceSid: string, sid: string);

  private _proxy: WorkerContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The activity_name
   */
  activityName: string;
  /**
   * The activity_sid
   */
  activitySid: string;
  /**
   * The attributes
   */
  attributes: string;
  /**
   * The available
   */
  available: boolean;
  cumulativeStatistics(): WorkersCumulativeStatisticsListInstance;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_status_changed
   */
  dateStatusChanged: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * fetch a WorkerInstance
   *
   * @returns Promise that resolves to processed WorkerInstance
   */
  fetch(): Promise<WorkerInstance>;
  /**
   * fetch a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: WorkerInstance) => any): void;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The links
   */
  links: string;
  realTimeStatistics(): WorkersRealTimeStatisticsListInstance;
  /**
   * remove a WorkerInstance
   *
   * @returns Promise that resolves to processed WorkerInstance
   */
  remove(): Promise<WorkerInstance>;
  /**
   * remove a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: WorkerInstance) => any): void;
  reservations(): ReservationListInstance;
  /**
   * The sid
   */
  sid: string;
  statistics(): WorkerStatisticsListInstance;
  /**
   * update a WorkerInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed WorkerInstance
   */
  update(opts?: WorkerListFetchOptions): Promise<WorkerInstance>;
  /**
   * update a WorkerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: WorkerListFetchOptions, callback: (error: Error | null, items: WorkerInstance) => any): void;
  /**
   * update a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: WorkerInstance) => any): void;
  /**
   * The url
   */
  url: string;
  workerChannels(): WorkerChannelListInstance;
  /**
   * The workspace_sid
   */
  workspaceSid: string;
}

declare class WorkerContext {
  constructor(version: V1, workspaceSid: string, sid: string);

  cumulativeStatistics: WorkersCumulativeStatisticsListInstance;
  /**
   * fetch a WorkerInstance
   *
   * @returns Promise that resolves to processed WorkerInstance
   */
  fetch(): Promise<WorkerInstance>;
  /**
   * fetch a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: WorkerInstance) => any): void;
  realTimeStatistics: WorkersRealTimeStatisticsListInstance;
  /**
   * remove a WorkerInstance
   *
   * @returns Promise that resolves to processed WorkerInstance
   */
  remove(): Promise<WorkerInstance>;
  /**
   * remove a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: WorkerInstance) => any): void;
  reservations: ReservationListInstance;
  statistics: WorkerStatisticsListInstance;
  /**
   * update a WorkerInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed WorkerInstance
   */
  update(opts?: WorkerListFetchOptions): Promise<WorkerInstance>;
  /**
   * update a WorkerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: WorkerListFetchOptions, callback: (error: Error | null, items: WorkerInstance) => any): void;
  /**
   * update a WorkerInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: WorkerInstance) => any): void;
  workerChannels: WorkerChannelListInstance;
}

export {WorkerListInstance, WorkerListOptions, WorkerResource, WorkerPage, WorkerListEachOptions, WorkerListCreateOptions, WorkerContext, WorkerPayload, WorkerInstance, WorkerListFetchOptions, WorkerListPageOptions, WorkerSolution, WorkerList}

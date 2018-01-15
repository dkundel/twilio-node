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
import { WorkflowCumulativeStatisticsListInstance } from './workflow/workflowCumulativeStatistics';
import { WorkflowRealTimeStatisticsListInstance } from './workflow/workflowRealTimeStatistics';
import { WorkflowStatisticsListInstance } from './workflow/workflowStatistics';

declare function WorkflowList(version: V1, workspaceSid: string): WorkflowListInstance

interface WorkflowResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The assignment_callback_url
   */
  assignment_callback_url: string;
  /**
   * The configuration
   */
  configuration: string;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The document_content_type
   */
  document_content_type: string;
  /**
   * The fallback_assignment_callback_url
   */
  fallback_assignment_callback_url: string;
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
   * The task_reservation_timeout
   */
  task_reservation_timeout: number;
  /**
   * The url
   */
  url: string;
  /**
   * The workspace_sid
   */
  workspace_sid: string;
}

interface WorkflowPayload extends WorkflowResource, Page.TwilioResponsePayload {
}

interface WorkflowSolution {
  workspaceSid: string;
}

interface WorkflowListEachOptions extends ListEachOptions<WorkflowInstance> {
  /**
   * The friendly_name
   */
  friendlyName?: string;
}

interface WorkflowListOptions extends ListOptions<WorkflowInstance> {
  /**
   * The friendly_name
   */
  friendlyName?: string;
}

interface WorkflowListPageOptions extends PageOptions<WorkflowPage> {
  /**
   * The friendly_name
   */
  friendlyName?: string;
}

interface WorkflowListCreateOptions {
  /**
   * The assignment_callback_url
   */
  assignmentCallbackUrl?: string;
  /**
   * The configuration
   */
  configuration: string;
  /**
   * The fallback_assignment_callback_url
   */
  fallbackAssignmentCallbackUrl?: string;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The task_reservation_timeout
   */
  taskReservationTimeout?: number;
}

interface WorkflowListInstance {
  /**
   * Gets context of a single Workflow resource
   *
   * @param sid - The sid
   */
  (sid: string): WorkflowContext;
  /**
   * create a WorkflowInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed WorkflowInstance
   */
  create(opts: WorkflowListCreateOptions): Promise<WorkflowInstance>;
  /**
   * create a WorkflowInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: WorkflowListCreateOptions, callback: (error: Error | null, items: WorkflowInstance) => any): void;
  /**
   * Streams WorkflowInstance records from the API.
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
  each(opts?: WorkflowListEachOptions): void;
  /**
   * Streams WorkflowInstance records from the API.
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
  each(callback: (item: WorkflowInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Workflow resource
   *
   * @param sid - The sid
   */
  get(sid: string): WorkflowContext;
  /**
   * Retrieve a single target page of WorkflowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<WorkflowPage>;
  /**
   * Retrieve a single target page of WorkflowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: WorkflowPage) => any): void;
  /**
   * Lists WorkflowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: WorkflowListOptions): Promise<WorkflowInstance[]>;
  /**
   * Lists WorkflowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: WorkflowListOptions, callback: (error: Error | null, items: WorkflowInstance[]) => any): void;
  /**
   * Lists WorkflowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: WorkflowInstance[]) => any): void;
  /**
   * Retrieve a single page of WorkflowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: WorkflowListPageOptions): Promise<WorkflowPage>;
  /**
   * Retrieve a single page of WorkflowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: WorkflowListPageOptions, callback: (error: Error | null, items: WorkflowPage) => any): void;
  /**
   * Retrieve a single page of WorkflowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: WorkflowPage) => any): void;
}

interface WorkflowListFetchOptions {
  /**
   * The assignment_callback_url
   */
  assignmentCallbackUrl?: string;
  /**
   * The configuration
   */
  configuration?: string;
  /**
   * The fallback_assignment_callback_url
   */
  fallbackAssignmentCallbackUrl?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The task_reservation_timeout
   */
  taskReservationTimeout?: number;
}

interface WorkflowListFetchOptions {
  /**
   * The assignment_callback_url
   */
  assignmentCallbackUrl?: string;
  /**
   * The configuration
   */
  configuration?: string;
  /**
   * The fallback_assignment_callback_url
   */
  fallbackAssignmentCallbackUrl?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The task_reservation_timeout
   */
  taskReservationTimeout?: number;
}

declare class WorkflowPage extends Page<V1, WorkflowPayload, WorkflowResource, WorkflowInstance> {
  constructor(version: V1, response: Response<string>, solution: WorkflowSolution);

  /**
   * Build an instance of WorkflowInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkflowPayload): WorkflowInstance;
}

declare class WorkflowInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: WorkflowPayload, workspaceSid: string, sid: string);

  private _proxy: WorkflowContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The assignment_callback_url
   */
  assignmentCallbackUrl: string;
  /**
   * The configuration
   */
  configuration: string;
  cumulativeStatistics(): WorkflowCumulativeStatisticsListInstance;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * The document_content_type
   */
  documentContentType: string;
  /**
   * The fallback_assignment_callback_url
   */
  fallbackAssignmentCallbackUrl: string;
  /**
   * fetch a WorkflowInstance
   *
   * @returns Promise that resolves to processed WorkflowInstance
   */
  fetch(): Promise<WorkflowInstance>;
  /**
   * fetch a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: WorkflowInstance) => any): void;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The links
   */
  links: string;
  realTimeStatistics(): WorkflowRealTimeStatisticsListInstance;
  /**
   * remove a WorkflowInstance
   *
   * @returns Promise that resolves to processed WorkflowInstance
   */
  remove(): Promise<WorkflowInstance>;
  /**
   * remove a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: WorkflowInstance) => any): void;
  /**
   * The sid
   */
  sid: string;
  statistics(): WorkflowStatisticsListInstance;
  /**
   * The task_reservation_timeout
   */
  taskReservationTimeout: number;
  /**
   * update a WorkflowInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed WorkflowInstance
   */
  update(opts?: WorkflowListFetchOptions): Promise<WorkflowInstance>;
  /**
   * update a WorkflowInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: WorkflowListFetchOptions, callback: (error: Error | null, items: WorkflowInstance) => any): void;
  /**
   * update a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: WorkflowInstance) => any): void;
  /**
   * The url
   */
  url: string;
  /**
   * The workspace_sid
   */
  workspaceSid: string;
}

declare class WorkflowContext {
  constructor(version: V1, workspaceSid: string, sid: string);

  cumulativeStatistics: WorkflowCumulativeStatisticsListInstance;
  /**
   * fetch a WorkflowInstance
   *
   * @returns Promise that resolves to processed WorkflowInstance
   */
  fetch(): Promise<WorkflowInstance>;
  /**
   * fetch a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: WorkflowInstance) => any): void;
  realTimeStatistics: WorkflowRealTimeStatisticsListInstance;
  /**
   * remove a WorkflowInstance
   *
   * @returns Promise that resolves to processed WorkflowInstance
   */
  remove(): Promise<WorkflowInstance>;
  /**
   * remove a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: WorkflowInstance) => any): void;
  statistics: WorkflowStatisticsListInstance;
  /**
   * update a WorkflowInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed WorkflowInstance
   */
  update(opts?: WorkflowListFetchOptions): Promise<WorkflowInstance>;
  /**
   * update a WorkflowInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: WorkflowListFetchOptions, callback: (error: Error | null, items: WorkflowInstance) => any): void;
  /**
   * update a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: WorkflowInstance) => any): void;
}

export {WorkflowSolution, WorkflowPage, WorkflowList, WorkflowListEachOptions, WorkflowListFetchOptions, WorkflowPayload, WorkflowListOptions, WorkflowInstance, WorkflowContext, WorkflowListInstance, WorkflowResource, WorkflowListCreateOptions, WorkflowListPageOptions}
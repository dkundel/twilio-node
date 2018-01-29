/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import BulkExports = require('../../BulkExports');
import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';

declare function DayList(version: BulkExports, resourceType: string): DayListInstance

interface DayResource {
  /**
   * The day
   */
  day?: string;
  /**
   * The redirect_to
   */
  redirect_to?: string;
  /**
   * The resource_type
   */
  resource_type?: string;
  /**
   * The size
   */
  size?: number;
}

interface DayPayload extends DayResource, Page.TwilioResponsePayload {
}

interface DaySolution {
  resourceType: string;
}

interface DayListEachOptions extends ListEachOptions<DayInstance> {
}

interface DayListOptions extends ListOptions<DayInstance> {
}

interface DayListPageOptions extends PageOptions<DayPage> {
}

interface DayListInstance {
  /**
   * Streams DayInstance records from the API.
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
  each(opts?: DayListEachOptions): void;
  /**
   * Streams DayInstance records from the API.
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
  each(callback: (item: DayInstance, done: (err?: Error) => void) => void): any;
  /**
   * Retrieve a single target page of DayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<DayPage>;
  /**
   * Retrieve a single target page of DayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: DayPage) => any): void;
  /**
   * Lists DayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: DayListOptions): Promise<DayInstance[]>;
  /**
   * Lists DayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: DayListOptions, callback: (error: Error | null, items: DayInstance[]) => any): void;
  /**
   * Lists DayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: DayInstance[]) => any): void;
  /**
   * Retrieve a single page of DayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: DayListPageOptions): Promise<DayPage>;
  /**
   * Retrieve a single page of DayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: DayListPageOptions, callback: (error: Error | null, items: DayPage) => any): void;
  /**
   * Retrieve a single page of DayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: DayPage) => any): void;
}

declare class DayPage extends Page<BulkExports, DayPayload, DayResource, DayInstance> {
  constructor(version: BulkExports, response: Response<string>, solution: DaySolution);

  /**
   * Build an instance of DayInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DayPayload): DayInstance;
}

declare class DayInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: BulkExports, payload: DayPayload);

  /**
   * The day
   */
  day: string;
  /**
   * The redirect_to
   */
  redirectTo: string;
  /**
   * The resource_type
   */
  resourceType: string;
  /**
   * The size
   */
  size: number;
}

export { DayInstance, DayList, DayListEachOptions, DayListInstance, DayListOptions, DayListPageOptions, DayPage, DayPayload, DayResource, DaySolution }

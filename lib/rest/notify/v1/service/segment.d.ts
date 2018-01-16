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

declare function SegmentList(version: V1, serviceSid: string): SegmentListInstance

interface SegmentResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The service_sid
   */
  service_sid: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The unique_name
   */
  unique_name: string;
}

interface SegmentPayload extends SegmentResource, Page.TwilioResponsePayload {
}

interface SegmentSolution {
  serviceSid: string;
}

interface SegmentListEachOptions extends ListEachOptions<SegmentInstance> {
}

interface SegmentListOptions extends ListOptions<SegmentInstance> {
}

interface SegmentListPageOptions extends PageOptions<SegmentPage> {
}

interface SegmentListInstance {
  /**
   * Streams SegmentInstance records from the API.
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
  each(opts?: SegmentListEachOptions): void;
  /**
   * Streams SegmentInstance records from the API.
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
  each(callback: (item: SegmentInstance, done: (err?: Error) => void) => void): any;
  /**
   * Retrieve a single target page of SegmentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<SegmentPage>;
  /**
   * Retrieve a single target page of SegmentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: SegmentPage) => any): void;
  /**
   * Lists SegmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: SegmentListOptions): Promise<SegmentInstance[]>;
  /**
   * Lists SegmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: SegmentListOptions, callback: (error: Error | null, items: SegmentInstance[]) => any): void;
  /**
   * Lists SegmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: SegmentInstance[]) => any): void;
  /**
   * Retrieve a single page of SegmentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: SegmentListPageOptions): Promise<SegmentPage>;
  /**
   * Retrieve a single page of SegmentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: SegmentListPageOptions, callback: (error: Error | null, items: SegmentPage) => any): void;
  /**
   * Retrieve a single page of SegmentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: SegmentPage) => any): void;
}

declare class SegmentPage extends Page<V1, SegmentPayload, SegmentResource, SegmentInstance> {
  constructor(version: V1, response: Response<string>, solution: SegmentSolution);

  /**
   * Build an instance of SegmentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SegmentPayload): SegmentInstance;
}

declare class SegmentInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: SegmentPayload);

  private _proxy: SegmentContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * The service_sid
   */
  serviceSid: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The unique_name
   */
  uniqueName: string;
}

export { SegmentInstance, SegmentList, SegmentListEachOptions, SegmentListInstance, SegmentListOptions, SegmentListPageOptions, SegmentPage, SegmentPayload, SegmentResource, SegmentSolution }

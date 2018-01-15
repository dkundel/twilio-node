/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import Understand = require('../../Understand');
import { FieldListInstance } from './intent/field';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SampleListInstance } from './intent/sample';

declare function IntentList(version: Understand, serviceSid: string): IntentListInstance

interface IntentResource {
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
   * The friendly_name
   */
  friendly_name: string;
  /**
   * The links
   */
  links: string;
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
  /**
   * The url
   */
  url: string;
}

interface IntentPayload extends IntentResource, Page.TwilioResponsePayload {
}

interface IntentSolution {
  serviceSid: string;
}

interface IntentListEachOptions extends ListEachOptions<IntentInstance> {
}

interface IntentListOptions extends ListOptions<IntentInstance> {
}

interface IntentListPageOptions extends PageOptions<IntentPage> {
}

interface IntentListCreateOptions {
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The unique_name
   */
  uniqueName: string;
}

interface IntentListInstance {
  /**
   * Gets context of a single Intent resource
   *
   * @param sid - The sid
   */
  (sid: string): IntentContext;
  /**
   * create a IntentInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed IntentInstance
   */
  create(opts: IntentListCreateOptions): Promise<IntentInstance>;
  /**
   * create a IntentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: IntentListCreateOptions, callback: (error: Error | null, items: IntentInstance) => any): void;
  /**
   * Streams IntentInstance records from the API.
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
  each(opts?: IntentListEachOptions): void;
  /**
   * Streams IntentInstance records from the API.
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
  each(callback: (item: IntentInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Intent resource
   *
   * @param sid - The sid
   */
  get(sid: string): IntentContext;
  /**
   * Retrieve a single target page of IntentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<IntentPage>;
  /**
   * Retrieve a single target page of IntentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: IntentPage) => any): void;
  /**
   * Lists IntentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: IntentListOptions): Promise<IntentInstance[]>;
  /**
   * Lists IntentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: IntentListOptions, callback: (error: Error | null, items: IntentInstance[]) => any): void;
  /**
   * Lists IntentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: IntentInstance[]) => any): void;
  /**
   * Retrieve a single page of IntentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: IntentListPageOptions): Promise<IntentPage>;
  /**
   * Retrieve a single page of IntentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: IntentListPageOptions, callback: (error: Error | null, items: IntentPage) => any): void;
  /**
   * Retrieve a single page of IntentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: IntentPage) => any): void;
}

interface IntentListFetchOptions {
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The unique_name
   */
  uniqueName?: string;
}

interface IntentListFetchOptions {
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The unique_name
   */
  uniqueName?: string;
}

declare class IntentPage extends Page<Understand, IntentPayload, IntentResource, IntentInstance> {
  constructor(version: Understand, response: Response<string>, solution: IntentSolution);

  /**
   * Build an instance of IntentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: IntentPayload): IntentInstance;
}

declare class IntentInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Understand, payload: IntentPayload, serviceSid: string, sid: string);

  private _proxy: IntentContext;
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
   * fetch a IntentInstance
   *
   * @returns Promise that resolves to processed IntentInstance
   */
  fetch(): Promise<IntentInstance>;
  /**
   * fetch a IntentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: IntentInstance) => any): void;
  fields(): FieldListInstance;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The links
   */
  links: string;
  /**
   * remove a IntentInstance
   *
   * @returns Promise that resolves to processed IntentInstance
   */
  remove(): Promise<IntentInstance>;
  /**
   * remove a IntentInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: IntentInstance) => any): void;
  samples(): SampleListInstance;
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
  /**
   * update a IntentInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed IntentInstance
   */
  update(opts?: IntentListFetchOptions): Promise<IntentInstance>;
  /**
   * update a IntentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: IntentListFetchOptions, callback: (error: Error | null, items: IntentInstance) => any): void;
  /**
   * update a IntentInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: IntentInstance) => any): void;
  /**
   * The url
   */
  url: string;
}

declare class IntentContext {
  constructor(version: Understand, serviceSid: string, sid: string);

  /**
   * fetch a IntentInstance
   *
   * @returns Promise that resolves to processed IntentInstance
   */
  fetch(): Promise<IntentInstance>;
  /**
   * fetch a IntentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: IntentInstance) => any): void;
  fields: FieldListInstance;
  /**
   * remove a IntentInstance
   *
   * @returns Promise that resolves to processed IntentInstance
   */
  remove(): Promise<IntentInstance>;
  /**
   * remove a IntentInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: IntentInstance) => any): void;
  samples: SampleListInstance;
  /**
   * update a IntentInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed IntentInstance
   */
  update(opts?: IntentListFetchOptions): Promise<IntentInstance>;
  /**
   * update a IntentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: IntentListFetchOptions, callback: (error: Error | null, items: IntentInstance) => any): void;
  /**
   * update a IntentInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: IntentInstance) => any): void;
}

export {IntentListCreateOptions, IntentListFetchOptions, IntentSolution, IntentResource, IntentListPageOptions, IntentListOptions, IntentList, IntentInstance, IntentPage, IntentContext, IntentListInstance, IntentListEachOptions, IntentPayload}
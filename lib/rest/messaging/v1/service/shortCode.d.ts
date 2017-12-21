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

declare function ShortCodeList(version: V1, serviceSid: string): ShortCodeListInstance

interface ShortCodeResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The capabilities
   */
  capabilities: string;
  /**
   * The country_code
   */
  country_code: string;
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
   * The short_code
   */
  short_code: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The url
   */
  url: string;
}

interface ShortCodePayload extends ShortCodeResource, Page.TwilioResponsePayload {
}

interface ShortCodeSolution {
  serviceSid: string;
}

interface ShortCodeListCreateOptions {
  /**
   * The short_code_sid
   */
  shortCodeSid: string;
}

interface ShortCodeListEachOptions extends ListEachOptions<ShortCodeInstance> {
}

interface ShortCodeListOptions extends ListOptions<ShortCodeInstance> {
}

interface ShortCodeListPageOptions extends PageOptions<ShortCodePage> {
}

interface ShortCodeListInstance {
  /**
   * Gets context of a single ShortCode resource
   *
   * @param sid - The sid
   */
  (sid: string): ShortCodeContext;
  /**
   * create a ShortCodeInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ShortCodeInstance
   */
  create(opts: ShortCodeListCreateOptions): Promise<ShortCodeInstance>;
  /**
   * create a ShortCodeInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ShortCodeListCreateOptions, callback: (error: Error | null, items: ShortCodeInstance) => any): void;
  /**
   * Streams ShortCodeInstance records from the API.
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
  each(opts?: ShortCodeListEachOptions): void;
  /**
   * Streams ShortCodeInstance records from the API.
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
  each(callback: (item: ShortCodeInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single ShortCode resource
   *
   * @param sid - The sid
   */
  get(sid: string): ShortCodeContext;
  /**
   * Retrieve a single target page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<ShortCodePage>;
  /**
   * Retrieve a single target page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: ShortCodePage) => any): void;
  /**
   * Lists ShortCodeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: ShortCodeListOptions): Promise<ShortCodeInstance[]>;
  /**
   * Lists ShortCodeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: ShortCodeListOptions, callback: (error: Error | null, items: ShortCodeInstance[]) => any): void;
  /**
   * Lists ShortCodeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: ShortCodeInstance[]) => any): void;
  /**
   * Retrieve a single page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: ShortCodeListPageOptions): Promise<ShortCodePage>;
  /**
   * Retrieve a single page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: ShortCodeListPageOptions, callback: (error: Error | null, items: ShortCodePage) => any): void;
  /**
   * Retrieve a single page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: ShortCodePage) => any): void;
}

declare class ShortCodePage extends Page<V1, ShortCodePayload, ShortCodeResource, ShortCodeInstance> {
  constructor(version: V1, response: Response<string>, solution: ShortCodeSolution);

  /**
   * Build an instance of ShortCodeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ShortCodePayload): ShortCodeInstance;
}

declare class ShortCodeInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: ShortCodePayload, serviceSid: string, sid: string);

  private _proxy: ShortCodeContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The capabilities
   */
  capabilities: string;
  /**
   * The country_code
   */
  countryCode: string;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * fetch a ShortCodeInstance
   *
   * @returns Promise that resolves to processed ShortCodeInstance
   */
  fetch(): Promise<ShortCodeInstance>;
  /**
   * fetch a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ShortCodeInstance) => any): void;
  /**
   * remove a ShortCodeInstance
   *
   * @returns Promise that resolves to processed ShortCodeInstance
   */
  remove(): Promise<ShortCodeInstance>;
  /**
   * remove a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ShortCodeInstance) => any): void;
  /**
   * The service_sid
   */
  serviceSid: string;
  /**
   * The short_code
   */
  shortCode: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The url
   */
  url: string;
}

declare class ShortCodeContext {
  constructor(version: V1, serviceSid: string, sid: string);

  /**
   * fetch a ShortCodeInstance
   *
   * @returns Promise that resolves to processed ShortCodeInstance
   */
  fetch(): Promise<ShortCodeInstance>;
  /**
   * fetch a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ShortCodeInstance) => any): void;
  /**
   * remove a ShortCodeInstance
   *
   * @returns Promise that resolves to processed ShortCodeInstance
   */
  remove(): Promise<ShortCodeInstance>;
  /**
   * remove a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ShortCodeInstance) => any): void;
}

export {ShortCodeListPageOptions, ShortCodeListOptions, ShortCodeResource, ShortCodePage, ShortCodeContext, ShortCodeSolution, ShortCodePayload, ShortCodeListInstance, ShortCodeListCreateOptions, ShortCodeInstance, ShortCodeList, ShortCodeListEachOptions}

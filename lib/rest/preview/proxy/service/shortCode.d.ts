/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Proxy = require('../../Proxy');
import Response = require('../../../../http/response');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';

declare function ShortCodeList(version: Proxy, serviceSid: string): ShortCodeListInstance

interface ShortCodeResource {
  /**
   * The unique SID identifier of the Account.
   */
  account_sid: string;
  /**
   * This is a set of boolean properties that indicate whether a shortcode can receive messages.  Possible capabilities are `SMS` and `MMS` with each having a value of either `true` or `false`.
   */
  capabilities: string;
  /**
   * The ISO 3166-1 alpha-2 code of the country where this shortcode is located
   */
  country_code: string;
  /**
   * The date that this resource was created, given as GMT RFC 2822 format.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated, given as GMT RFC 2822 format.
   */
  date_updated: Date;
  /**
   * The unique SID identifier of the Service.
   */
  service_sid: string;
  /**
   * The short code. e.g., 894546.
   */
  short_code: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The URL of this resource.
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
   * The shortcode Sid that uniquely identifies this resource
   */
  sid: string;
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
   * @param sid - Fetch by unique shortcode Sid
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
   * @param sid - Fetch by unique shortcode Sid
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

declare class ShortCodePage extends Page<Proxy, ShortCodePayload, ShortCodeResource, ShortCodeInstance> {
  constructor(version: Proxy, response: Response<string>, solution: ShortCodeSolution);

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
   * @param sid - Fetch by unique shortcode Sid
   */
  constructor(version: Proxy, payload: ShortCodePayload, serviceSid: string, sid: string);

  private _proxy: ShortCodeContext;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * This is a set of boolean properties that indicate whether a shortcode can receive messages.  Possible capabilities are `SMS` and `MMS` with each having a value of either `true` or `false`.
   */
  capabilities: string;
  /**
   * The ISO 3166-1 alpha-2 code of the country where this shortcode is located
   */
  countryCode: string;
  /**
   * The date that this resource was created, given as GMT RFC 2822 format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated, given as GMT RFC 2822 format.
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
   * The unique SID identifier of the Service.
   */
  serviceSid: string;
  /**
   * The short code. e.g., 894546.
   */
  shortCode: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The URL of this resource.
   */
  url: string;
}

declare class ShortCodeContext {
  constructor(version: Proxy, serviceSid: string, sid: string);

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

export {ShortCodeContext, ShortCodeListPageOptions, ShortCodeListEachOptions, ShortCodeListInstance, ShortCodeListCreateOptions, ShortCodeListOptions, ShortCodeSolution, ShortCodeInstance, ShortCodePayload, ShortCodeResource, ShortCodeList, ShortCodePage}

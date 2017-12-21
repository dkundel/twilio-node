/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';

declare function SigningKeyList(version: V2010, accountSid: string): SigningKeyListInstance

interface SigningKeyResource {
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
   * The sid
   */
  sid: string;
}

interface SigningKeyPayload extends SigningKeyResource, Page.TwilioResponsePayload {
}

interface SigningKeySolution {
  accountSid: string;
}

interface SigningKeyListEachOptions extends ListEachOptions<SigningKeyInstance> {
}

interface SigningKeyListOptions extends ListOptions<SigningKeyInstance> {
}

interface SigningKeyListPageOptions extends PageOptions<SigningKeyPage> {
}

interface SigningKeyListInstance {
  /**
   * Gets context of a single SigningKey resource
   *
   * @param sid - The sid
   */
  (sid: string): SigningKeyContext;
  /**
   * Streams SigningKeyInstance records from the API.
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
  each(opts?: SigningKeyListEachOptions): void;
  /**
   * Streams SigningKeyInstance records from the API.
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
  each(callback: (item: SigningKeyInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single SigningKey resource
   *
   * @param sid - The sid
   */
  get(sid: string): SigningKeyContext;
  /**
   * Retrieve a single target page of SigningKeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<SigningKeyPage>;
  /**
   * Retrieve a single target page of SigningKeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: SigningKeyPage) => any): void;
  /**
   * Lists SigningKeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: SigningKeyListOptions): Promise<SigningKeyInstance[]>;
  /**
   * Lists SigningKeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: SigningKeyListOptions, callback: (error: Error | null, items: SigningKeyInstance[]) => any): void;
  /**
   * Lists SigningKeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: SigningKeyInstance[]) => any): void;
  /**
   * Retrieve a single page of SigningKeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: SigningKeyListPageOptions): Promise<SigningKeyPage>;
  /**
   * Retrieve a single page of SigningKeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: SigningKeyListPageOptions, callback: (error: Error | null, items: SigningKeyPage) => any): void;
  /**
   * Retrieve a single page of SigningKeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: SigningKeyPage) => any): void;
}

interface SigningKeyListFetchOptions {
  /**
   * The friendly_name
   */
  friendlyName?: string;
}

interface SigningKeyListFetchOptions {
  /**
   * The friendly_name
   */
  friendlyName?: string;
}

declare class SigningKeyPage extends Page<V2010, SigningKeyPayload, SigningKeyResource, SigningKeyInstance> {
  constructor(version: V2010, response: Response<string>, solution: SigningKeySolution);

  /**
   * Build an instance of SigningKeyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SigningKeyPayload): SigningKeyInstance;
}

declare class SigningKeyInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param sid - The sid
   */
  constructor(version: V2010, payload: SigningKeyPayload, accountSid: string, sid: string);

  private _proxy: SigningKeyContext;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * fetch a SigningKeyInstance
   *
   * @returns Promise that resolves to processed SigningKeyInstance
   */
  fetch(): Promise<SigningKeyInstance>;
  /**
   * fetch a SigningKeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SigningKeyInstance) => any): void;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * remove a SigningKeyInstance
   *
   * @returns Promise that resolves to processed SigningKeyInstance
   */
  remove(): Promise<SigningKeyInstance>;
  /**
   * remove a SigningKeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SigningKeyInstance) => any): void;
  /**
   * The sid
   */
  sid: string;
  /**
   * update a SigningKeyInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SigningKeyInstance
   */
  update(opts?: SigningKeyListFetchOptions): Promise<SigningKeyInstance>;
  /**
   * update a SigningKeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SigningKeyListFetchOptions, callback: (error: Error | null, items: SigningKeyInstance) => any): void;
  /**
   * update a SigningKeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: SigningKeyInstance) => any): void;
}

declare class SigningKeyContext {
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a SigningKeyInstance
   *
   * @returns Promise that resolves to processed SigningKeyInstance
   */
  fetch(): Promise<SigningKeyInstance>;
  /**
   * fetch a SigningKeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SigningKeyInstance) => any): void;
  /**
   * remove a SigningKeyInstance
   *
   * @returns Promise that resolves to processed SigningKeyInstance
   */
  remove(): Promise<SigningKeyInstance>;
  /**
   * remove a SigningKeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SigningKeyInstance) => any): void;
  /**
   * update a SigningKeyInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SigningKeyInstance
   */
  update(opts?: SigningKeyListFetchOptions): Promise<SigningKeyInstance>;
  /**
   * update a SigningKeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SigningKeyListFetchOptions, callback: (error: Error | null, items: SigningKeyInstance) => any): void;
  /**
   * update a SigningKeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: SigningKeyInstance) => any): void;
}

export {SigningKeyContext, SigningKeyListEachOptions, SigningKeyPayload, SigningKeyPage, SigningKeyListOptions, SigningKeySolution, SigningKeyListPageOptions, SigningKeyListFetchOptions, SigningKeyListInstance, SigningKeyResource, SigningKeyInstance, SigningKeyList}

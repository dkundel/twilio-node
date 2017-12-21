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

declare function KeyList(version: V2010, accountSid: string): KeyListInstance

interface KeyResource {
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

interface KeyPayload extends KeyResource, Page.TwilioResponsePayload {
}

interface KeySolution {
  accountSid: string;
}

interface KeyListEachOptions extends ListEachOptions<KeyInstance> {
}

interface KeyListOptions extends ListOptions<KeyInstance> {
}

interface KeyListPageOptions extends PageOptions<KeyPage> {
}

interface KeyListInstance {
  /**
   * Gets context of a single Key resource
   *
   * @param sid - The sid
   */
  (sid: string): KeyContext;
  /**
   * Streams KeyInstance records from the API.
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
  each(opts?: KeyListEachOptions): void;
  /**
   * Streams KeyInstance records from the API.
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
  each(callback: (item: KeyInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Key resource
   *
   * @param sid - The sid
   */
  get(sid: string): KeyContext;
  /**
   * Retrieve a single target page of KeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<KeyPage>;
  /**
   * Retrieve a single target page of KeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: KeyPage) => any): void;
  /**
   * Lists KeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: KeyListOptions): Promise<KeyInstance[]>;
  /**
   * Lists KeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: KeyListOptions, callback: (error: Error | null, items: KeyInstance[]) => any): void;
  /**
   * Lists KeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: KeyInstance[]) => any): void;
  /**
   * Retrieve a single page of KeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: KeyListPageOptions): Promise<KeyPage>;
  /**
   * Retrieve a single page of KeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: KeyListPageOptions, callback: (error: Error | null, items: KeyPage) => any): void;
  /**
   * Retrieve a single page of KeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: KeyPage) => any): void;
}

interface KeyListFetchOptions {
  /**
   * The friendly_name
   */
  friendlyName?: string;
}

interface KeyListFetchOptions {
  /**
   * The friendly_name
   */
  friendlyName?: string;
}

declare class KeyPage extends Page<V2010, KeyPayload, KeyResource, KeyInstance> {
  constructor(version: V2010, response: Response<string>, solution: KeySolution);

  /**
   * Build an instance of KeyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: KeyPayload): KeyInstance;
}

declare class KeyInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param sid - The sid
   */
  constructor(version: V2010, payload: KeyPayload, accountSid: string, sid: string);

  private _proxy: KeyContext;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * fetch a KeyInstance
   *
   * @returns Promise that resolves to processed KeyInstance
   */
  fetch(): Promise<KeyInstance>;
  /**
   * fetch a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * remove a KeyInstance
   *
   * @returns Promise that resolves to processed KeyInstance
   */
  remove(): Promise<KeyInstance>;
  /**
   * remove a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * The sid
   */
  sid: string;
  /**
   * update a KeyInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed KeyInstance
   */
  update(opts?: KeyListFetchOptions): Promise<KeyInstance>;
  /**
   * update a KeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: KeyListFetchOptions, callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * update a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: KeyInstance) => any): void;
}

declare class KeyContext {
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a KeyInstance
   *
   * @returns Promise that resolves to processed KeyInstance
   */
  fetch(): Promise<KeyInstance>;
  /**
   * fetch a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * remove a KeyInstance
   *
   * @returns Promise that resolves to processed KeyInstance
   */
  remove(): Promise<KeyInstance>;
  /**
   * remove a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * update a KeyInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed KeyInstance
   */
  update(opts?: KeyListFetchOptions): Promise<KeyInstance>;
  /**
   * update a KeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: KeyListFetchOptions, callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * update a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: KeyInstance) => any): void;
}

export {KeyListEachOptions, KeyContext, KeyPage, KeyListOptions, KeyList, KeyPayload, KeyListPageOptions, KeyListInstance, KeyListFetchOptions, KeyResource, KeySolution, KeyInstance}

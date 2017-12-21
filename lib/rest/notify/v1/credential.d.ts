/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';

declare function CredentialList(version: V1): CredentialListInstance

type CredentialPushService = 'gcm'|'apn'|'fcm';

interface CredentialResource {
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
   * The sandbox
   */
  sandbox: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The type
   */
  type: CredentialPushService;
  /**
   * The url
   */
  url: string;
}

interface CredentialPayload extends CredentialResource, Page.TwilioResponsePayload {
}

interface CredentialSolution {
}

interface CredentialListEachOptions extends ListEachOptions<CredentialInstance> {
}

interface CredentialListOptions extends ListOptions<CredentialInstance> {
}

interface CredentialListPageOptions extends PageOptions<CredentialPage> {
}

interface CredentialListCreateOptions {
  /**
   * The api_key
   */
  apiKey?: string;
  /**
   * The certificate
   */
  certificate?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The private_key
   */
  privateKey?: string;
  /**
   * The sandbox
   */
  sandbox?: boolean;
  /**
   * The secret
   */
  secret?: string;
  /**
   * The type
   */
  type: CredentialPushService;
}

interface CredentialListInstance {
  /**
   * Gets context of a single Credential resource
   *
   * @param sid - The sid
   */
  (sid: string): CredentialContext;
  /**
   * create a CredentialInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed CredentialInstance
   */
  create(opts: CredentialListCreateOptions): Promise<CredentialInstance>;
  /**
   * create a CredentialInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CredentialListCreateOptions, callback: (error: Error | null, items: CredentialInstance) => any): void;
  /**
   * Streams CredentialInstance records from the API.
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
  each(opts?: CredentialListEachOptions): void;
  /**
   * Streams CredentialInstance records from the API.
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
  each(callback: (item: CredentialInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Credential resource
   *
   * @param sid - The sid
   */
  get(sid: string): CredentialContext;
  /**
   * Retrieve a single target page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<CredentialPage>;
  /**
   * Retrieve a single target page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: CredentialPage) => any): void;
  /**
   * Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: CredentialListOptions): Promise<CredentialInstance[]>;
  /**
   * Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: CredentialListOptions, callback: (error: Error | null, items: CredentialInstance[]) => any): void;
  /**
   * Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: CredentialInstance[]) => any): void;
  /**
   * Retrieve a single page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: CredentialListPageOptions): Promise<CredentialPage>;
  /**
   * Retrieve a single page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: CredentialListPageOptions, callback: (error: Error | null, items: CredentialPage) => any): void;
  /**
   * Retrieve a single page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: CredentialPage) => any): void;
}

interface CredentialListFetchOptions {
  /**
   * The api_key
   */
  apiKey?: string;
  /**
   * The certificate
   */
  certificate?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The private_key
   */
  privateKey?: string;
  /**
   * The sandbox
   */
  sandbox?: boolean;
  /**
   * The secret
   */
  secret?: string;
}

interface CredentialListFetchOptions {
  /**
   * The api_key
   */
  apiKey?: string;
  /**
   * The certificate
   */
  certificate?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The private_key
   */
  privateKey?: string;
  /**
   * The sandbox
   */
  sandbox?: boolean;
  /**
   * The secret
   */
  secret?: string;
}

declare class CredentialPage extends Page<V1, CredentialPayload, CredentialResource, CredentialInstance> {
  constructor(version: V1, response: Response<string>, solution: CredentialSolution);

  /**
   * Build an instance of CredentialInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CredentialPayload): CredentialInstance;
}

declare class CredentialInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: CredentialPayload, sid: string);

  private _proxy: CredentialContext;
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
   * fetch a CredentialInstance
   *
   * @returns Promise that resolves to processed CredentialInstance
   */
  fetch(): Promise<CredentialInstance>;
  /**
   * fetch a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: CredentialInstance) => any): void;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * remove a CredentialInstance
   *
   * @returns Promise that resolves to processed CredentialInstance
   */
  remove(): Promise<CredentialInstance>;
  /**
   * remove a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: CredentialInstance) => any): void;
  /**
   * The sandbox
   */
  sandbox: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The type
   */
  type: CredentialPushService;
  /**
   * update a CredentialInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed CredentialInstance
   */
  update(opts?: CredentialListFetchOptions): Promise<CredentialInstance>;
  /**
   * update a CredentialInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: CredentialListFetchOptions, callback: (error: Error | null, items: CredentialInstance) => any): void;
  /**
   * update a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: CredentialInstance) => any): void;
  /**
   * The url
   */
  url: string;
}

declare class CredentialContext {
  constructor(version: V1, sid: string);

  /**
   * fetch a CredentialInstance
   *
   * @returns Promise that resolves to processed CredentialInstance
   */
  fetch(): Promise<CredentialInstance>;
  /**
   * fetch a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: CredentialInstance) => any): void;
  /**
   * remove a CredentialInstance
   *
   * @returns Promise that resolves to processed CredentialInstance
   */
  remove(): Promise<CredentialInstance>;
  /**
   * remove a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: CredentialInstance) => any): void;
  /**
   * update a CredentialInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed CredentialInstance
   */
  update(opts?: CredentialListFetchOptions): Promise<CredentialInstance>;
  /**
   * update a CredentialInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: CredentialListFetchOptions, callback: (error: Error | null, items: CredentialInstance) => any): void;
  /**
   * update a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: CredentialInstance) => any): void;
}

export {CredentialListFetchOptions, CredentialInstance, CredentialPushService, CredentialListCreateOptions, CredentialSolution, CredentialListOptions, CredentialPage, CredentialPayload, CredentialList, CredentialResource, CredentialContext, CredentialListPageOptions, CredentialListInstance, CredentialListEachOptions}

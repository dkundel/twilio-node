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

declare function CredentialListList(version: V1, trunkSid: string): CredentialListListInstance

interface CredentialListResource {
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
   * The sid
   */
  sid: string;
  /**
   * The trunk_sid
   */
  trunk_sid: string;
  /**
   * The url
   */
  url: string;
}

interface CredentialListPayload extends CredentialListResource, Page.TwilioResponsePayload {
}

interface CredentialListSolution {
  trunkSid: string;
}

interface CredentialListListCreateOptions {
  /**
   * The credential_list_sid
   */
  credentialListSid: string;
}

interface CredentialListListEachOptions extends ListEachOptions<CredentialListInstance> {
}

interface CredentialListListOptions extends ListOptions<CredentialListInstance> {
}

interface CredentialListListPageOptions extends PageOptions<CredentialListPage> {
}

interface CredentialListListInstance {
  /**
   * Gets context of a single CredentialList resource
   *
   * @param sid - The sid
   */
  (sid: string): CredentialListContext;
  /**
   * create a CredentialListInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed CredentialListInstance
   */
  create(opts: CredentialListListCreateOptions): Promise<CredentialListInstance>;
  /**
   * create a CredentialListInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CredentialListListCreateOptions, callback: (error: Error | null, items: CredentialListInstance) => any): void;
  /**
   * Streams CredentialListInstance records from the API.
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
  each(opts?: CredentialListListEachOptions): void;
  /**
   * Streams CredentialListInstance records from the API.
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
  each(callback: (item: CredentialListInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single CredentialList resource
   *
   * @param sid - The sid
   */
  get(sid: string): CredentialListContext;
  /**
   * Retrieve a single target page of CredentialListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<CredentialListPage>;
  /**
   * Retrieve a single target page of CredentialListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: CredentialListPage) => any): void;
  /**
   * Lists CredentialListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: CredentialListListOptions): Promise<CredentialListInstance[]>;
  /**
   * Lists CredentialListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: CredentialListListOptions, callback: (error: Error | null, items: CredentialListInstance[]) => any): void;
  /**
   * Lists CredentialListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: CredentialListInstance[]) => any): void;
  /**
   * Retrieve a single page of CredentialListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: CredentialListListPageOptions): Promise<CredentialListPage>;
  /**
   * Retrieve a single page of CredentialListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: CredentialListListPageOptions, callback: (error: Error | null, items: CredentialListPage) => any): void;
  /**
   * Retrieve a single page of CredentialListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: CredentialListPage) => any): void;
}

declare class CredentialListPage extends Page<V1, CredentialListPayload, CredentialListResource, CredentialListInstance> {
  constructor(version: V1, response: Response<string>, solution: CredentialListSolution);

  /**
   * Build an instance of CredentialListInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CredentialListPayload): CredentialListInstance;
}

declare class CredentialListInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param trunkSid - The trunk_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: CredentialListPayload, trunkSid: string, sid: string);

  private _proxy: CredentialListContext;
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
   * fetch a CredentialListInstance
   *
   * @returns Promise that resolves to processed CredentialListInstance
   */
  fetch(): Promise<CredentialListInstance>;
  /**
   * fetch a CredentialListInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: CredentialListInstance) => any): void;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * remove a CredentialListInstance
   *
   * @returns Promise that resolves to processed CredentialListInstance
   */
  remove(): Promise<CredentialListInstance>;
  /**
   * remove a CredentialListInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: CredentialListInstance) => any): void;
  /**
   * The sid
   */
  sid: string;
  /**
   * The trunk_sid
   */
  trunkSid: string;
  /**
   * The url
   */
  url: string;
}

declare class CredentialListContext {
  constructor(version: V1, trunkSid: string, sid: string);

  /**
   * fetch a CredentialListInstance
   *
   * @returns Promise that resolves to processed CredentialListInstance
   */
  fetch(): Promise<CredentialListInstance>;
  /**
   * fetch a CredentialListInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: CredentialListInstance) => any): void;
  /**
   * remove a CredentialListInstance
   *
   * @returns Promise that resolves to processed CredentialListInstance
   */
  remove(): Promise<CredentialListInstance>;
  /**
   * remove a CredentialListInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: CredentialListInstance) => any): void;
}

export {CredentialListListCreateOptions, CredentialListListOptions, CredentialListListInstance, CredentialListResource, CredentialListPayload, CredentialListSolution, CredentialListInstance, CredentialListPage, CredentialListListPageOptions, CredentialListContext, CredentialListListEachOptions, CredentialListList}

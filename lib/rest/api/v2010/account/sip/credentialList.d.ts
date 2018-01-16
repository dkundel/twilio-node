/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { CredentialListInstance } from './credentialList/credential';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';

declare function CredentialListList(version: V2010, accountSid: string): CredentialListListInstance

interface CredentialListResource {
  /**
   * The unique id of the Account that responsible for this resource.
   */
  account_sid: string;
  /**
   * The date that this resource was created, given as GMT in RFC 2822 format.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated, given as GMT in RFC 2822 format.
   */
  date_updated: Date;
  /**
   * The friendly_name
   */
  friendly_name: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The subresource_uris
   */
  subresource_uris: string;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`
   */
  uri: string;
}

interface CredentialListPayload extends CredentialListResource, Page.TwilioResponsePayload {
}

interface CredentialListSolution {
  accountSid: string;
}

interface CredentialListListEachOptions extends ListEachOptions<CredentialListInstance> {
}

interface CredentialListListOptions extends ListOptions<CredentialListInstance> {
}

interface CredentialListListPageOptions extends PageOptions<CredentialListPage> {
}

interface CredentialListListCreateOptions {
  /**
   * The friendly_name
   */
  friendlyName: string;
}

interface CredentialListListInstance {
  /**
   * Gets context of a single CredentialList resource
   *
   * @param sid - Fetch by unique credential Sid
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
   * @param sid - Fetch by unique credential Sid
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

interface CredentialListListFetchOptions {
  /**
   * The friendly_name
   */
  friendlyName: string;
}

interface CredentialListListFetchOptions {
  /**
   * The friendly_name
   */
  friendlyName: string;
}

declare class CredentialListPage extends Page<V2010, CredentialListPayload, CredentialListResource, CredentialListInstance> {
  constructor(version: V2010, response: Response<string>, solution: CredentialListSolution);

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
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique credential Sid
   */
  constructor(version: V2010, payload: CredentialListPayload, accountSid: string, sid: string);

  private _proxy: CredentialListContext;
  /**
   * The unique id of the Account that responsible for this resource.
   */
  accountSid: string;
  credentials(): CredentialListInstance;
  /**
   * The date that this resource was created, given as GMT in RFC 2822 format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated, given as GMT in RFC 2822 format.
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
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The subresource_uris
   */
  subresourceUris: string;
  /**
   * update a CredentialListInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed CredentialListInstance
   */
  update(opts: CredentialListListFetchOptions): Promise<CredentialListInstance>;
  /**
   * update a CredentialListInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: CredentialListListFetchOptions, callback: (error: Error | null, items: CredentialListInstance) => any): void;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`
   */
  uri: string;
}

declare class CredentialListContext {
  constructor(version: V2010, accountSid: string, sid: string);

  credentials: CredentialListInstance;
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
  /**
   * update a CredentialListInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed CredentialListInstance
   */
  update(opts: CredentialListListFetchOptions): Promise<CredentialListInstance>;
  /**
   * update a CredentialListInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: CredentialListListFetchOptions, callback: (error: Error | null, items: CredentialListInstance) => any): void;
}

export {CredentialListListCreateOptions, CredentialListListOptions, CredentialListListInstance, CredentialListResource, CredentialListPayload, CredentialListListFetchOptions, CredentialListSolution, CredentialListInstance, CredentialListPage, CredentialListListPageOptions, CredentialListContext, CredentialListListEachOptions, CredentialListList}

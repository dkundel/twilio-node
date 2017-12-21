/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';

declare function SyncListPermissionList(version: V1, serviceSid: string, listSid: string): SyncListPermissionListInstance

interface SyncListPermissionResource {
  /**
   * The unique SID identifier of the Twilio Account.
   */
  account_sid: string;
  /**
   * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
   */
  identity: string;
  /**
   * The unique SID identifier of the Sync List to which the Permission applies.
   */
  list_sid: string;
  /**
   * Boolean flag specifying whether the identity can delete the Sync List.
   */
  manage: boolean;
  /**
   * Boolean flag specifying whether the identity can read the Sync List and its Items.
   */
  read: boolean;
  /**
   * The unique SID identifier of the Sync Service Instance.
   */
  service_sid: string;
  /**
   * Contains an absolute URL for this Sync List Permission.
   */
  url: string;
  /**
   * Boolean flag specifying whether the identity can create, update and delete Items of the Sync List.
   */
  write: boolean;
}

interface SyncListPermissionPayload extends SyncListPermissionResource, Page.TwilioResponsePayload {
}

interface SyncListPermissionSolution {
  listSid: string;
  serviceSid: string;
}

interface SyncListPermissionListEachOptions extends ListEachOptions<SyncListPermissionInstance> {
}

interface SyncListPermissionListOptions extends ListOptions<SyncListPermissionInstance> {
}

interface SyncListPermissionListPageOptions extends PageOptions<SyncListPermissionPage> {
}

interface SyncListPermissionListInstance {
  /**
   * Gets context of a single SyncListPermission resource
   *
   * @param identity - Identity of the user to whom the Sync List Permission applies.
   */
  (identity: string): SyncListPermissionContext;
  /**
   * Streams SyncListPermissionInstance records from the API.
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
  each(opts?: SyncListPermissionListEachOptions): void;
  /**
   * Streams SyncListPermissionInstance records from the API.
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
  each(callback: (item: SyncListPermissionInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single SyncListPermission resource
   *
   * @param identity - Identity of the user to whom the Sync List Permission applies.
   */
  get(identity: string): SyncListPermissionContext;
  /**
   * Retrieve a single target page of SyncListPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<SyncListPermissionPage>;
  /**
   * Retrieve a single target page of SyncListPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: SyncListPermissionPage) => any): void;
  /**
   * Lists SyncListPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: SyncListPermissionListOptions): Promise<SyncListPermissionInstance[]>;
  /**
   * Lists SyncListPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: SyncListPermissionListOptions, callback: (error: Error | null, items: SyncListPermissionInstance[]) => any): void;
  /**
   * Lists SyncListPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: SyncListPermissionInstance[]) => any): void;
  /**
   * Retrieve a single page of SyncListPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: SyncListPermissionListPageOptions): Promise<SyncListPermissionPage>;
  /**
   * Retrieve a single page of SyncListPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: SyncListPermissionListPageOptions, callback: (error: Error | null, items: SyncListPermissionPage) => any): void;
  /**
   * Retrieve a single page of SyncListPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: SyncListPermissionPage) => any): void;
}

interface SyncListPermissionListFetchOptions {
  /**
   * Boolean flag specifying whether the identity can delete the Sync List.
   */
  manage: boolean;
  /**
   * Boolean flag specifying whether the identity can read the Sync List.
   */
  read: boolean;
  /**
   * Boolean flag specifying whether the identity can create, update and delete Items of the Sync List.
   */
  write: boolean;
}

interface SyncListPermissionListFetchOptions {
  /**
   * Boolean flag specifying whether the identity can delete the Sync List.
   */
  manage: boolean;
  /**
   * Boolean flag specifying whether the identity can read the Sync List.
   */
  read: boolean;
  /**
   * Boolean flag specifying whether the identity can create, update and delete Items of the Sync List.
   */
  write: boolean;
}

declare class SyncListPermissionPage extends Page<V1, SyncListPermissionPayload, SyncListPermissionResource, SyncListPermissionInstance> {
  constructor(version: V1, response: Response<string>, solution: SyncListPermissionSolution);

  /**
   * Build an instance of SyncListPermissionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncListPermissionPayload): SyncListPermissionInstance;
}

declare class SyncListPermissionInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param listSid - Sync List SID or unique name.
   * @param identity - Identity of the user to whom the Sync List Permission applies.
   */
  constructor(version: V1, payload: SyncListPermissionPayload, serviceSid: string, listSid: string, identity: string);

  private _proxy: SyncListPermissionContext;
  /**
   * The unique SID identifier of the Twilio Account.
   */
  accountSid: string;
  /**
   * fetch a SyncListPermissionInstance
   *
   * @returns Promise that resolves to processed SyncListPermissionInstance
   */
  fetch(): Promise<SyncListPermissionInstance>;
  /**
   * fetch a SyncListPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SyncListPermissionInstance) => any): void;
  /**
   * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
   */
  identity: string;
  /**
   * The unique SID identifier of the Sync List to which the Permission applies.
   */
  listSid: string;
  /**
   * Boolean flag specifying whether the identity can delete the Sync List.
   */
  manage: boolean;
  /**
   * Boolean flag specifying whether the identity can read the Sync List and its Items.
   */
  read: boolean;
  /**
   * remove a SyncListPermissionInstance
   *
   * @returns Promise that resolves to processed SyncListPermissionInstance
   */
  remove(): Promise<SyncListPermissionInstance>;
  /**
   * remove a SyncListPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SyncListPermissionInstance) => any): void;
  /**
   * The unique SID identifier of the Sync Service Instance.
   */
  serviceSid: string;
  /**
   * update a SyncListPermissionInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SyncListPermissionInstance
   */
  update(opts: SyncListPermissionListFetchOptions): Promise<SyncListPermissionInstance>;
  /**
   * update a SyncListPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncListPermissionListFetchOptions, callback: (error: Error | null, items: SyncListPermissionInstance) => any): void;
  /**
   * Contains an absolute URL for this Sync List Permission.
   */
  url: string;
  /**
   * Boolean flag specifying whether the identity can create, update and delete Items of the Sync List.
   */
  write: boolean;
}

declare class SyncListPermissionContext {
  constructor(version: V1, serviceSid: string, listSid: string, identity: string);

  /**
   * fetch a SyncListPermissionInstance
   *
   * @returns Promise that resolves to processed SyncListPermissionInstance
   */
  fetch(): Promise<SyncListPermissionInstance>;
  /**
   * fetch a SyncListPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SyncListPermissionInstance) => any): void;
  /**
   * remove a SyncListPermissionInstance
   *
   * @returns Promise that resolves to processed SyncListPermissionInstance
   */
  remove(): Promise<SyncListPermissionInstance>;
  /**
   * remove a SyncListPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SyncListPermissionInstance) => any): void;
  /**
   * update a SyncListPermissionInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SyncListPermissionInstance
   */
  update(opts: SyncListPermissionListFetchOptions): Promise<SyncListPermissionInstance>;
  /**
   * update a SyncListPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncListPermissionListFetchOptions, callback: (error: Error | null, items: SyncListPermissionInstance) => any): void;
}

export {SyncListPermissionListFetchOptions, SyncListPermissionListOptions, SyncListPermissionList, SyncListPermissionListInstance, SyncListPermissionPage, SyncListPermissionListPageOptions, SyncListPermissionSolution, SyncListPermissionPayload, SyncListPermissionResource, SyncListPermissionInstance, SyncListPermissionListEachOptions, SyncListPermissionContext}

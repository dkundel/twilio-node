/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import Sync = require('../../../Sync');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';

declare function SyncMapPermissionList(version: Sync, serviceSid: string, mapSid: string): SyncMapPermissionListInstance

interface SyncMapPermissionResource {
  /**
   * The unique SID identifier of the Twilio Account.
   */
  account_sid: string;
  /**
   * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
   */
  identity: string;
  /**
   * Boolean flag specifying whether the identity can delete the Sync Map.
   */
  manage: boolean;
  /**
   * The unique SID identifier of the Sync Map to which the Permission applies.
   */
  map_sid: string;
  /**
   * Boolean flag specifying whether the identity can read the Sync Map and its Items.
   */
  read: boolean;
  /**
   * The unique SID identifier of the Sync Service Instance.
   */
  service_sid: string;
  /**
   * Contains an absolute URL for this Sync Map Permission.
   */
  url: string;
  /**
   * Boolean flag specifying whether the identity can create, update and delete Items of the Sync Map.
   */
  write: boolean;
}

interface SyncMapPermissionPayload extends SyncMapPermissionResource, Page.TwilioResponsePayload {
}

interface SyncMapPermissionSolution {
  mapSid: string;
  serviceSid: string;
}

interface SyncMapPermissionListEachOptions extends ListEachOptions<SyncMapPermissionInstance> {
}

interface SyncMapPermissionListOptions extends ListOptions<SyncMapPermissionInstance> {
}

interface SyncMapPermissionListPageOptions extends PageOptions<SyncMapPermissionPage> {
}

interface SyncMapPermissionListInstance {
  /**
   * Gets context of a single SyncMapPermission resource
   *
   * @param identity - Identity of the user to whom the Sync Map Permission applies.
   */
  (identity: string): SyncMapPermissionContext;
  /**
   * Streams SyncMapPermissionInstance records from the API.
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
  each(opts?: SyncMapPermissionListEachOptions): void;
  /**
   * Streams SyncMapPermissionInstance records from the API.
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
  each(callback: (item: SyncMapPermissionInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single SyncMapPermission resource
   *
   * @param identity - Identity of the user to whom the Sync Map Permission applies.
   */
  get(identity: string): SyncMapPermissionContext;
  /**
   * Retrieve a single target page of SyncMapPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<SyncMapPermissionPage>;
  /**
   * Retrieve a single target page of SyncMapPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: SyncMapPermissionPage) => any): void;
  /**
   * Lists SyncMapPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: SyncMapPermissionListOptions): Promise<SyncMapPermissionInstance[]>;
  /**
   * Lists SyncMapPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: SyncMapPermissionListOptions, callback: (error: Error | null, items: SyncMapPermissionInstance[]) => any): void;
  /**
   * Lists SyncMapPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: SyncMapPermissionInstance[]) => any): void;
  /**
   * Retrieve a single page of SyncMapPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: SyncMapPermissionListPageOptions): Promise<SyncMapPermissionPage>;
  /**
   * Retrieve a single page of SyncMapPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: SyncMapPermissionListPageOptions, callback: (error: Error | null, items: SyncMapPermissionPage) => any): void;
  /**
   * Retrieve a single page of SyncMapPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: SyncMapPermissionPage) => any): void;
}

interface SyncMapPermissionListFetchOptions {
  /**
   * Boolean flag specifying whether the identity can delete the Sync Map.
   */
  manage: boolean;
  /**
   * Boolean flag specifying whether the identity can read the Sync Map.
   */
  read: boolean;
  /**
   * Boolean flag specifying whether the identity can create, update and delete Items of the Sync Map.
   */
  write: boolean;
}

interface SyncMapPermissionListFetchOptions {
  /**
   * Boolean flag specifying whether the identity can delete the Sync Map.
   */
  manage: boolean;
  /**
   * Boolean flag specifying whether the identity can read the Sync Map.
   */
  read: boolean;
  /**
   * Boolean flag specifying whether the identity can create, update and delete Items of the Sync Map.
   */
  write: boolean;
}

declare class SyncMapPermissionPage extends Page<Sync, SyncMapPermissionPayload, SyncMapPermissionResource, SyncMapPermissionInstance> {
  constructor(version: Sync, response: Response<string>, solution: SyncMapPermissionSolution);

  /**
   * Build an instance of SyncMapPermissionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncMapPermissionPayload): SyncMapPermissionInstance;
}

declare class SyncMapPermissionInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param mapSid - Sync Map SID or unique name.
   * @param identity - Identity of the user to whom the Sync Map Permission applies.
   */
  constructor(version: Sync, payload: SyncMapPermissionPayload, serviceSid: string, mapSid: string, identity: string);

  private _proxy: SyncMapPermissionContext;
  /**
   * The unique SID identifier of the Twilio Account.
   */
  accountSid: string;
  /**
   * fetch a SyncMapPermissionInstance
   *
   * @returns Promise that resolves to processed SyncMapPermissionInstance
   */
  fetch(): Promise<SyncMapPermissionInstance>;
  /**
   * fetch a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SyncMapPermissionInstance) => any): void;
  /**
   * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
   */
  identity: string;
  /**
   * Boolean flag specifying whether the identity can delete the Sync Map.
   */
  manage: boolean;
  /**
   * The unique SID identifier of the Sync Map to which the Permission applies.
   */
  mapSid: string;
  /**
   * Boolean flag specifying whether the identity can read the Sync Map and its Items.
   */
  read: boolean;
  /**
   * remove a SyncMapPermissionInstance
   *
   * @returns Promise that resolves to processed SyncMapPermissionInstance
   */
  remove(): Promise<SyncMapPermissionInstance>;
  /**
   * remove a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SyncMapPermissionInstance) => any): void;
  /**
   * The unique SID identifier of the Sync Service Instance.
   */
  serviceSid: string;
  /**
   * update a SyncMapPermissionInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SyncMapPermissionInstance
   */
  update(opts: SyncMapPermissionListFetchOptions): Promise<SyncMapPermissionInstance>;
  /**
   * update a SyncMapPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncMapPermissionListFetchOptions, callback: (error: Error | null, items: SyncMapPermissionInstance) => any): void;
  /**
   * Contains an absolute URL for this Sync Map Permission.
   */
  url: string;
  /**
   * Boolean flag specifying whether the identity can create, update and delete Items of the Sync Map.
   */
  write: boolean;
}

declare class SyncMapPermissionContext {
  constructor(version: Sync, serviceSid: string, mapSid: string, identity: string);

  /**
   * fetch a SyncMapPermissionInstance
   *
   * @returns Promise that resolves to processed SyncMapPermissionInstance
   */
  fetch(): Promise<SyncMapPermissionInstance>;
  /**
   * fetch a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SyncMapPermissionInstance) => any): void;
  /**
   * remove a SyncMapPermissionInstance
   *
   * @returns Promise that resolves to processed SyncMapPermissionInstance
   */
  remove(): Promise<SyncMapPermissionInstance>;
  /**
   * remove a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SyncMapPermissionInstance) => any): void;
  /**
   * update a SyncMapPermissionInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SyncMapPermissionInstance
   */
  update(opts: SyncMapPermissionListFetchOptions): Promise<SyncMapPermissionInstance>;
  /**
   * update a SyncMapPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncMapPermissionListFetchOptions, callback: (error: Error | null, items: SyncMapPermissionInstance) => any): void;
}

export { SyncMapPermissionContext, SyncMapPermissionInstance, SyncMapPermissionList, SyncMapPermissionListEachOptions, SyncMapPermissionListFetchOptions, SyncMapPermissionListInstance, SyncMapPermissionListOptions, SyncMapPermissionListPageOptions, SyncMapPermissionPage, SyncMapPermissionPayload, SyncMapPermissionResource, SyncMapPermissionSolution }

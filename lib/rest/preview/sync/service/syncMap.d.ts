/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import Sync = require('../../Sync');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SyncMapItemListInstance } from './syncMap/syncMapItem';
import { SyncMapPermissionListInstance } from './syncMap/syncMapPermission';

declare function SyncMapList(version: Sync, serviceSid: string): SyncMapListInstance

interface SyncMapResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The created_by
   */
  created_by: string;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The links
   */
  links: string;
  /**
   * The revision
   */
  revision: string;
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

interface SyncMapPayload extends SyncMapResource, Page.TwilioResponsePayload {
}

interface SyncMapSolution {
  serviceSid: string;
}

interface SyncMapListCreateOptions {
  /**
   * The unique_name
   */
  uniqueName?: string;
}

interface SyncMapListEachOptions extends ListEachOptions<SyncMapInstance> {
}

interface SyncMapListOptions extends ListOptions<SyncMapInstance> {
}

interface SyncMapListPageOptions extends PageOptions<SyncMapPage> {
}

interface SyncMapListInstance {
  /**
   * Gets context of a single SyncMap resource
   *
   * @param sid - The sid
   */
  (sid: string): SyncMapContext;
  /**
   * create a SyncMapInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SyncMapInstance
   */
  create(opts?: SyncMapListCreateOptions): Promise<SyncMapInstance>;
  /**
   * create a SyncMapInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: SyncMapListCreateOptions, callback: (error: Error | null, items: SyncMapInstance) => any): void;
  /**
   * create a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback: (error: Error | null, items: SyncMapInstance) => any): void;
  /**
   * Streams SyncMapInstance records from the API.
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
  each(opts?: SyncMapListEachOptions): void;
  /**
   * Streams SyncMapInstance records from the API.
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
  each(callback: (item: SyncMapInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single SyncMap resource
   *
   * @param sid - The sid
   */
  get(sid: string): SyncMapContext;
  /**
   * Retrieve a single target page of SyncMapInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<SyncMapPage>;
  /**
   * Retrieve a single target page of SyncMapInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: SyncMapPage) => any): void;
  /**
   * Lists SyncMapInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: SyncMapListOptions): Promise<SyncMapInstance[]>;
  /**
   * Lists SyncMapInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: SyncMapListOptions, callback: (error: Error | null, items: SyncMapInstance[]) => any): void;
  /**
   * Lists SyncMapInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: SyncMapInstance[]) => any): void;
  /**
   * Retrieve a single page of SyncMapInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: SyncMapListPageOptions): Promise<SyncMapPage>;
  /**
   * Retrieve a single page of SyncMapInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: SyncMapListPageOptions, callback: (error: Error | null, items: SyncMapPage) => any): void;
  /**
   * Retrieve a single page of SyncMapInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: SyncMapPage) => any): void;
}

declare class SyncMapPage extends Page<Sync, SyncMapPayload, SyncMapResource, SyncMapInstance> {
  constructor(version: Sync, response: Response<string>, solution: SyncMapSolution);

  /**
   * Build an instance of SyncMapInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncMapPayload): SyncMapInstance;
}

declare class SyncMapInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Sync, payload: SyncMapPayload, serviceSid: string, sid: string);

  private _proxy: SyncMapContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The created_by
   */
  createdBy: string;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * fetch a SyncMapInstance
   *
   * @returns Promise that resolves to processed SyncMapInstance
   */
  fetch(): Promise<SyncMapInstance>;
  /**
   * fetch a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SyncMapInstance) => any): void;
  /**
   * The links
   */
  links: string;
  /**
   * remove a SyncMapInstance
   *
   * @returns Promise that resolves to processed SyncMapInstance
   */
  remove(): Promise<SyncMapInstance>;
  /**
   * remove a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SyncMapInstance) => any): void;
  /**
   * The revision
   */
  revision: string;
  /**
   * The service_sid
   */
  serviceSid: string;
  /**
   * The sid
   */
  sid: string;
  syncMapItems(): SyncMapItemListInstance;
  syncMapPermissions(): SyncMapPermissionListInstance;
  /**
   * The unique_name
   */
  uniqueName: string;
  /**
   * The url
   */
  url: string;
}

declare class SyncMapContext {
  constructor(version: Sync, serviceSid: string, sid: string);

  /**
   * fetch a SyncMapInstance
   *
   * @returns Promise that resolves to processed SyncMapInstance
   */
  fetch(): Promise<SyncMapInstance>;
  /**
   * fetch a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SyncMapInstance) => any): void;
  /**
   * remove a SyncMapInstance
   *
   * @returns Promise that resolves to processed SyncMapInstance
   */
  remove(): Promise<SyncMapInstance>;
  /**
   * remove a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SyncMapInstance) => any): void;
  syncMapItems: SyncMapItemListInstance;
  syncMapPermissions: SyncMapPermissionListInstance;
}

export {SyncMapListInstance, SyncMapList, SyncMapListCreateOptions, SyncMapPage, SyncMapListOptions, SyncMapListPageOptions, SyncMapPayload, SyncMapSolution, SyncMapInstance, SyncMapResource, SyncMapListEachOptions, SyncMapContext}

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

declare function SyncMapItemList(version: V1, serviceSid: string, mapSid: string): SyncMapItemListInstance

type SyncMapItemQueryResultOrder = 'asc'|'desc';

type SyncMapItemQueryFromBoundType = 'inclusive'|'exclusive';

interface SyncMapItemResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The created_by
   */
  created_by: string;
  /**
   * The data
   */
  data: string;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_expires
   */
  date_expires: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The key
   */
  key: string;
  /**
   * The map_sid
   */
  map_sid: string;
  /**
   * The revision
   */
  revision: string;
  /**
   * The service_sid
   */
  service_sid: string;
  /**
   * The url
   */
  url: string;
}

interface SyncMapItemPayload extends SyncMapItemResource, Page.TwilioResponsePayload {
}

interface SyncMapItemSolution {
  mapSid: string;
  serviceSid: string;
}

interface SyncMapItemListCreateOptions {
  /**
   * The data
   */
  data: string;
  /**
   * The key
   */
  key: string;
  /**
   * The ttl
   */
  ttl?: number;
}

interface SyncMapItemListEachOptions extends ListEachOptions<SyncMapItemInstance> {
  /**
   * The bounds
   */
  bounds?: SyncMapItemQueryFromBoundType;
  /**
   * The from
   */
  from?: string;
  /**
   * The order
   */
  order?: SyncMapItemQueryResultOrder;
}

interface SyncMapItemListOptions extends ListOptions<SyncMapItemInstance> {
  /**
   * The bounds
   */
  bounds?: SyncMapItemQueryFromBoundType;
  /**
   * The from
   */
  from?: string;
  /**
   * The order
   */
  order?: SyncMapItemQueryResultOrder;
}

interface SyncMapItemListPageOptions extends PageOptions<SyncMapItemPage> {
  /**
   * The bounds
   */
  bounds?: SyncMapItemQueryFromBoundType;
  /**
   * The from
   */
  from?: string;
  /**
   * The order
   */
  order?: SyncMapItemQueryResultOrder;
}

interface SyncMapItemListInstance {
  /**
   * Gets context of a single SyncMapItem resource
   *
   * @param key - The key
   */
  (key: string): SyncMapItemContext;
  /**
   * create a SyncMapItemInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SyncMapItemInstance
   */
  create(opts: SyncMapItemListCreateOptions): Promise<SyncMapItemInstance>;
  /**
   * create a SyncMapItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: SyncMapItemListCreateOptions, callback: (error: Error | null, items: SyncMapItemInstance) => any): void;
  /**
   * Streams SyncMapItemInstance records from the API.
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
  each(opts?: SyncMapItemListEachOptions): void;
  /**
   * Streams SyncMapItemInstance records from the API.
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
  each(callback: (item: SyncMapItemInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single SyncMapItem resource
   *
   * @param key - The key
   */
  get(key: string): SyncMapItemContext;
  /**
   * Retrieve a single target page of SyncMapItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<SyncMapItemPage>;
  /**
   * Retrieve a single target page of SyncMapItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: SyncMapItemPage) => any): void;
  /**
   * Lists SyncMapItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: SyncMapItemListOptions): Promise<SyncMapItemInstance[]>;
  /**
   * Lists SyncMapItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: SyncMapItemListOptions, callback: (error: Error | null, items: SyncMapItemInstance[]) => any): void;
  /**
   * Lists SyncMapItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: SyncMapItemInstance[]) => any): void;
  /**
   * Retrieve a single page of SyncMapItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: SyncMapItemListPageOptions): Promise<SyncMapItemPage>;
  /**
   * Retrieve a single page of SyncMapItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: SyncMapItemListPageOptions, callback: (error: Error | null, items: SyncMapItemPage) => any): void;
  /**
   * Retrieve a single page of SyncMapItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: SyncMapItemPage) => any): void;
}

interface SyncMapItemListFetchOptions {
  /**
   * The data
   */
  data?: string;
  /**
   * The ttl
   */
  ttl?: number;
}

interface SyncMapItemListFetchOptions {
  /**
   * The data
   */
  data?: string;
  /**
   * The ttl
   */
  ttl?: number;
}

declare class SyncMapItemPage extends Page<V1, SyncMapItemPayload, SyncMapItemResource, SyncMapItemInstance> {
  constructor(version: V1, response: Response<string>, solution: SyncMapItemSolution);

  /**
   * Build an instance of SyncMapItemInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncMapItemPayload): SyncMapItemInstance;
}

declare class SyncMapItemInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param mapSid - The map_sid
   * @param key - The key
   */
  constructor(version: V1, payload: SyncMapItemPayload, serviceSid: string, mapSid: string, key: string);

  private _proxy: SyncMapItemContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The created_by
   */
  createdBy: string;
  /**
   * The data
   */
  data: string;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_expires
   */
  dateExpires: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * fetch a SyncMapItemInstance
   *
   * @returns Promise that resolves to processed SyncMapItemInstance
   */
  fetch(): Promise<SyncMapItemInstance>;
  /**
   * fetch a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SyncMapItemInstance) => any): void;
  /**
   * The key
   */
  key: string;
  /**
   * The map_sid
   */
  mapSid: string;
  /**
   * remove a SyncMapItemInstance
   *
   * @returns Promise that resolves to processed SyncMapItemInstance
   */
  remove(): Promise<SyncMapItemInstance>;
  /**
   * remove a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SyncMapItemInstance) => any): void;
  /**
   * The revision
   */
  revision: string;
  /**
   * The service_sid
   */
  serviceSid: string;
  /**
   * update a SyncMapItemInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SyncMapItemInstance
   */
  update(opts?: SyncMapItemListFetchOptions): Promise<SyncMapItemInstance>;
  /**
   * update a SyncMapItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncMapItemListFetchOptions, callback: (error: Error | null, items: SyncMapItemInstance) => any): void;
  /**
   * update a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: SyncMapItemInstance) => any): void;
  /**
   * The url
   */
  url: string;
}

declare class SyncMapItemContext {
  constructor(version: V1, serviceSid: string, mapSid: string, key: string);

  /**
   * fetch a SyncMapItemInstance
   *
   * @returns Promise that resolves to processed SyncMapItemInstance
   */
  fetch(): Promise<SyncMapItemInstance>;
  /**
   * fetch a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SyncMapItemInstance) => any): void;
  /**
   * remove a SyncMapItemInstance
   *
   * @returns Promise that resolves to processed SyncMapItemInstance
   */
  remove(): Promise<SyncMapItemInstance>;
  /**
   * remove a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SyncMapItemInstance) => any): void;
  /**
   * update a SyncMapItemInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SyncMapItemInstance
   */
  update(opts?: SyncMapItemListFetchOptions): Promise<SyncMapItemInstance>;
  /**
   * update a SyncMapItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncMapItemListFetchOptions, callback: (error: Error | null, items: SyncMapItemInstance) => any): void;
  /**
   * update a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: SyncMapItemInstance) => any): void;
}

export {SyncMapItemListEachOptions, SyncMapItemListInstance, SyncMapItemQueryFromBoundType, SyncMapItemPage, SyncMapItemListPageOptions, SyncMapItemList, SyncMapItemPayload, SyncMapItemSolution, SyncMapItemListOptions, SyncMapItemListFetchOptions, SyncMapItemResource, SyncMapItemQueryResultOrder, SyncMapItemInstance, SyncMapItemListCreateOptions, SyncMapItemContext}
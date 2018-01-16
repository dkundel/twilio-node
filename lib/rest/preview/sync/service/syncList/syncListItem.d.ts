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

declare function SyncListItemList(version: Sync, serviceSid: string, listSid: string): SyncListItemListInstance

type SyncListItemQueryResultOrder = 'asc'|'desc';

type SyncListItemQueryFromBoundType = 'inclusive'|'exclusive';

interface SyncListItemResource {
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
   * The date_updated
   */
  date_updated: Date;
  /**
   * The index
   */
  index: number;
  /**
   * The list_sid
   */
  list_sid: string;
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

interface SyncListItemPayload extends SyncListItemResource, Page.TwilioResponsePayload {
}

interface SyncListItemSolution {
  listSid: string;
  serviceSid: string;
}

interface SyncListItemListCreateOptions {
  /**
   * The data
   */
  data: string;
}

interface SyncListItemListEachOptions extends ListEachOptions<SyncListItemInstance> {
  /**
   * The bounds
   */
  bounds?: SyncListItemQueryFromBoundType;
  /**
   * The from
   */
  from?: string;
  /**
   * The order
   */
  order?: SyncListItemQueryResultOrder;
}

interface SyncListItemListOptions extends ListOptions<SyncListItemInstance> {
  /**
   * The bounds
   */
  bounds?: SyncListItemQueryFromBoundType;
  /**
   * The from
   */
  from?: string;
  /**
   * The order
   */
  order?: SyncListItemQueryResultOrder;
}

interface SyncListItemListPageOptions extends PageOptions<SyncListItemPage> {
  /**
   * The bounds
   */
  bounds?: SyncListItemQueryFromBoundType;
  /**
   * The from
   */
  from?: string;
  /**
   * The order
   */
  order?: SyncListItemQueryResultOrder;
}

interface SyncListItemListInstance {
  /**
   * Gets context of a single SyncListItem resource
   *
   * @param index - The index
   */
  (index: number): SyncListItemContext;
  /**
   * create a SyncListItemInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SyncListItemInstance
   */
  create(opts: SyncListItemListCreateOptions): Promise<SyncListItemInstance>;
  /**
   * create a SyncListItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: SyncListItemListCreateOptions, callback: (error: Error | null, items: SyncListItemInstance) => any): void;
  /**
   * Streams SyncListItemInstance records from the API.
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
  each(opts?: SyncListItemListEachOptions): void;
  /**
   * Streams SyncListItemInstance records from the API.
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
  each(callback: (item: SyncListItemInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single SyncListItem resource
   *
   * @param index - The index
   */
  get(index: number): SyncListItemContext;
  /**
   * Retrieve a single target page of SyncListItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<SyncListItemPage>;
  /**
   * Retrieve a single target page of SyncListItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: SyncListItemPage) => any): void;
  /**
   * Lists SyncListItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: SyncListItemListOptions): Promise<SyncListItemInstance[]>;
  /**
   * Lists SyncListItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: SyncListItemListOptions, callback: (error: Error | null, items: SyncListItemInstance[]) => any): void;
  /**
   * Lists SyncListItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: SyncListItemInstance[]) => any): void;
  /**
   * Retrieve a single page of SyncListItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: SyncListItemListPageOptions): Promise<SyncListItemPage>;
  /**
   * Retrieve a single page of SyncListItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: SyncListItemListPageOptions, callback: (error: Error | null, items: SyncListItemPage) => any): void;
  /**
   * Retrieve a single page of SyncListItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: SyncListItemPage) => any): void;
}

interface SyncListItemListFetchOptions {
  /**
   * The data
   */
  data: string;
}

interface SyncListItemListFetchOptions {
  /**
   * The data
   */
  data: string;
}

declare class SyncListItemPage extends Page<Sync, SyncListItemPayload, SyncListItemResource, SyncListItemInstance> {
  constructor(version: Sync, response: Response<string>, solution: SyncListItemSolution);

  /**
   * Build an instance of SyncListItemInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncListItemPayload): SyncListItemInstance;
}

declare class SyncListItemInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param listSid - The list_sid
   * @param index - The index
   */
  constructor(version: Sync, payload: SyncListItemPayload, serviceSid: string, listSid: string, index: number);

  private _proxy: SyncListItemContext;
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
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * fetch a SyncListItemInstance
   *
   * @returns Promise that resolves to processed SyncListItemInstance
   */
  fetch(): Promise<SyncListItemInstance>;
  /**
   * fetch a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SyncListItemInstance) => any): void;
  /**
   * The index
   */
  index: number;
  /**
   * The list_sid
   */
  listSid: string;
  /**
   * remove a SyncListItemInstance
   *
   * @returns Promise that resolves to processed SyncListItemInstance
   */
  remove(): Promise<SyncListItemInstance>;
  /**
   * remove a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SyncListItemInstance) => any): void;
  /**
   * The revision
   */
  revision: string;
  /**
   * The service_sid
   */
  serviceSid: string;
  /**
   * update a SyncListItemInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SyncListItemInstance
   */
  update(opts: SyncListItemListFetchOptions): Promise<SyncListItemInstance>;
  /**
   * update a SyncListItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncListItemListFetchOptions, callback: (error: Error | null, items: SyncListItemInstance) => any): void;
  /**
   * The url
   */
  url: string;
}

declare class SyncListItemContext {
  constructor(version: Sync, serviceSid: string, listSid: string, index: number);

  /**
   * fetch a SyncListItemInstance
   *
   * @returns Promise that resolves to processed SyncListItemInstance
   */
  fetch(): Promise<SyncListItemInstance>;
  /**
   * fetch a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SyncListItemInstance) => any): void;
  /**
   * remove a SyncListItemInstance
   *
   * @returns Promise that resolves to processed SyncListItemInstance
   */
  remove(): Promise<SyncListItemInstance>;
  /**
   * remove a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SyncListItemInstance) => any): void;
  /**
   * update a SyncListItemInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SyncListItemInstance
   */
  update(opts: SyncListItemListFetchOptions): Promise<SyncListItemInstance>;
  /**
   * update a SyncListItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncListItemListFetchOptions, callback: (error: Error | null, items: SyncListItemInstance) => any): void;
}

export { SyncListItemContext, SyncListItemInstance, SyncListItemList, SyncListItemListCreateOptions, SyncListItemListEachOptions, SyncListItemListFetchOptions, SyncListItemListInstance, SyncListItemListOptions, SyncListItemListPageOptions, SyncListItemPage, SyncListItemPayload, SyncListItemQueryFromBoundType, SyncListItemQueryResultOrder, SyncListItemResource, SyncListItemSolution }

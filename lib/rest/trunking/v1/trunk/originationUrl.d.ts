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

declare function OriginationUrlList(version: V1, trunkSid: string): OriginationUrlListInstance

interface OriginationUrlResource {
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
   * The enabled
   */
  enabled: boolean;
  /**
   * The friendly_name
   */
  friendly_name: string;
  /**
   * The priority
   */
  priority: number;
  /**
   * The sid
   */
  sid: string;
  /**
   * The sip_url
   */
  sip_url: string;
  /**
   * The trunk_sid
   */
  trunk_sid: string;
  /**
   * The url
   */
  url: string;
  /**
   * The weight
   */
  weight: number;
}

interface OriginationUrlPayload extends OriginationUrlResource, Page.TwilioResponsePayload {
}

interface OriginationUrlSolution {
  trunkSid: string;
}

interface OriginationUrlListCreateOptions {
  /**
   * The enabled
   */
  enabled: boolean;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The priority
   */
  priority: number;
  /**
   * The sip_url
   */
  sipUrl: string;
  /**
   * The weight
   */
  weight: number;
}

interface OriginationUrlListEachOptions extends ListEachOptions<OriginationUrlInstance> {
}

interface OriginationUrlListOptions extends ListOptions<OriginationUrlInstance> {
}

interface OriginationUrlListPageOptions extends PageOptions<OriginationUrlPage> {
}

interface OriginationUrlListInstance {
  /**
   * Gets context of a single OriginationUrl resource
   *
   * @param sid - The sid
   */
  (sid: string): OriginationUrlContext;
  /**
   * create a OriginationUrlInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed OriginationUrlInstance
   */
  create(opts: OriginationUrlListCreateOptions): Promise<OriginationUrlInstance>;
  /**
   * create a OriginationUrlInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: OriginationUrlListCreateOptions, callback: (error: Error | null, items: OriginationUrlInstance) => any): void;
  /**
   * Streams OriginationUrlInstance records from the API.
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
  each(opts?: OriginationUrlListEachOptions): void;
  /**
   * Streams OriginationUrlInstance records from the API.
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
  each(callback: (item: OriginationUrlInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single OriginationUrl resource
   *
   * @param sid - The sid
   */
  get(sid: string): OriginationUrlContext;
  /**
   * Retrieve a single target page of OriginationUrlInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<OriginationUrlPage>;
  /**
   * Retrieve a single target page of OriginationUrlInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: OriginationUrlPage) => any): void;
  /**
   * Lists OriginationUrlInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: OriginationUrlListOptions): Promise<OriginationUrlInstance[]>;
  /**
   * Lists OriginationUrlInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: OriginationUrlListOptions, callback: (error: Error | null, items: OriginationUrlInstance[]) => any): void;
  /**
   * Lists OriginationUrlInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: OriginationUrlInstance[]) => any): void;
  /**
   * Retrieve a single page of OriginationUrlInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: OriginationUrlListPageOptions): Promise<OriginationUrlPage>;
  /**
   * Retrieve a single page of OriginationUrlInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: OriginationUrlListPageOptions, callback: (error: Error | null, items: OriginationUrlPage) => any): void;
  /**
   * Retrieve a single page of OriginationUrlInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: OriginationUrlPage) => any): void;
}

interface OriginationUrlListFetchOptions {
  /**
   * The enabled
   */
  enabled?: boolean;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The priority
   */
  priority?: number;
  /**
   * The sip_url
   */
  sipUrl?: string;
  /**
   * The weight
   */
  weight?: number;
}

interface OriginationUrlListFetchOptions {
  /**
   * The enabled
   */
  enabled?: boolean;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The priority
   */
  priority?: number;
  /**
   * The sip_url
   */
  sipUrl?: string;
  /**
   * The weight
   */
  weight?: number;
}

declare class OriginationUrlPage extends Page<V1, OriginationUrlPayload, OriginationUrlResource, OriginationUrlInstance> {
  constructor(version: V1, response: Response<string>, solution: OriginationUrlSolution);

  /**
   * Build an instance of OriginationUrlInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: OriginationUrlPayload): OriginationUrlInstance;
}

declare class OriginationUrlInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param trunkSid - The trunk_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: OriginationUrlPayload, trunkSid: string, sid: string);

  private _proxy: OriginationUrlContext;
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
   * The enabled
   */
  enabled: boolean;
  /**
   * fetch a OriginationUrlInstance
   *
   * @returns Promise that resolves to processed OriginationUrlInstance
   */
  fetch(): Promise<OriginationUrlInstance>;
  /**
   * fetch a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: OriginationUrlInstance) => any): void;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The priority
   */
  priority: number;
  /**
   * remove a OriginationUrlInstance
   *
   * @returns Promise that resolves to processed OriginationUrlInstance
   */
  remove(): Promise<OriginationUrlInstance>;
  /**
   * remove a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: OriginationUrlInstance) => any): void;
  /**
   * The sid
   */
  sid: string;
  /**
   * The sip_url
   */
  sipUrl: string;
  /**
   * The trunk_sid
   */
  trunkSid: string;
  /**
   * update a OriginationUrlInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed OriginationUrlInstance
   */
  update(opts?: OriginationUrlListFetchOptions): Promise<OriginationUrlInstance>;
  /**
   * update a OriginationUrlInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: OriginationUrlListFetchOptions, callback: (error: Error | null, items: OriginationUrlInstance) => any): void;
  /**
   * update a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: OriginationUrlInstance) => any): void;
  /**
   * The url
   */
  url: string;
  /**
   * The weight
   */
  weight: number;
}

declare class OriginationUrlContext {
  constructor(version: V1, trunkSid: string, sid: string);

  /**
   * fetch a OriginationUrlInstance
   *
   * @returns Promise that resolves to processed OriginationUrlInstance
   */
  fetch(): Promise<OriginationUrlInstance>;
  /**
   * fetch a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: OriginationUrlInstance) => any): void;
  /**
   * remove a OriginationUrlInstance
   *
   * @returns Promise that resolves to processed OriginationUrlInstance
   */
  remove(): Promise<OriginationUrlInstance>;
  /**
   * remove a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: OriginationUrlInstance) => any): void;
  /**
   * update a OriginationUrlInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed OriginationUrlInstance
   */
  update(opts?: OriginationUrlListFetchOptions): Promise<OriginationUrlInstance>;
  /**
   * update a OriginationUrlInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: OriginationUrlListFetchOptions, callback: (error: Error | null, items: OriginationUrlInstance) => any): void;
  /**
   * update a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: OriginationUrlInstance) => any): void;
}

export { OriginationUrlContext, OriginationUrlInstance, OriginationUrlList, OriginationUrlListCreateOptions, OriginationUrlListEachOptions, OriginationUrlListFetchOptions, OriginationUrlListInstance, OriginationUrlListOptions, OriginationUrlListPageOptions, OriginationUrlPage, OriginationUrlPayload, OriginationUrlResource, OriginationUrlSolution }

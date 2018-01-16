/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import Understand = require('../../Understand');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';

declare function QueryList(version: Understand, serviceSid: string): QueryListInstance

interface QueryResource {
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
   * The language
   */
  language: string;
  /**
   * The model_build_sid
   */
  model_build_sid: string;
  /**
   * The query
   */
  query: string;
  /**
   * The results
   */
  results: string;
  /**
   * The sample_sid
   */
  sample_sid: string;
  /**
   * The service_sid
   */
  service_sid: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The status
   */
  status: string;
  /**
   * The url
   */
  url: string;
}

interface QueryPayload extends QueryResource, Page.TwilioResponsePayload {
}

interface QuerySolution {
  serviceSid: string;
}

interface QueryListEachOptions extends ListEachOptions<QueryInstance> {
  /**
   * The language
   */
  language?: string;
  /**
   * The model_build
   */
  modelBuild?: string;
  /**
   * The status
   */
  status?: string;
}

interface QueryListOptions extends ListOptions<QueryInstance> {
  /**
   * The language
   */
  language?: string;
  /**
   * The model_build
   */
  modelBuild?: string;
  /**
   * The status
   */
  status?: string;
}

interface QueryListPageOptions extends PageOptions<QueryPage> {
  /**
   * The language
   */
  language?: string;
  /**
   * The model_build
   */
  modelBuild?: string;
  /**
   * The status
   */
  status?: string;
}

interface QueryListCreateOptions {
  /**
   * The field
   */
  field?: string;
  /**
   * The intent
   */
  intent?: string;
  /**
   * The language
   */
  language: string;
  /**
   * The model_build
   */
  modelBuild?: string;
  /**
   * The named_entity
   */
  namedEntity?: string;
  /**
   * The query
   */
  query: string;
}

interface QueryListInstance {
  /**
   * Gets context of a single Query resource
   *
   * @param sid - The sid
   */
  (sid: string): QueryContext;
  /**
   * create a QueryInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed QueryInstance
   */
  create(opts: QueryListCreateOptions): Promise<QueryInstance>;
  /**
   * create a QueryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: QueryListCreateOptions, callback: (error: Error | null, items: QueryInstance) => any): void;
  /**
   * Streams QueryInstance records from the API.
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
  each(opts?: QueryListEachOptions): void;
  /**
   * Streams QueryInstance records from the API.
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
  each(callback: (item: QueryInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Query resource
   *
   * @param sid - The sid
   */
  get(sid: string): QueryContext;
  /**
   * Retrieve a single target page of QueryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<QueryPage>;
  /**
   * Retrieve a single target page of QueryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: QueryPage) => any): void;
  /**
   * Lists QueryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: QueryListOptions): Promise<QueryInstance[]>;
  /**
   * Lists QueryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: QueryListOptions, callback: (error: Error | null, items: QueryInstance[]) => any): void;
  /**
   * Lists QueryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: QueryInstance[]) => any): void;
  /**
   * Retrieve a single page of QueryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: QueryListPageOptions): Promise<QueryPage>;
  /**
   * Retrieve a single page of QueryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: QueryListPageOptions, callback: (error: Error | null, items: QueryPage) => any): void;
  /**
   * Retrieve a single page of QueryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: QueryPage) => any): void;
}

interface QueryListFetchOptions {
  /**
   * The sample_sid
   */
  sampleSid?: string;
  /**
   * The status
   */
  status?: string;
}

interface QueryListFetchOptions {
  /**
   * The sample_sid
   */
  sampleSid?: string;
  /**
   * The status
   */
  status?: string;
}

declare class QueryPage extends Page<Understand, QueryPayload, QueryResource, QueryInstance> {
  constructor(version: Understand, response: Response<string>, solution: QuerySolution);

  /**
   * Build an instance of QueryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: QueryPayload): QueryInstance;
}

declare class QueryInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Understand, payload: QueryPayload, serviceSid: string, sid: string);

  private _proxy: QueryContext;
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
   * fetch a QueryInstance
   *
   * @returns Promise that resolves to processed QueryInstance
   */
  fetch(): Promise<QueryInstance>;
  /**
   * fetch a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: QueryInstance) => any): void;
  /**
   * The language
   */
  language: string;
  /**
   * The model_build_sid
   */
  modelBuildSid: string;
  /**
   * The query
   */
  query: string;
  /**
   * remove a QueryInstance
   *
   * @returns Promise that resolves to processed QueryInstance
   */
  remove(): Promise<QueryInstance>;
  /**
   * remove a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: QueryInstance) => any): void;
  /**
   * The results
   */
  results: string;
  /**
   * The sample_sid
   */
  sampleSid: string;
  /**
   * The service_sid
   */
  serviceSid: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The status
   */
  status: string;
  /**
   * update a QueryInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed QueryInstance
   */
  update(opts?: QueryListFetchOptions): Promise<QueryInstance>;
  /**
   * update a QueryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: QueryListFetchOptions, callback: (error: Error | null, items: QueryInstance) => any): void;
  /**
   * update a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: QueryInstance) => any): void;
  /**
   * The url
   */
  url: string;
}

declare class QueryContext {
  constructor(version: Understand, serviceSid: string, sid: string);

  /**
   * fetch a QueryInstance
   *
   * @returns Promise that resolves to processed QueryInstance
   */
  fetch(): Promise<QueryInstance>;
  /**
   * fetch a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: QueryInstance) => any): void;
  /**
   * remove a QueryInstance
   *
   * @returns Promise that resolves to processed QueryInstance
   */
  remove(): Promise<QueryInstance>;
  /**
   * remove a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: QueryInstance) => any): void;
  /**
   * update a QueryInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed QueryInstance
   */
  update(opts?: QueryListFetchOptions): Promise<QueryInstance>;
  /**
   * update a QueryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: QueryListFetchOptions, callback: (error: Error | null, items: QueryInstance) => any): void;
  /**
   * update a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: QueryInstance) => any): void;
}

export {QueryContext, QueryListEachOptions, QueryListFetchOptions, QueryListOptions, QueryListInstance, QueryList, QueryListCreateOptions, QueryPayload, QueryResource, QueryListPageOptions, QueryPage, QuerySolution, QueryInstance}

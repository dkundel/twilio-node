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

declare function RoleList(version: V1, serviceSid: string): RoleListInstance

type RoleRoleType = 'channel'|'deployment';

interface RoleResource {
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
   * The permissions
   */
  permissions: string;
  /**
   * The service_sid
   */
  service_sid: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The type
   */
  type: RoleRoleType;
  /**
   * The url
   */
  url: string;
}

interface RolePayload extends RoleResource, Page.TwilioResponsePayload {
}

interface RoleSolution {
  serviceSid: string;
}

interface RoleListCreateOptions {
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The permission
   */
  permission: string[];
  /**
   * The type
   */
  type: RoleRoleType;
}

interface RoleListEachOptions extends ListEachOptions<RoleInstance> {
}

interface RoleListOptions extends ListOptions<RoleInstance> {
}

interface RoleListPageOptions extends PageOptions<RolePage> {
}

interface RoleListInstance {
  /**
   * Gets context of a single Role resource
   *
   * @param sid - The sid
   */
  (sid: string): RoleContext;
  /**
   * create a RoleInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed RoleInstance
   */
  create(opts: RoleListCreateOptions): Promise<RoleInstance>;
  /**
   * create a RoleInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: RoleListCreateOptions, callback: (error: Error | null, items: RoleInstance) => any): void;
  /**
   * Streams RoleInstance records from the API.
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
  each(opts?: RoleListEachOptions): void;
  /**
   * Streams RoleInstance records from the API.
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
  each(callback: (item: RoleInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Role resource
   *
   * @param sid - The sid
   */
  get(sid: string): RoleContext;
  /**
   * Retrieve a single target page of RoleInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<RolePage>;
  /**
   * Retrieve a single target page of RoleInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: RolePage) => any): void;
  /**
   * Lists RoleInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: RoleListOptions): Promise<RoleInstance[]>;
  /**
   * Lists RoleInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: RoleListOptions, callback: (error: Error | null, items: RoleInstance[]) => any): void;
  /**
   * Lists RoleInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: RoleInstance[]) => any): void;
  /**
   * Retrieve a single page of RoleInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: RoleListPageOptions): Promise<RolePage>;
  /**
   * Retrieve a single page of RoleInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: RoleListPageOptions, callback: (error: Error | null, items: RolePage) => any): void;
  /**
   * Retrieve a single page of RoleInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: RolePage) => any): void;
}

interface RoleListFetchOptions {
  /**
   * The permission
   */
  permission: string[];
}

interface RoleListFetchOptions {
  /**
   * The permission
   */
  permission: string[];
}

declare class RolePage extends Page<V1, RolePayload, RoleResource, RoleInstance> {
  constructor(version: V1, response: Response<string>, solution: RoleSolution);

  /**
   * Build an instance of RoleInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RolePayload): RoleInstance;
}

declare class RoleInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: RolePayload, serviceSid: string, sid: string);

  private _proxy: RoleContext;
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
   * fetch a RoleInstance
   *
   * @returns Promise that resolves to processed RoleInstance
   */
  fetch(): Promise<RoleInstance>;
  /**
   * fetch a RoleInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: RoleInstance) => any): void;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The permissions
   */
  permissions: string;
  /**
   * remove a RoleInstance
   *
   * @returns Promise that resolves to processed RoleInstance
   */
  remove(): Promise<RoleInstance>;
  /**
   * remove a RoleInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: RoleInstance) => any): void;
  /**
   * The service_sid
   */
  serviceSid: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The type
   */
  type: RoleRoleType;
  /**
   * update a RoleInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed RoleInstance
   */
  update(opts: RoleListFetchOptions): Promise<RoleInstance>;
  /**
   * update a RoleInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: RoleListFetchOptions, callback: (error: Error | null, items: RoleInstance) => any): void;
  /**
   * The url
   */
  url: string;
}

declare class RoleContext {
  constructor(version: V1, serviceSid: string, sid: string);

  /**
   * fetch a RoleInstance
   *
   * @returns Promise that resolves to processed RoleInstance
   */
  fetch(): Promise<RoleInstance>;
  /**
   * fetch a RoleInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: RoleInstance) => any): void;
  /**
   * remove a RoleInstance
   *
   * @returns Promise that resolves to processed RoleInstance
   */
  remove(): Promise<RoleInstance>;
  /**
   * remove a RoleInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: RoleInstance) => any): void;
  /**
   * update a RoleInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed RoleInstance
   */
  update(opts: RoleListFetchOptions): Promise<RoleInstance>;
  /**
   * update a RoleInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: RoleListFetchOptions, callback: (error: Error | null, items: RoleInstance) => any): void;
}

export { RoleContext, RoleInstance, RoleList, RoleListCreateOptions, RoleListEachOptions, RoleListFetchOptions, RoleListInstance, RoleListOptions, RoleListPageOptions, RolePage, RolePayload, RoleResource, RoleRoleType, RoleSolution }

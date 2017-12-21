/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';

declare function AuthorizedConnectAppList(version: V2010, accountSid: string): AuthorizedConnectAppListInstance

type AuthorizedConnectAppPermission = 'get-all'|'post-all';

interface AuthorizedConnectAppResource {
  /**
   * The unique id of the SubAccount this Connect App has access to.
   */
  account_sid: string;
  /**
   * The company name set for this Connect App.
   */
  connect_app_company_name: string;
  /**
   * A more detailed human readable description of the Connect App.
   */
  connect_app_description: string;
  /**
   * A human readable name for the Connect App.
   */
  connect_app_friendly_name: string;
  /**
   * The public URL for this Connect App.
   */
  connect_app_homepage_url: string;
  /**
   * The unique id of the Connect App that was authorized.
   */
  connect_app_sid: string;
  /**
   * The date that this resource was created, given as GMT RFC 2822 format.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated, given as GMT RFC 2822 format.
   */
  date_updated: Date;
  /**
   * The set of permissions that you have authorized for this Connect App.  Valid permisisons are `get-all` or `post-all`.
   */
  permissions: AuthorizedConnectAppPermission;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
}

interface AuthorizedConnectAppPayload extends AuthorizedConnectAppResource, Page.TwilioResponsePayload {
}

interface AuthorizedConnectAppSolution {
  accountSid: string;
}

interface AuthorizedConnectAppListEachOptions extends ListEachOptions<AuthorizedConnectAppInstance> {
}

interface AuthorizedConnectAppListOptions extends ListOptions<AuthorizedConnectAppInstance> {
}

interface AuthorizedConnectAppListPageOptions extends PageOptions<AuthorizedConnectAppPage> {
}

interface AuthorizedConnectAppListInstance {
  /**
   * Gets context of a single AuthorizedConnectApp resource
   *
   * @param connectAppSid - The connect_app_sid
   */
  (connectAppSid: string): AuthorizedConnectAppContext;
  /**
   * Streams AuthorizedConnectAppInstance records from the API.
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
  each(opts?: AuthorizedConnectAppListEachOptions): void;
  /**
   * Streams AuthorizedConnectAppInstance records from the API.
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
  each(callback: (item: AuthorizedConnectAppInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single AuthorizedConnectApp resource
   *
   * @param connectAppSid - The connect_app_sid
   */
  get(connectAppSid: string): AuthorizedConnectAppContext;
  /**
   * Retrieve a single target page of AuthorizedConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<AuthorizedConnectAppPage>;
  /**
   * Retrieve a single target page of AuthorizedConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: AuthorizedConnectAppPage) => any): void;
  /**
   * Lists AuthorizedConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: AuthorizedConnectAppListOptions): Promise<AuthorizedConnectAppInstance[]>;
  /**
   * Lists AuthorizedConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: AuthorizedConnectAppListOptions, callback: (error: Error | null, items: AuthorizedConnectAppInstance[]) => any): void;
  /**
   * Lists AuthorizedConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: AuthorizedConnectAppInstance[]) => any): void;
  /**
   * Retrieve a single page of AuthorizedConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: AuthorizedConnectAppListPageOptions): Promise<AuthorizedConnectAppPage>;
  /**
   * Retrieve a single page of AuthorizedConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: AuthorizedConnectAppListPageOptions, callback: (error: Error | null, items: AuthorizedConnectAppPage) => any): void;
  /**
   * Retrieve a single page of AuthorizedConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: AuthorizedConnectAppPage) => any): void;
}

declare class AuthorizedConnectAppPage extends Page<V2010, AuthorizedConnectAppPayload, AuthorizedConnectAppResource, AuthorizedConnectAppInstance> {
  constructor(version: V2010, response: Response<string>, solution: AuthorizedConnectAppSolution);

  /**
   * Build an instance of AuthorizedConnectAppInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AuthorizedConnectAppPayload): AuthorizedConnectAppInstance;
}

declare class AuthorizedConnectAppInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param connectAppSid - The connect_app_sid
   */
  constructor(version: V2010, payload: AuthorizedConnectAppPayload, accountSid: string, connectAppSid: string);

  private _proxy: AuthorizedConnectAppContext;
  /**
   * The unique id of the SubAccount this Connect App has access to.
   */
  accountSid: string;
  /**
   * The company name set for this Connect App.
   */
  connectAppCompanyName: string;
  /**
   * A more detailed human readable description of the Connect App.
   */
  connectAppDescription: string;
  /**
   * A human readable name for the Connect App.
   */
  connectAppFriendlyName: string;
  /**
   * The public URL for this Connect App.
   */
  connectAppHomepageUrl: string;
  /**
   * The unique id of the Connect App that was authorized.
   */
  connectAppSid: string;
  /**
   * The date that this resource was created, given as GMT RFC 2822 format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated, given as GMT RFC 2822 format.
   */
  dateUpdated: Date;
  /**
   * fetch a AuthorizedConnectAppInstance
   *
   * @returns Promise that resolves to processed AuthorizedConnectAppInstance
   */
  fetch(): Promise<AuthorizedConnectAppInstance>;
  /**
   * fetch a AuthorizedConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: AuthorizedConnectAppInstance) => any): void;
  /**
   * The set of permissions that you have authorized for this Connect App.  Valid permisisons are `get-all` or `post-all`.
   */
  permissions: AuthorizedConnectAppPermission;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
}

declare class AuthorizedConnectAppContext {
  constructor(version: V2010, accountSid: string, connectAppSid: string);

  /**
   * fetch a AuthorizedConnectAppInstance
   *
   * @returns Promise that resolves to processed AuthorizedConnectAppInstance
   */
  fetch(): Promise<AuthorizedConnectAppInstance>;
  /**
   * fetch a AuthorizedConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: AuthorizedConnectAppInstance) => any): void;
}

export {AuthorizedConnectAppSolution, AuthorizedConnectAppPermission, AuthorizedConnectAppListInstance, AuthorizedConnectAppPayload, AuthorizedConnectAppListEachOptions, AuthorizedConnectAppListOptions, AuthorizedConnectAppList, AuthorizedConnectAppListPageOptions, AuthorizedConnectAppResource, AuthorizedConnectAppContext, AuthorizedConnectAppPage, AuthorizedConnectAppInstance}

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2 = require('../../../V2');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';

declare function UserBindingList(version: V2, serviceSid: string, userSid: string): UserBindingListInstance

type UserBindingBindingType = 'gcm'|'apn'|'fcm';

interface UserBindingResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The binding_type
   */
  binding_type: UserBindingBindingType;
  /**
   * The credential_sid
   */
  credential_sid: string;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The endpoint
   */
  endpoint: string;
  /**
   * The identity
   */
  identity: string;
  /**
   * The message_types
   */
  message_types: string;
  /**
   * The service_sid
   */
  service_sid: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The url
   */
  url: string;
  /**
   * The user_sid
   */
  user_sid: string;
}

interface UserBindingPayload extends UserBindingResource, Page.TwilioResponsePayload {
}

interface UserBindingSolution {
  serviceSid: string;
  userSid: string;
}

interface UserBindingListEachOptions extends ListEachOptions<UserBindingInstance> {
  /**
   * The binding_type
   */
  bindingType?: UserBindingBindingType[];
}

interface UserBindingListOptions extends ListOptions<UserBindingInstance> {
  /**
   * The binding_type
   */
  bindingType?: UserBindingBindingType[];
}

interface UserBindingListPageOptions extends PageOptions<UserBindingPage> {
  /**
   * The binding_type
   */
  bindingType?: UserBindingBindingType[];
}

interface UserBindingListInstance {
  /**
   * Gets context of a single UserBinding resource
   *
   * @param sid - The sid
   */
  (sid: string): UserBindingContext;
  /**
   * Streams UserBindingInstance records from the API.
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
  each(opts?: UserBindingListEachOptions): void;
  /**
   * Streams UserBindingInstance records from the API.
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
  each(callback: (item: UserBindingInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single UserBinding resource
   *
   * @param sid - The sid
   */
  get(sid: string): UserBindingContext;
  /**
   * Retrieve a single target page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<UserBindingPage>;
  /**
   * Retrieve a single target page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: UserBindingPage) => any): void;
  /**
   * Lists UserBindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: UserBindingListOptions): Promise<UserBindingInstance[]>;
  /**
   * Lists UserBindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: UserBindingListOptions, callback: (error: Error | null, items: UserBindingInstance[]) => any): void;
  /**
   * Lists UserBindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: UserBindingInstance[]) => any): void;
  /**
   * Retrieve a single page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: UserBindingListPageOptions): Promise<UserBindingPage>;
  /**
   * Retrieve a single page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: UserBindingListPageOptions, callback: (error: Error | null, items: UserBindingPage) => any): void;
  /**
   * Retrieve a single page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: UserBindingPage) => any): void;
}

declare class UserBindingPage extends Page<V2, UserBindingPayload, UserBindingResource, UserBindingInstance> {
  constructor(version: V2, response: Response<string>, solution: UserBindingSolution);

  /**
   * Build an instance of UserBindingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserBindingPayload): UserBindingInstance;
}

declare class UserBindingInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param userSid - The user_sid
   * @param sid - The sid
   */
  constructor(version: V2, payload: UserBindingPayload, serviceSid: string, userSid: string, sid: string);

  private _proxy: UserBindingContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The binding_type
   */
  bindingType: UserBindingBindingType;
  /**
   * The credential_sid
   */
  credentialSid: string;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * The endpoint
   */
  endpoint: string;
  /**
   * fetch a UserBindingInstance
   *
   * @returns Promise that resolves to processed UserBindingInstance
   */
  fetch(): Promise<UserBindingInstance>;
  /**
   * fetch a UserBindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: UserBindingInstance) => any): void;
  /**
   * The identity
   */
  identity: string;
  /**
   * The message_types
   */
  messageTypes: string;
  /**
   * remove a UserBindingInstance
   *
   * @returns Promise that resolves to processed UserBindingInstance
   */
  remove(): Promise<UserBindingInstance>;
  /**
   * remove a UserBindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: UserBindingInstance) => any): void;
  /**
   * The service_sid
   */
  serviceSid: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The url
   */
  url: string;
  /**
   * The user_sid
   */
  userSid: string;
}

declare class UserBindingContext {
  constructor(version: V2, serviceSid: string, userSid: string, sid: string);

  /**
   * fetch a UserBindingInstance
   *
   * @returns Promise that resolves to processed UserBindingInstance
   */
  fetch(): Promise<UserBindingInstance>;
  /**
   * fetch a UserBindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: UserBindingInstance) => any): void;
  /**
   * remove a UserBindingInstance
   *
   * @returns Promise that resolves to processed UserBindingInstance
   */
  remove(): Promise<UserBindingInstance>;
  /**
   * remove a UserBindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: UserBindingInstance) => any): void;
}

export { UserBindingBindingType, UserBindingContext, UserBindingInstance, UserBindingList, UserBindingListEachOptions, UserBindingListInstance, UserBindingListOptions, UserBindingListPageOptions, UserBindingPage, UserBindingPayload, UserBindingResource, UserBindingSolution }

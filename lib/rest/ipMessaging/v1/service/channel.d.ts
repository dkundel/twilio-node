/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { InviteListInstance } from './channel/invite';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { MemberListInstance } from './channel/member';
import { MessageListInstance } from './channel/message';

declare function ChannelList(version: V1, serviceSid: string): ChannelListInstance

type ChannelChannelType = 'public'|'private';

interface ChannelResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The attributes
   */
  attributes: string;
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
   * The friendly_name
   */
  friendly_name: string;
  /**
   * The links
   */
  links: string;
  /**
   * The members_count
   */
  members_count: number;
  /**
   * The messages_count
   */
  messages_count: number;
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
  type: ChannelChannelType;
  /**
   * The unique_name
   */
  unique_name: string;
  /**
   * The url
   */
  url: string;
}

interface ChannelPayload extends ChannelResource, Page.TwilioResponsePayload {
}

interface ChannelSolution {
  serviceSid: string;
}

interface ChannelListCreateOptions {
  /**
   * The attributes
   */
  attributes?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The type
   */
  type?: ChannelChannelType;
  /**
   * The unique_name
   */
  uniqueName?: string;
}

interface ChannelListEachOptions extends ListEachOptions<ChannelInstance> {
  /**
   * The type
   */
  type?: ChannelChannelType[];
}

interface ChannelListOptions extends ListOptions<ChannelInstance> {
  /**
   * The type
   */
  type?: ChannelChannelType[];
}

interface ChannelListPageOptions extends PageOptions<ChannelPage> {
  /**
   * The type
   */
  type?: ChannelChannelType[];
}

interface ChannelListInstance {
  /**
   * Gets context of a single Channel resource
   *
   * @param sid - The sid
   */
  (sid: string): ChannelContext;
  /**
   * create a ChannelInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ChannelInstance
   */
  create(opts?: ChannelListCreateOptions): Promise<ChannelInstance>;
  /**
   * create a ChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ChannelListCreateOptions, callback: (error: Error | null, items: ChannelInstance) => any): void;
  /**
   * create a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback: (error: Error | null, items: ChannelInstance) => any): void;
  /**
   * Streams ChannelInstance records from the API.
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
  each(opts?: ChannelListEachOptions): void;
  /**
   * Streams ChannelInstance records from the API.
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
  each(callback: (item: ChannelInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Channel resource
   *
   * @param sid - The sid
   */
  get(sid: string): ChannelContext;
  /**
   * Retrieve a single target page of ChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<ChannelPage>;
  /**
   * Retrieve a single target page of ChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: ChannelPage) => any): void;
  /**
   * Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: ChannelListOptions): Promise<ChannelInstance[]>;
  /**
   * Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: ChannelListOptions, callback: (error: Error | null, items: ChannelInstance[]) => any): void;
  /**
   * Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: ChannelInstance[]) => any): void;
  /**
   * Retrieve a single page of ChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: ChannelListPageOptions): Promise<ChannelPage>;
  /**
   * Retrieve a single page of ChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: ChannelListPageOptions, callback: (error: Error | null, items: ChannelPage) => any): void;
  /**
   * Retrieve a single page of ChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: ChannelPage) => any): void;
}

interface ChannelListFetchOptions {
  /**
   * The attributes
   */
  attributes?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The unique_name
   */
  uniqueName?: string;
}

interface ChannelListFetchOptions {
  /**
   * The attributes
   */
  attributes?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The unique_name
   */
  uniqueName?: string;
}

declare class ChannelPage extends Page<V1, ChannelPayload, ChannelResource, ChannelInstance> {
  constructor(version: V1, response: Response<string>, solution: ChannelSolution);

  /**
   * Build an instance of ChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ChannelPayload): ChannelInstance;
}

declare class ChannelInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: ChannelPayload, serviceSid: string, sid: string);

  private _proxy: ChannelContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The attributes
   */
  attributes: string;
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
   * fetch a ChannelInstance
   *
   * @returns Promise that resolves to processed ChannelInstance
   */
  fetch(): Promise<ChannelInstance>;
  /**
   * fetch a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ChannelInstance) => any): void;
  /**
   * The friendly_name
   */
  friendlyName: string;
  invites(): InviteListInstance;
  /**
   * The links
   */
  links: string;
  members(): MemberListInstance;
  /**
   * The members_count
   */
  membersCount: number;
  messages(): MessageListInstance;
  /**
   * The messages_count
   */
  messagesCount: number;
  /**
   * remove a ChannelInstance
   *
   * @returns Promise that resolves to processed ChannelInstance
   */
  remove(): Promise<ChannelInstance>;
  /**
   * remove a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ChannelInstance) => any): void;
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
  type: ChannelChannelType;
  /**
   * The unique_name
   */
  uniqueName: string;
  /**
   * update a ChannelInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ChannelInstance
   */
  update(opts?: ChannelListFetchOptions): Promise<ChannelInstance>;
  /**
   * update a ChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ChannelListFetchOptions, callback: (error: Error | null, items: ChannelInstance) => any): void;
  /**
   * update a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ChannelInstance) => any): void;
  /**
   * The url
   */
  url: string;
}

declare class ChannelContext {
  constructor(version: V1, serviceSid: string, sid: string);

  /**
   * fetch a ChannelInstance
   *
   * @returns Promise that resolves to processed ChannelInstance
   */
  fetch(): Promise<ChannelInstance>;
  /**
   * fetch a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ChannelInstance) => any): void;
  invites: InviteListInstance;
  members: MemberListInstance;
  messages: MessageListInstance;
  /**
   * remove a ChannelInstance
   *
   * @returns Promise that resolves to processed ChannelInstance
   */
  remove(): Promise<ChannelInstance>;
  /**
   * remove a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ChannelInstance) => any): void;
  /**
   * update a ChannelInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ChannelInstance
   */
  update(opts?: ChannelListFetchOptions): Promise<ChannelInstance>;
  /**
   * update a ChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ChannelListFetchOptions, callback: (error: Error | null, items: ChannelInstance) => any): void;
  /**
   * update a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ChannelInstance) => any): void;
}

export {ChannelListFetchOptions, ChannelListInstance, ChannelChannelType, ChannelContext, ChannelSolution, ChannelListPageOptions, ChannelResource, ChannelInstance, ChannelListEachOptions, ChannelList, ChannelListOptions, ChannelListCreateOptions, ChannelPayload, ChannelPage}

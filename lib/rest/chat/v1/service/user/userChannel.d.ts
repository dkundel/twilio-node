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

declare function UserChannelList(version: V1, serviceSid: string, userSid: string): UserChannelListInstance

type UserChannelChannelStatus = 'joined'|'invited'|'not_participating';

interface UserChannelResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The channel_sid
   */
  channel_sid: string;
  /**
   * The last_consumed_message_index
   */
  last_consumed_message_index: number;
  /**
   * The links
   */
  links: string;
  /**
   * The member_sid
   */
  member_sid: string;
  /**
   * The service_sid
   */
  service_sid: string;
  /**
   * The status
   */
  status: UserChannelChannelStatus;
  /**
   * The unread_messages_count
   */
  unread_messages_count: number;
}

interface UserChannelPayload extends UserChannelResource, Page.TwilioResponsePayload {
}

interface UserChannelSolution {
  serviceSid: string;
  userSid: string;
}

interface UserChannelListEachOptions extends ListEachOptions<UserChannelInstance> {
}

interface UserChannelListOptions extends ListOptions<UserChannelInstance> {
}

interface UserChannelListPageOptions extends PageOptions<UserChannelPage> {
}

interface UserChannelListInstance {
  /**
   * Streams UserChannelInstance records from the API.
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
  each(opts?: UserChannelListEachOptions): void;
  /**
   * Streams UserChannelInstance records from the API.
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
  each(callback: (item: UserChannelInstance, done: (err?: Error) => void) => void): any;
  /**
   * Retrieve a single target page of UserChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<UserChannelPage>;
  /**
   * Retrieve a single target page of UserChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: UserChannelPage) => any): void;
  /**
   * Lists UserChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: UserChannelListOptions): Promise<UserChannelInstance[]>;
  /**
   * Lists UserChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: UserChannelListOptions, callback: (error: Error | null, items: UserChannelInstance[]) => any): void;
  /**
   * Lists UserChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: UserChannelInstance[]) => any): void;
  /**
   * Retrieve a single page of UserChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: UserChannelListPageOptions): Promise<UserChannelPage>;
  /**
   * Retrieve a single page of UserChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: UserChannelListPageOptions, callback: (error: Error | null, items: UserChannelPage) => any): void;
  /**
   * Retrieve a single page of UserChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: UserChannelPage) => any): void;
}

declare class UserChannelPage extends Page<V1, UserChannelPayload, UserChannelResource, UserChannelInstance> {
  constructor(version: V1, response: Response<string>, solution: UserChannelSolution);

  /**
   * Build an instance of UserChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserChannelPayload): UserChannelInstance;
}

declare class UserChannelInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: UserChannelPayload);

  private _proxy: UserChannelContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The channel_sid
   */
  channelSid: string;
  /**
   * The last_consumed_message_index
   */
  lastConsumedMessageIndex: number;
  /**
   * The links
   */
  links: string;
  /**
   * The member_sid
   */
  memberSid: string;
  /**
   * The service_sid
   */
  serviceSid: string;
  /**
   * The status
   */
  status: UserChannelChannelStatus;
  /**
   * The unread_messages_count
   */
  unreadMessagesCount: number;
}

export {UserChannelSolution, UserChannelListInstance, UserChannelInstance, UserChannelList, UserChannelPage, UserChannelPayload, UserChannelListEachOptions, UserChannelListPageOptions, UserChannelChannelStatus, UserChannelResource, UserChannelListOptions}

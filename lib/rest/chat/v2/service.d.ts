/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V2 = require('../V2');
import { BindingListInstance } from './service/binding';
import { ChannelListInstance } from './service/channel';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { RoleListInstance } from './service/role';
import { UserListInstance } from './service/user';

declare function ServiceList(version: V2): ServiceListInstance

interface ServiceResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The consumption_report_interval
   */
  consumption_report_interval: number;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The default_channel_creator_role_sid
   */
  default_channel_creator_role_sid: string;
  /**
   * The default_channel_role_sid
   */
  default_channel_role_sid: string;
  /**
   * The default_service_role_sid
   */
  default_service_role_sid: string;
  /**
   * The friendly_name
   */
  friendly_name: string;
  /**
   * The limits
   */
  limits: string;
  /**
   * The links
   */
  links: string;
  /**
   * The media
   */
  media: string;
  /**
   * The notifications
   */
  notifications: string;
  /**
   * The post_webhook_retry_count
   */
  post_webhook_retry_count: number;
  /**
   * The post_webhook_url
   */
  post_webhook_url: string;
  /**
   * The pre_webhook_retry_count
   */
  pre_webhook_retry_count: number;
  /**
   * The pre_webhook_url
   */
  pre_webhook_url: string;
  /**
   * The reachability_enabled
   */
  reachability_enabled: boolean;
  /**
   * The read_status_enabled
   */
  read_status_enabled: boolean;
  /**
   * The sid
   */
  sid: string;
  /**
   * The typing_indicator_timeout
   */
  typing_indicator_timeout: number;
  /**
   * The url
   */
  url: string;
  /**
   * The webhook_filters
   */
  webhook_filters: string;
  /**
   * The webhook_method
   */
  webhook_method: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceSolution {
}

interface ServiceListCreateOptions {
  /**
   * The friendly_name
   */
  friendlyName: string;
}

interface ServiceListEachOptions extends ListEachOptions<ServiceInstance> {
}

interface ServiceListOptions extends ListOptions<ServiceInstance> {
}

interface ServiceListPageOptions extends PageOptions<ServicePage> {
}

interface ServiceListInstance {
  /**
   * Gets context of a single Service resource
   *
   * @param sid - The sid
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  create(opts: ServiceListCreateOptions): Promise<ServiceInstance>;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ServiceListCreateOptions, callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * Streams ServiceInstance records from the API.
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
  each(opts?: ServiceListEachOptions): void;
  /**
   * Streams ServiceInstance records from the API.
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
  each(callback: (item: ServiceInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Service resource
   *
   * @param sid - The sid
   */
  get(sid: string): ServiceContext;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<ServicePage>;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: ServicePage) => any): void;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: ServiceListOptions): Promise<ServiceInstance[]>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: ServiceListOptions, callback: (error: Error | null, items: ServiceInstance[]) => any): void;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: ServiceInstance[]) => any): void;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: ServiceListPageOptions): Promise<ServicePage>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: ServiceListPageOptions, callback: (error: Error | null, items: ServicePage) => any): void;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: ServicePage) => any): void;
}

interface ServiceListFetchOptions {
  /**
   * The consumption_report_interval
   */
  consumptionReportInterval?: number;
  /**
   * The default_channel_creator_role_sid
   */
  defaultChannelCreatorRoleSid?: string;
  /**
   * The default_channel_role_sid
   */
  defaultChannelRoleSid?: string;
  /**
   * The default_service_role_sid
   */
  defaultServiceRoleSid?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  limits?: {
    /**
     * The limits.channel_members
     */
    channelMembers?: number;
    /**
     * The limits.user_channels
     */
    userChannels?: number;
  };
  media?: {
    /**
     * The media.compatibility_message
     */
    compatibilityMessage?: string;
  };
  notifications?: {
    newMessage?: {
        /**
         * The notifications.new_message.badge_count_enabled
         */
        badgeCountEnabled?: boolean;
    };
    addedToChannel?: {
        /**
         * The notifications.added_to_channel.sound
         */
        sound?: string;
    };
    removedFromChannel?: {
        /**
         * The notifications.removed_from_channel.sound
         */
        sound?: string;
    };
    invitedToChannel?: {
        /**
         * The notifications.invited_to_channel.sound
         */
        sound?: string;
    };
  };
  /**
   * The post_webhook_retry_count
   */
  postWebhookRetryCount?: number;
  /**
   * The post_webhook_url
   */
  postWebhookUrl?: string;
  /**
   * The pre_webhook_retry_count
   */
  preWebhookRetryCount?: number;
  /**
   * The pre_webhook_url
   */
  preWebhookUrl?: string;
  /**
   * The reachability_enabled
   */
  reachabilityEnabled?: boolean;
  /**
   * The read_status_enabled
   */
  readStatusEnabled?: boolean;
  /**
   * The typing_indicator_timeout
   */
  typingIndicatorTimeout?: number;
  /**
   * The webhook_filters
   */
  webhookFilters?: string[];
  /**
   * The webhook_method
   */
  webhookMethod?: string;
}

interface ServiceListFetchOptions {
  /**
   * The consumption_report_interval
   */
  consumptionReportInterval?: number;
  /**
   * The default_channel_creator_role_sid
   */
  defaultChannelCreatorRoleSid?: string;
  /**
   * The default_channel_role_sid
   */
  defaultChannelRoleSid?: string;
  /**
   * The default_service_role_sid
   */
  defaultServiceRoleSid?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  limits?: {
    /**
     * The limits.channel_members
     */
    channelMembers?: number;
    /**
     * The limits.user_channels
     */
    userChannels?: number;
  };
  media?: {
    /**
     * The media.compatibility_message
     */
    compatibilityMessage?: string;
  };
  notifications?: {
    newMessage?: {
        /**
         * The notifications.new_message.badge_count_enabled
         */
        badgeCountEnabled?: boolean;
    };
    addedToChannel?: {
        /**
         * The notifications.added_to_channel.sound
         */
        sound?: string;
    };
    removedFromChannel?: {
        /**
         * The notifications.removed_from_channel.sound
         */
        sound?: string;
    };
    invitedToChannel?: {
        /**
         * The notifications.invited_to_channel.sound
         */
        sound?: string;
    };
  };
  /**
   * The post_webhook_retry_count
   */
  postWebhookRetryCount?: number;
  /**
   * The post_webhook_url
   */
  postWebhookUrl?: string;
  /**
   * The pre_webhook_retry_count
   */
  preWebhookRetryCount?: number;
  /**
   * The pre_webhook_url
   */
  preWebhookUrl?: string;
  /**
   * The reachability_enabled
   */
  reachabilityEnabled?: boolean;
  /**
   * The read_status_enabled
   */
  readStatusEnabled?: boolean;
  /**
   * The typing_indicator_timeout
   */
  typingIndicatorTimeout?: number;
  /**
   * The webhook_filters
   */
  webhookFilters?: string[];
  /**
   * The webhook_method
   */
  webhookMethod?: string;
}

declare class ServicePage extends Page<V2, ServicePayload, ServiceResource, ServiceInstance> {
  constructor(version: V2, response: Response<string>, solution: ServiceSolution);

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServicePayload): ServiceInstance;
}

declare class ServiceInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V2, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  /**
   * The account_sid
   */
  accountSid: string;
  bindings(): BindingListInstance;
  channels(): ChannelListInstance;
  /**
   * The consumption_report_interval
   */
  consumptionReportInterval: number;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * The default_channel_creator_role_sid
   */
  defaultChannelCreatorRoleSid: string;
  /**
   * The default_channel_role_sid
   */
  defaultChannelRoleSid: string;
  /**
   * The default_service_role_sid
   */
  defaultServiceRoleSid: string;
  /**
   * fetch a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  fetch(): Promise<ServiceInstance>;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The limits
   */
  limits: string;
  /**
   * The links
   */
  links: string;
  /**
   * The media
   */
  media: string;
  /**
   * The notifications
   */
  notifications: string;
  /**
   * The post_webhook_retry_count
   */
  postWebhookRetryCount: number;
  /**
   * The post_webhook_url
   */
  postWebhookUrl: string;
  /**
   * The pre_webhook_retry_count
   */
  preWebhookRetryCount: number;
  /**
   * The pre_webhook_url
   */
  preWebhookUrl: string;
  /**
   * The reachability_enabled
   */
  reachabilityEnabled: boolean;
  /**
   * The read_status_enabled
   */
  readStatusEnabled: boolean;
  /**
   * remove a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  remove(): Promise<ServiceInstance>;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ServiceInstance) => any): void;
  roles(): RoleListInstance;
  /**
   * The sid
   */
  sid: string;
  /**
   * The typing_indicator_timeout
   */
  typingIndicatorTimeout: number;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  update(opts?: ServiceListFetchOptions): Promise<ServiceInstance>;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ServiceListFetchOptions, callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * update a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * The url
   */
  url: string;
  users(): UserListInstance;
  /**
   * The webhook_filters
   */
  webhookFilters: string;
  /**
   * The webhook_method
   */
  webhookMethod: string;
}

declare class ServiceContext {
  constructor(version: V2, sid: string);

  bindings: BindingListInstance;
  channels: ChannelListInstance;
  /**
   * fetch a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  fetch(): Promise<ServiceInstance>;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * remove a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  remove(): Promise<ServiceInstance>;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ServiceInstance) => any): void;
  roles: RoleListInstance;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  update(opts?: ServiceListFetchOptions): Promise<ServiceInstance>;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ServiceListFetchOptions, callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * update a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ServiceInstance) => any): void;
  users: UserListInstance;
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListCreateOptions, ServiceListEachOptions, ServiceListFetchOptions, ServiceListInstance, ServiceListOptions, ServiceListPageOptions, ServicePage, ServicePayload, ServiceResource, ServiceSolution }

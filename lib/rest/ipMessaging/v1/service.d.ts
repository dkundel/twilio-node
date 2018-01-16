/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { ChannelListInstance } from './service/channel';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { RoleListInstance } from './service/role';
import { UserListInstance } from './service/user';

declare function ServiceList(version: V1): ServiceListInstance

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
   * The notifications
   */
  notifications: string;
  /**
   * The post_webhook_url
   */
  post_webhook_url: string;
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
  /**
   * The webhooks
   */
  webhooks: string;
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
  /**
   * The limits.channel_members
   */
  limits.channelMembers?: number;
  /**
   * The limits.user_channels
   */
  limits.userChannels?: number;
  /**
   * The notifications.added_to_channel.enabled
   */
  notifications.addedToChannel.enabled?: boolean;
  /**
   * The notifications.added_to_channel.template
   */
  notifications.addedToChannel.template?: string;
  /**
   * The notifications.invited_to_channel.enabled
   */
  notifications.invitedToChannel.enabled?: boolean;
  /**
   * The notifications.invited_to_channel.template
   */
  notifications.invitedToChannel.template?: string;
  /**
   * The notifications.new_message.enabled
   */
  notifications.newMessage.enabled?: boolean;
  /**
   * The notifications.new_message.template
   */
  notifications.newMessage.template?: string;
  /**
   * The notifications.removed_from_channel.enabled
   */
  notifications.removedFromChannel.enabled?: boolean;
  /**
   * The notifications.removed_from_channel.template
   */
  notifications.removedFromChannel.template?: string;
  /**
   * The post_webhook_url
   */
  postWebhookUrl?: string;
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
  /**
   * The webhooks.on_channel_add.format
   */
  webhooks.onChannelAdd.format?: string;
  /**
   * The webhooks.on_channel_add.method
   */
  webhooks.onChannelAdd.method?: string;
  /**
   * The webhooks.on_channel_add.url
   */
  webhooks.onChannelAdd.url?: string;
  /**
   * The webhooks.on_channel_added.format
   */
  webhooks.onChannelAdded.format?: string;
  /**
   * The webhooks.on_channel_added.method
   */
  webhooks.onChannelAdded.method?: string;
  /**
   * The webhooks.on_channel_added.url
   */
  webhooks.onChannelAdded.url?: string;
  /**
   * The webhooks.on_channel_destroy.format
   */
  webhooks.onChannelDestroy.format?: string;
  /**
   * The webhooks.on_channel_destroy.method
   */
  webhooks.onChannelDestroy.method?: string;
  /**
   * The webhooks.on_channel_destroy.url
   */
  webhooks.onChannelDestroy.url?: string;
  /**
   * The webhooks.on_channel_destroyed.format
   */
  webhooks.onChannelDestroyed.format?: string;
  /**
   * The webhooks.on_channel_destroyed.method
   */
  webhooks.onChannelDestroyed.method?: string;
  /**
   * The webhooks.on_channel_destroyed.url
   */
  webhooks.onChannelDestroyed.url?: string;
  /**
   * The webhooks.on_channel_update.format
   */
  webhooks.onChannelUpdate.format?: string;
  /**
   * The webhooks.on_channel_update.method
   */
  webhooks.onChannelUpdate.method?: string;
  /**
   * The webhooks.on_channel_update.url
   */
  webhooks.onChannelUpdate.url?: string;
  /**
   * The webhooks.on_channel_updated.format
   */
  webhooks.onChannelUpdated.format?: string;
  /**
   * The webhooks.on_channel_updated.method
   */
  webhooks.onChannelUpdated.method?: string;
  /**
   * The webhooks.on_channel_updated.url
   */
  webhooks.onChannelUpdated.url?: string;
  /**
   * The webhooks.on_member_add.format
   */
  webhooks.onMemberAdd.format?: string;
  /**
   * The webhooks.on_member_add.method
   */
  webhooks.onMemberAdd.method?: string;
  /**
   * The webhooks.on_member_add.url
   */
  webhooks.onMemberAdd.url?: string;
  /**
   * The webhooks.on_member_added.format
   */
  webhooks.onMemberAdded.format?: string;
  /**
   * The webhooks.on_member_added.method
   */
  webhooks.onMemberAdded.method?: string;
  /**
   * The webhooks.on_member_added.url
   */
  webhooks.onMemberAdded.url?: string;
  /**
   * The webhooks.on_member_remove.format
   */
  webhooks.onMemberRemove.format?: string;
  /**
   * The webhooks.on_member_remove.method
   */
  webhooks.onMemberRemove.method?: string;
  /**
   * The webhooks.on_member_remove.url
   */
  webhooks.onMemberRemove.url?: string;
  /**
   * The webhooks.on_member_removed.format
   */
  webhooks.onMemberRemoved.format?: string;
  /**
   * The webhooks.on_member_removed.method
   */
  webhooks.onMemberRemoved.method?: string;
  /**
   * The webhooks.on_member_removed.url
   */
  webhooks.onMemberRemoved.url?: string;
  /**
   * The webhooks.on_message_remove.format
   */
  webhooks.onMessageRemove.format?: string;
  /**
   * The webhooks.on_message_remove.method
   */
  webhooks.onMessageRemove.method?: string;
  /**
   * The webhooks.on_message_remove.url
   */
  webhooks.onMessageRemove.url?: string;
  /**
   * The webhooks.on_message_removed.format
   */
  webhooks.onMessageRemoved.format?: string;
  /**
   * The webhooks.on_message_removed.method
   */
  webhooks.onMessageRemoved.method?: string;
  /**
   * The webhooks.on_message_removed.url
   */
  webhooks.onMessageRemoved.url?: string;
  /**
   * The webhooks.on_message_send.format
   */
  webhooks.onMessageSend.format?: string;
  /**
   * The webhooks.on_message_send.method
   */
  webhooks.onMessageSend.method?: string;
  /**
   * The webhooks.on_message_send.url
   */
  webhooks.onMessageSend.url?: string;
  /**
   * The webhooks.on_message_sent.format
   */
  webhooks.onMessageSent.format?: string;
  /**
   * The webhooks.on_message_sent.method
   */
  webhooks.onMessageSent.method?: string;
  /**
   * The webhooks.on_message_sent.url
   */
  webhooks.onMessageSent.url?: string;
  /**
   * The webhooks.on_message_update.format
   */
  webhooks.onMessageUpdate.format?: string;
  /**
   * The webhooks.on_message_update.method
   */
  webhooks.onMessageUpdate.method?: string;
  /**
   * The webhooks.on_message_update.url
   */
  webhooks.onMessageUpdate.url?: string;
  /**
   * The webhooks.on_message_updated.format
   */
  webhooks.onMessageUpdated.format?: string;
  /**
   * The webhooks.on_message_updated.method
   */
  webhooks.onMessageUpdated.method?: string;
  /**
   * The webhooks.on_message_updated.url
   */
  webhooks.onMessageUpdated.url?: string;
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
  /**
   * The limits.channel_members
   */
  limits.channelMembers?: number;
  /**
   * The limits.user_channels
   */
  limits.userChannels?: number;
  /**
   * The notifications.added_to_channel.enabled
   */
  notifications.addedToChannel.enabled?: boolean;
  /**
   * The notifications.added_to_channel.template
   */
  notifications.addedToChannel.template?: string;
  /**
   * The notifications.invited_to_channel.enabled
   */
  notifications.invitedToChannel.enabled?: boolean;
  /**
   * The notifications.invited_to_channel.template
   */
  notifications.invitedToChannel.template?: string;
  /**
   * The notifications.new_message.enabled
   */
  notifications.newMessage.enabled?: boolean;
  /**
   * The notifications.new_message.template
   */
  notifications.newMessage.template?: string;
  /**
   * The notifications.removed_from_channel.enabled
   */
  notifications.removedFromChannel.enabled?: boolean;
  /**
   * The notifications.removed_from_channel.template
   */
  notifications.removedFromChannel.template?: string;
  /**
   * The post_webhook_url
   */
  postWebhookUrl?: string;
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
  /**
   * The webhooks.on_channel_add.format
   */
  webhooks.onChannelAdd.format?: string;
  /**
   * The webhooks.on_channel_add.method
   */
  webhooks.onChannelAdd.method?: string;
  /**
   * The webhooks.on_channel_add.url
   */
  webhooks.onChannelAdd.url?: string;
  /**
   * The webhooks.on_channel_added.format
   */
  webhooks.onChannelAdded.format?: string;
  /**
   * The webhooks.on_channel_added.method
   */
  webhooks.onChannelAdded.method?: string;
  /**
   * The webhooks.on_channel_added.url
   */
  webhooks.onChannelAdded.url?: string;
  /**
   * The webhooks.on_channel_destroy.format
   */
  webhooks.onChannelDestroy.format?: string;
  /**
   * The webhooks.on_channel_destroy.method
   */
  webhooks.onChannelDestroy.method?: string;
  /**
   * The webhooks.on_channel_destroy.url
   */
  webhooks.onChannelDestroy.url?: string;
  /**
   * The webhooks.on_channel_destroyed.format
   */
  webhooks.onChannelDestroyed.format?: string;
  /**
   * The webhooks.on_channel_destroyed.method
   */
  webhooks.onChannelDestroyed.method?: string;
  /**
   * The webhooks.on_channel_destroyed.url
   */
  webhooks.onChannelDestroyed.url?: string;
  /**
   * The webhooks.on_channel_update.format
   */
  webhooks.onChannelUpdate.format?: string;
  /**
   * The webhooks.on_channel_update.method
   */
  webhooks.onChannelUpdate.method?: string;
  /**
   * The webhooks.on_channel_update.url
   */
  webhooks.onChannelUpdate.url?: string;
  /**
   * The webhooks.on_channel_updated.format
   */
  webhooks.onChannelUpdated.format?: string;
  /**
   * The webhooks.on_channel_updated.method
   */
  webhooks.onChannelUpdated.method?: string;
  /**
   * The webhooks.on_channel_updated.url
   */
  webhooks.onChannelUpdated.url?: string;
  /**
   * The webhooks.on_member_add.format
   */
  webhooks.onMemberAdd.format?: string;
  /**
   * The webhooks.on_member_add.method
   */
  webhooks.onMemberAdd.method?: string;
  /**
   * The webhooks.on_member_add.url
   */
  webhooks.onMemberAdd.url?: string;
  /**
   * The webhooks.on_member_added.format
   */
  webhooks.onMemberAdded.format?: string;
  /**
   * The webhooks.on_member_added.method
   */
  webhooks.onMemberAdded.method?: string;
  /**
   * The webhooks.on_member_added.url
   */
  webhooks.onMemberAdded.url?: string;
  /**
   * The webhooks.on_member_remove.format
   */
  webhooks.onMemberRemove.format?: string;
  /**
   * The webhooks.on_member_remove.method
   */
  webhooks.onMemberRemove.method?: string;
  /**
   * The webhooks.on_member_remove.url
   */
  webhooks.onMemberRemove.url?: string;
  /**
   * The webhooks.on_member_removed.format
   */
  webhooks.onMemberRemoved.format?: string;
  /**
   * The webhooks.on_member_removed.method
   */
  webhooks.onMemberRemoved.method?: string;
  /**
   * The webhooks.on_member_removed.url
   */
  webhooks.onMemberRemoved.url?: string;
  /**
   * The webhooks.on_message_remove.format
   */
  webhooks.onMessageRemove.format?: string;
  /**
   * The webhooks.on_message_remove.method
   */
  webhooks.onMessageRemove.method?: string;
  /**
   * The webhooks.on_message_remove.url
   */
  webhooks.onMessageRemove.url?: string;
  /**
   * The webhooks.on_message_removed.format
   */
  webhooks.onMessageRemoved.format?: string;
  /**
   * The webhooks.on_message_removed.method
   */
  webhooks.onMessageRemoved.method?: string;
  /**
   * The webhooks.on_message_removed.url
   */
  webhooks.onMessageRemoved.url?: string;
  /**
   * The webhooks.on_message_send.format
   */
  webhooks.onMessageSend.format?: string;
  /**
   * The webhooks.on_message_send.method
   */
  webhooks.onMessageSend.method?: string;
  /**
   * The webhooks.on_message_send.url
   */
  webhooks.onMessageSend.url?: string;
  /**
   * The webhooks.on_message_sent.format
   */
  webhooks.onMessageSent.format?: string;
  /**
   * The webhooks.on_message_sent.method
   */
  webhooks.onMessageSent.method?: string;
  /**
   * The webhooks.on_message_sent.url
   */
  webhooks.onMessageSent.url?: string;
  /**
   * The webhooks.on_message_update.format
   */
  webhooks.onMessageUpdate.format?: string;
  /**
   * The webhooks.on_message_update.method
   */
  webhooks.onMessageUpdate.method?: string;
  /**
   * The webhooks.on_message_update.url
   */
  webhooks.onMessageUpdate.url?: string;
  /**
   * The webhooks.on_message_updated.format
   */
  webhooks.onMessageUpdated.format?: string;
  /**
   * The webhooks.on_message_updated.method
   */
  webhooks.onMessageUpdated.method?: string;
  /**
   * The webhooks.on_message_updated.url
   */
  webhooks.onMessageUpdated.url?: string;
}

declare class ServicePage extends Page<V1, ServicePayload, ServiceResource, ServiceInstance> {
  constructor(version: V1, response: Response<string>, solution: ServiceSolution);

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
  constructor(version: V1, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  /**
   * The account_sid
   */
  accountSid: string;
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
   * The notifications
   */
  notifications: string;
  /**
   * The post_webhook_url
   */
  postWebhookUrl: string;
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
  /**
   * The webhooks
   */
  webhooks: string;
}

declare class ServiceContext {
  constructor(version: V1, sid: string);

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

export {ServiceContext, ServiceListOptions, ServiceListEachOptions, ServiceInstance, ServiceListFetchOptions, ServicePage, ServiceResource, ServiceSolution, ServiceListCreateOptions, ServiceListInstance, ServicePayload, ServiceList, ServiceListPageOptions}

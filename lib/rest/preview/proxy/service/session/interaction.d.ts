/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Proxy = require('../../../Proxy');
import Response = require('../../../../../http/response');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';

declare function InteractionList(version: Proxy, serviceSid: string, sessionSid: string): InteractionListInstance

type InteractionStatus = 'completed'|'in-progress'|'failed';

type InteractionResourceStatus = 'queued'|'sending'|'sent'|'failed'|'delivered'|'undelivered';

interface InteractionResource {
  /**
   * The unique SID identifier of the Account.
   */
  account_sid: string;
  /**
   * What happened in this Interaction.
   */
  data: string;
  /**
   * The date that this Interaction was created, given in ISO 8601 format.
   */
  date_created: Date;
  /**
   * The date that this Interaction was updated, given in ISO 8601 format.
   */
  date_updated: Date;
  /**
   * The inbound_participant_sid
   */
  inbound_participant_sid: string;
  /**
   * The SID of the inbound resource.
   */
  inbound_resource_sid: string;
  /**
   * The Inbound Resource Status of this Interaction. One of `completed`, `in-progress` or `failed`.
   */
  inbound_resource_status: InteractionResourceStatus;
  /**
   * The Twilio object type of the inbound resource.
   */
  inbound_resource_type: string;
  /**
   * The URL of the inbound resource.
   */
  inbound_resource_url: string;
  /**
   * The outbound_participant_sid
   */
  outbound_participant_sid: string;
  /**
   * The SID of the outbound resource.
   */
  outbound_resource_sid: string;
  /**
   * The Outbound Resource Status of this Interaction. One of `completed`, `in-progress` or `failed`.
   */
  outbound_resource_status: InteractionResourceStatus;
  /**
   * The Twilio object type of the outbound resource.
   */
  outbound_resource_type: string;
  /**
   * The URL of the outbound resource.
   */
  outbound_resource_url: string;
  /**
   * The unique SID identifier of the Service.
   */
  service_sid: string;
  /**
   * The unique SID identifier of the Session.
   */
  session_sid: string;
  /**
   * A 34 character string that uniquely identifies this Interaction.
   */
  sid: string;
  /**
   * The Status of this Interaction. One of `completed`, `in-progress` or `failed`.
   */
  status: InteractionStatus;
  /**
   * The URL of this Interaction.
   */
  url: string;
}

interface InteractionPayload extends InteractionResource, Page.TwilioResponsePayload {
}

interface InteractionSolution {
  serviceSid: string;
  sessionSid: string;
}

interface InteractionListEachOptions extends ListEachOptions<InteractionInstance> {
  /**
   * The Inbound Participant Status of this Interaction. One of `completed`, `in-progress` or `failed`.
   */
  inboundParticipantStatus?: InteractionResourceStatus;
  /**
   * The Outbound Participant Status of this Interaction. One of `completed`, `in-progress` or `failed`.
   */
  outboundParticipantStatus?: InteractionResourceStatus;
}

interface InteractionListOptions extends ListOptions<InteractionInstance> {
  /**
   * The Inbound Participant Status of this Interaction. One of `completed`, `in-progress` or `failed`.
   */
  inboundParticipantStatus?: InteractionResourceStatus;
  /**
   * The Outbound Participant Status of this Interaction. One of `completed`, `in-progress` or `failed`.
   */
  outboundParticipantStatus?: InteractionResourceStatus;
}

interface InteractionListPageOptions extends PageOptions<InteractionPage> {
  /**
   * The Inbound Participant Status of this Interaction. One of `completed`, `in-progress` or `failed`.
   */
  inboundParticipantStatus?: InteractionResourceStatus;
  /**
   * The Outbound Participant Status of this Interaction. One of `completed`, `in-progress` or `failed`.
   */
  outboundParticipantStatus?: InteractionResourceStatus;
}

interface InteractionListInstance {
  /**
   * Gets context of a single Interaction resource
   *
   * @param sid - A string that uniquely identifies this Interaction.
   */
  (sid: string): InteractionContext;
  /**
   * Streams InteractionInstance records from the API.
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
  each(opts?: InteractionListEachOptions): void;
  /**
   * Streams InteractionInstance records from the API.
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
  each(callback: (item: InteractionInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Interaction resource
   *
   * @param sid - A string that uniquely identifies this Interaction.
   */
  get(sid: string): InteractionContext;
  /**
   * Retrieve a single target page of InteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<InteractionPage>;
  /**
   * Retrieve a single target page of InteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: InteractionPage) => any): void;
  /**
   * Lists InteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: InteractionListOptions): Promise<InteractionInstance[]>;
  /**
   * Lists InteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: InteractionListOptions, callback: (error: Error | null, items: InteractionInstance[]) => any): void;
  /**
   * Lists InteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: InteractionInstance[]) => any): void;
  /**
   * Retrieve a single page of InteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: InteractionListPageOptions): Promise<InteractionPage>;
  /**
   * Retrieve a single page of InteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: InteractionListPageOptions, callback: (error: Error | null, items: InteractionPage) => any): void;
  /**
   * Retrieve a single page of InteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: InteractionPage) => any): void;
}

declare class InteractionPage extends Page<Proxy, InteractionPayload, InteractionResource, InteractionInstance> {
  constructor(version: Proxy, response: Response<string>, solution: InteractionSolution);

  /**
   * Build an instance of InteractionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InteractionPayload): InteractionInstance;
}

declare class InteractionInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param sid - A string that uniquely identifies this Interaction.
   */
  constructor(version: Proxy, payload: InteractionPayload, serviceSid: string, sessionSid: string, sid: string);

  private _proxy: InteractionContext;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * What happened in this Interaction.
   */
  data: string;
  /**
   * The date that this Interaction was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The date that this Interaction was updated, given in ISO 8601 format.
   */
  dateUpdated: Date;
  /**
   * fetch a InteractionInstance
   *
   * @returns Promise that resolves to processed InteractionInstance
   */
  fetch(): Promise<InteractionInstance>;
  /**
   * fetch a InteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: InteractionInstance) => any): void;
  /**
   * The inbound_participant_sid
   */
  inboundParticipantSid: string;
  /**
   * The SID of the inbound resource.
   */
  inboundResourceSid: string;
  /**
   * The Inbound Resource Status of this Interaction. One of `completed`, `in-progress` or `failed`.
   */
  inboundResourceStatus: InteractionResourceStatus;
  /**
   * The Twilio object type of the inbound resource.
   */
  inboundResourceType: string;
  /**
   * The URL of the inbound resource.
   */
  inboundResourceUrl: string;
  /**
   * The outbound_participant_sid
   */
  outboundParticipantSid: string;
  /**
   * The SID of the outbound resource.
   */
  outboundResourceSid: string;
  /**
   * The Outbound Resource Status of this Interaction. One of `completed`, `in-progress` or `failed`.
   */
  outboundResourceStatus: InteractionResourceStatus;
  /**
   * The Twilio object type of the outbound resource.
   */
  outboundResourceType: string;
  /**
   * The URL of the outbound resource.
   */
  outboundResourceUrl: string;
  /**
   * The unique SID identifier of the Service.
   */
  serviceSid: string;
  /**
   * The unique SID identifier of the Session.
   */
  sessionSid: string;
  /**
   * A 34 character string that uniquely identifies this Interaction.
   */
  sid: string;
  /**
   * The Status of this Interaction. One of `completed`, `in-progress` or `failed`.
   */
  status: InteractionStatus;
  /**
   * The URL of this Interaction.
   */
  url: string;
}

declare class InteractionContext {
  constructor(version: Proxy, serviceSid: string, sessionSid: string, sid: string);

  /**
   * fetch a InteractionInstance
   *
   * @returns Promise that resolves to processed InteractionInstance
   */
  fetch(): Promise<InteractionInstance>;
  /**
   * fetch a InteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: InteractionInstance) => any): void;
}

export {InteractionContext, InteractionSolution, InteractionListInstance, InteractionPayload, InteractionListEachOptions, InteractionListOptions, InteractionListPageOptions, InteractionStatus, InteractionInstance, InteractionResourceStatus, InteractionResource, InteractionPage, InteractionList}

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V1 = require('../../../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../../interfaces';

declare function MessageInteractionList(version: V1, serviceSid: string, sessionSid: string, participantSid: string): MessageInteractionListInstance

type MessageInteractionType = 'message'|'voice'|'unknown';

type MessageInteractionResourceStatus = 'accepted'|'answered'|'busy'|'canceled'|'completed'|'deleted'|'delivered'|'delivery-unknown'|'failed'|'in-progress'|'initiated'|'no-answer'|'queued'|'received'|'receiving'|'ringing'|'scheduled'|'sending'|'sent'|'undelivered'|'unknown';

interface MessageInteractionResource {
  /**
   * The unique SID identifier of the Account.
   */
  account_sid: string;
  /**
   * Further details about an interaction.
   */
  data: string;
  /**
   * The date that this Message Interaction was created, given in ISO 8601 format.
   */
  date_created: Date;
  /**
   * The date that this Message Interaction was updated, given in ISO 8601 format.
   */
  date_updated: Date;
  /**
   * The unique SID identifier of the Inbound Participant.
   */
  inbound_participant_sid: string;
  /**
   * The unique SID identifier of the Inbound Resource.
   */
  inbound_resource_sid: string;
  /**
   * The Inbound Resource Status of this Message Interaction. One of `accepted`, `answered`, `busy`, `canceled`, `completed`, `deleted`, `delivered`, `delivery-unknown`, `failed`, `in-progress`, `initiated`, `no-answer`, `queued`, `received`, `receiving`, `ringing`, `scheduled`, `sending`, `sent`, `undelivered` or `unknown`.
   */
  inbound_resource_status: MessageInteractionResourceStatus;
  /**
   * The type of the Inbound Resource, Call or Message.
   */
  inbound_resource_type: string;
  /**
   * The URL of the Twilio resource.
   */
  inbound_resource_url: string;
  /**
   * The unique SID identifier of the Outbound Participant.
   */
  outbound_participant_sid: string;
  /**
   * The unique SID identifier of the Outbound Resource.
   */
  outbound_resource_sid: string;
  /**
   * The Outbound Resource Status of this Message Interaction. One of `accepted`, `answered`, `busy`, `canceled`, `completed`, `deleted`, `delivered`, `delivery-unknown`, `failed`, `in-progress`, `initiated`, `no-answer`, `queued`, `received`, `receiving`, `ringing`, `scheduled`, `sending`, `sent`, `undelivered` or `unknown`.
   */
  outbound_resource_status: MessageInteractionResourceStatus;
  /**
   * The type of the Outbound Resource, Call or Message.
   */
  outbound_resource_type: string;
  /**
   * The URL of the Twilio resource.
   */
  outbound_resource_url: string;
  /**
   * The unique SID identifier of the Participant.
   */
  participant_sid: string;
  /**
   * The unique SID identifier of the Service.
   */
  service_sid: string;
  /**
   * The unique SID identifier of the Session.
   */
  session_sid: string;
  /**
   * A 34 character string that uniquely identifies this Message Interaction.
   */
  sid: string;
  /**
   * The Type of this Message Interaction. One of `message`, `voice` or `unknown`.
   */
  type: MessageInteractionType;
  /**
   * The URL of this resource.
   */
  url: string;
}

interface MessageInteractionPayload extends MessageInteractionResource, Page.TwilioResponsePayload {
}

interface MessageInteractionSolution {
  participantSid: string;
  serviceSid: string;
  sessionSid: string;
}

interface MessageInteractionListCreateOptions {
  /**
   * The body
   */
  body?: string;
  /**
   * The media_url
   */
  mediaUrl?: string[];
}

interface MessageInteractionListEachOptions extends ListEachOptions<MessageInteractionInstance> {
}

interface MessageInteractionListOptions extends ListOptions<MessageInteractionInstance> {
}

interface MessageInteractionListPageOptions extends PageOptions<MessageInteractionPage> {
}

interface MessageInteractionListInstance {
  /**
   * Gets context of a single MessageInteraction resource
   *
   * @param sid - A string that uniquely identifies this Message Interaction.
   */
  (sid: string): MessageInteractionContext;
  /**
   * create a MessageInteractionInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed MessageInteractionInstance
   */
  create(opts?: MessageInteractionListCreateOptions): Promise<MessageInteractionInstance>;
  /**
   * create a MessageInteractionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: MessageInteractionListCreateOptions, callback: (error: Error | null, items: MessageInteractionInstance) => any): void;
  /**
   * create a MessageInteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback: (error: Error | null, items: MessageInteractionInstance) => any): void;
  /**
   * Streams MessageInteractionInstance records from the API.
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
  each(opts?: MessageInteractionListEachOptions): void;
  /**
   * Streams MessageInteractionInstance records from the API.
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
  each(callback: (item: MessageInteractionInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single MessageInteraction resource
   *
   * @param sid - A string that uniquely identifies this Message Interaction.
   */
  get(sid: string): MessageInteractionContext;
  /**
   * Retrieve a single target page of MessageInteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<MessageInteractionPage>;
  /**
   * Retrieve a single target page of MessageInteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: MessageInteractionPage) => any): void;
  /**
   * Lists MessageInteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: MessageInteractionListOptions): Promise<MessageInteractionInstance[]>;
  /**
   * Lists MessageInteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: MessageInteractionListOptions, callback: (error: Error | null, items: MessageInteractionInstance[]) => any): void;
  /**
   * Lists MessageInteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: MessageInteractionInstance[]) => any): void;
  /**
   * Retrieve a single page of MessageInteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: MessageInteractionListPageOptions): Promise<MessageInteractionPage>;
  /**
   * Retrieve a single page of MessageInteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: MessageInteractionListPageOptions, callback: (error: Error | null, items: MessageInteractionPage) => any): void;
  /**
   * Retrieve a single page of MessageInteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: MessageInteractionPage) => any): void;
}

declare class MessageInteractionPage extends Page<V1, MessageInteractionPayload, MessageInteractionResource, MessageInteractionInstance> {
  constructor(version: V1, response: Response<string>, solution: MessageInteractionSolution);

  /**
   * Build an instance of MessageInteractionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MessageInteractionPayload): MessageInteractionInstance;
}

declare class MessageInteractionInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param participantSid - Participant Sid.
   * @param sid - A string that uniquely identifies this Message Interaction.
   */
  constructor(version: V1, payload: MessageInteractionPayload, serviceSid: string, sessionSid: string, participantSid: string, sid: string);

  private _proxy: MessageInteractionContext;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * Further details about an interaction.
   */
  data: string;
  /**
   * The date that this Message Interaction was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The date that this Message Interaction was updated, given in ISO 8601 format.
   */
  dateUpdated: Date;
  /**
   * fetch a MessageInteractionInstance
   *
   * @returns Promise that resolves to processed MessageInteractionInstance
   */
  fetch(): Promise<MessageInteractionInstance>;
  /**
   * fetch a MessageInteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: MessageInteractionInstance) => any): void;
  /**
   * The unique SID identifier of the Inbound Participant.
   */
  inboundParticipantSid: string;
  /**
   * The unique SID identifier of the Inbound Resource.
   */
  inboundResourceSid: string;
  /**
   * The Inbound Resource Status of this Message Interaction. One of `accepted`, `answered`, `busy`, `canceled`, `completed`, `deleted`, `delivered`, `delivery-unknown`, `failed`, `in-progress`, `initiated`, `no-answer`, `queued`, `received`, `receiving`, `ringing`, `scheduled`, `sending`, `sent`, `undelivered` or `unknown`.
   */
  inboundResourceStatus: MessageInteractionResourceStatus;
  /**
   * The type of the Inbound Resource, Call or Message.
   */
  inboundResourceType: string;
  /**
   * The URL of the Twilio resource.
   */
  inboundResourceUrl: string;
  /**
   * The unique SID identifier of the Outbound Participant.
   */
  outboundParticipantSid: string;
  /**
   * The unique SID identifier of the Outbound Resource.
   */
  outboundResourceSid: string;
  /**
   * The Outbound Resource Status of this Message Interaction. One of `accepted`, `answered`, `busy`, `canceled`, `completed`, `deleted`, `delivered`, `delivery-unknown`, `failed`, `in-progress`, `initiated`, `no-answer`, `queued`, `received`, `receiving`, `ringing`, `scheduled`, `sending`, `sent`, `undelivered` or `unknown`.
   */
  outboundResourceStatus: MessageInteractionResourceStatus;
  /**
   * The type of the Outbound Resource, Call or Message.
   */
  outboundResourceType: string;
  /**
   * The URL of the Twilio resource.
   */
  outboundResourceUrl: string;
  /**
   * The unique SID identifier of the Participant.
   */
  participantSid: string;
  /**
   * The unique SID identifier of the Service.
   */
  serviceSid: string;
  /**
   * The unique SID identifier of the Session.
   */
  sessionSid: string;
  /**
   * A 34 character string that uniquely identifies this Message Interaction.
   */
  sid: string;
  /**
   * The Type of this Message Interaction. One of `message`, `voice` or `unknown`.
   */
  type: MessageInteractionType;
  /**
   * The URL of this resource.
   */
  url: string;
}

declare class MessageInteractionContext {
  constructor(version: V1, serviceSid: string, sessionSid: string, participantSid: string, sid: string);

  /**
   * fetch a MessageInteractionInstance
   *
   * @returns Promise that resolves to processed MessageInteractionInstance
   */
  fetch(): Promise<MessageInteractionInstance>;
  /**
   * fetch a MessageInteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: MessageInteractionInstance) => any): void;
}

export {MessageInteractionListCreateOptions, MessageInteractionResourceStatus, MessageInteractionPage, MessageInteractionListInstance, MessageInteractionList, MessageInteractionPayload, MessageInteractionType, MessageInteractionContext, MessageInteractionListOptions, MessageInteractionListPageOptions, MessageInteractionSolution, MessageInteractionResource, MessageInteractionInstance, MessageInteractionListEachOptions}

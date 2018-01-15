/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Proxy = require('../../../../Proxy');
import Response = require('../../../../../../http/response');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../../interfaces';

declare function MessageInteractionList(version: Proxy, serviceSid: string, sessionSid: string, participantSid: string): MessageInteractionListInstance

type MessageInteractionStatus = 'completed'|'in-progress'|'failed';

type MessageInteractionResourceStatus = 'queued'|'sending'|'sent'|'failed'|'delivered'|'undelivered';

interface MessageInteractionResource {
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
  inbound_resource_status: MessageInteractionResourceStatus;
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
  outbound_resource_status: MessageInteractionResourceStatus;
  /**
   * The Twilio object type of the outbound resource.
   */
  outbound_resource_type: string;
  /**
   * The URL of the outbound resource.
   */
  outbound_resource_url: string;
  /**
   * The participant_sid
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
   * A 34 character string that uniquely identifies this Interaction.
   */
  sid: string;
  /**
   * The Status of this Interaction. One of `completed`, `in-progress` or `failed`.
   */
  status: MessageInteractionStatus;
  /**
   * The URL of this Interaction.
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
   * The text body of the message to send to the Participant. Up to 1600 characters long.
   */
  body?: string;
  /**
   * The public url of an image or video to send to the Participant.
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
   * @param sid - A string that uniquely identifies this Interaction.
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
   * @param sid - A string that uniquely identifies this Interaction.
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

declare class MessageInteractionPage extends Page<Proxy, MessageInteractionPayload, MessageInteractionResource, MessageInteractionInstance> {
  constructor(version: Proxy, response: Response<string>, solution: MessageInteractionSolution);

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
   * @param sid - A string that uniquely identifies this Interaction.
   */
  constructor(version: Proxy, payload: MessageInteractionPayload, serviceSid: string, sessionSid: string, participantSid: string, sid: string);

  private _proxy: MessageInteractionContext;
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
  inboundResourceStatus: MessageInteractionResourceStatus;
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
  outboundResourceStatus: MessageInteractionResourceStatus;
  /**
   * The Twilio object type of the outbound resource.
   */
  outboundResourceType: string;
  /**
   * The URL of the outbound resource.
   */
  outboundResourceUrl: string;
  /**
   * The participant_sid
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
   * A 34 character string that uniquely identifies this Interaction.
   */
  sid: string;
  /**
   * The Status of this Interaction. One of `completed`, `in-progress` or `failed`.
   */
  status: MessageInteractionStatus;
  /**
   * The URL of this Interaction.
   */
  url: string;
}

declare class MessageInteractionContext {
  constructor(version: Proxy, serviceSid: string, sessionSid: string, participantSid: string, sid: string);

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

export {MessageInteractionListOptions, MessageInteractionResourceStatus, MessageInteractionSolution, MessageInteractionListCreateOptions, MessageInteractionInstance, MessageInteractionPage, MessageInteractionResource, MessageInteractionContext, MessageInteractionStatus, MessageInteractionList, MessageInteractionListPageOptions, MessageInteractionPayload, MessageInteractionListEachOptions, MessageInteractionListInstance}

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
import { MessageInteractionListInstance } from './participant/messageInteraction';

declare function ParticipantList(version: Proxy, serviceSid: string, sessionSid: string): ParticipantListInstance

type ParticipantParticipantType = 'sms'|'voice'|'phone';

interface ParticipantResource {
  /**
   * The unique SID identifier of the Account.
   */
  account_sid: string;
  /**
   * The date that this Participant was created, given in ISO 8601 format.
   */
  date_created: Date;
  /**
   * The date that this Participant was updated, given in ISO 8601 format.
   */
  date_updated: Date;
  /**
   * A human readable description of this resource, up to 64 characters.
   */
  friendly_name: string;
  /**
   * The Participant's contact identifier, normally a phone number.
   */
  identifier: string;
  /**
   * Contains a dictionary of URL links to nested resources of this Participant.
   */
  links: string;
  /**
   * The Type of this Participant. One of `sms`, `voice` or `phone`.
   */
  participant_type: ParticipantParticipantType;
  /**
   * The Twilio Resource identifier that this Participant communicates with, normally a phone number.
   */
  proxy_identifier: string;
  /**
   * The unique SID identifier of the Service.
   */
  service_sid: string;
  /**
   * The unique SID identifier of the Session.
   */
  session_sid: string;
  /**
   * A 34 character string that uniquely identifies this Participant.
   */
  sid: string;
  /**
   * The URL of this resource.
   */
  url: string;
}

interface ParticipantPayload extends ParticipantResource, Page.TwilioResponsePayload {
}

interface ParticipantSolution {
  serviceSid: string;
  sessionSid: string;
}

interface ParticipantListEachOptions extends ListEachOptions<ParticipantInstance> {
  /**
   * The Participant's contact identifier, normally a phone number.
   */
  identifier?: string;
  /**
   * The Type of this Participant. One of `sms`, `voice` or `phone`.
   */
  participantType?: ParticipantParticipantType;
}

interface ParticipantListOptions extends ListOptions<ParticipantInstance> {
  /**
   * The Participant's contact identifier, normally a phone number.
   */
  identifier?: string;
  /**
   * The Type of this Participant. One of `sms`, `voice` or `phone`.
   */
  participantType?: ParticipantParticipantType;
}

interface ParticipantListPageOptions extends PageOptions<ParticipantPage> {
  /**
   * The Participant's contact identifier, normally a phone number.
   */
  identifier?: string;
  /**
   * The Type of this Participant. One of `sms`, `voice` or `phone`.
   */
  participantType?: ParticipantParticipantType;
}

interface ParticipantListCreateOptions {
  /**
   * A human readable description of this resource, up to 64 characters.
   */
  friendlyName?: string;
  /**
   * The Participant's contact identifier, normally a phone number.
   */
  identifier: string;
  /**
   * The Type of this Participant. One of `sms`, `voice` or `phone`.
   */
  participantType?: ParticipantParticipantType;
}

interface ParticipantListInstance {
  /**
   * Gets context of a single Participant resource
   *
   * @param sid - A string that uniquely identifies this Participant.
   */
  (sid: string): ParticipantContext;
  /**
   * create a ParticipantInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ParticipantInstance
   */
  create(opts: ParticipantListCreateOptions): Promise<ParticipantInstance>;
  /**
   * create a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ParticipantListCreateOptions, callback: (error: Error | null, items: ParticipantInstance) => any): void;
  /**
   * Streams ParticipantInstance records from the API.
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
  each(opts?: ParticipantListEachOptions): void;
  /**
   * Streams ParticipantInstance records from the API.
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
  each(callback: (item: ParticipantInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Participant resource
   *
   * @param sid - A string that uniquely identifies this Participant.
   */
  get(sid: string): ParticipantContext;
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<ParticipantPage>;
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: ParticipantPage) => any): void;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: ParticipantListOptions): Promise<ParticipantInstance[]>;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: ParticipantListOptions, callback: (error: Error | null, items: ParticipantInstance[]) => any): void;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: ParticipantInstance[]) => any): void;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: ParticipantListPageOptions): Promise<ParticipantPage>;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: ParticipantListPageOptions, callback: (error: Error | null, items: ParticipantPage) => any): void;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: ParticipantPage) => any): void;
}

interface ParticipantListFetchOptions {
  /**
   * A human readable description of this resource, up to 64 characters.
   */
  friendlyName?: string;
  /**
   * The Participant's contact identifier, normally a phone number.
   */
  identifier?: string;
  /**
   * The Type of this Participant. One of `sms`, `voice` or `phone`.
   */
  participantType?: ParticipantParticipantType;
}

interface ParticipantListFetchOptions {
  /**
   * A human readable description of this resource, up to 64 characters.
   */
  friendlyName?: string;
  /**
   * The Participant's contact identifier, normally a phone number.
   */
  identifier?: string;
  /**
   * The Type of this Participant. One of `sms`, `voice` or `phone`.
   */
  participantType?: ParticipantParticipantType;
}

declare class ParticipantPage extends Page<Proxy, ParticipantPayload, ParticipantResource, ParticipantInstance> {
  constructor(version: Proxy, response: Response<string>, solution: ParticipantSolution);

  /**
   * Build an instance of ParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ParticipantPayload): ParticipantInstance;
}

declare class ParticipantInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param sid - A string that uniquely identifies this Participant.
   */
  constructor(version: Proxy, payload: ParticipantPayload, serviceSid: string, sessionSid: string, sid: string);

  private _proxy: ParticipantContext;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * The date that this Participant was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The date that this Participant was updated, given in ISO 8601 format.
   */
  dateUpdated: Date;
  /**
   * fetch a ParticipantInstance
   *
   * @returns Promise that resolves to processed ParticipantInstance
   */
  fetch(): Promise<ParticipantInstance>;
  /**
   * fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ParticipantInstance) => any): void;
  /**
   * A human readable description of this resource, up to 64 characters.
   */
  friendlyName: string;
  /**
   * The Participant's contact identifier, normally a phone number.
   */
  identifier: string;
  /**
   * Contains a dictionary of URL links to nested resources of this Participant.
   */
  links: string;
  messageInteractions(): MessageInteractionListInstance;
  /**
   * The Type of this Participant. One of `sms`, `voice` or `phone`.
   */
  participantType: ParticipantParticipantType;
  /**
   * The Twilio Resource identifier that this Participant communicates with, normally a phone number.
   */
  proxyIdentifier: string;
  /**
   * remove a ParticipantInstance
   *
   * @returns Promise that resolves to processed ParticipantInstance
   */
  remove(): Promise<ParticipantInstance>;
  /**
   * remove a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ParticipantInstance) => any): void;
  /**
   * The unique SID identifier of the Service.
   */
  serviceSid: string;
  /**
   * The unique SID identifier of the Session.
   */
  sessionSid: string;
  /**
   * A 34 character string that uniquely identifies this Participant.
   */
  sid: string;
  /**
   * update a ParticipantInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ParticipantInstance
   */
  update(opts?: ParticipantListFetchOptions): Promise<ParticipantInstance>;
  /**
   * update a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ParticipantListFetchOptions, callback: (error: Error | null, items: ParticipantInstance) => any): void;
  /**
   * update a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ParticipantInstance) => any): void;
  /**
   * The URL of this resource.
   */
  url: string;
}

declare class ParticipantContext {
  constructor(version: Proxy, serviceSid: string, sessionSid: string, sid: string);

  /**
   * fetch a ParticipantInstance
   *
   * @returns Promise that resolves to processed ParticipantInstance
   */
  fetch(): Promise<ParticipantInstance>;
  /**
   * fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ParticipantInstance) => any): void;
  messageInteractions: MessageInteractionListInstance;
  /**
   * remove a ParticipantInstance
   *
   * @returns Promise that resolves to processed ParticipantInstance
   */
  remove(): Promise<ParticipantInstance>;
  /**
   * remove a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ParticipantInstance) => any): void;
  /**
   * update a ParticipantInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ParticipantInstance
   */
  update(opts?: ParticipantListFetchOptions): Promise<ParticipantInstance>;
  /**
   * update a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ParticipantListFetchOptions, callback: (error: Error | null, items: ParticipantInstance) => any): void;
  /**
   * update a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ParticipantInstance) => any): void;
}

export {ParticipantResource, ParticipantListInstance, ParticipantParticipantType, ParticipantListEachOptions, ParticipantListPageOptions, ParticipantPayload, ParticipantInstance, ParticipantPage, ParticipantListCreateOptions, ParticipantListFetchOptions, ParticipantListOptions, ParticipantList, ParticipantSolution, ParticipantContext}

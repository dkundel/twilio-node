/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';

declare function ParticipantList(version: V2010, accountSid: string, conferenceSid: string): ParticipantListInstance

type ParticipantStatus = 'queued'|'connecting'|'ringing'|'connected'|'complete'|'failed';

interface ParticipantResource {
  /**
   * The unique id of the Account that created this conference
   */
  account_sid: string;
  /**
   * A 34 character string that uniquely identifies the call that is connected to this conference
   */
  call_sid: string;
  /**
   * A 34 character string that identifies the conference this participant is in
   */
  conference_sid: string;
  /**
   * The date that this resource was created, given in RFC 2822 format.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated, given in RFC 2822 format.
   */
  date_updated: Date;
  /**
   * Was the `endConferenceOnExit` set on this participant (`true` or `false`)?
   */
  end_conference_on_exit: boolean;
  /**
   * The hold
   */
  hold: boolean;
  /**
   * `true` if this participant is currently muted. `false` otherwise.
   */
  muted: boolean;
  /**
   * Was the `startConferenceOnEnter` attribute set on this participant (`true` or `false`)?
   */
  start_conference_on_enter: boolean;
  /**
   * The status
   */
  status: ParticipantStatus;
  /**
   * he URI for this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
}

interface ParticipantPayload extends ParticipantResource, Page.TwilioResponsePayload {
}

interface ParticipantSolution {
  accountSid: string;
  conferenceSid: string;
}

interface ParticipantListCreateOptions {
  /**
   * The beep
   */
  beep?: string;
  /**
   * The conference_record
   */
  conferenceRecord?: string;
  /**
   * The conference_recording_status_callback
   */
  conferenceRecordingStatusCallback?: string;
  /**
   * The conference_recording_status_callback_event
   */
  conferenceRecordingStatusCallbackEvent?: string[];
  /**
   * The conference_recording_status_callback_method
   */
  conferenceRecordingStatusCallbackMethod?: string;
  /**
   * The conference_status_callback
   */
  conferenceStatusCallback?: string;
  /**
   * The conference_status_callback_event
   */
  conferenceStatusCallbackEvent?: string[];
  /**
   * The conference_status_callback_method
   */
  conferenceStatusCallbackMethod?: string;
  /**
   * The conference_trim
   */
  conferenceTrim?: string;
  /**
   * The early_media
   */
  earlyMedia?: boolean;
  /**
   * The end_conference_on_exit
   */
  endConferenceOnExit?: boolean;
  /**
   * The from
   */
  from: string;
  /**
   * The max_participants
   */
  maxParticipants?: number;
  /**
   * The muted
   */
  muted?: boolean;
  /**
   * The record
   */
  record?: boolean;
  /**
   * The recording_channels
   */
  recordingChannels?: string;
  /**
   * The recording_status_callback
   */
  recordingStatusCallback?: string;
  /**
   * The recording_status_callback_event
   */
  recordingStatusCallbackEvent?: string[];
  /**
   * The recording_status_callback_method
   */
  recordingStatusCallbackMethod?: string;
  /**
   * The region
   */
  region?: string;
  /**
   * The sip_auth_password
   */
  sipAuthPassword?: string;
  /**
   * The sip_auth_username
   */
  sipAuthUsername?: string;
  /**
   * The start_conference_on_enter
   */
  startConferenceOnEnter?: boolean;
  /**
   * The status_callback
   */
  statusCallback?: string;
  /**
   * The status_callback_event
   */
  statusCallbackEvent?: string[];
  /**
   * The status_callback_method
   */
  statusCallbackMethod?: string;
  /**
   * The timeout
   */
  timeout?: number;
  /**
   * The to
   */
  to: string;
  /**
   * The wait_method
   */
  waitMethod?: string;
  /**
   * The wait_url
   */
  waitUrl?: string;
}

interface ParticipantListEachOptions extends ListEachOptions<ParticipantInstance> {
  /**
   * The hold
   */
  hold?: boolean;
  /**
   * Only show participants that are muted or unmuted
   */
  muted?: boolean;
}

interface ParticipantListOptions extends ListOptions<ParticipantInstance> {
  /**
   * The hold
   */
  hold?: boolean;
  /**
   * Only show participants that are muted or unmuted
   */
  muted?: boolean;
}

interface ParticipantListPageOptions extends PageOptions<ParticipantPage> {
  /**
   * The hold
   */
  hold?: boolean;
  /**
   * Only show participants that are muted or unmuted
   */
  muted?: boolean;
}

interface ParticipantListInstance {
  /**
   * Gets context of a single Participant resource
   *
   * @param callSid - The call_sid
   */
  (callSid: string): ParticipantContext;
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
   * @param callSid - The call_sid
   */
  get(callSid: string): ParticipantContext;
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
   * The announce_method
   */
  announceMethod?: string;
  /**
   * The announce_url
   */
  announceUrl?: string;
  /**
   * The hold
   */
  hold?: boolean;
  /**
   * The hold_method
   */
  holdMethod?: string;
  /**
   * The hold_url
   */
  holdUrl?: string;
  /**
   * Indicates if the participant should be muted
   */
  muted?: boolean;
}

interface ParticipantListFetchOptions {
  /**
   * The announce_method
   */
  announceMethod?: string;
  /**
   * The announce_url
   */
  announceUrl?: string;
  /**
   * The hold
   */
  hold?: boolean;
  /**
   * The hold_method
   */
  holdMethod?: string;
  /**
   * The hold_url
   */
  holdUrl?: string;
  /**
   * Indicates if the participant should be muted
   */
  muted?: boolean;
}

declare class ParticipantPage extends Page<V2010, ParticipantPayload, ParticipantResource, ParticipantInstance> {
  constructor(version: V2010, response: Response<string>, solution: ParticipantSolution);

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
   * @param accountSid - The account_sid
   * @param conferenceSid - The string that uniquely identifies this conference
   * @param callSid - The call_sid
   */
  constructor(version: V2010, payload: ParticipantPayload, accountSid: string, conferenceSid: string, callSid: string);

  private _proxy: ParticipantContext;
  /**
   * The unique id of the Account that created this conference
   */
  accountSid: string;
  /**
   * A 34 character string that uniquely identifies the call that is connected to this conference
   */
  callSid: string;
  /**
   * A 34 character string that identifies the conference this participant is in
   */
  conferenceSid: string;
  /**
   * The date that this resource was created, given in RFC 2822 format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated, given in RFC 2822 format.
   */
  dateUpdated: Date;
  /**
   * Was the `endConferenceOnExit` set on this participant (`true` or `false`)?
   */
  endConferenceOnExit: boolean;
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
   * The hold
   */
  hold: boolean;
  /**
   * `true` if this participant is currently muted. `false` otherwise.
   */
  muted: boolean;
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
   * Was the `startConferenceOnEnter` attribute set on this participant (`true` or `false`)?
   */
  startConferenceOnEnter: boolean;
  /**
   * The status
   */
  status: ParticipantStatus;
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
   * he URI for this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
}

declare class ParticipantContext {
  constructor(version: V2010, accountSid: string, conferenceSid: string, callSid: string);

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

export {ParticipantListPageOptions, ParticipantListEachOptions, ParticipantList, ParticipantPage, ParticipantSolution, ParticipantListInstance, ParticipantResource, ParticipantStatus, ParticipantListCreateOptions, ParticipantPayload, ParticipantInstance, ParticipantContext, ParticipantListOptions, ParticipantListFetchOptions}
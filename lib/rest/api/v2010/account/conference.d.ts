/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { ParticipantListInstance } from './conference/participant';

declare function ConferenceList(version: V2010, accountSid: string): ConferenceListInstance

type ConferenceStatus = 'init'|'in-progress'|'completed';

type ConferenceUpdateStatus = 'completed';

interface ConferenceResource {
  /**
   * The unique id of the Account] responsible for creating this conference.
   */
  account_sid: string;
  /**
   * The api_version
   */
  api_version: string;
  /**
   * The date that this conference was created, given as GMT in RFC 2822 format.
   */
  date_created: Date;
  /**
   * The date that this conference was last updated, given as GMT in RFC 2822 format.
   */
  date_updated: Date;
  /**
   * A user provided string that identifies this conference room.
   */
  friendly_name: string;
  /**
   * The region
   */
  region: string;
  /**
   * A 34 character string that uniquely identifies this conference.
   */
  sid: string;
  /**
   * A string representing the status of the conference. May be `init`, `in-progress`, or `completed`.
   */
  status: ConferenceStatus;
  /**
   * The subresource_uris
   */
  subresource_uris: string;
  /**
   * he URI for this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
}

interface ConferencePayload extends ConferenceResource, Page.TwilioResponsePayload {
}

interface ConferenceSolution {
  accountSid: string;
}

interface ConferenceListEachOptions extends ListEachOptions<ConferenceInstance> {
  /**
   * Only show conferences that started on this date, given as YYYY-MM-DD. You can also specify inequality such as DateCreated&lt;=YYYY-MM-DD
   */
  dateCreated?: Date;
  /**
   * Only show conferences that were last updated on this date, given as YYYY-MM-DD. You can also specify inequality such as DateUpdated&gt;=YYYY-MM-DD
   */
  dateUpdated?: Date;
  /**
   * Only show results who's friendly name exactly matches the string
   */
  friendlyName?: string;
  /**
   * A string representing the status of the conference. May be `init`, `in-progress`, or `completed`.
   */
  status?: ConferenceStatus;
}

interface ConferenceListOptions extends ListOptions<ConferenceInstance> {
  /**
   * Only show conferences that started on this date, given as YYYY-MM-DD. You can also specify inequality such as DateCreated&lt;=YYYY-MM-DD
   */
  dateCreated?: Date;
  /**
   * Only show conferences that were last updated on this date, given as YYYY-MM-DD. You can also specify inequality such as DateUpdated&gt;=YYYY-MM-DD
   */
  dateUpdated?: Date;
  /**
   * Only show results who's friendly name exactly matches the string
   */
  friendlyName?: string;
  /**
   * A string representing the status of the conference. May be `init`, `in-progress`, or `completed`.
   */
  status?: ConferenceStatus;
}

interface ConferenceListPageOptions extends PageOptions<ConferencePage> {
  /**
   * Only show conferences that started on this date, given as YYYY-MM-DD. You can also specify inequality such as DateCreated&lt;=YYYY-MM-DD
   */
  dateCreated?: Date;
  /**
   * Only show conferences that were last updated on this date, given as YYYY-MM-DD. You can also specify inequality such as DateUpdated&gt;=YYYY-MM-DD
   */
  dateUpdated?: Date;
  /**
   * Only show results who's friendly name exactly matches the string
   */
  friendlyName?: string;
  /**
   * A string representing the status of the conference. May be `init`, `in-progress`, or `completed`.
   */
  status?: ConferenceStatus;
}

interface ConferenceListInstance {
  /**
   * Gets context of a single Conference resource
   *
   * @param sid - Fetch by unique conference Sid
   */
  (sid: string): ConferenceContext;
  /**
   * Streams ConferenceInstance records from the API.
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
  each(opts?: ConferenceListEachOptions): void;
  /**
   * Streams ConferenceInstance records from the API.
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
  each(callback: (item: ConferenceInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Conference resource
   *
   * @param sid - Fetch by unique conference Sid
   */
  get(sid: string): ConferenceContext;
  /**
   * Retrieve a single target page of ConferenceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<ConferencePage>;
  /**
   * Retrieve a single target page of ConferenceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: ConferencePage) => any): void;
  /**
   * Lists ConferenceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: ConferenceListOptions): Promise<ConferenceInstance[]>;
  /**
   * Lists ConferenceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: ConferenceListOptions, callback: (error: Error | null, items: ConferenceInstance[]) => any): void;
  /**
   * Lists ConferenceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: ConferenceInstance[]) => any): void;
  /**
   * Retrieve a single page of ConferenceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: ConferenceListPageOptions): Promise<ConferencePage>;
  /**
   * Retrieve a single page of ConferenceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: ConferenceListPageOptions, callback: (error: Error | null, items: ConferencePage) => any): void;
  /**
   * Retrieve a single page of ConferenceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: ConferencePage) => any): void;
}

interface ConferenceListFetchOptions {
  /**
   * The status
   */
  status?: ConferenceUpdateStatus;
}

interface ConferenceListFetchOptions {
  /**
   * The status
   */
  status?: ConferenceUpdateStatus;
}

declare class ConferencePage extends Page<V2010, ConferencePayload, ConferenceResource, ConferenceInstance> {
  constructor(version: V2010, response: Response<string>, solution: ConferenceSolution);

  /**
   * Build an instance of ConferenceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConferencePayload): ConferenceInstance;
}

declare class ConferenceInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique conference Sid
   */
  constructor(version: V2010, payload: ConferencePayload, accountSid: string, sid: string);

  private _proxy: ConferenceContext;
  /**
   * The unique id of the Account] responsible for creating this conference.
   */
  accountSid: string;
  /**
   * The api_version
   */
  apiVersion: string;
  /**
   * The date that this conference was created, given as GMT in RFC 2822 format.
   */
  dateCreated: Date;
  /**
   * The date that this conference was last updated, given as GMT in RFC 2822 format.
   */
  dateUpdated: Date;
  /**
   * fetch a ConferenceInstance
   *
   * @returns Promise that resolves to processed ConferenceInstance
   */
  fetch(): Promise<ConferenceInstance>;
  /**
   * fetch a ConferenceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ConferenceInstance) => any): void;
  /**
   * A user provided string that identifies this conference room.
   */
  friendlyName: string;
  participants(): ParticipantListInstance;
  /**
   * The region
   */
  region: string;
  /**
   * A 34 character string that uniquely identifies this conference.
   */
  sid: string;
  /**
   * A string representing the status of the conference. May be `init`, `in-progress`, or `completed`.
   */
  status: ConferenceStatus;
  /**
   * The subresource_uris
   */
  subresourceUris: string;
  /**
   * update a ConferenceInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ConferenceInstance
   */
  update(opts?: ConferenceListFetchOptions): Promise<ConferenceInstance>;
  /**
   * update a ConferenceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ConferenceListFetchOptions, callback: (error: Error | null, items: ConferenceInstance) => any): void;
  /**
   * update a ConferenceInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ConferenceInstance) => any): void;
  /**
   * he URI for this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
}

declare class ConferenceContext {
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a ConferenceInstance
   *
   * @returns Promise that resolves to processed ConferenceInstance
   */
  fetch(): Promise<ConferenceInstance>;
  /**
   * fetch a ConferenceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ConferenceInstance) => any): void;
  participants: ParticipantListInstance;
  /**
   * update a ConferenceInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ConferenceInstance
   */
  update(opts?: ConferenceListFetchOptions): Promise<ConferenceInstance>;
  /**
   * update a ConferenceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ConferenceListFetchOptions, callback: (error: Error | null, items: ConferenceInstance) => any): void;
  /**
   * update a ConferenceInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ConferenceInstance) => any): void;
}

export {ConferenceContext, ConferenceResource, ConferenceSolution, ConferencePage, ConferenceListEachOptions, ConferenceInstance, ConferenceListFetchOptions, ConferenceListInstance, ConferencePayload, ConferenceListOptions, ConferenceList, ConferenceListPageOptions, ConferenceUpdateStatus, ConferenceStatus}
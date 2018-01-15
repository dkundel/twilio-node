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

declare function OutgoingCallerIdList(version: V2010, accountSid: string): OutgoingCallerIdListInstance

interface OutgoingCallerIdResource {
  /**
   * The unique id of the Account responsible for this Caller Id.
   */
  account_sid: string;
  /**
   * The date that this resource was created, given in RFC 2822 format.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated, given in RFC 2822 format.
   */
  date_updated: Date;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long. By default, the `FriendlyName` is a nicely formatted version of the phone number.
   */
  friendly_name: string;
  /**
   * The incoming phone number. Formatted with a '+' and country code e.g., +16175551212 (E.164 format).
   */
  phone_number: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
}

interface OutgoingCallerIdPayload extends OutgoingCallerIdResource, Page.TwilioResponsePayload {
}

interface OutgoingCallerIdSolution {
  accountSid: string;
}

interface OutgoingCallerIdListEachOptions extends ListEachOptions<OutgoingCallerIdInstance> {
  /**
   * Only show the caller id resource that exactly matches this name
   */
  friendlyName?: string;
  /**
   * Only show the caller id resource that exactly matches this phone number
   */
  phoneNumber?: string;
}

interface OutgoingCallerIdListOptions extends ListOptions<OutgoingCallerIdInstance> {
  /**
   * Only show the caller id resource that exactly matches this name
   */
  friendlyName?: string;
  /**
   * Only show the caller id resource that exactly matches this phone number
   */
  phoneNumber?: string;
}

interface OutgoingCallerIdListPageOptions extends PageOptions<OutgoingCallerIdPage> {
  /**
   * Only show the caller id resource that exactly matches this name
   */
  friendlyName?: string;
  /**
   * Only show the caller id resource that exactly matches this phone number
   */
  phoneNumber?: string;
}

interface OutgoingCallerIdListInstance {
  /**
   * Gets context of a single OutgoingCallerId resource
   *
   * @param sid - Fetch by unique outgoing-caller-id Sid
   */
  (sid: string): OutgoingCallerIdContext;
  /**
   * Streams OutgoingCallerIdInstance records from the API.
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
  each(opts?: OutgoingCallerIdListEachOptions): void;
  /**
   * Streams OutgoingCallerIdInstance records from the API.
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
  each(callback: (item: OutgoingCallerIdInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single OutgoingCallerId resource
   *
   * @param sid - Fetch by unique outgoing-caller-id Sid
   */
  get(sid: string): OutgoingCallerIdContext;
  /**
   * Retrieve a single target page of OutgoingCallerIdInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<OutgoingCallerIdPage>;
  /**
   * Retrieve a single target page of OutgoingCallerIdInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: OutgoingCallerIdPage) => any): void;
  /**
   * Lists OutgoingCallerIdInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: OutgoingCallerIdListOptions): Promise<OutgoingCallerIdInstance[]>;
  /**
   * Lists OutgoingCallerIdInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: OutgoingCallerIdListOptions, callback: (error: Error | null, items: OutgoingCallerIdInstance[]) => any): void;
  /**
   * Lists OutgoingCallerIdInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: OutgoingCallerIdInstance[]) => any): void;
  /**
   * Retrieve a single page of OutgoingCallerIdInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: OutgoingCallerIdListPageOptions): Promise<OutgoingCallerIdPage>;
  /**
   * Retrieve a single page of OutgoingCallerIdInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: OutgoingCallerIdListPageOptions, callback: (error: Error | null, items: OutgoingCallerIdPage) => any): void;
  /**
   * Retrieve a single page of OutgoingCallerIdInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: OutgoingCallerIdPage) => any): void;
}

interface OutgoingCallerIdListFetchOptions {
  /**
   * A human readable description of the caller ID
   */
  friendlyName?: string;
}

interface OutgoingCallerIdListFetchOptions {
  /**
   * A human readable description of the caller ID
   */
  friendlyName?: string;
}

declare class OutgoingCallerIdPage extends Page<V2010, OutgoingCallerIdPayload, OutgoingCallerIdResource, OutgoingCallerIdInstance> {
  constructor(version: V2010, response: Response<string>, solution: OutgoingCallerIdSolution);

  /**
   * Build an instance of OutgoingCallerIdInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: OutgoingCallerIdPayload): OutgoingCallerIdInstance;
}

declare class OutgoingCallerIdInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique outgoing-caller-id Sid
   */
  constructor(version: V2010, payload: OutgoingCallerIdPayload, accountSid: string, sid: string);

  private _proxy: OutgoingCallerIdContext;
  /**
   * The unique id of the Account responsible for this Caller Id.
   */
  accountSid: string;
  /**
   * The date that this resource was created, given in RFC 2822 format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated, given in RFC 2822 format.
   */
  dateUpdated: Date;
  /**
   * fetch a OutgoingCallerIdInstance
   *
   * @returns Promise that resolves to processed OutgoingCallerIdInstance
   */
  fetch(): Promise<OutgoingCallerIdInstance>;
  /**
   * fetch a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: OutgoingCallerIdInstance) => any): void;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long. By default, the `FriendlyName` is a nicely formatted version of the phone number.
   */
  friendlyName: string;
  /**
   * The incoming phone number. Formatted with a '+' and country code e.g., +16175551212 (E.164 format).
   */
  phoneNumber: string;
  /**
   * remove a OutgoingCallerIdInstance
   *
   * @returns Promise that resolves to processed OutgoingCallerIdInstance
   */
  remove(): Promise<OutgoingCallerIdInstance>;
  /**
   * remove a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: OutgoingCallerIdInstance) => any): void;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * update a OutgoingCallerIdInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed OutgoingCallerIdInstance
   */
  update(opts?: OutgoingCallerIdListFetchOptions): Promise<OutgoingCallerIdInstance>;
  /**
   * update a OutgoingCallerIdInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: OutgoingCallerIdListFetchOptions, callback: (error: Error | null, items: OutgoingCallerIdInstance) => any): void;
  /**
   * update a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: OutgoingCallerIdInstance) => any): void;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
}

declare class OutgoingCallerIdContext {
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a OutgoingCallerIdInstance
   *
   * @returns Promise that resolves to processed OutgoingCallerIdInstance
   */
  fetch(): Promise<OutgoingCallerIdInstance>;
  /**
   * fetch a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: OutgoingCallerIdInstance) => any): void;
  /**
   * remove a OutgoingCallerIdInstance
   *
   * @returns Promise that resolves to processed OutgoingCallerIdInstance
   */
  remove(): Promise<OutgoingCallerIdInstance>;
  /**
   * remove a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: OutgoingCallerIdInstance) => any): void;
  /**
   * update a OutgoingCallerIdInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed OutgoingCallerIdInstance
   */
  update(opts?: OutgoingCallerIdListFetchOptions): Promise<OutgoingCallerIdInstance>;
  /**
   * update a OutgoingCallerIdInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: OutgoingCallerIdListFetchOptions, callback: (error: Error | null, items: OutgoingCallerIdInstance) => any): void;
  /**
   * update a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: OutgoingCallerIdInstance) => any): void;
}

export {OutgoingCallerIdContext, OutgoingCallerIdPage, OutgoingCallerIdPayload, OutgoingCallerIdListPageOptions, OutgoingCallerIdList, OutgoingCallerIdListInstance, OutgoingCallerIdInstance, OutgoingCallerIdListEachOptions, OutgoingCallerIdListOptions, OutgoingCallerIdResource, OutgoingCallerIdSolution, OutgoingCallerIdListFetchOptions}

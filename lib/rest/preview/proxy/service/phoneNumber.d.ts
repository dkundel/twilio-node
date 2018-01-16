/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Proxy = require('../../Proxy');
import Response = require('../../../../http/response');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';

declare function PhoneNumberList(version: Proxy, serviceSid: string): PhoneNumberListInstance

interface PhoneNumberResource {
  /**
   * The unique SID identifier of the Account.
   */
  account_sid: string;
  /**
   * This is a set of boolean properties that indicate whether a phone number can receive calls or messages.  Possible capabilities are  `Voice`, `SMS`, and `MMS` with each having a value of either `true` or `false`.
   */
  capabilities: string;
  /**
   * The ISO 3166-1 alpha-2 code of the country where this phone number is located
   */
  country_code: string;
  /**
   * The date that this resource was created, given as GMT RFC 2822 format.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated, given as GMT RFC 2822 format.
   */
  date_updated: Date;
  /**
   * The phone number. e.g., +16175551212 (E.164 format)
   */
  phone_number: string;
  /**
   * The unique SID identifier of the Service.
   */
  service_sid: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The URL of this resource.
   */
  url: string;
}

interface PhoneNumberPayload extends PhoneNumberResource, Page.TwilioResponsePayload {
}

interface PhoneNumberSolution {
  serviceSid: string;
}

interface PhoneNumberListCreateOptions {
  /**
   * The phone-number Sid that uniquely identifies this resource
   */
  sid: string;
}

interface PhoneNumberListEachOptions extends ListEachOptions<PhoneNumberInstance> {
}

interface PhoneNumberListOptions extends ListOptions<PhoneNumberInstance> {
}

interface PhoneNumberListPageOptions extends PageOptions<PhoneNumberPage> {
}

interface PhoneNumberListInstance {
  /**
   * Gets context of a single PhoneNumber resource
   *
   * @param sid - Fetch by unique phone-number Sid
   */
  (sid: string): PhoneNumberContext;
  /**
   * create a PhoneNumberInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed PhoneNumberInstance
   */
  create(opts: PhoneNumberListCreateOptions): Promise<PhoneNumberInstance>;
  /**
   * create a PhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: PhoneNumberListCreateOptions, callback: (error: Error | null, items: PhoneNumberInstance) => any): void;
  /**
   * Streams PhoneNumberInstance records from the API.
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
  each(opts?: PhoneNumberListEachOptions): void;
  /**
   * Streams PhoneNumberInstance records from the API.
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
  each(callback: (item: PhoneNumberInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single PhoneNumber resource
   *
   * @param sid - Fetch by unique phone-number Sid
   */
  get(sid: string): PhoneNumberContext;
  /**
   * Retrieve a single target page of PhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<PhoneNumberPage>;
  /**
   * Retrieve a single target page of PhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: PhoneNumberPage) => any): void;
  /**
   * Lists PhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: PhoneNumberListOptions): Promise<PhoneNumberInstance[]>;
  /**
   * Lists PhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: PhoneNumberListOptions, callback: (error: Error | null, items: PhoneNumberInstance[]) => any): void;
  /**
   * Lists PhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: PhoneNumberInstance[]) => any): void;
  /**
   * Retrieve a single page of PhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: PhoneNumberListPageOptions): Promise<PhoneNumberPage>;
  /**
   * Retrieve a single page of PhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: PhoneNumberListPageOptions, callback: (error: Error | null, items: PhoneNumberPage) => any): void;
  /**
   * Retrieve a single page of PhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: PhoneNumberPage) => any): void;
}

declare class PhoneNumberPage extends Page<Proxy, PhoneNumberPayload, PhoneNumberResource, PhoneNumberInstance> {
  constructor(version: Proxy, response: Response<string>, solution: PhoneNumberSolution);

  /**
   * Build an instance of PhoneNumberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PhoneNumberPayload): PhoneNumberInstance;
}

declare class PhoneNumberInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - Fetch by unique phone-number Sid
   */
  constructor(version: Proxy, payload: PhoneNumberPayload, serviceSid: string, sid: string);

  private _proxy: PhoneNumberContext;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * This is a set of boolean properties that indicate whether a phone number can receive calls or messages.  Possible capabilities are  `Voice`, `SMS`, and `MMS` with each having a value of either `true` or `false`.
   */
  capabilities: string;
  /**
   * The ISO 3166-1 alpha-2 code of the country where this phone number is located
   */
  countryCode: string;
  /**
   * The date that this resource was created, given as GMT RFC 2822 format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated, given as GMT RFC 2822 format.
   */
  dateUpdated: Date;
  /**
   * fetch a PhoneNumberInstance
   *
   * @returns Promise that resolves to processed PhoneNumberInstance
   */
  fetch(): Promise<PhoneNumberInstance>;
  /**
   * fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: PhoneNumberInstance) => any): void;
  /**
   * The phone number. e.g., +16175551212 (E.164 format)
   */
  phoneNumber: string;
  /**
   * remove a PhoneNumberInstance
   *
   * @returns Promise that resolves to processed PhoneNumberInstance
   */
  remove(): Promise<PhoneNumberInstance>;
  /**
   * remove a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: PhoneNumberInstance) => any): void;
  /**
   * The unique SID identifier of the Service.
   */
  serviceSid: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The URL of this resource.
   */
  url: string;
}

declare class PhoneNumberContext {
  constructor(version: Proxy, serviceSid: string, sid: string);

  /**
   * fetch a PhoneNumberInstance
   *
   * @returns Promise that resolves to processed PhoneNumberInstance
   */
  fetch(): Promise<PhoneNumberInstance>;
  /**
   * fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: PhoneNumberInstance) => any): void;
  /**
   * remove a PhoneNumberInstance
   *
   * @returns Promise that resolves to processed PhoneNumberInstance
   */
  remove(): Promise<PhoneNumberInstance>;
  /**
   * remove a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: PhoneNumberInstance) => any): void;
}

export {PhoneNumberList, PhoneNumberPage, PhoneNumberResource, PhoneNumberListPageOptions, PhoneNumberListInstance, PhoneNumberListOptions, PhoneNumberSolution, PhoneNumberPayload, PhoneNumberListEachOptions, PhoneNumberContext, PhoneNumberListCreateOptions, PhoneNumberInstance}

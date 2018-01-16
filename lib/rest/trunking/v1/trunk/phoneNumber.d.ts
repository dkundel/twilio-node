/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';

declare function PhoneNumberList(version: V1, trunkSid: string): PhoneNumberListInstance

type PhoneNumberAddressRequirement = 'none'|'any'|'local'|'foreign';

interface PhoneNumberResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The address_requirements
   */
  address_requirements: PhoneNumberAddressRequirement;
  /**
   * The api_version
   */
  api_version: string;
  /**
   * The beta
   */
  beta: boolean;
  /**
   * The capabilities
   */
  capabilities: string;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The friendly_name
   */
  friendly_name: string;
  /**
   * The links
   */
  links: string;
  /**
   * The phone_number
   */
  phone_number: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The sms_application_sid
   */
  sms_application_sid: string;
  /**
   * The sms_fallback_method
   */
  sms_fallback_method: string;
  /**
   * The sms_fallback_url
   */
  sms_fallback_url: string;
  /**
   * The sms_method
   */
  sms_method: string;
  /**
   * The sms_url
   */
  sms_url: string;
  /**
   * The status_callback
   */
  status_callback: string;
  /**
   * The status_callback_method
   */
  status_callback_method: string;
  /**
   * The trunk_sid
   */
  trunk_sid: string;
  /**
   * The url
   */
  url: string;
  /**
   * The voice_application_sid
   */
  voice_application_sid: string;
  /**
   * The voice_caller_id_lookup
   */
  voice_caller_id_lookup: boolean;
  /**
   * The voice_fallback_method
   */
  voice_fallback_method: string;
  /**
   * The voice_fallback_url
   */
  voice_fallback_url: string;
  /**
   * The voice_method
   */
  voice_method: string;
  /**
   * The voice_url
   */
  voice_url: string;
}

interface PhoneNumberPayload extends PhoneNumberResource, Page.TwilioResponsePayload {
}

interface PhoneNumberSolution {
  trunkSid: string;
}

interface PhoneNumberListCreateOptions {
  /**
   * The phone_number_sid
   */
  phoneNumberSid: string;
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
   * @param sid - The sid
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
   * @param sid - The sid
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

declare class PhoneNumberPage extends Page<V1, PhoneNumberPayload, PhoneNumberResource, PhoneNumberInstance> {
  constructor(version: V1, response: Response<string>, solution: PhoneNumberSolution);

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
   * @param trunkSid - The trunk_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: PhoneNumberPayload, trunkSid: string, sid: string);

  private _proxy: PhoneNumberContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The address_requirements
   */
  addressRequirements: PhoneNumberAddressRequirement;
  /**
   * The api_version
   */
  apiVersion: string;
  /**
   * The beta
   */
  beta: boolean;
  /**
   * The capabilities
   */
  capabilities: string;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
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
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The links
   */
  links: string;
  /**
   * The phone_number
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
   * The sid
   */
  sid: string;
  /**
   * The sms_application_sid
   */
  smsApplicationSid: string;
  /**
   * The sms_fallback_method
   */
  smsFallbackMethod: string;
  /**
   * The sms_fallback_url
   */
  smsFallbackUrl: string;
  /**
   * The sms_method
   */
  smsMethod: string;
  /**
   * The sms_url
   */
  smsUrl: string;
  /**
   * The status_callback
   */
  statusCallback: string;
  /**
   * The status_callback_method
   */
  statusCallbackMethod: string;
  /**
   * The trunk_sid
   */
  trunkSid: string;
  /**
   * The url
   */
  url: string;
  /**
   * The voice_application_sid
   */
  voiceApplicationSid: string;
  /**
   * The voice_caller_id_lookup
   */
  voiceCallerIdLookup: boolean;
  /**
   * The voice_fallback_method
   */
  voiceFallbackMethod: string;
  /**
   * The voice_fallback_url
   */
  voiceFallbackUrl: string;
  /**
   * The voice_method
   */
  voiceMethod: string;
  /**
   * The voice_url
   */
  voiceUrl: string;
}

declare class PhoneNumberContext {
  constructor(version: V1, trunkSid: string, sid: string);

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

export {PhoneNumberList, PhoneNumberPage, PhoneNumberResource, PhoneNumberListPageOptions, PhoneNumberListInstance, PhoneNumberAddressRequirement, PhoneNumberListOptions, PhoneNumberSolution, PhoneNumberPayload, PhoneNumberListEachOptions, PhoneNumberContext, PhoneNumberListCreateOptions, PhoneNumberInstance}

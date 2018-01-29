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

declare function DependentPhoneNumberList(version: V2010, accountSid: string, addressSid: string): DependentPhoneNumberListInstance

type DependentPhoneNumberAddressRequirement = 'none'|'any'|'local'|'foreign';

type DependentPhoneNumberEmergencyStatus = 'Active'|'Inactive';

interface DependentPhoneNumberResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The address_requirements
   */
  address_requirements: DependentPhoneNumberAddressRequirement;
  /**
   * The api_version
   */
  api_version: string;
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
   * The emergency_address_sid
   */
  emergency_address_sid: string;
  /**
   * The emergency_status
   */
  emergency_status: DependentPhoneNumberEmergencyStatus;
  /**
   * The friendly_name
   */
  friendly_name: string;
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
   * The uri
   */
  uri: string;
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

interface DependentPhoneNumberPayload extends DependentPhoneNumberResource, Page.TwilioResponsePayload {
}

interface DependentPhoneNumberSolution {
  accountSid: string;
  addressSid: string;
}

interface DependentPhoneNumberListEachOptions extends ListEachOptions<DependentPhoneNumberInstance> {
}

interface DependentPhoneNumberListOptions extends ListOptions<DependentPhoneNumberInstance> {
}

interface DependentPhoneNumberListPageOptions extends PageOptions<DependentPhoneNumberPage> {
}

interface DependentPhoneNumberListInstance {
  /**
   * Streams DependentPhoneNumberInstance records from the API.
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
  each(opts?: DependentPhoneNumberListEachOptions): void;
  /**
   * Streams DependentPhoneNumberInstance records from the API.
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
  each(callback: (item: DependentPhoneNumberInstance, done: (err?: Error) => void) => void): any;
  /**
   * Retrieve a single target page of DependentPhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<DependentPhoneNumberPage>;
  /**
   * Retrieve a single target page of DependentPhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: DependentPhoneNumberPage) => any): void;
  /**
   * Lists DependentPhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: DependentPhoneNumberListOptions): Promise<DependentPhoneNumberInstance[]>;
  /**
   * Lists DependentPhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: DependentPhoneNumberListOptions, callback: (error: Error | null, items: DependentPhoneNumberInstance[]) => any): void;
  /**
   * Lists DependentPhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: DependentPhoneNumberInstance[]) => any): void;
  /**
   * Retrieve a single page of DependentPhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: DependentPhoneNumberListPageOptions): Promise<DependentPhoneNumberPage>;
  /**
   * Retrieve a single page of DependentPhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: DependentPhoneNumberListPageOptions, callback: (error: Error | null, items: DependentPhoneNumberPage) => any): void;
  /**
   * Retrieve a single page of DependentPhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: DependentPhoneNumberPage) => any): void;
}

declare class DependentPhoneNumberPage extends Page<V2010, DependentPhoneNumberPayload, DependentPhoneNumberResource, DependentPhoneNumberInstance> {
  constructor(version: V2010, response: Response<string>, solution: DependentPhoneNumberSolution);

  /**
   * Build an instance of DependentPhoneNumberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DependentPhoneNumberPayload): DependentPhoneNumberInstance;
}

declare class DependentPhoneNumberInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V2010, payload: DependentPhoneNumberPayload);

  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The address_requirements
   */
  addressRequirements: DependentPhoneNumberAddressRequirement;
  /**
   * The api_version
   */
  apiVersion: string;
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
   * The emergency_address_sid
   */
  emergencyAddressSid: string;
  /**
   * The emergency_status
   */
  emergencyStatus: DependentPhoneNumberEmergencyStatus;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The phone_number
   */
  phoneNumber: string;
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
   * The uri
   */
  uri: string;
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

export { DependentPhoneNumberAddressRequirement, DependentPhoneNumberEmergencyStatus, DependentPhoneNumberInstance, DependentPhoneNumberList, DependentPhoneNumberListEachOptions, DependentPhoneNumberListInstance, DependentPhoneNumberListOptions, DependentPhoneNumberListPageOptions, DependentPhoneNumberPage, DependentPhoneNumberPayload, DependentPhoneNumberResource, DependentPhoneNumberSolution }

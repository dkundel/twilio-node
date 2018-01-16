/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { CredentialListMappingListInstance } from './domain/credentialListMapping';
import { IpAccessControlListMappingListInstance } from './domain/ipAccessControlListMapping';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';

declare function DomainList(version: V2010, accountSid: string): DomainListInstance

interface DomainResource {
  /**
   * The unique id of the Account that sent this message
   */
  account_sid: string;
  /**
   * The version of the Twilio API used to process the message
   */
  api_version: string;
  /**
   * The types of authentication you have mapped to your domain
   */
  auth_type: string;
  /**
   * The date that this resource was created
   */
  date_created: Date;
  /**
   * The date that this resource was last updated
   */
  date_updated: Date;
  /**
   * The unique address you reserve on Twilio to which you route your SIP traffic
   */
  domain_name: string;
  /**
   * A user-specified, human-readable name for the trigger.
   */
  friendly_name: string;
  /**
   * A 34 character string that uniquely identifies the SIP domain in Twilio
   */
  sid: string;
  /**
   * A Boolean indicating if SIP Registration is allowed for this domain
   */
  sip_registration: boolean;
  /**
   * The subresource_uris
   */
  subresource_uris: string;
  /**
   * The URI for this resource relative to https://api.twilio.com
   */
  uri: string;
  /**
   * The HTTP method Twilio will use when requesting the VoiceFallbackUrl
   */
  voice_fallback_method: string;
  /**
   * The URL that Twilio will use if an error occurs retrieving or executing the TwiML requested by VoiceUrl
   */
  voice_fallback_url: string;
  /**
   * The HTTP method to use with the voice_url
   */
  voice_method: string;
  /**
   * The voice_status_callback_method
   */
  voice_status_callback_method: string;
  /**
   * The URL that Twilio will request to pass status parameters
   */
  voice_status_callback_url: string;
  /**
   * The URL Twilio will request when this domain receives a call
   */
  voice_url: string;
}

interface DomainPayload extends DomainResource, Page.TwilioResponsePayload {
}

interface DomainSolution {
  accountSid: string;
}

interface DomainListEachOptions extends ListEachOptions<DomainInstance> {
}

interface DomainListOptions extends ListOptions<DomainInstance> {
}

interface DomainListPageOptions extends PageOptions<DomainPage> {
}

interface DomainListCreateOptions {
  /**
   * The types of authentication you have mapped to your domain
   */
  authType?: string;
  /**
   * The unique address you reserve on Twilio to which you route your SIP traffic
   */
  domainName: string;
  /**
   * A user-specified, human-readable name for the trigger.
   */
  friendlyName?: string;
  /**
   * The sip_registration
   */
  sipRegistration?: boolean;
  /**
   * The HTTP method Twilio will use when requesting the VoiceFallbackUrl
   */
  voiceFallbackMethod?: string;
  /**
   * The URL that Twilio will use if an error occurs retrieving or executing the TwiML requested by VoiceUrl
   */
  voiceFallbackUrl?: string;
  /**
   * The HTTP method to use with the voice_url
   */
  voiceMethod?: string;
  /**
   * The voice_status_callback_method
   */
  voiceStatusCallbackMethod?: string;
  /**
   * The URL that Twilio will request to pass status parameters
   */
  voiceStatusCallbackUrl?: string;
  /**
   * The URL Twilio will request when this domain receives a call
   */
  voiceUrl?: string;
}

interface DomainListInstance {
  /**
   * Gets context of a single Domain resource
   *
   * @param sid - Fetch by unique Domain Sid
   */
  (sid: string): DomainContext;
  /**
   * create a DomainInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed DomainInstance
   */
  create(opts: DomainListCreateOptions): Promise<DomainInstance>;
  /**
   * create a DomainInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: DomainListCreateOptions, callback: (error: Error | null, items: DomainInstance) => any): void;
  /**
   * Streams DomainInstance records from the API.
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
  each(opts?: DomainListEachOptions): void;
  /**
   * Streams DomainInstance records from the API.
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
  each(callback: (item: DomainInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Domain resource
   *
   * @param sid - Fetch by unique Domain Sid
   */
  get(sid: string): DomainContext;
  /**
   * Retrieve a single target page of DomainInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<DomainPage>;
  /**
   * Retrieve a single target page of DomainInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: DomainPage) => any): void;
  /**
   * Lists DomainInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: DomainListOptions): Promise<DomainInstance[]>;
  /**
   * Lists DomainInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: DomainListOptions, callback: (error: Error | null, items: DomainInstance[]) => any): void;
  /**
   * Lists DomainInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: DomainInstance[]) => any): void;
  /**
   * Retrieve a single page of DomainInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: DomainListPageOptions): Promise<DomainPage>;
  /**
   * Retrieve a single page of DomainInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: DomainListPageOptions, callback: (error: Error | null, items: DomainPage) => any): void;
  /**
   * Retrieve a single page of DomainInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: DomainPage) => any): void;
}

interface DomainListFetchOptions {
  /**
   * The auth_type
   */
  authType?: string;
  /**
   * A user-specified, human-readable name for the trigger.
   */
  friendlyName?: string;
  /**
   * The sip_registration
   */
  sipRegistration?: boolean;
  /**
   * The voice_fallback_method
   */
  voiceFallbackMethod?: string;
  /**
   * The voice_fallback_url
   */
  voiceFallbackUrl?: string;
  /**
   * The HTTP method to use with the voice_url
   */
  voiceMethod?: string;
  /**
   * The voice_status_callback_method
   */
  voiceStatusCallbackMethod?: string;
  /**
   * The voice_status_callback_url
   */
  voiceStatusCallbackUrl?: string;
  /**
   * The voice_url
   */
  voiceUrl?: string;
}

interface DomainListFetchOptions {
  /**
   * The auth_type
   */
  authType?: string;
  /**
   * A user-specified, human-readable name for the trigger.
   */
  friendlyName?: string;
  /**
   * The sip_registration
   */
  sipRegistration?: boolean;
  /**
   * The voice_fallback_method
   */
  voiceFallbackMethod?: string;
  /**
   * The voice_fallback_url
   */
  voiceFallbackUrl?: string;
  /**
   * The HTTP method to use with the voice_url
   */
  voiceMethod?: string;
  /**
   * The voice_status_callback_method
   */
  voiceStatusCallbackMethod?: string;
  /**
   * The voice_status_callback_url
   */
  voiceStatusCallbackUrl?: string;
  /**
   * The voice_url
   */
  voiceUrl?: string;
}

declare class DomainPage extends Page<V2010, DomainPayload, DomainResource, DomainInstance> {
  constructor(version: V2010, response: Response<string>, solution: DomainSolution);

  /**
   * Build an instance of DomainInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DomainPayload): DomainInstance;
}

declare class DomainInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique Domain Sid
   */
  constructor(version: V2010, payload: DomainPayload, accountSid: string, sid: string);

  private _proxy: DomainContext;
  /**
   * The unique id of the Account that sent this message
   */
  accountSid: string;
  /**
   * The version of the Twilio API used to process the message
   */
  apiVersion: string;
  /**
   * The types of authentication you have mapped to your domain
   */
  authType: string;
  credentialListMappings(): CredentialListMappingListInstance;
  /**
   * The date that this resource was created
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated
   */
  dateUpdated: Date;
  /**
   * The unique address you reserve on Twilio to which you route your SIP traffic
   */
  domainName: string;
  /**
   * fetch a DomainInstance
   *
   * @returns Promise that resolves to processed DomainInstance
   */
  fetch(): Promise<DomainInstance>;
  /**
   * fetch a DomainInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: DomainInstance) => any): void;
  /**
   * A user-specified, human-readable name for the trigger.
   */
  friendlyName: string;
  ipAccessControlListMappings(): IpAccessControlListMappingListInstance;
  /**
   * remove a DomainInstance
   *
   * @returns Promise that resolves to processed DomainInstance
   */
  remove(): Promise<DomainInstance>;
  /**
   * remove a DomainInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: DomainInstance) => any): void;
  /**
   * A 34 character string that uniquely identifies the SIP domain in Twilio
   */
  sid: string;
  /**
   * A Boolean indicating if SIP Registration is allowed for this domain
   */
  sipRegistration: boolean;
  /**
   * The subresource_uris
   */
  subresourceUris: string;
  /**
   * update a DomainInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed DomainInstance
   */
  update(opts?: DomainListFetchOptions): Promise<DomainInstance>;
  /**
   * update a DomainInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: DomainListFetchOptions, callback: (error: Error | null, items: DomainInstance) => any): void;
  /**
   * update a DomainInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: DomainInstance) => any): void;
  /**
   * The URI for this resource relative to https://api.twilio.com
   */
  uri: string;
  /**
   * The HTTP method Twilio will use when requesting the VoiceFallbackUrl
   */
  voiceFallbackMethod: string;
  /**
   * The URL that Twilio will use if an error occurs retrieving or executing the TwiML requested by VoiceUrl
   */
  voiceFallbackUrl: string;
  /**
   * The HTTP method to use with the voice_url
   */
  voiceMethod: string;
  /**
   * The voice_status_callback_method
   */
  voiceStatusCallbackMethod: string;
  /**
   * The URL that Twilio will request to pass status parameters
   */
  voiceStatusCallbackUrl: string;
  /**
   * The URL Twilio will request when this domain receives a call
   */
  voiceUrl: string;
}

declare class DomainContext {
  constructor(version: V2010, accountSid: string, sid: string);

  credentialListMappings: CredentialListMappingListInstance;
  /**
   * fetch a DomainInstance
   *
   * @returns Promise that resolves to processed DomainInstance
   */
  fetch(): Promise<DomainInstance>;
  /**
   * fetch a DomainInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: DomainInstance) => any): void;
  ipAccessControlListMappings: IpAccessControlListMappingListInstance;
  /**
   * remove a DomainInstance
   *
   * @returns Promise that resolves to processed DomainInstance
   */
  remove(): Promise<DomainInstance>;
  /**
   * remove a DomainInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: DomainInstance) => any): void;
  /**
   * update a DomainInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed DomainInstance
   */
  update(opts?: DomainListFetchOptions): Promise<DomainInstance>;
  /**
   * update a DomainInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: DomainListFetchOptions, callback: (error: Error | null, items: DomainInstance) => any): void;
  /**
   * update a DomainInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: DomainInstance) => any): void;
}

export {DomainListCreateOptions, DomainListEachOptions, DomainInstance, DomainPage, DomainListOptions, DomainSolution, DomainResource, DomainListInstance, DomainPayload, DomainListPageOptions, DomainContext, DomainListFetchOptions, DomainList}

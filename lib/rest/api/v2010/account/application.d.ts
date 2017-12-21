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

declare function ApplicationList(version: V2010, accountSid: string): ApplicationListInstance

interface ApplicationResource {
  /**
   * The unique id of the Account that created this application.
   */
  account_sid: string;
  /**
   * Requests to this application will start a new TwiML session with this API version.
   */
  api_version: string;
  /**
   * The date that this resource was created, given as GMT RFC 2822 format.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated, given as GMT RFC 2822 format.
   */
  date_updated: Date;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long.
   */
  friendly_name: string;
  /**
   * Twilio will make a `POST` request to this URL to pass status parameters (such as sent or failed) to your application if you use the `/Messages` endpoint to send the message and specify this application's `Sid` as the `ApplicationSid` on an outgoing SMS request.
   */
  message_status_callback: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The HTTP method Twilio will use when requesting the above URL. Either `GET` or `POST`.
   */
  sms_fallback_method: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML from `SmsUrl`.
   */
  sms_fallback_url: string;
  /**
   * The HTTP method Twilio will use when making requests to the `SmsUrl`. Either `GET` or `POST`.
   */
  sms_method: string;
  /**
   * The URL that Twilio will `POST` to when a message is sent via the `/SMS/Messages` endpoint if you specify the `Sid` of this application on an outgoing SMS request.
   */
  sms_status_callback: string;
  /**
   * The URL Twilio will request when a phone number assigned to this application receives an incoming SMS message.
   */
  sms_url: string;
  /**
   * The URL that Twilio will request to pass status parameters (such as call ended) to your application.
   */
  status_callback: string;
  /**
   * The HTTP method Twilio will use to make requests to the `StatusCallback` URL. Either `GET` or `POST`.
   */
  status_callback_method: string;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
  /**
   * Look up the caller's caller-ID name from the CNAM database (additional charges apply). Either `true` or `false`.
   */
  voice_caller_id_lookup: boolean;
  /**
   * The HTTP method Twilio will use when requesting the `VoiceFallbackUrl`. Either `GET` or `POST`.
   */
  voice_fallback_method: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by `Url`.
   */
  voice_fallback_url: string;
  /**
   * The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`.
   */
  voice_method: string;
  /**
   * The URL Twilio will request when a phone number assigned to this application receives a call.
   */
  voice_url: string;
}

interface ApplicationPayload extends ApplicationResource, Page.TwilioResponsePayload {
}

interface ApplicationSolution {
  accountSid: string;
}

interface ApplicationListCreateOptions {
  /**
   * Requests to this application will start a new TwiML session with this API version.
   */
  apiVersion?: string;
  /**
   * A human readable description of the new application, maximum of 64 characters.
   */
  friendlyName: string;
  /**
   * Twilio will make a `POST` request to this URL to pass status parameters (such as sent or failed) to your application if you use the `/Messages` endpoint to send the message and specify this application's `Sid` as the `ApplicationSid` on an outgoing SMS request.
   */
  messageStatusCallback?: string;
  /**
   * The HTTP method Twilio will use when requesting the above URL. Either `GET` or `POST`.
   */
  smsFallbackMethod?: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML from `SmsUrl`.
   */
  smsFallbackUrl?: string;
  /**
   * The HTTP method Twilio will use when making requests to the `SmsUrl`. Either `GET` or `POST`.
   */
  smsMethod?: string;
  /**
   * The URL that Twilio will `POST` to when a message is sent via the `/SMS/Messages` endpoint if you specify the `Sid` of this application on an outgoing SMS request.
   */
  smsStatusCallback?: string;
  /**
   * The URL Twilio will request when a phone number assigned to this application receives an incoming SMS message.
   */
  smsUrl?: string;
  /**
   * The URL that Twilio will request to pass status parameters (such as call ended) to your application.
   */
  statusCallback?: string;
  /**
   * The HTTP method Twilio will use to make requests to the `StatusCallback` URL. Either `GET` or `POST`.
   */
  statusCallbackMethod?: string;
  /**
   * Look up the caller's caller-ID name from the CNAM database (additional charges apply). Either `true` or `false`.
   */
  voiceCallerIdLookup?: boolean;
  /**
   * The HTTP method Twilio will use when requesting the `VoiceFallbackUrl`. Either `GET` or `POST`.
   */
  voiceFallbackMethod?: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by `Url`.
   */
  voiceFallbackUrl?: string;
  /**
   * The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`.
   */
  voiceMethod?: string;
  /**
   * The URL Twilio will request when a phone number assigned to this application receives a call.
   */
  voiceUrl?: string;
}

interface ApplicationListEachOptions extends ListEachOptions<ApplicationInstance> {
  /**
   * Only return application resources with friendly names that match exactly with this name
   */
  friendlyName?: string;
}

interface ApplicationListOptions extends ListOptions<ApplicationInstance> {
  /**
   * Only return application resources with friendly names that match exactly with this name
   */
  friendlyName?: string;
}

interface ApplicationListPageOptions extends PageOptions<ApplicationPage> {
  /**
   * Only return application resources with friendly names that match exactly with this name
   */
  friendlyName?: string;
}

interface ApplicationListInstance {
  /**
   * Gets context of a single Application resource
   *
   * @param sid - Fetch by unique Application Sid
   */
  (sid: string): ApplicationContext;
  /**
   * create a ApplicationInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ApplicationInstance
   */
  create(opts: ApplicationListCreateOptions): Promise<ApplicationInstance>;
  /**
   * create a ApplicationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ApplicationListCreateOptions, callback: (error: Error | null, items: ApplicationInstance) => any): void;
  /**
   * Streams ApplicationInstance records from the API.
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
  each(opts?: ApplicationListEachOptions): void;
  /**
   * Streams ApplicationInstance records from the API.
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
  each(callback: (item: ApplicationInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Application resource
   *
   * @param sid - Fetch by unique Application Sid
   */
  get(sid: string): ApplicationContext;
  /**
   * Retrieve a single target page of ApplicationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<ApplicationPage>;
  /**
   * Retrieve a single target page of ApplicationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: ApplicationPage) => any): void;
  /**
   * Lists ApplicationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: ApplicationListOptions): Promise<ApplicationInstance[]>;
  /**
   * Lists ApplicationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: ApplicationListOptions, callback: (error: Error | null, items: ApplicationInstance[]) => any): void;
  /**
   * Lists ApplicationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: ApplicationInstance[]) => any): void;
  /**
   * Retrieve a single page of ApplicationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: ApplicationListPageOptions): Promise<ApplicationPage>;
  /**
   * Retrieve a single page of ApplicationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: ApplicationListPageOptions, callback: (error: Error | null, items: ApplicationPage) => any): void;
  /**
   * Retrieve a single page of ApplicationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: ApplicationPage) => any): void;
}

interface ApplicationListFetchOptions {
  /**
   * Requests to this application will start a new TwiML session with this API version.
   */
  apiVersion?: string;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long.
   */
  friendlyName?: string;
  /**
   * Twilio will make a `POST` request to this URL to pass status parameters (such as sent or failed) to your application if you use the `/Messages` endpoint to send the message and specify this application's `Sid` as the `ApplicationSid` on an outgoing SMS request.
   */
  messageStatusCallback?: string;
  /**
   * The HTTP method Twilio will use when requesting the above URL. Either `GET` or `POST`.
   */
  smsFallbackMethod?: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML from `SmsUrl`.
   */
  smsFallbackUrl?: string;
  /**
   * The HTTP method Twilio will use when making requests to the `SmsUrl`. Either `GET` or `POST`.
   */
  smsMethod?: string;
  /**
   * The URL that Twilio will `POST` to when a message is sent via the `/SMS/Messages` endpoint if you specify the `Sid` of this application on an outgoing SMS request.
   */
  smsStatusCallback?: string;
  /**
   * The URL Twilio will request when a phone number assigned to this application receives an incoming SMS message.
   */
  smsUrl?: string;
  /**
   * The URL that Twilio will request to pass status parameters (such as call ended) to your application.
   */
  statusCallback?: string;
  /**
   * The HTTP method Twilio will use to make requests to the `StatusCallback` URL. Either `GET` or `POST`.
   */
  statusCallbackMethod?: string;
  /**
   * Look up the caller's caller-ID name from the CNAM database (additional charges apply). Either `true` or `false`.
   */
  voiceCallerIdLookup?: boolean;
  /**
   * The HTTP method Twilio will use when requesting the `VoiceFallbackUrl`. Either `GET` or `POST`.
   */
  voiceFallbackMethod?: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by `Url`.
   */
  voiceFallbackUrl?: string;
  /**
   * The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`.
   */
  voiceMethod?: string;
  /**
   * The URL Twilio will request when a phone number assigned to this application receives a call.
   */
  voiceUrl?: string;
}

interface ApplicationListFetchOptions {
  /**
   * Requests to this application will start a new TwiML session with this API version.
   */
  apiVersion?: string;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long.
   */
  friendlyName?: string;
  /**
   * Twilio will make a `POST` request to this URL to pass status parameters (such as sent or failed) to your application if you use the `/Messages` endpoint to send the message and specify this application's `Sid` as the `ApplicationSid` on an outgoing SMS request.
   */
  messageStatusCallback?: string;
  /**
   * The HTTP method Twilio will use when requesting the above URL. Either `GET` or `POST`.
   */
  smsFallbackMethod?: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML from `SmsUrl`.
   */
  smsFallbackUrl?: string;
  /**
   * The HTTP method Twilio will use when making requests to the `SmsUrl`. Either `GET` or `POST`.
   */
  smsMethod?: string;
  /**
   * The URL that Twilio will `POST` to when a message is sent via the `/SMS/Messages` endpoint if you specify the `Sid` of this application on an outgoing SMS request.
   */
  smsStatusCallback?: string;
  /**
   * The URL Twilio will request when a phone number assigned to this application receives an incoming SMS message.
   */
  smsUrl?: string;
  /**
   * The URL that Twilio will request to pass status parameters (such as call ended) to your application.
   */
  statusCallback?: string;
  /**
   * The HTTP method Twilio will use to make requests to the `StatusCallback` URL. Either `GET` or `POST`.
   */
  statusCallbackMethod?: string;
  /**
   * Look up the caller's caller-ID name from the CNAM database (additional charges apply). Either `true` or `false`.
   */
  voiceCallerIdLookup?: boolean;
  /**
   * The HTTP method Twilio will use when requesting the `VoiceFallbackUrl`. Either `GET` or `POST`.
   */
  voiceFallbackMethod?: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by `Url`.
   */
  voiceFallbackUrl?: string;
  /**
   * The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`.
   */
  voiceMethod?: string;
  /**
   * The URL Twilio will request when a phone number assigned to this application receives a call.
   */
  voiceUrl?: string;
}

declare class ApplicationPage extends Page<V2010, ApplicationPayload, ApplicationResource, ApplicationInstance> {
  constructor(version: V2010, response: Response<string>, solution: ApplicationSolution);

  /**
   * Build an instance of ApplicationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ApplicationPayload): ApplicationInstance;
}

declare class ApplicationInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique Application Sid
   */
  constructor(version: V2010, payload: ApplicationPayload, accountSid: string, sid: string);

  private _proxy: ApplicationContext;
  /**
   * The unique id of the Account that created this application.
   */
  accountSid: string;
  /**
   * Requests to this application will start a new TwiML session with this API version.
   */
  apiVersion: string;
  /**
   * The date that this resource was created, given as GMT RFC 2822 format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated, given as GMT RFC 2822 format.
   */
  dateUpdated: Date;
  /**
   * fetch a ApplicationInstance
   *
   * @returns Promise that resolves to processed ApplicationInstance
   */
  fetch(): Promise<ApplicationInstance>;
  /**
   * fetch a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ApplicationInstance) => any): void;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long.
   */
  friendlyName: string;
  /**
   * Twilio will make a `POST` request to this URL to pass status parameters (such as sent or failed) to your application if you use the `/Messages` endpoint to send the message and specify this application's `Sid` as the `ApplicationSid` on an outgoing SMS request.
   */
  messageStatusCallback: string;
  /**
   * remove a ApplicationInstance
   *
   * @returns Promise that resolves to processed ApplicationInstance
   */
  remove(): Promise<ApplicationInstance>;
  /**
   * remove a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ApplicationInstance) => any): void;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The HTTP method Twilio will use when requesting the above URL. Either `GET` or `POST`.
   */
  smsFallbackMethod: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML from `SmsUrl`.
   */
  smsFallbackUrl: string;
  /**
   * The HTTP method Twilio will use when making requests to the `SmsUrl`. Either `GET` or `POST`.
   */
  smsMethod: string;
  /**
   * The URL that Twilio will `POST` to when a message is sent via the `/SMS/Messages` endpoint if you specify the `Sid` of this application on an outgoing SMS request.
   */
  smsStatusCallback: string;
  /**
   * The URL Twilio will request when a phone number assigned to this application receives an incoming SMS message.
   */
  smsUrl: string;
  /**
   * The URL that Twilio will request to pass status parameters (such as call ended) to your application.
   */
  statusCallback: string;
  /**
   * The HTTP method Twilio will use to make requests to the `StatusCallback` URL. Either `GET` or `POST`.
   */
  statusCallbackMethod: string;
  /**
   * update a ApplicationInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ApplicationInstance
   */
  update(opts?: ApplicationListFetchOptions): Promise<ApplicationInstance>;
  /**
   * update a ApplicationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ApplicationListFetchOptions, callback: (error: Error | null, items: ApplicationInstance) => any): void;
  /**
   * update a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ApplicationInstance) => any): void;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
  /**
   * Look up the caller's caller-ID name from the CNAM database (additional charges apply). Either `true` or `false`.
   */
  voiceCallerIdLookup: boolean;
  /**
   * The HTTP method Twilio will use when requesting the `VoiceFallbackUrl`. Either `GET` or `POST`.
   */
  voiceFallbackMethod: string;
  /**
   * The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by `Url`.
   */
  voiceFallbackUrl: string;
  /**
   * The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`.
   */
  voiceMethod: string;
  /**
   * The URL Twilio will request when a phone number assigned to this application receives a call.
   */
  voiceUrl: string;
}

declare class ApplicationContext {
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a ApplicationInstance
   *
   * @returns Promise that resolves to processed ApplicationInstance
   */
  fetch(): Promise<ApplicationInstance>;
  /**
   * fetch a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ApplicationInstance) => any): void;
  /**
   * remove a ApplicationInstance
   *
   * @returns Promise that resolves to processed ApplicationInstance
   */
  remove(): Promise<ApplicationInstance>;
  /**
   * remove a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ApplicationInstance) => any): void;
  /**
   * update a ApplicationInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ApplicationInstance
   */
  update(opts?: ApplicationListFetchOptions): Promise<ApplicationInstance>;
  /**
   * update a ApplicationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ApplicationListFetchOptions, callback: (error: Error | null, items: ApplicationInstance) => any): void;
  /**
   * update a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ApplicationInstance) => any): void;
}

export {ApplicationListPageOptions, ApplicationListInstance, ApplicationList, ApplicationSolution, ApplicationInstance, ApplicationPayload, ApplicationListEachOptions, ApplicationListFetchOptions, ApplicationListCreateOptions, ApplicationContext, ApplicationResource, ApplicationPage, ApplicationListOptions}

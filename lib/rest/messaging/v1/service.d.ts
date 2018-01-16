/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { AlphaSenderListInstance } from './service/alphaSender';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { PhoneNumberListInstance } from './service/phoneNumber';
import { ShortCodeListInstance } from './service/shortCode';

declare function ServiceList(version: V1): ServiceListInstance

type ServiceScanMessageContent = 'inherit'|'enable'|'disable';

interface ServiceResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The area_code_geomatch
   */
  area_code_geomatch: boolean;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The fallback_method
   */
  fallback_method: string;
  /**
   * The fallback_to_long_code
   */
  fallback_to_long_code: boolean;
  /**
   * The fallback_url
   */
  fallback_url: string;
  /**
   * The friendly_name
   */
  friendly_name: string;
  /**
   * The inbound_method
   */
  inbound_method: string;
  /**
   * The inbound_request_url
   */
  inbound_request_url: string;
  /**
   * The links
   */
  links: string;
  /**
   * The mms_converter
   */
  mms_converter: boolean;
  /**
   * The scan_message_content
   */
  scan_message_content: ServiceScanMessageContent;
  /**
   * The sid
   */
  sid: string;
  /**
   * The smart_encoding
   */
  smart_encoding: boolean;
  /**
   * The status_callback
   */
  status_callback: string;
  /**
   * The sticky_sender
   */
  sticky_sender: boolean;
  /**
   * The synchronous_validation
   */
  synchronous_validation: boolean;
  /**
   * The url
   */
  url: string;
  /**
   * The validity_period
   */
  validity_period: number;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceSolution {
}

interface ServiceListCreateOptions {
  /**
   * The area_code_geomatch
   */
  areaCodeGeomatch?: boolean;
  /**
   * The fallback_method
   */
  fallbackMethod?: string;
  /**
   * The fallback_to_long_code
   */
  fallbackToLongCode?: boolean;
  /**
   * The fallback_url
   */
  fallbackUrl?: string;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The inbound_method
   */
  inboundMethod?: string;
  /**
   * The inbound_request_url
   */
  inboundRequestUrl?: string;
  /**
   * The mms_converter
   */
  mmsConverter?: boolean;
  /**
   * The scan_message_content
   */
  scanMessageContent?: ServiceScanMessageContent;
  /**
   * The smart_encoding
   */
  smartEncoding?: boolean;
  /**
   * The status_callback
   */
  statusCallback?: string;
  /**
   * The sticky_sender
   */
  stickySender?: boolean;
  /**
   * The synchronous_validation
   */
  synchronousValidation?: boolean;
  /**
   * The validity_period
   */
  validityPeriod?: number;
}

interface ServiceListEachOptions extends ListEachOptions<ServiceInstance> {
}

interface ServiceListOptions extends ListOptions<ServiceInstance> {
}

interface ServiceListPageOptions extends PageOptions<ServicePage> {
}

interface ServiceListInstance {
  /**
   * Gets context of a single Service resource
   *
   * @param sid - The sid
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  create(opts: ServiceListCreateOptions): Promise<ServiceInstance>;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ServiceListCreateOptions, callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * Streams ServiceInstance records from the API.
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
  each(opts?: ServiceListEachOptions): void;
  /**
   * Streams ServiceInstance records from the API.
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
  each(callback: (item: ServiceInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Service resource
   *
   * @param sid - The sid
   */
  get(sid: string): ServiceContext;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<ServicePage>;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: ServicePage) => any): void;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: ServiceListOptions): Promise<ServiceInstance[]>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: ServiceListOptions, callback: (error: Error | null, items: ServiceInstance[]) => any): void;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: ServiceInstance[]) => any): void;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: ServiceListPageOptions): Promise<ServicePage>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: ServiceListPageOptions, callback: (error: Error | null, items: ServicePage) => any): void;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: ServicePage) => any): void;
}

interface ServiceListFetchOptions {
  /**
   * The area_code_geomatch
   */
  areaCodeGeomatch?: boolean;
  /**
   * The fallback_method
   */
  fallbackMethod?: string;
  /**
   * The fallback_to_long_code
   */
  fallbackToLongCode?: boolean;
  /**
   * The fallback_url
   */
  fallbackUrl?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The inbound_method
   */
  inboundMethod?: string;
  /**
   * The inbound_request_url
   */
  inboundRequestUrl?: string;
  /**
   * The mms_converter
   */
  mmsConverter?: boolean;
  /**
   * The scan_message_content
   */
  scanMessageContent?: ServiceScanMessageContent;
  /**
   * The smart_encoding
   */
  smartEncoding?: boolean;
  /**
   * The status_callback
   */
  statusCallback?: string;
  /**
   * The sticky_sender
   */
  stickySender?: boolean;
  /**
   * The synchronous_validation
   */
  synchronousValidation?: boolean;
  /**
   * The validity_period
   */
  validityPeriod?: number;
}

interface ServiceListFetchOptions {
  /**
   * The area_code_geomatch
   */
  areaCodeGeomatch?: boolean;
  /**
   * The fallback_method
   */
  fallbackMethod?: string;
  /**
   * The fallback_to_long_code
   */
  fallbackToLongCode?: boolean;
  /**
   * The fallback_url
   */
  fallbackUrl?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The inbound_method
   */
  inboundMethod?: string;
  /**
   * The inbound_request_url
   */
  inboundRequestUrl?: string;
  /**
   * The mms_converter
   */
  mmsConverter?: boolean;
  /**
   * The scan_message_content
   */
  scanMessageContent?: ServiceScanMessageContent;
  /**
   * The smart_encoding
   */
  smartEncoding?: boolean;
  /**
   * The status_callback
   */
  statusCallback?: string;
  /**
   * The sticky_sender
   */
  stickySender?: boolean;
  /**
   * The synchronous_validation
   */
  synchronousValidation?: boolean;
  /**
   * The validity_period
   */
  validityPeriod?: number;
}

declare class ServicePage extends Page<V1, ServicePayload, ServiceResource, ServiceInstance> {
  constructor(version: V1, response: Response<string>, solution: ServiceSolution);

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServicePayload): ServiceInstance;
}

declare class ServiceInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  /**
   * The account_sid
   */
  accountSid: string;
  alphaSenders(): AlphaSenderListInstance;
  /**
   * The area_code_geomatch
   */
  areaCodeGeomatch: boolean;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * The fallback_method
   */
  fallbackMethod: string;
  /**
   * The fallback_to_long_code
   */
  fallbackToLongCode: boolean;
  /**
   * The fallback_url
   */
  fallbackUrl: string;
  /**
   * fetch a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  fetch(): Promise<ServiceInstance>;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The inbound_method
   */
  inboundMethod: string;
  /**
   * The inbound_request_url
   */
  inboundRequestUrl: string;
  /**
   * The links
   */
  links: string;
  /**
   * The mms_converter
   */
  mmsConverter: boolean;
  phoneNumbers(): PhoneNumberListInstance;
  /**
   * remove a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  remove(): Promise<ServiceInstance>;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * The scan_message_content
   */
  scanMessageContent: ServiceScanMessageContent;
  shortCodes(): ShortCodeListInstance;
  /**
   * The sid
   */
  sid: string;
  /**
   * The smart_encoding
   */
  smartEncoding: boolean;
  /**
   * The status_callback
   */
  statusCallback: string;
  /**
   * The sticky_sender
   */
  stickySender: boolean;
  /**
   * The synchronous_validation
   */
  synchronousValidation: boolean;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  update(opts?: ServiceListFetchOptions): Promise<ServiceInstance>;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ServiceListFetchOptions, callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * update a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * The url
   */
  url: string;
  /**
   * The validity_period
   */
  validityPeriod: number;
}

declare class ServiceContext {
  constructor(version: V1, sid: string);

  alphaSenders: AlphaSenderListInstance;
  /**
   * fetch a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  fetch(): Promise<ServiceInstance>;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ServiceInstance) => any): void;
  phoneNumbers: PhoneNumberListInstance;
  /**
   * remove a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  remove(): Promise<ServiceInstance>;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ServiceInstance) => any): void;
  shortCodes: ShortCodeListInstance;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  update(opts?: ServiceListFetchOptions): Promise<ServiceInstance>;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ServiceListFetchOptions, callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * update a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ServiceInstance) => any): void;
}

export {ServiceContext, ServiceListOptions, ServicePayload, ServiceListEachOptions, ServiceInstance, ServiceListFetchOptions, ServicePage, ServiceResource, ServiceSolution, ServiceListCreateOptions, ServiceListInstance, ServiceScanMessageContent, ServiceList, ServiceListPageOptions}

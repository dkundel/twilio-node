/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import AccSecurity = require('../AccSecurity');
import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { VerificationCheckListInstance } from './service/verificationCheck';
import { VerificationListInstance } from './service/verification';

declare function ServiceList(version: AccSecurity): ServiceListInstance

interface ServiceResource {
  /**
   * The unique SID identifier of the Account.
   */
  account_sid: string;
  /**
   * The length of the verification code to be generated. Must be an integer value between 4-10
   */
  code_length: number;
  /**
   * The date that this Service was created, given in ISO 8601 format.
   */
  date_created: Date;
  /**
   * The date that this Service was updated, given in ISO 8601 format.
   */
  date_updated: Date;
  /**
   * The links
   */
  links: string;
  /**
   * A 1-64 character string with friendly name of service
   */
  name: string;
  /**
   * A 34 character string that uniquely identifies this Service.
   */
  sid: string;
  /**
   * The url
   */
  url: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceSolution {
}

interface ServiceListCreateOptions {
  /**
   * The length of the verification code to be generated. Must be an integer value between 4-10
   */
  codeLength?: number;
  /**
   * A 1-64 character string with friendly name of service
   */
  name: string;
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
   * @param sid - Verification Service Instance SID.
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
   * @param sid - Verification Service Instance SID.
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
   * The length of the verification code to be generated. Must be an integer value between 4-10
   */
  codeLength?: number;
  /**
   * A 1-64 character string with friendly name of service
   */
  name?: string;
}

interface ServiceListFetchOptions {
  /**
   * The length of the verification code to be generated. Must be an integer value between 4-10
   */
  codeLength?: number;
  /**
   * A 1-64 character string with friendly name of service
   */
  name?: string;
}

declare class ServicePage extends Page<AccSecurity, ServicePayload, ServiceResource, ServiceInstance> {
  constructor(version: AccSecurity, response: Response<string>, solution: ServiceSolution);

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
   * @param sid - Verification Service Instance SID.
   */
  constructor(version: AccSecurity, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * The length of the verification code to be generated. Must be an integer value between 4-10
   */
  codeLength: number;
  /**
   * The date that this Service was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The date that this Service was updated, given in ISO 8601 format.
   */
  dateUpdated: Date;
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
   * The links
   */
  links: string;
  /**
   * A 1-64 character string with friendly name of service
   */
  name: string;
  /**
   * A 34 character string that uniquely identifies this Service.
   */
  sid: string;
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
  verificationChecks(): VerificationCheckListInstance;
  verifications(): VerificationListInstance;
}

declare class ServiceContext {
  constructor(version: AccSecurity, sid: string);

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
  verificationChecks: VerificationCheckListInstance;
  verifications: VerificationListInstance;
}

export {ServiceContext, ServiceListOptions, ServiceListEachOptions, ServiceInstance, ServiceListFetchOptions, ServicePage, ServiceResource, ServiceSolution, ServiceListCreateOptions, ServiceListInstance, ServicePayload, ServiceList, ServiceListPageOptions}

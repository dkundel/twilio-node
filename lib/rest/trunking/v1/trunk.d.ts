/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { CredentialListListInstance } from './trunk/credentialList';
import { IpAccessControlListListInstance } from './trunk/ipAccessControlList';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { OriginationUrlListInstance } from './trunk/originationUrl';
import { PhoneNumberListInstance } from './trunk/phoneNumber';

declare function TrunkList(version: V1): TrunkListInstance

interface TrunkResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The auth_type
   */
  auth_type: string;
  /**
   * The auth_type_set
   */
  auth_type_set: string;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The disaster_recovery_method
   */
  disaster_recovery_method: string;
  /**
   * The disaster_recovery_url
   */
  disaster_recovery_url: string;
  /**
   * The domain_name
   */
  domain_name: string;
  /**
   * The friendly_name
   */
  friendly_name: string;
  /**
   * The links
   */
  links: string;
  /**
   * The recording
   */
  recording: string;
  /**
   * The secure
   */
  secure: boolean;
  /**
   * The sid
   */
  sid: string;
  /**
   * The url
   */
  url: string;
}

interface TrunkPayload extends TrunkResource, Page.TwilioResponsePayload {
}

interface TrunkSolution {
}

interface TrunkListCreateOptions {
  /**
   * The disaster_recovery_method
   */
  disasterRecoveryMethod?: string;
  /**
   * The disaster_recovery_url
   */
  disasterRecoveryUrl?: string;
  /**
   * The domain_name
   */
  domainName?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The recording
   */
  recording?: string;
  /**
   * The secure
   */
  secure?: boolean;
}

interface TrunkListEachOptions extends ListEachOptions<TrunkInstance> {
}

interface TrunkListOptions extends ListOptions<TrunkInstance> {
}

interface TrunkListPageOptions extends PageOptions<TrunkPage> {
}

interface TrunkListInstance {
  /**
   * Gets context of a single Trunk resource
   *
   * @param sid - The sid
   */
  (sid: string): TrunkContext;
  /**
   * create a TrunkInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed TrunkInstance
   */
  create(opts?: TrunkListCreateOptions): Promise<TrunkInstance>;
  /**
   * create a TrunkInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: TrunkListCreateOptions, callback: (error: Error | null, items: TrunkInstance) => any): void;
  /**
   * create a TrunkInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback: (error: Error | null, items: TrunkInstance) => any): void;
  /**
   * Streams TrunkInstance records from the API.
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
  each(opts?: TrunkListEachOptions): void;
  /**
   * Streams TrunkInstance records from the API.
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
  each(callback: (item: TrunkInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Trunk resource
   *
   * @param sid - The sid
   */
  get(sid: string): TrunkContext;
  /**
   * Retrieve a single target page of TrunkInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<TrunkPage>;
  /**
   * Retrieve a single target page of TrunkInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: TrunkPage) => any): void;
  /**
   * Lists TrunkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: TrunkListOptions): Promise<TrunkInstance[]>;
  /**
   * Lists TrunkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: TrunkListOptions, callback: (error: Error | null, items: TrunkInstance[]) => any): void;
  /**
   * Lists TrunkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: TrunkInstance[]) => any): void;
  /**
   * Retrieve a single page of TrunkInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: TrunkListPageOptions): Promise<TrunkPage>;
  /**
   * Retrieve a single page of TrunkInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: TrunkListPageOptions, callback: (error: Error | null, items: TrunkPage) => any): void;
  /**
   * Retrieve a single page of TrunkInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: TrunkPage) => any): void;
}

interface TrunkListFetchOptions {
  /**
   * The disaster_recovery_method
   */
  disasterRecoveryMethod?: string;
  /**
   * The disaster_recovery_url
   */
  disasterRecoveryUrl?: string;
  /**
   * The domain_name
   */
  domainName?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The recording
   */
  recording?: string;
  /**
   * The secure
   */
  secure?: boolean;
}

interface TrunkListFetchOptions {
  /**
   * The disaster_recovery_method
   */
  disasterRecoveryMethod?: string;
  /**
   * The disaster_recovery_url
   */
  disasterRecoveryUrl?: string;
  /**
   * The domain_name
   */
  domainName?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The recording
   */
  recording?: string;
  /**
   * The secure
   */
  secure?: boolean;
}

declare class TrunkPage extends Page<V1, TrunkPayload, TrunkResource, TrunkInstance> {
  constructor(version: V1, response: Response<string>, solution: TrunkSolution);

  /**
   * Build an instance of TrunkInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TrunkPayload): TrunkInstance;
}

declare class TrunkInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: TrunkPayload, sid: string);

  private _proxy: TrunkContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The auth_type
   */
  authType: string;
  /**
   * The auth_type_set
   */
  authTypeSet: string;
  credentialsLists(): CredentialListListInstance;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * The disaster_recovery_method
   */
  disasterRecoveryMethod: string;
  /**
   * The disaster_recovery_url
   */
  disasterRecoveryUrl: string;
  /**
   * The domain_name
   */
  domainName: string;
  /**
   * fetch a TrunkInstance
   *
   * @returns Promise that resolves to processed TrunkInstance
   */
  fetch(): Promise<TrunkInstance>;
  /**
   * fetch a TrunkInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: TrunkInstance) => any): void;
  /**
   * The friendly_name
   */
  friendlyName: string;
  ipAccessControlLists(): IpAccessControlListListInstance;
  /**
   * The links
   */
  links: string;
  originationUrls(): OriginationUrlListInstance;
  phoneNumbers(): PhoneNumberListInstance;
  /**
   * The recording
   */
  recording: string;
  /**
   * remove a TrunkInstance
   *
   * @returns Promise that resolves to processed TrunkInstance
   */
  remove(): Promise<TrunkInstance>;
  /**
   * remove a TrunkInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: TrunkInstance) => any): void;
  /**
   * The secure
   */
  secure: boolean;
  /**
   * The sid
   */
  sid: string;
  /**
   * update a TrunkInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed TrunkInstance
   */
  update(opts?: TrunkListFetchOptions): Promise<TrunkInstance>;
  /**
   * update a TrunkInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: TrunkListFetchOptions, callback: (error: Error | null, items: TrunkInstance) => any): void;
  /**
   * update a TrunkInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: TrunkInstance) => any): void;
  /**
   * The url
   */
  url: string;
}

declare class TrunkContext {
  constructor(version: V1, sid: string);

  credentialsLists: CredentialListListInstance;
  /**
   * fetch a TrunkInstance
   *
   * @returns Promise that resolves to processed TrunkInstance
   */
  fetch(): Promise<TrunkInstance>;
  /**
   * fetch a TrunkInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: TrunkInstance) => any): void;
  ipAccessControlLists: IpAccessControlListListInstance;
  originationUrls: OriginationUrlListInstance;
  phoneNumbers: PhoneNumberListInstance;
  /**
   * remove a TrunkInstance
   *
   * @returns Promise that resolves to processed TrunkInstance
   */
  remove(): Promise<TrunkInstance>;
  /**
   * remove a TrunkInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: TrunkInstance) => any): void;
  /**
   * update a TrunkInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed TrunkInstance
   */
  update(opts?: TrunkListFetchOptions): Promise<TrunkInstance>;
  /**
   * update a TrunkInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: TrunkListFetchOptions, callback: (error: Error | null, items: TrunkInstance) => any): void;
  /**
   * update a TrunkInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: TrunkInstance) => any): void;
}

export {TrunkListInstance, TrunkListOptions, TrunkList, TrunkSolution, TrunkListFetchOptions, TrunkListPageOptions, TrunkListCreateOptions, TrunkResource, TrunkPage, TrunkContext, TrunkInstance, TrunkListEachOptions, TrunkPayload}

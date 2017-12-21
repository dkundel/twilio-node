/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { AssignedAddOnExtensionListInstance } from './assignedAddOn/assignedAddOnExtension';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';

declare function AssignedAddOnList(version: V2010, accountSid: string, resourceSid: string): AssignedAddOnListInstance

interface AssignedAddOnResource {
  /**
   * The unique id of the Account that has installed this Add-on.
   */
  account_sid: string;
  /**
   * The JSON object representing the current configuration of this Add-on installation.
   */
  configuration: string;
  /**
   * The date that the Add-on installation was created, given in RFC 2822 format.
   */
  date_created: Date;
  /**
   * The date that the Add-on installation was last updated, given in RFC 2822 format.
   */
  date_updated: Date;
  /**
   * A short description of the functionality provided by the Add-on.
   */
  description: string;
  /**
   * A human-readable description of this Add-on installation.
   */
  friendly_name: string;
  /**
   * The unique id of the Phone Number to which the Add-on is assigned.
   */
  resource_sid: string;
  /**
   * A 34 character string that uniquely identifies this assigned Add-on installation.
   */
  sid: string;
  /**
   * The subresource_uris
   */
  subresource_uris: string;
  /**
   * The human-readable string that uniquely identifies an Add-on installation for an Account.
   */
  unique_name: string;
  /**
   * The uri
   */
  uri: string;
}

interface AssignedAddOnPayload extends AssignedAddOnResource, Page.TwilioResponsePayload {
}

interface AssignedAddOnSolution {
  accountSid: string;
  resourceSid: string;
}

interface AssignedAddOnListEachOptions extends ListEachOptions<AssignedAddOnInstance> {
}

interface AssignedAddOnListOptions extends ListOptions<AssignedAddOnInstance> {
}

interface AssignedAddOnListPageOptions extends PageOptions<AssignedAddOnPage> {
}

interface AssignedAddOnListCreateOptions {
  /**
   * A 34 character string that uniquely identifies the Add-on installation.
   */
  installedAddOnSid: string;
}

interface AssignedAddOnListInstance {
  /**
   * Gets context of a single AssignedAddOn resource
   *
   * @param sid - The unique Installed Add-on Sid
   */
  (sid: string): AssignedAddOnContext;
  /**
   * create a AssignedAddOnInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed AssignedAddOnInstance
   */
  create(opts: AssignedAddOnListCreateOptions): Promise<AssignedAddOnInstance>;
  /**
   * create a AssignedAddOnInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: AssignedAddOnListCreateOptions, callback: (error: Error | null, items: AssignedAddOnInstance) => any): void;
  /**
   * Streams AssignedAddOnInstance records from the API.
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
  each(opts?: AssignedAddOnListEachOptions): void;
  /**
   * Streams AssignedAddOnInstance records from the API.
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
  each(callback: (item: AssignedAddOnInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single AssignedAddOn resource
   *
   * @param sid - The unique Installed Add-on Sid
   */
  get(sid: string): AssignedAddOnContext;
  /**
   * Retrieve a single target page of AssignedAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<AssignedAddOnPage>;
  /**
   * Retrieve a single target page of AssignedAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: AssignedAddOnPage) => any): void;
  /**
   * Lists AssignedAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: AssignedAddOnListOptions): Promise<AssignedAddOnInstance[]>;
  /**
   * Lists AssignedAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: AssignedAddOnListOptions, callback: (error: Error | null, items: AssignedAddOnInstance[]) => any): void;
  /**
   * Lists AssignedAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: AssignedAddOnInstance[]) => any): void;
  /**
   * Retrieve a single page of AssignedAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: AssignedAddOnListPageOptions): Promise<AssignedAddOnPage>;
  /**
   * Retrieve a single page of AssignedAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: AssignedAddOnListPageOptions, callback: (error: Error | null, items: AssignedAddOnPage) => any): void;
  /**
   * Retrieve a single page of AssignedAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: AssignedAddOnPage) => any): void;
}

declare class AssignedAddOnPage extends Page<V2010, AssignedAddOnPayload, AssignedAddOnResource, AssignedAddOnInstance> {
  constructor(version: V2010, response: Response<string>, solution: AssignedAddOnSolution);

  /**
   * Build an instance of AssignedAddOnInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AssignedAddOnPayload): AssignedAddOnInstance;
}

declare class AssignedAddOnInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param resourceSid - The resource_sid
   * @param sid - The unique Installed Add-on Sid
   */
  constructor(version: V2010, payload: AssignedAddOnPayload, accountSid: string, resourceSid: string, sid: string);

  private _proxy: AssignedAddOnContext;
  /**
   * The unique id of the Account that has installed this Add-on.
   */
  accountSid: string;
  /**
   * The JSON object representing the current configuration of this Add-on installation.
   */
  configuration: string;
  /**
   * The date that the Add-on installation was created, given in RFC 2822 format.
   */
  dateCreated: Date;
  /**
   * The date that the Add-on installation was last updated, given in RFC 2822 format.
   */
  dateUpdated: Date;
  /**
   * A short description of the functionality provided by the Add-on.
   */
  description: string;
  extensions(): AssignedAddOnExtensionListInstance;
  /**
   * fetch a AssignedAddOnInstance
   *
   * @returns Promise that resolves to processed AssignedAddOnInstance
   */
  fetch(): Promise<AssignedAddOnInstance>;
  /**
   * fetch a AssignedAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: AssignedAddOnInstance) => any): void;
  /**
   * A human-readable description of this Add-on installation.
   */
  friendlyName: string;
  /**
   * remove a AssignedAddOnInstance
   *
   * @returns Promise that resolves to processed AssignedAddOnInstance
   */
  remove(): Promise<AssignedAddOnInstance>;
  /**
   * remove a AssignedAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: AssignedAddOnInstance) => any): void;
  /**
   * The unique id of the Phone Number to which the Add-on is assigned.
   */
  resourceSid: string;
  /**
   * A 34 character string that uniquely identifies this assigned Add-on installation.
   */
  sid: string;
  /**
   * The subresource_uris
   */
  subresourceUris: string;
  /**
   * The human-readable string that uniquely identifies an Add-on installation for an Account.
   */
  uniqueName: string;
  /**
   * The uri
   */
  uri: string;
}

declare class AssignedAddOnContext {
  constructor(version: V2010, accountSid: string, resourceSid: string, sid: string);

  extensions: AssignedAddOnExtensionListInstance;
  /**
   * fetch a AssignedAddOnInstance
   *
   * @returns Promise that resolves to processed AssignedAddOnInstance
   */
  fetch(): Promise<AssignedAddOnInstance>;
  /**
   * fetch a AssignedAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: AssignedAddOnInstance) => any): void;
  /**
   * remove a AssignedAddOnInstance
   *
   * @returns Promise that resolves to processed AssignedAddOnInstance
   */
  remove(): Promise<AssignedAddOnInstance>;
  /**
   * remove a AssignedAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: AssignedAddOnInstance) => any): void;
}

export {AssignedAddOnListInstance, AssignedAddOnList, AssignedAddOnResource, AssignedAddOnSolution, AssignedAddOnListCreateOptions, AssignedAddOnListOptions, AssignedAddOnPayload, AssignedAddOnPage, AssignedAddOnListPageOptions, AssignedAddOnContext, AssignedAddOnListEachOptions, AssignedAddOnInstance}

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Marketplace = require('../Marketplace');
import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import { InstalledAddOnExtensionListInstance } from './installedAddOn/installedAddOnExtension';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';

declare function InstalledAddOnList(version: Marketplace): InstalledAddOnListInstance

interface InstalledAddOnResource {
  /**
   * The unique id of the Account that has installed this Add-on.
   */
  account_sid: string;
  /**
   * The JSON object representing the current configuration of this Add-on installation.
   */
  configuration: string;
  /**
   * The date that this Add-on installation was created, given in ISO 8601 format.
   */
  date_created: Date;
  /**
   * The date that this Add-on installation was last updated, given in ISO 8601 format.
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
   * The links
   */
  links: string;
  /**
   * A 34 character string that uniquely identifies this Add-on installation.
   */
  sid: string;
  /**
   * The human-readable string that uniquely identifies an Add-on installation for an Account.
   */
  unique_name: string;
  /**
   * The url
   */
  url: string;
}

interface InstalledAddOnPayload extends InstalledAddOnResource, Page.TwilioResponsePayload {
}

interface InstalledAddOnSolution {
}

interface InstalledAddOnListCreateOptions {
  /**
   * A boolean that reflects your decision whether to accept the Terms of Service
   */
  acceptTermsOfService: boolean;
  /**
   * A 34 character string that uniquely identifies the Add-on to be installed.
   */
  availableAddOnSid: string;
  /**
   * The JSON object representing the configuration of the new Add-on installation.
   */
  configuration?: string;
  /**
   * The human-readable string that uniquely identifies this Add-on installation for an Account.
   */
  uniqueName?: string;
}

interface InstalledAddOnListEachOptions extends ListEachOptions<InstalledAddOnInstance> {
}

interface InstalledAddOnListOptions extends ListOptions<InstalledAddOnInstance> {
}

interface InstalledAddOnListPageOptions extends PageOptions<InstalledAddOnPage> {
}

interface InstalledAddOnListInstance {
  /**
   * Gets context of a single InstalledAddOn resource
   *
   * @param sid - The unique Installed Add-on Sid
   */
  (sid: string): InstalledAddOnContext;
  /**
   * create a InstalledAddOnInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed InstalledAddOnInstance
   */
  create(opts: InstalledAddOnListCreateOptions): Promise<InstalledAddOnInstance>;
  /**
   * create a InstalledAddOnInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: InstalledAddOnListCreateOptions, callback: (error: Error | null, items: InstalledAddOnInstance) => any): void;
  /**
   * Streams InstalledAddOnInstance records from the API.
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
  each(opts?: InstalledAddOnListEachOptions): void;
  /**
   * Streams InstalledAddOnInstance records from the API.
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
  each(callback: (item: InstalledAddOnInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single InstalledAddOn resource
   *
   * @param sid - The unique Installed Add-on Sid
   */
  get(sid: string): InstalledAddOnContext;
  /**
   * Retrieve a single target page of InstalledAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<InstalledAddOnPage>;
  /**
   * Retrieve a single target page of InstalledAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: InstalledAddOnPage) => any): void;
  /**
   * Lists InstalledAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: InstalledAddOnListOptions): Promise<InstalledAddOnInstance[]>;
  /**
   * Lists InstalledAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: InstalledAddOnListOptions, callback: (error: Error | null, items: InstalledAddOnInstance[]) => any): void;
  /**
   * Lists InstalledAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: InstalledAddOnInstance[]) => any): void;
  /**
   * Retrieve a single page of InstalledAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: InstalledAddOnListPageOptions): Promise<InstalledAddOnPage>;
  /**
   * Retrieve a single page of InstalledAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: InstalledAddOnListPageOptions, callback: (error: Error | null, items: InstalledAddOnPage) => any): void;
  /**
   * Retrieve a single page of InstalledAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: InstalledAddOnPage) => any): void;
}

interface InstalledAddOnListFetchOptions {
  /**
   * The JSON object representing the configuration of the Add-on installation.
   */
  configuration?: string;
  /**
   * The human-readable string that uniquely identifies this Add-on installation for an Account.
   */
  uniqueName?: string;
}

interface InstalledAddOnListFetchOptions {
  /**
   * The JSON object representing the configuration of the Add-on installation.
   */
  configuration?: string;
  /**
   * The human-readable string that uniquely identifies this Add-on installation for an Account.
   */
  uniqueName?: string;
}

declare class InstalledAddOnPage extends Page<Marketplace, InstalledAddOnPayload, InstalledAddOnResource, InstalledAddOnInstance> {
  constructor(version: Marketplace, response: Response<string>, solution: InstalledAddOnSolution);

  /**
   * Build an instance of InstalledAddOnInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InstalledAddOnPayload): InstalledAddOnInstance;
}

declare class InstalledAddOnInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique Installed Add-on Sid
   */
  constructor(version: Marketplace, payload: InstalledAddOnPayload, sid: string);

  private _proxy: InstalledAddOnContext;
  /**
   * The unique id of the Account that has installed this Add-on.
   */
  accountSid: string;
  /**
   * The JSON object representing the current configuration of this Add-on installation.
   */
  configuration: string;
  /**
   * The date that this Add-on installation was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The date that this Add-on installation was last updated, given in ISO 8601 format.
   */
  dateUpdated: Date;
  /**
   * A short description of the functionality provided by the Add-on.
   */
  description: string;
  extensions(): InstalledAddOnExtensionListInstance;
  /**
   * fetch a InstalledAddOnInstance
   *
   * @returns Promise that resolves to processed InstalledAddOnInstance
   */
  fetch(): Promise<InstalledAddOnInstance>;
  /**
   * fetch a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: InstalledAddOnInstance) => any): void;
  /**
   * A human-readable description of this Add-on installation.
   */
  friendlyName: string;
  /**
   * The links
   */
  links: string;
  /**
   * remove a InstalledAddOnInstance
   *
   * @returns Promise that resolves to processed InstalledAddOnInstance
   */
  remove(): Promise<InstalledAddOnInstance>;
  /**
   * remove a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: InstalledAddOnInstance) => any): void;
  /**
   * A 34 character string that uniquely identifies this Add-on installation.
   */
  sid: string;
  /**
   * The human-readable string that uniquely identifies an Add-on installation for an Account.
   */
  uniqueName: string;
  /**
   * update a InstalledAddOnInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed InstalledAddOnInstance
   */
  update(opts?: InstalledAddOnListFetchOptions): Promise<InstalledAddOnInstance>;
  /**
   * update a InstalledAddOnInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: InstalledAddOnListFetchOptions, callback: (error: Error | null, items: InstalledAddOnInstance) => any): void;
  /**
   * update a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: InstalledAddOnInstance) => any): void;
  /**
   * The url
   */
  url: string;
}

declare class InstalledAddOnContext {
  constructor(version: Marketplace, sid: string);

  extensions: InstalledAddOnExtensionListInstance;
  /**
   * fetch a InstalledAddOnInstance
   *
   * @returns Promise that resolves to processed InstalledAddOnInstance
   */
  fetch(): Promise<InstalledAddOnInstance>;
  /**
   * fetch a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: InstalledAddOnInstance) => any): void;
  /**
   * remove a InstalledAddOnInstance
   *
   * @returns Promise that resolves to processed InstalledAddOnInstance
   */
  remove(): Promise<InstalledAddOnInstance>;
  /**
   * remove a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: InstalledAddOnInstance) => any): void;
  /**
   * update a InstalledAddOnInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed InstalledAddOnInstance
   */
  update(opts?: InstalledAddOnListFetchOptions): Promise<InstalledAddOnInstance>;
  /**
   * update a InstalledAddOnInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: InstalledAddOnListFetchOptions, callback: (error: Error | null, items: InstalledAddOnInstance) => any): void;
  /**
   * update a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: InstalledAddOnInstance) => any): void;
}

export {InstalledAddOnSolution, InstalledAddOnListEachOptions, InstalledAddOnPayload, InstalledAddOnInstance, InstalledAddOnListOptions, InstalledAddOnPage, InstalledAddOnContext, InstalledAddOnListCreateOptions, InstalledAddOnListFetchOptions, InstalledAddOnList, InstalledAddOnListPageOptions, InstalledAddOnResource, InstalledAddOnListInstance}
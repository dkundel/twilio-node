/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';

declare function RatePlanList(version: V1): RatePlanListInstance

interface RatePlanResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The data_enabled
   */
  data_enabled: boolean;
  /**
   * The data_limit
   */
  data_limit: number;
  /**
   * The data_metering
   */
  data_metering: string;
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
   * The international_roaming
   */
  international_roaming: string;
  /**
   * The international_roaming_data_limit
   */
  international_roaming_data_limit: number;
  /**
   * The messaging_enabled
   */
  messaging_enabled: boolean;
  /**
   * The national_roaming_data_limit
   */
  national_roaming_data_limit: number;
  /**
   * The national_roaming_enabled
   */
  national_roaming_enabled: boolean;
  /**
   * The sid
   */
  sid: string;
  /**
   * The unique_name
   */
  unique_name: string;
  /**
   * The url
   */
  url: string;
  /**
   * The voice_enabled
   */
  voice_enabled: boolean;
}

interface RatePlanPayload extends RatePlanResource, Page.TwilioResponsePayload {
}

interface RatePlanSolution {
}

interface RatePlanListEachOptions extends ListEachOptions<RatePlanInstance> {
}

interface RatePlanListOptions extends ListOptions<RatePlanInstance> {
}

interface RatePlanListPageOptions extends PageOptions<RatePlanPage> {
}

interface RatePlanListCreateOptions {
  /**
   * The data_enabled
   */
  dataEnabled?: boolean;
  /**
   * The data_limit
   */
  dataLimit?: number;
  /**
   * The data_metering
   */
  dataMetering?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The international_roaming
   */
  internationalRoaming?: string[];
  /**
   * The international_roaming_data_limit
   */
  internationalRoamingDataLimit?: number;
  /**
   * The messaging_enabled
   */
  messagingEnabled?: boolean;
  /**
   * The national_roaming_data_limit
   */
  nationalRoamingDataLimit?: number;
  /**
   * The national_roaming_enabled
   */
  nationalRoamingEnabled?: boolean;
  /**
   * The unique_name
   */
  uniqueName?: string;
  /**
   * The voice_enabled
   */
  voiceEnabled?: boolean;
}

interface RatePlanListInstance {
  /**
   * Gets context of a single RatePlan resource
   *
   * @param sid - The sid
   */
  (sid: string): RatePlanContext;
  /**
   * create a RatePlanInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed RatePlanInstance
   */
  create(opts?: RatePlanListCreateOptions): Promise<RatePlanInstance>;
  /**
   * create a RatePlanInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: RatePlanListCreateOptions, callback: (error: Error | null, items: RatePlanInstance) => any): void;
  /**
   * create a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback: (error: Error | null, items: RatePlanInstance) => any): void;
  /**
   * Streams RatePlanInstance records from the API.
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
  each(opts?: RatePlanListEachOptions): void;
  /**
   * Streams RatePlanInstance records from the API.
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
  each(callback: (item: RatePlanInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single RatePlan resource
   *
   * @param sid - The sid
   */
  get(sid: string): RatePlanContext;
  /**
   * Retrieve a single target page of RatePlanInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<RatePlanPage>;
  /**
   * Retrieve a single target page of RatePlanInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: RatePlanPage) => any): void;
  /**
   * Lists RatePlanInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: RatePlanListOptions): Promise<RatePlanInstance[]>;
  /**
   * Lists RatePlanInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: RatePlanListOptions, callback: (error: Error | null, items: RatePlanInstance[]) => any): void;
  /**
   * Lists RatePlanInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: RatePlanInstance[]) => any): void;
  /**
   * Retrieve a single page of RatePlanInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: RatePlanListPageOptions): Promise<RatePlanPage>;
  /**
   * Retrieve a single page of RatePlanInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: RatePlanListPageOptions, callback: (error: Error | null, items: RatePlanPage) => any): void;
  /**
   * Retrieve a single page of RatePlanInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: RatePlanPage) => any): void;
}

interface RatePlanListFetchOptions {
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The unique_name
   */
  uniqueName?: string;
}

interface RatePlanListFetchOptions {
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The unique_name
   */
  uniqueName?: string;
}

declare class RatePlanPage extends Page<V1, RatePlanPayload, RatePlanResource, RatePlanInstance> {
  constructor(version: V1, response: Response<string>, solution: RatePlanSolution);

  /**
   * Build an instance of RatePlanInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RatePlanPayload): RatePlanInstance;
}

declare class RatePlanInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: RatePlanPayload, sid: string);

  private _proxy: RatePlanContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The data_enabled
   */
  dataEnabled: boolean;
  /**
   * The data_limit
   */
  dataLimit: number;
  /**
   * The data_metering
   */
  dataMetering: string;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * fetch a RatePlanInstance
   *
   * @returns Promise that resolves to processed RatePlanInstance
   */
  fetch(): Promise<RatePlanInstance>;
  /**
   * fetch a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: RatePlanInstance) => any): void;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The international_roaming
   */
  internationalRoaming: string;
  /**
   * The international_roaming_data_limit
   */
  internationalRoamingDataLimit: number;
  /**
   * The messaging_enabled
   */
  messagingEnabled: boolean;
  /**
   * The national_roaming_data_limit
   */
  nationalRoamingDataLimit: number;
  /**
   * The national_roaming_enabled
   */
  nationalRoamingEnabled: boolean;
  /**
   * remove a RatePlanInstance
   *
   * @returns Promise that resolves to processed RatePlanInstance
   */
  remove(): Promise<RatePlanInstance>;
  /**
   * remove a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: RatePlanInstance) => any): void;
  /**
   * The sid
   */
  sid: string;
  /**
   * The unique_name
   */
  uniqueName: string;
  /**
   * update a RatePlanInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed RatePlanInstance
   */
  update(opts?: RatePlanListFetchOptions): Promise<RatePlanInstance>;
  /**
   * update a RatePlanInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: RatePlanListFetchOptions, callback: (error: Error | null, items: RatePlanInstance) => any): void;
  /**
   * update a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: RatePlanInstance) => any): void;
  /**
   * The url
   */
  url: string;
  /**
   * The voice_enabled
   */
  voiceEnabled: boolean;
}

declare class RatePlanContext {
  constructor(version: V1, sid: string);

  /**
   * fetch a RatePlanInstance
   *
   * @returns Promise that resolves to processed RatePlanInstance
   */
  fetch(): Promise<RatePlanInstance>;
  /**
   * fetch a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: RatePlanInstance) => any): void;
  /**
   * remove a RatePlanInstance
   *
   * @returns Promise that resolves to processed RatePlanInstance
   */
  remove(): Promise<RatePlanInstance>;
  /**
   * remove a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: RatePlanInstance) => any): void;
  /**
   * update a RatePlanInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed RatePlanInstance
   */
  update(opts?: RatePlanListFetchOptions): Promise<RatePlanInstance>;
  /**
   * update a RatePlanInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: RatePlanListFetchOptions, callback: (error: Error | null, items: RatePlanInstance) => any): void;
  /**
   * update a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: RatePlanInstance) => any): void;
}

export {RatePlanContext, RatePlanResource, RatePlanListInstance, RatePlanPayload, RatePlanListCreateOptions, RatePlanListFetchOptions, RatePlanInstance, RatePlanListOptions, RatePlanSolution, RatePlanListPageOptions, RatePlanListEachOptions, RatePlanPage, RatePlanList}

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import Studio = require('../../../Studio');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';

declare function StepList(version: Studio, flowSid: string, engagementSid: string): StepListInstance

interface StepResource {
  /**
   * The unique SID identifier of the Account.
   */
  account_sid: string;
  /**
   * Contains a dictionary of URL links to nested resources of this Step.
   */
  context: string;
  /**
   * The date that this Step was created, given in ISO 8601 format.
   */
  date_created: Date;
  /**
   * The date that this Step was updated, given in ISO 8601 format.
   */
  date_updated: Date;
  /**
   * The unique SID identifier of the Engagement.
   */
  engagement_sid: string;
  /**
   * The unique SID identifier of the Flow.
   */
  flow_sid: string;
  /**
   * The Widget that implemented this Step.
   */
  name: string;
  /**
   * A 34 character string that uniquely identifies this Step.
   */
  sid: string;
  /**
   * The Widget that preceded the Widget for this Step.
   */
  transitioned_from: string;
  /**
   * The Widget that will follow the Widget for this Step.
   */
  transitioned_to: string;
  /**
   * The URL of this resource.
   */
  url: string;
}

interface StepPayload extends StepResource, Page.TwilioResponsePayload {
}

interface StepSolution {
  engagementSid: string;
  flowSid: string;
}

interface StepListEachOptions extends ListEachOptions<StepInstance> {
}

interface StepListOptions extends ListOptions<StepInstance> {
}

interface StepListPageOptions extends PageOptions<StepPage> {
}

interface StepListInstance {
  /**
   * Gets context of a single Step resource
   *
   * @param sid - The sid
   */
  (sid: string): StepContext;
  /**
   * Streams StepInstance records from the API.
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
  each(opts?: StepListEachOptions): void;
  /**
   * Streams StepInstance records from the API.
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
  each(callback: (item: StepInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Step resource
   *
   * @param sid - The sid
   */
  get(sid: string): StepContext;
  /**
   * Retrieve a single target page of StepInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<StepPage>;
  /**
   * Retrieve a single target page of StepInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: StepPage) => any): void;
  /**
   * Lists StepInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: StepListOptions): Promise<StepInstance[]>;
  /**
   * Lists StepInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: StepListOptions, callback: (error: Error | null, items: StepInstance[]) => any): void;
  /**
   * Lists StepInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: StepInstance[]) => any): void;
  /**
   * Retrieve a single page of StepInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: StepListPageOptions): Promise<StepPage>;
  /**
   * Retrieve a single page of StepInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: StepListPageOptions, callback: (error: Error | null, items: StepPage) => any): void;
  /**
   * Retrieve a single page of StepInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: StepPage) => any): void;
}

declare class StepPage extends Page<Studio, StepPayload, StepResource, StepInstance> {
  constructor(version: Studio, response: Response<string>, solution: StepSolution);

  /**
   * Build an instance of StepInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: StepPayload): StepInstance;
}

declare class StepInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param flowSid - The flow_sid
   * @param engagementSid - The engagement_sid
   * @param sid - The sid
   */
  constructor(version: Studio, payload: StepPayload, flowSid: string, engagementSid: string, sid: string);

  private _proxy: StepContext;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * Contains a dictionary of URL links to nested resources of this Step.
   */
  context: string;
  /**
   * The date that this Step was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The date that this Step was updated, given in ISO 8601 format.
   */
  dateUpdated: Date;
  /**
   * The unique SID identifier of the Engagement.
   */
  engagementSid: string;
  /**
   * fetch a StepInstance
   *
   * @returns Promise that resolves to processed StepInstance
   */
  fetch(): Promise<StepInstance>;
  /**
   * fetch a StepInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: StepInstance) => any): void;
  /**
   * The unique SID identifier of the Flow.
   */
  flowSid: string;
  /**
   * The Widget that implemented this Step.
   */
  name: string;
  /**
   * A 34 character string that uniquely identifies this Step.
   */
  sid: string;
  /**
   * The Widget that preceded the Widget for this Step.
   */
  transitionedFrom: string;
  /**
   * The Widget that will follow the Widget for this Step.
   */
  transitionedTo: string;
  /**
   * The URL of this resource.
   */
  url: string;
}

declare class StepContext {
  constructor(version: Studio, flowSid: string, engagementSid: string, sid: string);

  /**
   * fetch a StepInstance
   *
   * @returns Promise that resolves to processed StepInstance
   */
  fetch(): Promise<StepInstance>;
  /**
   * fetch a StepInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: StepInstance) => any): void;
}

export {StepInstance, StepSolution, StepListOptions, StepPage, StepPayload, StepResource, StepListEachOptions, StepContext, StepList, StepListInstance, StepListPageOptions}

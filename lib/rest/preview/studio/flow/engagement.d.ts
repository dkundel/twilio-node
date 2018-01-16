/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import Studio = require('../../Studio');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { StepListInstance } from './engagement/step';

declare function EngagementList(version: Studio, flowSid: string): EngagementListInstance

type EngagementStatus = 'active'|'ended';

interface EngagementResource {
  /**
   * The unique SID identifier of the Account.
   */
  account_sid: string;
  /**
   * The phone number, SIP address or Client identifier that triggered this Engagement. Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.
   */
  contact_channel_address: string;
  /**
   * The unique SID identifier of the Contact.
   */
  contact_sid: string;
  /**
   * Contains a dictionary of URL links to nested resources of this Engagement.
   */
  context: string;
  /**
   * The date that this Engagement was created, given in ISO 8601 format.
   */
  date_created: Date;
  /**
   * The date that this Engagement was updated, given in ISO 8601 format.
   */
  date_updated: Date;
  /**
   * The unique SID identifier of the Flow.
   */
  flow_sid: string;
  /**
   * Contains a dictionary of URL links to nested resources of this Engagement.
   */
  links: string;
  /**
   * A 34 character string that uniquely identifies this Engagement.
   */
  sid: string;
  /**
   * The Status of this Engagement. One of `active` or `ended`.
   */
  status: EngagementStatus;
  /**
   * The URL of this resource.
   */
  url: string;
}

interface EngagementPayload extends EngagementResource, Page.TwilioResponsePayload {
}

interface EngagementSolution {
  flowSid: string;
}

interface EngagementListEachOptions extends ListEachOptions<EngagementInstance> {
}

interface EngagementListOptions extends ListOptions<EngagementInstance> {
}

interface EngagementListPageOptions extends PageOptions<EngagementPage> {
}

interface EngagementListCreateOptions {
  /**
   * The from
   */
  from: string;
  /**
   * The parameters
   */
  parameters?: string;
  /**
   * The to
   */
  to: string;
}

interface EngagementListInstance {
  /**
   * Gets context of a single Engagement resource
   *
   * @param sid - The sid
   */
  (sid: string): EngagementContext;
  /**
   * create a EngagementInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed EngagementInstance
   */
  create(opts: EngagementListCreateOptions): Promise<EngagementInstance>;
  /**
   * create a EngagementInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: EngagementListCreateOptions, callback: (error: Error | null, items: EngagementInstance) => any): void;
  /**
   * Streams EngagementInstance records from the API.
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
  each(opts?: EngagementListEachOptions): void;
  /**
   * Streams EngagementInstance records from the API.
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
  each(callback: (item: EngagementInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Engagement resource
   *
   * @param sid - The sid
   */
  get(sid: string): EngagementContext;
  /**
   * Retrieve a single target page of EngagementInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<EngagementPage>;
  /**
   * Retrieve a single target page of EngagementInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: EngagementPage) => any): void;
  /**
   * Lists EngagementInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: EngagementListOptions): Promise<EngagementInstance[]>;
  /**
   * Lists EngagementInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: EngagementListOptions, callback: (error: Error | null, items: EngagementInstance[]) => any): void;
  /**
   * Lists EngagementInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: EngagementInstance[]) => any): void;
  /**
   * Retrieve a single page of EngagementInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: EngagementListPageOptions): Promise<EngagementPage>;
  /**
   * Retrieve a single page of EngagementInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: EngagementListPageOptions, callback: (error: Error | null, items: EngagementPage) => any): void;
  /**
   * Retrieve a single page of EngagementInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: EngagementPage) => any): void;
}

declare class EngagementPage extends Page<Studio, EngagementPayload, EngagementResource, EngagementInstance> {
  constructor(version: Studio, response: Response<string>, solution: EngagementSolution);

  /**
   * Build an instance of EngagementInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EngagementPayload): EngagementInstance;
}

declare class EngagementInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param flowSid - The flow_sid
   * @param sid - The sid
   */
  constructor(version: Studio, payload: EngagementPayload, flowSid: string, sid: string);

  private _proxy: EngagementContext;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * The phone number, SIP address or Client identifier that triggered this Engagement. Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.
   */
  contactChannelAddress: string;
  /**
   * The unique SID identifier of the Contact.
   */
  contactSid: string;
  /**
   * Contains a dictionary of URL links to nested resources of this Engagement.
   */
  context: string;
  /**
   * The date that this Engagement was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The date that this Engagement was updated, given in ISO 8601 format.
   */
  dateUpdated: Date;
  /**
   * fetch a EngagementInstance
   *
   * @returns Promise that resolves to processed EngagementInstance
   */
  fetch(): Promise<EngagementInstance>;
  /**
   * fetch a EngagementInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: EngagementInstance) => any): void;
  /**
   * The unique SID identifier of the Flow.
   */
  flowSid: string;
  /**
   * Contains a dictionary of URL links to nested resources of this Engagement.
   */
  links: string;
  /**
   * remove a EngagementInstance
   *
   * @returns Promise that resolves to processed EngagementInstance
   */
  remove(): Promise<EngagementInstance>;
  /**
   * remove a EngagementInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: EngagementInstance) => any): void;
  /**
   * A 34 character string that uniquely identifies this Engagement.
   */
  sid: string;
  /**
   * The Status of this Engagement. One of `active` or `ended`.
   */
  status: EngagementStatus;
  steps(): StepListInstance;
  /**
   * The URL of this resource.
   */
  url: string;
}

declare class EngagementContext {
  constructor(version: Studio, flowSid: string, sid: string);

  /**
   * fetch a EngagementInstance
   *
   * @returns Promise that resolves to processed EngagementInstance
   */
  fetch(): Promise<EngagementInstance>;
  /**
   * fetch a EngagementInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: EngagementInstance) => any): void;
  /**
   * remove a EngagementInstance
   *
   * @returns Promise that resolves to processed EngagementInstance
   */
  remove(): Promise<EngagementInstance>;
  /**
   * remove a EngagementInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: EngagementInstance) => any): void;
  steps: StepListInstance;
}

export {EngagementListInstance, EngagementInstance, EngagementStatus, EngagementList, EngagementContext, EngagementListPageOptions, EngagementListCreateOptions, EngagementSolution, EngagementPage, EngagementListOptions, EngagementListEachOptions, EngagementPayload, EngagementResource}

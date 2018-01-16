/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Proxy = require('../../Proxy');
import Response = require('../../../../http/response');
import { InteractionListInstance } from './session/interaction';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { ParticipantListInstance } from './session/participant';

declare function SessionList(version: Proxy, serviceSid: string): SessionListInstance

type SessionStatus = 'in-progess'|'completed';

interface SessionResource {
  /**
   * The unique SID identifier of the Account.
   */
  account_sid: string;
  /**
   * The date that this Session was created, given in ISO 8601 format.
   */
  date_created: Date;
  /**
   * The date that this Session was updated, given in ISO 8601 format.
   */
  date_updated: Date;
  /**
   * The date that this Session was ended, given in ISO 8601 format.
   */
  end_time: Date;
  /**
   * Contains a dictionary of URL links to nested resources of this Session.
   */
  links: string;
  /**
   * The unique SID identifier of the Service.
   */
  service_sid: string;
  /**
   * A 34 character string that uniquely identifies this Session.
   */
  sid: string;
  /**
   * The date that this Session was started, given in ISO 8601 format.
   */
  start_time: Date;
  /**
   * The Status of this Session. One of `in-progess` or `completed`.
   */
  status: SessionStatus;
  /**
   * How long will this session stay open, in seconds. Each new interaction resets this timer.
   */
  ttl: number;
  /**
   * Provides a unique and addressable name to be assigned to this Session, assigned by the developer, to be optionally used in addition to SID.
   */
  unique_name: string;
  /**
   * The URL of this Session.
   */
  url: string;
}

interface SessionPayload extends SessionResource, Page.TwilioResponsePayload {
}

interface SessionSolution {
  serviceSid: string;
}

interface SessionListEachOptions extends ListEachOptions<SessionInstance> {
  /**
   * The Status of this Session. One of `in-progess` or `completed`.
   */
  status?: SessionStatus;
  /**
   * Provides a unique and addressable name to be assigned to this Session, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName?: string;
}

interface SessionListOptions extends ListOptions<SessionInstance> {
  /**
   * The Status of this Session. One of `in-progess` or `completed`.
   */
  status?: SessionStatus;
  /**
   * Provides a unique and addressable name to be assigned to this Session, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName?: string;
}

interface SessionListPageOptions extends PageOptions<SessionPage> {
  /**
   * The Status of this Session. One of `in-progess` or `completed`.
   */
  status?: SessionStatus;
  /**
   * Provides a unique and addressable name to be assigned to this Session, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName?: string;
}

interface SessionListCreateOptions {
  /**
   * The participants
   */
  participants?: string[];
  /**
   * The Status of this Session. One of `in-progess` or `completed`.
   */
  status?: SessionStatus;
  /**
   * How long will this session stay open, in seconds. Each new interaction resets this timer.
   */
  ttl?: number;
  /**
   * Provides a unique and addressable name to be assigned to this Session, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName?: string;
}

interface SessionListInstance {
  /**
   * Gets context of a single Session resource
   *
   * @param sid - A string that uniquely identifies this Session.
   */
  (sid: string): SessionContext;
  /**
   * create a SessionInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SessionInstance
   */
  create(opts?: SessionListCreateOptions): Promise<SessionInstance>;
  /**
   * create a SessionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: SessionListCreateOptions, callback: (error: Error | null, items: SessionInstance) => any): void;
  /**
   * create a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback: (error: Error | null, items: SessionInstance) => any): void;
  /**
   * Streams SessionInstance records from the API.
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
  each(opts?: SessionListEachOptions): void;
  /**
   * Streams SessionInstance records from the API.
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
  each(callback: (item: SessionInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Session resource
   *
   * @param sid - A string that uniquely identifies this Session.
   */
  get(sid: string): SessionContext;
  /**
   * Retrieve a single target page of SessionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<SessionPage>;
  /**
   * Retrieve a single target page of SessionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: SessionPage) => any): void;
  /**
   * Lists SessionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: SessionListOptions): Promise<SessionInstance[]>;
  /**
   * Lists SessionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: SessionListOptions, callback: (error: Error | null, items: SessionInstance[]) => any): void;
  /**
   * Lists SessionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: SessionInstance[]) => any): void;
  /**
   * Retrieve a single page of SessionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: SessionListPageOptions): Promise<SessionPage>;
  /**
   * Retrieve a single page of SessionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: SessionListPageOptions, callback: (error: Error | null, items: SessionPage) => any): void;
  /**
   * Retrieve a single page of SessionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: SessionPage) => any): void;
}

interface SessionListFetchOptions {
  /**
   * The participants
   */
  participants?: string[];
  /**
   * The Status of this Session. One of `in-progess` or `completed`.
   */
  status?: SessionStatus;
  /**
   * How long will this session stay open, in seconds. Each new interaction resets this timer.
   */
  ttl?: number;
  /**
   * Provides a unique and addressable name to be assigned to this Session, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName?: string;
}

interface SessionListFetchOptions {
  /**
   * The participants
   */
  participants?: string[];
  /**
   * The Status of this Session. One of `in-progess` or `completed`.
   */
  status?: SessionStatus;
  /**
   * How long will this session stay open, in seconds. Each new interaction resets this timer.
   */
  ttl?: number;
  /**
   * Provides a unique and addressable name to be assigned to this Session, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName?: string;
}

declare class SessionPage extends Page<Proxy, SessionPayload, SessionResource, SessionInstance> {
  constructor(version: Proxy, response: Response<string>, solution: SessionSolution);

  /**
   * Build an instance of SessionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SessionPayload): SessionInstance;
}

declare class SessionInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sid - A string that uniquely identifies this Session.
   */
  constructor(version: Proxy, payload: SessionPayload, serviceSid: string, sid: string);

  private _proxy: SessionContext;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * The date that this Session was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The date that this Session was updated, given in ISO 8601 format.
   */
  dateUpdated: Date;
  /**
   * The date that this Session was ended, given in ISO 8601 format.
   */
  endTime: Date;
  /**
   * fetch a SessionInstance
   *
   * @returns Promise that resolves to processed SessionInstance
   */
  fetch(): Promise<SessionInstance>;
  /**
   * fetch a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SessionInstance) => any): void;
  interactions(): InteractionListInstance;
  /**
   * Contains a dictionary of URL links to nested resources of this Session.
   */
  links: string;
  participants(): ParticipantListInstance;
  /**
   * remove a SessionInstance
   *
   * @returns Promise that resolves to processed SessionInstance
   */
  remove(): Promise<SessionInstance>;
  /**
   * remove a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SessionInstance) => any): void;
  /**
   * The unique SID identifier of the Service.
   */
  serviceSid: string;
  /**
   * A 34 character string that uniquely identifies this Session.
   */
  sid: string;
  /**
   * The date that this Session was started, given in ISO 8601 format.
   */
  startTime: Date;
  /**
   * The Status of this Session. One of `in-progess` or `completed`.
   */
  status: SessionStatus;
  /**
   * How long will this session stay open, in seconds. Each new interaction resets this timer.
   */
  ttl: number;
  /**
   * Provides a unique and addressable name to be assigned to this Session, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName: string;
  /**
   * update a SessionInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SessionInstance
   */
  update(opts?: SessionListFetchOptions): Promise<SessionInstance>;
  /**
   * update a SessionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SessionListFetchOptions, callback: (error: Error | null, items: SessionInstance) => any): void;
  /**
   * update a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: SessionInstance) => any): void;
  /**
   * The URL of this Session.
   */
  url: string;
}

declare class SessionContext {
  constructor(version: Proxy, serviceSid: string, sid: string);

  /**
   * fetch a SessionInstance
   *
   * @returns Promise that resolves to processed SessionInstance
   */
  fetch(): Promise<SessionInstance>;
  /**
   * fetch a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SessionInstance) => any): void;
  interactions: InteractionListInstance;
  participants: ParticipantListInstance;
  /**
   * remove a SessionInstance
   *
   * @returns Promise that resolves to processed SessionInstance
   */
  remove(): Promise<SessionInstance>;
  /**
   * remove a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SessionInstance) => any): void;
  /**
   * update a SessionInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SessionInstance
   */
  update(opts?: SessionListFetchOptions): Promise<SessionInstance>;
  /**
   * update a SessionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SessionListFetchOptions, callback: (error: Error | null, items: SessionInstance) => any): void;
  /**
   * update a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: SessionInstance) => any): void;
}

export {SessionPage, SessionListCreateOptions, SessionStatus, SessionPayload, SessionSolution, SessionListOptions, SessionList, SessionResource, SessionContext, SessionListPageOptions, SessionListEachOptions, SessionInstance, SessionListFetchOptions, SessionListInstance}

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';

declare function TranscriptionList(version: V2010, accountSid: string, recordingSid: string): TranscriptionListInstance

type TranscriptionStatus = 'in-progress'|'completed'|'failed';

interface TranscriptionResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The api_version
   */
  api_version: string;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The duration
   */
  duration: string;
  /**
   * The price
   */
  price: number;
  /**
   * The price_unit
   */
  price_unit: string;
  /**
   * The recording_sid
   */
  recording_sid: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The status
   */
  status: TranscriptionStatus;
  /**
   * The transcription_text
   */
  transcription_text: string;
  /**
   * The type
   */
  type: string;
  /**
   * The uri
   */
  uri: string;
}

interface TranscriptionPayload extends TranscriptionResource, Page.TwilioResponsePayload {
}

interface TranscriptionSolution {
  accountSid: string;
  recordingSid: string;
}

interface TranscriptionListEachOptions extends ListEachOptions<TranscriptionInstance> {
}

interface TranscriptionListOptions extends ListOptions<TranscriptionInstance> {
}

interface TranscriptionListPageOptions extends PageOptions<TranscriptionPage> {
}

interface TranscriptionListInstance {
  /**
   * Gets context of a single Transcription resource
   *
   * @param sid - The sid
   */
  (sid: string): TranscriptionContext;
  /**
   * Streams TranscriptionInstance records from the API.
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
  each(opts?: TranscriptionListEachOptions): void;
  /**
   * Streams TranscriptionInstance records from the API.
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
  each(callback: (item: TranscriptionInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Transcription resource
   *
   * @param sid - The sid
   */
  get(sid: string): TranscriptionContext;
  /**
   * Retrieve a single target page of TranscriptionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<TranscriptionPage>;
  /**
   * Retrieve a single target page of TranscriptionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: TranscriptionPage) => any): void;
  /**
   * Lists TranscriptionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: TranscriptionListOptions): Promise<TranscriptionInstance[]>;
  /**
   * Lists TranscriptionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: TranscriptionListOptions, callback: (error: Error | null, items: TranscriptionInstance[]) => any): void;
  /**
   * Lists TranscriptionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: TranscriptionInstance[]) => any): void;
  /**
   * Retrieve a single page of TranscriptionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: TranscriptionListPageOptions): Promise<TranscriptionPage>;
  /**
   * Retrieve a single page of TranscriptionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: TranscriptionListPageOptions, callback: (error: Error | null, items: TranscriptionPage) => any): void;
  /**
   * Retrieve a single page of TranscriptionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: TranscriptionPage) => any): void;
}

declare class TranscriptionPage extends Page<V2010, TranscriptionPayload, TranscriptionResource, TranscriptionInstance> {
  constructor(version: V2010, response: Response<string>, solution: TranscriptionSolution);

  /**
   * Build an instance of TranscriptionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TranscriptionPayload): TranscriptionInstance;
}

declare class TranscriptionInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param recordingSid - The recording_sid
   * @param sid - The sid
   */
  constructor(version: V2010, payload: TranscriptionPayload, accountSid: string, recordingSid: string, sid: string);

  private _proxy: TranscriptionContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The api_version
   */
  apiVersion: string;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * The duration
   */
  duration: string;
  /**
   * fetch a TranscriptionInstance
   *
   * @returns Promise that resolves to processed TranscriptionInstance
   */
  fetch(): Promise<TranscriptionInstance>;
  /**
   * fetch a TranscriptionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: TranscriptionInstance) => any): void;
  /**
   * The price
   */
  price: number;
  /**
   * The price_unit
   */
  priceUnit: string;
  /**
   * The recording_sid
   */
  recordingSid: string;
  /**
   * remove a TranscriptionInstance
   *
   * @returns Promise that resolves to processed TranscriptionInstance
   */
  remove(): Promise<TranscriptionInstance>;
  /**
   * remove a TranscriptionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: TranscriptionInstance) => any): void;
  /**
   * The sid
   */
  sid: string;
  /**
   * The status
   */
  status: TranscriptionStatus;
  /**
   * The transcription_text
   */
  transcriptionText: string;
  /**
   * The type
   */
  type: string;
  /**
   * The uri
   */
  uri: string;
}

declare class TranscriptionContext {
  constructor(version: V2010, accountSid: string, recordingSid: string, sid: string);

  /**
   * fetch a TranscriptionInstance
   *
   * @returns Promise that resolves to processed TranscriptionInstance
   */
  fetch(): Promise<TranscriptionInstance>;
  /**
   * fetch a TranscriptionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: TranscriptionInstance) => any): void;
  /**
   * remove a TranscriptionInstance
   *
   * @returns Promise that resolves to processed TranscriptionInstance
   */
  remove(): Promise<TranscriptionInstance>;
  /**
   * remove a TranscriptionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: TranscriptionInstance) => any): void;
}

export {TranscriptionPayload, TranscriptionInstance, TranscriptionPage, TranscriptionListEachOptions, TranscriptionResource, TranscriptionListInstance, TranscriptionStatus, TranscriptionListPageOptions, TranscriptionSolution, TranscriptionList, TranscriptionListOptions, TranscriptionContext}
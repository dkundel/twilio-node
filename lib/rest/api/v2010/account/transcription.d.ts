/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';

declare function TranscriptionList(version: V2010, accountSid: string): TranscriptionListInstance

type TranscriptionStatus = 'in-progress'|'completed'|'failed';

interface TranscriptionResource {
  /**
   * The unique id of the Account responsible for this transcription.
   */
  account_sid: string;
  /**
   * The api_version
   */
  api_version: string;
  /**
   * The date that this resource was created, given in RFC 2822 format.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated, given in RFC 2822 format.
   */
  date_updated: Date;
  /**
   * The duration of the transcribed audio, in seconds.
   */
  duration: string;
  /**
   * The charge for this transcript in the currency associated with the account. Populated after the transcript is completed. Note, this value may not be immediately available.
   */
  price: number;
  /**
   * The currency in which `Price` is measured, in ISO 4127 format (e.g. `usd`, `eur`, `jpy`).
   */
  price_unit: string;
  /**
   * The unique id of the Recording this Transcription was made of.
   */
  recording_sid: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * A string representing the status of the transcription: `in-progress`, `completed` or `failed`.
   */
  status: TranscriptionStatus;
  /**
   * The text content of the transcription.
   */
  transcription_text: string;
  /**
   * The type
   */
  type: string;
  /**
   * he URI for this resource, relative to `https://api.twilio.com`
   */
  uri: string;
}

interface TranscriptionPayload extends TranscriptionResource, Page.TwilioResponsePayload {
}

interface TranscriptionSolution {
  accountSid: string;
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
   * @param sid - Fetch by unique transcription Sid
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
   * @param sid - Fetch by unique transcription Sid
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
   * @param sid - Fetch by unique transcription Sid
   */
  constructor(version: V2010, payload: TranscriptionPayload, accountSid: string, sid: string);

  private _proxy: TranscriptionContext;
  /**
   * The unique id of the Account responsible for this transcription.
   */
  accountSid: string;
  /**
   * The api_version
   */
  apiVersion: string;
  /**
   * The date that this resource was created, given in RFC 2822 format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated, given in RFC 2822 format.
   */
  dateUpdated: Date;
  /**
   * The duration of the transcribed audio, in seconds.
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
   * The charge for this transcript in the currency associated with the account. Populated after the transcript is completed. Note, this value may not be immediately available.
   */
  price: number;
  /**
   * The currency in which `Price` is measured, in ISO 4127 format (e.g. `usd`, `eur`, `jpy`).
   */
  priceUnit: string;
  /**
   * The unique id of the Recording this Transcription was made of.
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
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * A string representing the status of the transcription: `in-progress`, `completed` or `failed`.
   */
  status: TranscriptionStatus;
  /**
   * The text content of the transcription.
   */
  transcriptionText: string;
  /**
   * The type
   */
  type: string;
  /**
   * he URI for this resource, relative to `https://api.twilio.com`
   */
  uri: string;
}

declare class TranscriptionContext {
  constructor(version: V2010, accountSid: string, sid: string);

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

export {TranscriptionPage, TranscriptionList, TranscriptionListEachOptions, TranscriptionListOptions, TranscriptionListPageOptions, TranscriptionSolution, TranscriptionInstance, TranscriptionResource, TranscriptionStatus, TranscriptionPayload, TranscriptionListInstance, TranscriptionContext}

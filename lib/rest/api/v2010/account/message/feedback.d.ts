/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');

declare function FeedbackList(version: V2010, accountSid: string, messageSid: string): FeedbackListInstance

type FeedbackOutcome = 'confirmed'|'umconfirmed';

interface FeedbackResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The message_sid
   */
  message_sid: string;
  /**
   * The outcome
   */
  outcome: FeedbackOutcome;
  /**
   * The uri
   */
  uri: string;
}

interface FeedbackPayload extends FeedbackResource, Page.TwilioResponsePayload {
}

interface FeedbackSolution {
  accountSid: string;
  messageSid: string;
}

interface FeedbackListCreateOptions {
  /**
   * The outcome
   */
  outcome?: FeedbackOutcome;
}

interface FeedbackListInstance {
  /**
   * create a FeedbackInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed FeedbackInstance
   */
  create(opts?: FeedbackListCreateOptions): Promise<FeedbackInstance>;
  /**
   * create a FeedbackInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: FeedbackListCreateOptions, callback: (error: Error | null, items: FeedbackInstance) => any): void;
  /**
   * create a FeedbackInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback: (error: Error | null, items: FeedbackInstance) => any): void;
}

declare class FeedbackPage extends Page<V2010, FeedbackPayload, FeedbackResource, FeedbackInstance> {
  constructor(version: V2010, response: Response<string>, solution: FeedbackSolution);

  /**
   * Build an instance of FeedbackInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FeedbackPayload): FeedbackInstance;
}

declare class FeedbackInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V2010, payload: FeedbackPayload);

  private _proxy: FeedbackContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * The message_sid
   */
  messageSid: string;
  /**
   * The outcome
   */
  outcome: FeedbackOutcome;
  /**
   * The uri
   */
  uri: string;
}

export {FeedbackPayload, FeedbackInstance, FeedbackListInstance, FeedbackPage, FeedbackListCreateOptions, FeedbackSolution, FeedbackOutcome, FeedbackResource, FeedbackList}

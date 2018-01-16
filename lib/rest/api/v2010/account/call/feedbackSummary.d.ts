/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');

declare function FeedbackSummaryList(version: V2010, accountSid: string): FeedbackSummaryListInstance

type FeedbackSummaryStatus = 'queued'|'in-progress'|'completed'|'failed';

interface FeedbackSummaryResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The call_count
   */
  call_count: number;
  /**
   * The call_feedback_count
   */
  call_feedback_count: number;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The end_date
   */
  end_date: Date;
  /**
   * The include_subaccounts
   */
  include_subaccounts: boolean;
  /**
   * The issues
   */
  issues: string;
  /**
   * The quality_score_average
   */
  quality_score_average: number;
  /**
   * The quality_score_median
   */
  quality_score_median: number;
  /**
   * The quality_score_standard_deviation
   */
  quality_score_standard_deviation: number;
  /**
   * The sid
   */
  sid: string;
  /**
   * The start_date
   */
  start_date: Date;
  /**
   * The status
   */
  status: FeedbackSummaryStatus;
}

interface FeedbackSummaryPayload extends FeedbackSummaryResource, Page.TwilioResponsePayload {
}

interface FeedbackSummarySolution {
  accountSid: string;
}

interface FeedbackSummaryListCreateOptions {
  /**
   * The end_date
   */
  endDate: Date;
  /**
   * The include_subaccounts
   */
  includeSubaccounts?: boolean;
  /**
   * The start_date
   */
  startDate: Date;
  /**
   * The status_callback
   */
  statusCallback?: string;
  /**
   * The status_callback_method
   */
  statusCallbackMethod?: string;
}

interface FeedbackSummaryListInstance {
  /**
   * Gets context of a single FeedbackSummary resource
   *
   * @param sid - The sid
   */
  (sid: string): FeedbackSummaryContext;
  /**
   * create a FeedbackSummaryInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed FeedbackSummaryInstance
   */
  create(opts: FeedbackSummaryListCreateOptions): Promise<FeedbackSummaryInstance>;
  /**
   * create a FeedbackSummaryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: FeedbackSummaryListCreateOptions, callback: (error: Error | null, items: FeedbackSummaryInstance) => any): void;
  /**
   * Gets context of a single FeedbackSummary resource
   *
   * @param sid - The sid
   */
  get(sid: string): FeedbackSummaryContext;
}

declare class FeedbackSummaryPage extends Page<V2010, FeedbackSummaryPayload, FeedbackSummaryResource, FeedbackSummaryInstance> {
  constructor(version: V2010, response: Response<string>, solution: FeedbackSummarySolution);

  /**
   * Build an instance of FeedbackSummaryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FeedbackSummaryPayload): FeedbackSummaryInstance;
}

declare class FeedbackSummaryInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param sid - The sid
   */
  constructor(version: V2010, payload: FeedbackSummaryPayload, accountSid: string, sid: string);

  private _proxy: FeedbackSummaryContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The call_count
   */
  callCount: number;
  /**
   * The call_feedback_count
   */
  callFeedbackCount: number;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * The end_date
   */
  endDate: Date;
  /**
   * fetch a FeedbackSummaryInstance
   *
   * @returns Promise that resolves to processed FeedbackSummaryInstance
   */
  fetch(): Promise<FeedbackSummaryInstance>;
  /**
   * fetch a FeedbackSummaryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: FeedbackSummaryInstance) => any): void;
  /**
   * The include_subaccounts
   */
  includeSubaccounts: boolean;
  /**
   * The issues
   */
  issues: string;
  /**
   * The quality_score_average
   */
  qualityScoreAverage: number;
  /**
   * The quality_score_median
   */
  qualityScoreMedian: number;
  /**
   * The quality_score_standard_deviation
   */
  qualityScoreStandardDeviation: number;
  /**
   * remove a FeedbackSummaryInstance
   *
   * @returns Promise that resolves to processed FeedbackSummaryInstance
   */
  remove(): Promise<FeedbackSummaryInstance>;
  /**
   * remove a FeedbackSummaryInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: FeedbackSummaryInstance) => any): void;
  /**
   * The sid
   */
  sid: string;
  /**
   * The start_date
   */
  startDate: Date;
  /**
   * The status
   */
  status: FeedbackSummaryStatus;
}

declare class FeedbackSummaryContext {
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a FeedbackSummaryInstance
   *
   * @returns Promise that resolves to processed FeedbackSummaryInstance
   */
  fetch(): Promise<FeedbackSummaryInstance>;
  /**
   * fetch a FeedbackSummaryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: FeedbackSummaryInstance) => any): void;
  /**
   * remove a FeedbackSummaryInstance
   *
   * @returns Promise that resolves to processed FeedbackSummaryInstance
   */
  remove(): Promise<FeedbackSummaryInstance>;
  /**
   * remove a FeedbackSummaryInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: FeedbackSummaryInstance) => any): void;
}

export {FeedbackSummarySolution, FeedbackSummaryListInstance, FeedbackSummaryPayload, FeedbackSummaryPage, FeedbackSummaryResource, FeedbackSummaryInstance, FeedbackSummaryContext, FeedbackSummaryList, FeedbackSummaryStatus, FeedbackSummaryListCreateOptions}

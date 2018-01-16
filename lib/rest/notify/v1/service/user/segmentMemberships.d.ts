/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');

declare function SegmentMembershipList(version: V1, serviceSid: string, identity: string): SegmentMembershipListInstance

interface SegmentMembershipResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The identity
   */
  identity: string;
  /**
   * The segment
   */
  segment: string;
  /**
   * The service_sid
   */
  service_sid: string;
  /**
   * The url
   */
  url: string;
}

interface SegmentMembershipPayload extends SegmentMembershipResource, Page.TwilioResponsePayload {
}

interface SegmentMembershipSolution {
  identity: string;
  serviceSid: string;
}

interface SegmentMembershipListCreateOptions {
  /**
   * The segment
   */
  segment: string;
}

interface SegmentMembershipListInstance {
  /**
   * Gets context of a single SegmentMembership resource
   *
   * @param segment - The segment
   */
  (segment: string): SegmentMembershipContext;
  /**
   * create a SegmentMembershipInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SegmentMembershipInstance
   */
  create(opts: SegmentMembershipListCreateOptions): Promise<SegmentMembershipInstance>;
  /**
   * create a SegmentMembershipInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: SegmentMembershipListCreateOptions, callback: (error: Error | null, items: SegmentMembershipInstance) => any): void;
  /**
   * Gets context of a single SegmentMembership resource
   *
   * @param segment - The segment
   */
  get(segment: string): SegmentMembershipContext;
}

declare class SegmentMembershipPage extends Page<V1, SegmentMembershipPayload, SegmentMembershipResource, SegmentMembershipInstance> {
  constructor(version: V1, response: Response<string>, solution: SegmentMembershipSolution);

  /**
   * Build an instance of SegmentMembershipInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SegmentMembershipPayload): SegmentMembershipInstance;
}

declare class SegmentMembershipInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param identity - The identity
   * @param segment - The segment
   */
  constructor(version: V1, payload: SegmentMembershipPayload, serviceSid: string, identity: string, segment: string);

  private _proxy: SegmentMembershipContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * fetch a SegmentMembershipInstance
   *
   * @returns Promise that resolves to processed SegmentMembershipInstance
   */
  fetch(): Promise<SegmentMembershipInstance>;
  /**
   * fetch a SegmentMembershipInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SegmentMembershipInstance) => any): void;
  /**
   * The identity
   */
  identity: string;
  /**
   * remove a SegmentMembershipInstance
   *
   * @returns Promise that resolves to processed SegmentMembershipInstance
   */
  remove(): Promise<SegmentMembershipInstance>;
  /**
   * remove a SegmentMembershipInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SegmentMembershipInstance) => any): void;
  /**
   * The segment
   */
  segment: string;
  /**
   * The service_sid
   */
  serviceSid: string;
  /**
   * The url
   */
  url: string;
}

declare class SegmentMembershipContext {
  constructor(version: V1, serviceSid: string, identity: string, segment: string);

  /**
   * fetch a SegmentMembershipInstance
   *
   * @returns Promise that resolves to processed SegmentMembershipInstance
   */
  fetch(): Promise<SegmentMembershipInstance>;
  /**
   * fetch a SegmentMembershipInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SegmentMembershipInstance) => any): void;
  /**
   * remove a SegmentMembershipInstance
   *
   * @returns Promise that resolves to processed SegmentMembershipInstance
   */
  remove(): Promise<SegmentMembershipInstance>;
  /**
   * remove a SegmentMembershipInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: SegmentMembershipInstance) => any): void;
}

export {SegmentMembershipPayload, SegmentMembershipSolution, SegmentMembershipPage, SegmentMembershipListCreateOptions, SegmentMembershipResource, SegmentMembershipListInstance, SegmentMembershipContext, SegmentMembershipList, SegmentMembershipInstance}

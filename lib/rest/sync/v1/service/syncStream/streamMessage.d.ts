/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');

declare function StreamMessageList(version: V1, serviceSid: string, streamSid: string): StreamMessageListInstance

interface StreamMessageResource {
  /**
   * The body of the Stream Message. Arbitrary JSON object, maximum size 4KB.
   */
  data: string;
  /**
   * The unique 34-character SID identifier of the Stream Message.
   */
  sid: string;
}

interface StreamMessagePayload extends StreamMessageResource, Page.TwilioResponsePayload {
}

interface StreamMessageSolution {
  serviceSid: string;
  streamSid: string;
}

interface StreamMessageListCreateOptions {
  /**
   * The body of the Stream Message. Arbitrary JSON object, maximum size 4KB.
   */
  data: string;
}

interface StreamMessageListInstance {
  /**
   * create a StreamMessageInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed StreamMessageInstance
   */
  create(opts: StreamMessageListCreateOptions): Promise<StreamMessageInstance>;
  /**
   * create a StreamMessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: StreamMessageListCreateOptions, callback: (error: Error | null, items: StreamMessageInstance) => any): void;
}

declare class StreamMessagePage extends Page<V1, StreamMessagePayload, StreamMessageResource, StreamMessageInstance> {
  constructor(version: V1, response: Response<string>, solution: StreamMessageSolution);

  /**
   * Build an instance of StreamMessageInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: StreamMessagePayload): StreamMessageInstance;
}

declare class StreamMessageInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: StreamMessagePayload);

  private _proxy: StreamMessageContext;
  /**
   * The body of the Stream Message. Arbitrary JSON object, maximum size 4KB.
   */
  data: string;
  /**
   * The unique 34-character SID identifier of the Stream Message.
   */
  sid: string;
}

export {StreamMessagePage, StreamMessageResource, StreamMessageListInstance, StreamMessageList, StreamMessageInstance, StreamMessageSolution, StreamMessagePayload, StreamMessageListCreateOptions}

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');

declare function VoiceList(version: V1): VoiceListInstance

interface VoiceResource {
  /**
   * The links
   */
  links: string;
  /**
   * The name
   */
  name: string;
  /**
   * The url
   */
  url: string;
}

interface VoicePayload extends VoiceResource, Page.TwilioResponsePayload {
}

interface VoiceSolution {
}

interface VoiceListInstance {
}

declare class VoicePage extends Page<V1, VoicePayload, VoiceResource, VoiceInstance> {
  constructor(version: V1, response: Response<string>, solution: VoiceSolution);

  /**
   * Build an instance of VoiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: VoicePayload): VoiceInstance;
}

declare class VoiceInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: VoicePayload);

  /**
   * The links
   */
  links: string;
  /**
   * The name
   */
  name: string;
  /**
   * The url
   */
  url: string;
}

export { VoiceInstance, VoiceList, VoiceListInstance, VoicePage, VoicePayload, VoiceResource, VoiceSolution }

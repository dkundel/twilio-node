import TwilioClient = require('./rest/Twilio');

declare function twilio(
  accountSid: string,
  authToken: string,
  opts: any
): TwilioClient;

import * as VoiceResponse from './twiml/VoiceResponse';
import * as MessagingResponse from './twiml/MessagingResponse';
import * as FaxResponse from './twiml/FaxResponse';

interface TwimlConstructor<T> {
  new (): T;
}

declare namespace twilio {
  export interface TwimlInterface {
    VoiceResponse: TwimlConstructor<VoiceResponse>;
    FaxResponse: TwimlConstructor<FaxResponse>;
    MessagingResponse: TwimlConstructor<MessagingResponse>;
  }
  export const twiml: TwimlInterface;
}

export = twilio;

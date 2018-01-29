/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V2010 = require('../../../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../../interfaces';

declare function YearlyList(version: V2010, accountSid: string): YearlyListInstance

type YearlyCategory = 'answering-machine-detection'|'authy-authentications'|'authy-calls-outbound'|'authy-monthly-fees'|'authy-phone-intelligence'|'authy-phone-verifications'|'authy-sms-outbound'|'call-progess-events'|'calleridlookups'|'calls'|'calls-client'|'calls-globalconference'|'calls-inbound'|'calls-inbound-local'|'calls-inbound-mobile'|'calls-inbound-tollfree'|'calls-outbound'|'calls-recordings'|'calls-sip'|'calls-sip-inbound'|'calls-sip-outbound'|'carrier-lookups'|'conversations'|'conversations-api-requests'|'conversations-conversation-events'|'conversations-endpoint-connectivity'|'conversations-events'|'conversations-participant-events'|'conversations-participants'|'cps'|'group-rooms'|'group-rooms-data-track'|'group-rooms-encrypted-media-recorded'|'group-rooms-media-downloaded'|'group-rooms-media-recorded'|'group-rooms-media-routed'|'group-rooms-media-stored'|'group-rooms-participant-minutes'|'group-rooms-recorded-minutes'|'ip-messaging'|'ip-messaging-commands'|'ip-messaging-data-storage'|'ip-messaging-data-transfer'|'ip-messaging-endpoint-connectivity'|'lookups'|'marketplace'|'marketplace-algorithmia-named-entity-recognition'|'marketplace-digital-segment-business-info'|'marketplace-google-speech-to-text'|'marketplace-ibm-watson-message-insights'|'marketplace-ibm-watson-message-sentiment'|'marketplace-ibm-watson-recording-analysis'|'marketplace-icehook-systems-scout'|'marketplace-infogroup-dataaxle-bizinfo'|'marketplace-cadence-transcription'|'marketplace-cadence-translation'|'marketplace-capio-speech-to-text'|'marketplace-facebook-offline-conversions'|'marketplace-keen-io-contact-center-analytics'|'marketplace-marchex-cleancall'|'marketplace-marchex-sentiment-analysis-for-sms'|'marketplace-marketplace-nextcaller-social-id'|'marketplace-mobile-commons-opt-out-classifier'|'marketplace-nexiwave-voicemail-to-text'|'marketplace-nextcaller-advanced-caller-identification'|'marketplace-nomorobo-spam-score'|'marketplace-payfone-tcpa-compliance'|'marketplace-telo-opencnam'|'marketplace-truecnam-true-spam'|'marketplace-twilio-caller-name-lookup-us'|'marketplace-twilio-carrier-information-lookup'|'marketplace-voicebase-pci'|'marketplace-voicebase-transcription'|'marketplace-whitepages-pro-caller-identification'|'marketplace-whitepages-pro-phone-intelligence'|'marketplace-whitepages-pro-phone-reputation'|'marketplace-wolfram-short-answer'|'marketplace-wolfarm-spoken-results'|'marketplace-deepgram-phrase-detector'|'marketplace-convriza-ababa'|'marketplace-ibm-watson-tone-analyzer'|'marketplace-remeeting-automatic-speech-recognition'|'marketplace-tcpa-defense-solutions-blacklist-feed'|'marketplace-voicebase-transcription-custom-vocabulary'|'marketplace-ytica-contact-center-reporting-analytics'|'mediastorage'|'mms'|'mms-inbound'|'mms-inbound-longcode'|'mms-inbound-shortcode'|'mms-outbound'|'mms-outbound-longcode'|'mms-outbound-shortcode'|'monitor-reads'|'monitor-storage'|'monitor-writes'|'notify'|'notify-actions-attempts'|'notify-channels'|'number-format-lookups'|'pchat'|'pchat-actions'|'pchat-aps'|'pchat-notifications'|'pchat-reads'|'pchat-users'|'pchat-messages'|'peer-to-peer-rooms-participant-minutes'|'pfax'|'pfax-minutes'|'pfax-minutes-inbound'|'pfax-minutes-outbound'|'pfax-pages'|'phonenumbers'|'phonenumbers-cps'|'phonenumbers-emergency'|'phonenumbers-local'|'phonenumbers-mobile'|'phonenumbers-setups'|'phonenumbers-tollfree'|'premiumsupport'|'pv'|'pv-room-participants'|'pv-room-participants-au1'|'pv-room-participants-br1'|'pv-room-participants-ie1'|'pv-room-participants-jp1'|'pv-room-participants-sg1'|'pv-room-participants-us1'|'pv-room-participants-us2'|'pv-rooms'|'pv-sip-endpoint-registrations'|'recordings'|'recordingstorage'|'rooms-group-minutes'|'rooms-group-bandwidth'|'rooms-peer-to-peer-minutes'|'shortcodes'|'shortcodes-customerowned'|'shortcodes-mms-enablement'|'shortcodes-mps'|'shortcodes-random'|'shortcodes-uk'|'shortcodes-vanity'|'sms'|'sms-inbound'|'sms-inbound-longcode'|'sms-inbound-shortcode'|'sms-outbound'|'sms-outbound-content-inspection'|'sms-outbound-longcode'|'sms-outbound-shortcode'|'sms-messages-features'|'speech-recognition'|'sync'|'sync-actions'|'sync-endpoint-hours'|'sync-endpoint-hours-above-daily-cap'|'taskrouter-tasks'|'totalprice'|'transcriptions'|'trunking-cps'|'trunking-emergency-calls'|'trunking-origination'|'trunking-origination-local'|'trunking-origination-mobile'|'trunking-origination-tollfree'|'trunking-recordings'|'trunking-secure'|'trunking-termination'|'turnmegabytes'|'turnmegabytes-australia'|'turnmegabytes-brasil'|'turnmegabytes-india'|'turnmegabytes-ireland'|'turnmegabytes-japan'|'turnmegabytes-singapore'|'turnmegabytes-useast'|'turnmegabytes-uswest'|'twilio-interconnect'|'video-recordings'|'voice-insights'|'voice-insights-audio-trace'|'voice-insights-carrier-calls'|'wireless'|'wireless-orders'|'wireless-orders-artwork'|'wireless-orders-bulk'|'wireless-orders-esim'|'wireless-orders-starter'|'wireless-usage'|'wireless-usage-commands'|'wireless-usage-commands-africa'|'wireless-usage-commands-asia'|'wireless-usage-commands-centralandsouthamerica'|'wireless-usage-commands-europe'|'wireless-usage-commands-home'|'wireless-usage-commands-northamerica'|'wireless-usage-commands-oceania'|'wireless-usage-commands-roaming'|'wireless-usage-data'|'wireless-usage-data-africa'|'wireless-usage-data-asia'|'wireless-usage-data-centralandsouthamerica'|'wireless-usage-data-custom-additionalmb'|'wireless-usage-data-custom-first5mb'|'wireless-usage-data-domestic-roaming'|'wireless-usage-data-europe'|'wireless-usage-data-individual-additionalgb'|'wireless-usage-data-individual-firstgb'|'wireless-usage-data-international-roaming-canada'|'wireless-usage-data-international-roaming-india'|'wireless-usage-data-international-roaming-mexico'|'wireless-usage-data-northamerica'|'wireless-usage-data-oceania'|'wireless-usage-data-pooled'|'wireless-usage-data-pooled-downlink'|'wireless-usage-data-pooled-uplink'|'wireless-usage-mrc'|'wireless-usage-mrc-custom'|'wireless-usage-mrc-individual'|'wireless-usage-mrc-pooled'|'wireless-usage-mrc-suspended'|'wireless-usage-voice'|'wireless-usage-sms';

interface YearlyResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The api_version
   */
  api_version: string;
  /**
   * The category
   */
  category: YearlyCategory;
  /**
   * The count
   */
  count: string;
  /**
   * The count_unit
   */
  count_unit: string;
  /**
   * The description
   */
  description: string;
  /**
   * The end_date
   */
  end_date: Date;
  /**
   * The price
   */
  price: number;
  /**
   * The price_unit
   */
  price_unit: string;
  /**
   * The start_date
   */
  start_date: Date;
  /**
   * The subresource_uris
   */
  subresource_uris: string;
  /**
   * The uri
   */
  uri: string;
  /**
   * The usage
   */
  usage: string;
  /**
   * The usage_unit
   */
  usage_unit: string;
}

interface YearlyPayload extends YearlyResource, Page.TwilioResponsePayload {
}

interface YearlySolution {
  accountSid: string;
}

interface YearlyListEachOptions extends ListEachOptions<YearlyInstance> {
  /**
   * The category
   */
  category?: YearlyCategory;
  /**
   * The end_date
   */
  endDate?: Date;
  /**
   * The start_date
   */
  startDate?: Date;
}

interface YearlyListOptions extends ListOptions<YearlyInstance> {
  /**
   * The category
   */
  category?: YearlyCategory;
  /**
   * The end_date
   */
  endDate?: Date;
  /**
   * The start_date
   */
  startDate?: Date;
}

interface YearlyListPageOptions extends PageOptions<YearlyPage> {
  /**
   * The category
   */
  category?: YearlyCategory;
  /**
   * The end_date
   */
  endDate?: Date;
  /**
   * The start_date
   */
  startDate?: Date;
}

interface YearlyListInstance {
  /**
   * Streams YearlyInstance records from the API.
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
  each(opts?: YearlyListEachOptions): void;
  /**
   * Streams YearlyInstance records from the API.
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
  each(callback: (item: YearlyInstance, done: (err?: Error) => void) => void): any;
  /**
   * Retrieve a single target page of YearlyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<YearlyPage>;
  /**
   * Retrieve a single target page of YearlyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: YearlyPage) => any): void;
  /**
   * Lists YearlyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: YearlyListOptions): Promise<YearlyInstance[]>;
  /**
   * Lists YearlyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: YearlyListOptions, callback: (error: Error | null, items: YearlyInstance[]) => any): void;
  /**
   * Lists YearlyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: YearlyInstance[]) => any): void;
  /**
   * Retrieve a single page of YearlyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: YearlyListPageOptions): Promise<YearlyPage>;
  /**
   * Retrieve a single page of YearlyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: YearlyListPageOptions, callback: (error: Error | null, items: YearlyPage) => any): void;
  /**
   * Retrieve a single page of YearlyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: YearlyPage) => any): void;
}

declare class YearlyPage extends Page<V2010, YearlyPayload, YearlyResource, YearlyInstance> {
  constructor(version: V2010, response: Response<string>, solution: YearlySolution);

  /**
   * Build an instance of YearlyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: YearlyPayload): YearlyInstance;
}

declare class YearlyInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V2010, payload: YearlyPayload);

  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The api_version
   */
  apiVersion: string;
  /**
   * The category
   */
  category: YearlyCategory;
  /**
   * The count
   */
  count: string;
  /**
   * The count_unit
   */
  countUnit: string;
  /**
   * The description
   */
  description: string;
  /**
   * The end_date
   */
  endDate: Date;
  /**
   * The price
   */
  price: number;
  /**
   * The price_unit
   */
  priceUnit: string;
  /**
   * The start_date
   */
  startDate: Date;
  /**
   * The subresource_uris
   */
  subresourceUris: string;
  /**
   * The uri
   */
  uri: string;
  /**
   * The usage
   */
  usage: string;
  /**
   * The usage_unit
   */
  usageUnit: string;
}

export { YearlyCategory, YearlyInstance, YearlyList, YearlyListEachOptions, YearlyListInstance, YearlyListOptions, YearlyListPageOptions, YearlyPage, YearlyPayload, YearlyResource, YearlySolution }

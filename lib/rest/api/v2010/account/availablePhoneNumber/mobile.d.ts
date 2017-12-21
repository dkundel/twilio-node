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

declare function MobileList(version: V2010, accountSid: string, countryCode: string): MobileListInstance

interface MobileResource {
  /**
   * The address_requirements
   */
  address_requirements: string;
  /**
   * The beta
   */
  beta: boolean;
  /**
   * The capabilities
   */
  capabilities: string;
  /**
   * The friendly_name
   */
  friendly_name: string;
  /**
   * The iso_country
   */
  iso_country: string;
  /**
   * The lata
   */
  lata: string;
  /**
   * The latitude
   */
  latitude: number;
  /**
   * The locality
   */
  locality: string;
  /**
   * The longitude
   */
  longitude: number;
  /**
   * The phone_number
   */
  phone_number: string;
  /**
   * The postal_code
   */
  postal_code: string;
  /**
   * The rate_center
   */
  rate_center: string;
  /**
   * The region
   */
  region: string;
}

interface MobilePayload extends MobileResource, Page.TwilioResponsePayload {
}

interface MobileSolution {
  accountSid: string;
  countryCode: string;
}

interface MobileListEachOptions extends ListEachOptions<MobileInstance> {
  /**
   * The area_code
   */
  areaCode?: number;
  /**
   * The beta
   */
  beta?: boolean;
  /**
   * The contains
   */
  contains?: string;
  /**
   * The distance
   */
  distance?: number;
  /**
   * The exclude_all_address_required
   */
  excludeAllAddressRequired?: boolean;
  /**
   * The exclude_foreign_address_required
   */
  excludeForeignAddressRequired?: boolean;
  /**
   * The exclude_local_address_required
   */
  excludeLocalAddressRequired?: boolean;
  /**
   * The fax_enabled
   */
  faxEnabled?: boolean;
  /**
   * The in_lata
   */
  inLata?: string;
  /**
   * The in_locality
   */
  inLocality?: string;
  /**
   * The in_postal_code
   */
  inPostalCode?: string;
  /**
   * The in_rate_center
   */
  inRateCenter?: string;
  /**
   * The in_region
   */
  inRegion?: string;
  /**
   * The mms_enabled
   */
  mmsEnabled?: boolean;
  /**
   * The near_lat_long
   */
  nearLatLong?: string;
  /**
   * The near_number
   */
  nearNumber?: string;
  /**
   * The sms_enabled
   */
  smsEnabled?: boolean;
  /**
   * The voice_enabled
   */
  voiceEnabled?: boolean;
}

interface MobileListOptions extends ListOptions<MobileInstance> {
  /**
   * The area_code
   */
  areaCode?: number;
  /**
   * The beta
   */
  beta?: boolean;
  /**
   * The contains
   */
  contains?: string;
  /**
   * The distance
   */
  distance?: number;
  /**
   * The exclude_all_address_required
   */
  excludeAllAddressRequired?: boolean;
  /**
   * The exclude_foreign_address_required
   */
  excludeForeignAddressRequired?: boolean;
  /**
   * The exclude_local_address_required
   */
  excludeLocalAddressRequired?: boolean;
  /**
   * The fax_enabled
   */
  faxEnabled?: boolean;
  /**
   * The in_lata
   */
  inLata?: string;
  /**
   * The in_locality
   */
  inLocality?: string;
  /**
   * The in_postal_code
   */
  inPostalCode?: string;
  /**
   * The in_rate_center
   */
  inRateCenter?: string;
  /**
   * The in_region
   */
  inRegion?: string;
  /**
   * The mms_enabled
   */
  mmsEnabled?: boolean;
  /**
   * The near_lat_long
   */
  nearLatLong?: string;
  /**
   * The near_number
   */
  nearNumber?: string;
  /**
   * The sms_enabled
   */
  smsEnabled?: boolean;
  /**
   * The voice_enabled
   */
  voiceEnabled?: boolean;
}

interface MobileListPageOptions extends PageOptions<MobilePage> {
  /**
   * The area_code
   */
  areaCode?: number;
  /**
   * The beta
   */
  beta?: boolean;
  /**
   * The contains
   */
  contains?: string;
  /**
   * The distance
   */
  distance?: number;
  /**
   * The exclude_all_address_required
   */
  excludeAllAddressRequired?: boolean;
  /**
   * The exclude_foreign_address_required
   */
  excludeForeignAddressRequired?: boolean;
  /**
   * The exclude_local_address_required
   */
  excludeLocalAddressRequired?: boolean;
  /**
   * The fax_enabled
   */
  faxEnabled?: boolean;
  /**
   * The in_lata
   */
  inLata?: string;
  /**
   * The in_locality
   */
  inLocality?: string;
  /**
   * The in_postal_code
   */
  inPostalCode?: string;
  /**
   * The in_rate_center
   */
  inRateCenter?: string;
  /**
   * The in_region
   */
  inRegion?: string;
  /**
   * The mms_enabled
   */
  mmsEnabled?: boolean;
  /**
   * The near_lat_long
   */
  nearLatLong?: string;
  /**
   * The near_number
   */
  nearNumber?: string;
  /**
   * The sms_enabled
   */
  smsEnabled?: boolean;
  /**
   * The voice_enabled
   */
  voiceEnabled?: boolean;
}

interface MobileListInstance {
  /**
   * Streams MobileInstance records from the API.
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
  each(opts?: MobileListEachOptions): void;
  /**
   * Streams MobileInstance records from the API.
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
  each(callback: (item: MobileInstance, done: (err?: Error) => void) => void): any;
  /**
   * Retrieve a single target page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<MobilePage>;
  /**
   * Retrieve a single target page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: MobilePage) => any): void;
  /**
   * Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: MobileListOptions): Promise<MobileInstance[]>;
  /**
   * Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: MobileListOptions, callback: (error: Error | null, items: MobileInstance[]) => any): void;
  /**
   * Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: MobileInstance[]) => any): void;
  /**
   * Retrieve a single page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: MobileListPageOptions): Promise<MobilePage>;
  /**
   * Retrieve a single page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: MobileListPageOptions, callback: (error: Error | null, items: MobilePage) => any): void;
  /**
   * Retrieve a single page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: MobilePage) => any): void;
}

declare class MobilePage extends Page<V2010, MobilePayload, MobileResource, MobileInstance> {
  constructor(version: V2010, response: Response<string>, solution: MobileSolution);

  /**
   * Build an instance of MobileInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MobilePayload): MobileInstance;
}

declare class MobileInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V2010, payload: MobilePayload);

  private _proxy: MobileContext;
  /**
   * The address_requirements
   */
  addressRequirements: string;
  /**
   * The beta
   */
  beta: boolean;
  /**
   * The capabilities
   */
  capabilities: string;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The iso_country
   */
  isoCountry: string;
  /**
   * The lata
   */
  lata: string;
  /**
   * The latitude
   */
  latitude: number;
  /**
   * The locality
   */
  locality: string;
  /**
   * The longitude
   */
  longitude: number;
  /**
   * The phone_number
   */
  phoneNumber: string;
  /**
   * The postal_code
   */
  postalCode: string;
  /**
   * The rate_center
   */
  rateCenter: string;
  /**
   * The region
   */
  region: string;
}

export {MobilePayload, MobilePage, MobileListInstance, MobileInstance, MobileListPageOptions, MobileList, MobileResource, MobileSolution, MobileListOptions, MobileListEachOptions}

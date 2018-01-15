/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V2010 = require('../V2010');
import { AddressListInstance } from './account/address';
import { ApplicationListInstance } from './account/application';
import { AuthorizedConnectAppListInstance } from './account/authorizedConnectApp';
import { AvailablePhoneNumberCountryListInstance } from './account/availablePhoneNumber';
import { CallListInstance } from './account/call';
import { ConferenceListInstance } from './account/conference';
import { ConnectAppListInstance } from './account/connectApp';
import { IncomingPhoneNumberListInstance } from './account/incomingPhoneNumber';
import { KeyListInstance } from './account/key';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { MessageListInstance } from './account/message';
import { NewKeyListInstance } from './account/newKey';
import { NewSigningKeyListInstance } from './account/newSigningKey';
import { NotificationListInstance } from './account/notification';
import { OutgoingCallerIdListInstance } from './account/outgoingCallerId';
import { QueueListInstance } from './account/queue';
import { RecordingListInstance } from './account/recording';
import { ShortCodeListInstance } from './account/shortCode';
import { SigningKeyListInstance } from './account/signingKey';
import { SipListInstance } from './account/sip';
import { TokenListInstance } from './account/token';
import { TranscriptionListInstance } from './account/transcription';
import { UsageListInstance } from './account/usage';
import { ValidationRequestListInstance } from './account/validationRequest';

declare function AccountList(version: V2010): AccountListInstance

type AccountStatus = 'active'|'suspended'|'closed';

type AccountType = 'Trial'|'Full';

interface AccountResource {
  /**
   * The authorization token for this account. This token should be kept secret.
   */
  auth_token: string;
  /**
   * The date this account was created in GMT RFC 2822 format
   */
  date_created: Date;
  /**
   * The date this account was last updated in GTM RFC 2822 format
   */
  date_updated: Date;
  /**
   * A human readable description of this account, up to 64 characters. It defaults to this accounts email address
   */
  friendly_name: string;
  /**
   * The unique 34 character id that represents the parent of this account. The OwnerAccountSid of a parent account is it's own sid.
   */
  owner_account_sid: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The status of this account. Usually `active` but can be `suspended` or `closed`
   */
  status: AccountStatus;
  /**
   * A Map of various subresources available for the given Account Instance
   */
  subresource_uris: string;
  /**
   * The type of this account. Either `Trial` or `Full` if it's been upgraded
   */
  type: AccountType;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`
   */
  uri: string;
}

interface AccountPayload extends AccountResource, Page.TwilioResponsePayload {
}

interface AccountSolution {
}

interface AccountListCreateOptions {
  /**
   * A human readable description of the account to create, defaults to `SubAccount Created at {YYYY-MM-DD HH:MM meridian}`
   */
  friendlyName?: string;
}

interface AccountListEachOptions extends ListEachOptions<AccountInstance> {
  /**
   * Filter accounts where the friendly name exactly matches the desired FriendlyName
   */
  friendlyName?: string;
  /**
   * Only show accounts with the given Status
   */
  status?: AccountStatus;
}

interface AccountListOptions extends ListOptions<AccountInstance> {
  /**
   * Filter accounts where the friendly name exactly matches the desired FriendlyName
   */
  friendlyName?: string;
  /**
   * Only show accounts with the given Status
   */
  status?: AccountStatus;
}

interface AccountListPageOptions extends PageOptions<AccountPage> {
  /**
   * Filter accounts where the friendly name exactly matches the desired FriendlyName
   */
  friendlyName?: string;
  /**
   * Only show accounts with the given Status
   */
  status?: AccountStatus;
}

interface AccountListInstance {
  /**
   * Gets context of a single Account resource
   *
   * @param sid - Fetch by unique Account Sid
   */
  (sid: string): AccountContext;
  /**
   * create a AccountInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed AccountInstance
   */
  create(opts?: AccountListCreateOptions): Promise<AccountInstance>;
  /**
   * create a AccountInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: AccountListCreateOptions, callback: (error: Error | null, items: AccountInstance) => any): void;
  /**
   * create a AccountInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback: (error: Error | null, items: AccountInstance) => any): void;
  /**
   * Streams AccountInstance records from the API.
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
  each(opts?: AccountListEachOptions): void;
  /**
   * Streams AccountInstance records from the API.
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
  each(callback: (item: AccountInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Account resource
   *
   * @param sid - Fetch by unique Account Sid
   */
  get(sid: string): AccountContext;
  /**
   * Retrieve a single target page of AccountInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<AccountPage>;
  /**
   * Retrieve a single target page of AccountInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: AccountPage) => any): void;
  /**
   * Lists AccountInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: AccountListOptions): Promise<AccountInstance[]>;
  /**
   * Lists AccountInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: AccountListOptions, callback: (error: Error | null, items: AccountInstance[]) => any): void;
  /**
   * Lists AccountInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: AccountInstance[]) => any): void;
  /**
   * Retrieve a single page of AccountInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: AccountListPageOptions): Promise<AccountPage>;
  /**
   * Retrieve a single page of AccountInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: AccountListPageOptions, callback: (error: Error | null, items: AccountPage) => any): void;
  /**
   * Retrieve a single page of AccountInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: AccountPage) => any): void;
}

interface AccountListFetchOptions {
  /**
   * Update the human-readable description of this Account
   */
  friendlyName?: string;
  /**
   * Alter the status of this account with a given Status
   */
  status?: AccountStatus;
}

interface AccountListFetchOptions {
  /**
   * Update the human-readable description of this Account
   */
  friendlyName?: string;
  /**
   * Alter the status of this account with a given Status
   */
  status?: AccountStatus;
}

declare class AccountPage extends Page<V2010, AccountPayload, AccountResource, AccountInstance> {
  constructor(version: V2010, response: Response<string>, solution: AccountSolution);

  /**
   * Build an instance of AccountInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AccountPayload): AccountInstance;
}

declare class AccountInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - Fetch by unique Account Sid
   */
  constructor(version: V2010, payload: AccountPayload, sid: string);

  private _proxy: AccountContext;
  addresses(): AddressListInstance;
  applications(): ApplicationListInstance;
  /**
   * The authorization token for this account. This token should be kept secret.
   */
  authToken: string;
  authorizedConnectApps(): AuthorizedConnectAppListInstance;
  availablePhoneNumbers(): AvailablePhoneNumberCountryListInstance;
  calls(): CallListInstance;
  conferences(): ConferenceListInstance;
  connectApps(): ConnectAppListInstance;
  /**
   * The date this account was created in GMT RFC 2822 format
   */
  dateCreated: Date;
  /**
   * The date this account was last updated in GTM RFC 2822 format
   */
  dateUpdated: Date;
  /**
   * fetch a AccountInstance
   *
   * @returns Promise that resolves to processed AccountInstance
   */
  fetch(): Promise<AccountInstance>;
  /**
   * fetch a AccountInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: AccountInstance) => any): void;
  /**
   * A human readable description of this account, up to 64 characters. It defaults to this accounts email address
   */
  friendlyName: string;
  incomingPhoneNumbers(): IncomingPhoneNumberListInstance;
  keys(): KeyListInstance;
  messages(): MessageListInstance;
  newKeys(): NewKeyListInstance;
  newSigningKeys(): NewSigningKeyListInstance;
  notifications(): NotificationListInstance;
  outgoingCallerIds(): OutgoingCallerIdListInstance;
  /**
   * The unique 34 character id that represents the parent of this account. The OwnerAccountSid of a parent account is it's own sid.
   */
  ownerAccountSid: string;
  queues(): QueueListInstance;
  recordings(): RecordingListInstance;
  shortCodes(): ShortCodeListInstance;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  signingKeys(): SigningKeyListInstance;
  sip(): SipListInstance;
  /**
   * The status of this account. Usually `active` but can be `suspended` or `closed`
   */
  status: AccountStatus;
  /**
   * A Map of various subresources available for the given Account Instance
   */
  subresourceUris: string;
  tokens(): TokenListInstance;
  transcriptions(): TranscriptionListInstance;
  /**
   * The type of this account. Either `Trial` or `Full` if it's been upgraded
   */
  type: AccountType;
  /**
   * update a AccountInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed AccountInstance
   */
  update(opts?: AccountListFetchOptions): Promise<AccountInstance>;
  /**
   * update a AccountInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: AccountListFetchOptions, callback: (error: Error | null, items: AccountInstance) => any): void;
  /**
   * update a AccountInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: AccountInstance) => any): void;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`
   */
  uri: string;
  usage(): UsageListInstance;
  validationRequests(): ValidationRequestListInstance;
}

declare class AccountContext {
  constructor(version: V2010, sid: string);

  addresses: AddressListInstance;
  applications: ApplicationListInstance;
  authorizedConnectApps: AuthorizedConnectAppListInstance;
  availablePhoneNumbers: AvailablePhoneNumberCountryListInstance;
  calls: CallListInstance;
  conferences: ConferenceListInstance;
  connectApps: ConnectAppListInstance;
  /**
   * fetch a AccountInstance
   *
   * @returns Promise that resolves to processed AccountInstance
   */
  fetch(): Promise<AccountInstance>;
  /**
   * fetch a AccountInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: AccountInstance) => any): void;
  incomingPhoneNumbers: IncomingPhoneNumberListInstance;
  keys: KeyListInstance;
  messages: MessageListInstance;
  newKeys: NewKeyListInstance;
  newSigningKeys: NewSigningKeyListInstance;
  notifications: NotificationListInstance;
  outgoingCallerIds: OutgoingCallerIdListInstance;
  queues: QueueListInstance;
  recordings: RecordingListInstance;
  shortCodes: ShortCodeListInstance;
  signingKeys: SigningKeyListInstance;
  sip: SipListInstance;
  tokens: TokenListInstance;
  transcriptions: TranscriptionListInstance;
  /**
   * update a AccountInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed AccountInstance
   */
  update(opts?: AccountListFetchOptions): Promise<AccountInstance>;
  /**
   * update a AccountInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: AccountListFetchOptions, callback: (error: Error | null, items: AccountInstance) => any): void;
  /**
   * update a AccountInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: AccountInstance) => any): void;
  usage: UsageListInstance;
  validationRequests: ValidationRequestListInstance;
}

export {AccountListEachOptions, AccountListFetchOptions, AccountListPageOptions, AccountListCreateOptions, AccountPage, AccountPayload, AccountSolution, AccountStatus, AccountListInstance, AccountContext, AccountListOptions, AccountResource, AccountList, AccountInstance, AccountType}
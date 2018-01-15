/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import { AccountContext } from './v2010/account';
import { AccountListInstance } from './v2010/account';


/**
 * Initialize the V2010 version of Api
 */
declare class V2010 extends Version {
  /**
   * Initialize the V2010 version of Api
   *
   * @param domain - The twilio domain
   */
  constructor(domain: any);

  account: AccountContext;
  readonly accounts: AccountListInstance;
  readonly addresses: AddressListInstance;
  readonly applications: ApplicationListInstance;
  readonly authorizedConnectApps: AuthorizedConnectAppListInstance;
  readonly availablePhoneNumbers: AvailablePhoneNumberCountryListInstance;
  readonly calls: CallListInstance;
  readonly conferences: ConferenceListInstance;
  readonly connectApps: ConnectAppListInstance;
  readonly incomingPhoneNumbers: IncomingPhoneNumberListInstance;
  readonly keys: KeyListInstance;
  readonly messages: MessageListInstance;
  readonly newKeys: NewKeyListInstance;
  readonly newSigningKeys: NewSigningKeyListInstance;
  readonly notifications: NotificationListInstance;
  readonly outgoingCallerIds: OutgoingCallerIdListInstance;
  readonly queues: QueueListInstance;
  readonly recordings: RecordingListInstance;
  readonly shortCodes: ShortCodeListInstance;
  readonly signingKeys: SigningKeyListInstance;
  readonly sip: SipListInstance;
  readonly tokens: TokenListInstance;
  readonly transcriptions: TranscriptionListInstance;
  readonly usage: UsageListInstance;
  readonly validationRequests: ValidationRequestListInstance;
}

export = V2010;
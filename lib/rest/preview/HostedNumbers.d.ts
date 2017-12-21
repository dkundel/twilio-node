/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import { AuthorizationDocumentListInstance } from './hosted_numbers/authorizationDocument';
import { HostedNumberOrderListInstance } from './hosted_numbers/hostedNumberOrder';


/**
 * Initialize the HostedNumbers version of Preview
 */
declare class HostedNumbers extends Version {
  /**
   * Initialize the HostedNumbers version of Preview
   *
   * @param domain - The twilio domain
   */
  constructor(domain: any);

  readonly authorizationDocuments: AuthorizationDocumentListInstance;
  readonly hostedNumberOrders: HostedNumberOrderListInstance;
}

export = HostedNumbers;

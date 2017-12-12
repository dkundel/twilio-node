/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/// <reference types="node" />

import Version = require('../../base/Version');
import { CredentialList } from './v1/credential';
import { ServiceList } from './v1/service';


/**
 * Initialize the V1 version of IpMessaging
 */
declare class V1 extends Version {
  /**
   * Initialize the V1 version of IpMessaging
   *
   * @param domain - The twilio domain
   */
  constructor(domain: any);

  readonly credentials: CredentialList;
  readonly services: ServiceList;
}

export = V1;

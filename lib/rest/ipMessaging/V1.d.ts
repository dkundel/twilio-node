/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
<<<<<<< HEAD

import Version = require('../../base/Version');
import { CredentialListInstance } from './v1/credential';
import { ServiceListInstance } from './v1/service';
=======
/// <reference types="node" />

import Version = require('../../base/Version');
import { CredentialList } from './v1/credential';
import { ServiceList } from './v1/service';
>>>>>>> Initial typescript definitions


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

<<<<<<< HEAD
  readonly credentials: CredentialListInstance;
  readonly services: ServiceListInstance;
=======
  readonly credentials: CredentialList;
  readonly services: ServiceList;
>>>>>>> Initial typescript definitions
}

export = V1;

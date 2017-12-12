/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/// <reference types="node" />

import Version = require('../../base/Version');
import { TrunkList } from './v1/trunk';


/**
 * Initialize the V1 version of Trunking
 */
declare class V1 extends Version {
  /**
   * Initialize the V1 version of Trunking
   *
   * @param domain - The twilio domain
   */
  constructor(domain: any);

  readonly trunks: TrunkList;
}

export = V1;

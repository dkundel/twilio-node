/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import BulkExports = require('../BulkExports');
import Page = require('../../../base/Page');
import Response = require('../../../http/response');

declare function ExportConfigurationList(version: BulkExports): ExportConfigurationListInstance

interface ExportConfigurationResource {
  /**
   * The enabled
   */
  enabled: boolean;
  /**
   * The resource_type
   */
  resource_type: string;
  /**
   * The url
   */
  url: string;
  /**
   * The webhook_method
   */
  webhook_method: string;
  /**
   * The webhook_url
   */
  webhook_url: string;
}

interface ExportConfigurationPayload extends ExportConfigurationResource, Page.TwilioResponsePayload {
}

interface ExportConfigurationSolution {
}

interface ExportConfigurationListInstance {
  /**
   * Gets context of a single ExportConfiguration resource
   *
   * @param resourceType - The resource_type
   */
  (resourceType: string): ExportConfigurationContext;
  /**
   * Gets context of a single ExportConfiguration resource
   *
   * @param resourceType - The resource_type
   */
  get(resourceType: string): ExportConfigurationContext;
}

interface ExportConfigurationListFetchOptions {
  /**
   * The enabled
   */
  enabled?: boolean;
  /**
   * The webhook_method
   */
  webhookMethod?: string;
  /**
   * The webhook_url
   */
  webhookUrl?: string;
}

interface ExportConfigurationListFetchOptions {
  /**
   * The enabled
   */
  enabled?: boolean;
  /**
   * The webhook_method
   */
  webhookMethod?: string;
  /**
   * The webhook_url
   */
  webhookUrl?: string;
}

declare class ExportConfigurationPage extends Page<BulkExports, ExportConfigurationPayload, ExportConfigurationResource, ExportConfigurationInstance> {
  constructor(version: BulkExports, response: Response<string>, solution: ExportConfigurationSolution);

  /**
   * Build an instance of ExportConfigurationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ExportConfigurationPayload): ExportConfigurationInstance;
}

declare class ExportConfigurationInstance {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param resourceType - The resource_type
   */
  constructor(version: BulkExports, payload: ExportConfigurationPayload, resourceType: string);

  private _proxy: ExportConfigurationContext;
  /**
   * The enabled
   */
  enabled: boolean;
  /**
   * fetch a ExportConfigurationInstance
   *
   * @returns Promise that resolves to processed ExportConfigurationInstance
   */
  fetch(): Promise<ExportConfigurationInstance>;
  /**
   * fetch a ExportConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ExportConfigurationInstance) => any): void;
  /**
   * The resource_type
   */
  resourceType: string;
  /**
   * update a ExportConfigurationInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ExportConfigurationInstance
   */
  update(opts?: ExportConfigurationListFetchOptions): Promise<ExportConfigurationInstance>;
  /**
   * update a ExportConfigurationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ExportConfigurationListFetchOptions, callback: (error: Error | null, items: ExportConfigurationInstance) => any): void;
  /**
   * update a ExportConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ExportConfigurationInstance) => any): void;
  /**
   * The url
   */
  url: string;
  /**
   * The webhook_method
   */
  webhookMethod: string;
  /**
   * The webhook_url
   */
  webhookUrl: string;
}

declare class ExportConfigurationContext {
  constructor(version: BulkExports, resourceType: string);

  /**
   * fetch a ExportConfigurationInstance
   *
   * @returns Promise that resolves to processed ExportConfigurationInstance
   */
  fetch(): Promise<ExportConfigurationInstance>;
  /**
   * fetch a ExportConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ExportConfigurationInstance) => any): void;
  /**
   * update a ExportConfigurationInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ExportConfigurationInstance
   */
  update(opts?: ExportConfigurationListFetchOptions): Promise<ExportConfigurationInstance>;
  /**
   * update a ExportConfigurationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ExportConfigurationListFetchOptions, callback: (error: Error | null, items: ExportConfigurationInstance) => any): void;
  /**
   * update a ExportConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ExportConfigurationInstance) => any): void;
}

export {ExportConfigurationList, ExportConfigurationPage, ExportConfigurationListInstance, ExportConfigurationResource, ExportConfigurationPayload, ExportConfigurationListFetchOptions, ExportConfigurationContext, ExportConfigurationInstance, ExportConfigurationSolution}
'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var EngagementContextList;
var EngagementContextPage;
var EngagementContextInstance;
var EngagementContextContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextList
 * @description Initialize the EngagementContextList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Studio.V1} version - Version of the resource
 * @param {string} flowSid - The flow_sid
 * @param {string} engagementSid - The engagement_sid
 */
/* jshint ignore:end */
EngagementContextList = function EngagementContextList(version, flowSid,
                                                        engagementSid) {
  /* jshint ignore:start */
  /**
   * @function engagementContext
   * @memberof Twilio.Studio.V1.FlowContext.EngagementContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextContext}
   */
  /* jshint ignore:end */
  function EngagementContextListInstance(sid) {
    return EngagementContextListInstance.get(sid);
  }

  EngagementContextListInstance._version = version;
  // Path Solution
  EngagementContextListInstance._solution = {flowSid: flowSid, engagementSid: engagementSid};
  /* jshint ignore:start */
  /**
   * Constructs a engagement_context
   *
   * @function get
   * @memberof Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextList
   * @instance
   *
   * @returns {Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextContext}
   */
  /* jshint ignore:end */
  EngagementContextListInstance.get = function get() {
    return new EngagementContextContext(
      this._version,
      this._solution.flowSid,
      this._solution.engagementSid
    );
  };

  return EngagementContextListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextPage
 * @augments Page
 * @description Initialize the EngagementContextPage
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Studio.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns EngagementContextPage
 */
/* jshint ignore:end */
EngagementContextPage = function EngagementContextPage(version, response,
                                                        solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(EngagementContextPage.prototype, Page.prototype);
EngagementContextPage.prototype.constructor = EngagementContextPage;

/* jshint ignore:start */
/**
 * Build an instance of EngagementContextInstance
 *
 * @function getInstance
 * @memberof Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns EngagementContextInstance
 */
/* jshint ignore:end */
EngagementContextPage.prototype.getInstance = function getInstance(payload) {
  return new EngagementContextInstance(
    this._version,
    payload,
    this._solution.flowSid,
    this._solution.engagementSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextInstance
 * @description Initialize the EngagementContextContext
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @property {string} accountSid - The account_sid
 * @property {string} context - The context
 * @property {string} engagementSid - The engagement_sid
 * @property {string} flowSid - The flow_sid
 * @property {string} url - The url
 *
 * @param {Twilio.Studio.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} flowSid - The flow_sid
 * @param {sid} engagementSid - The engagement_sid
 */
/* jshint ignore:end */
EngagementContextInstance = function EngagementContextInstance(version, payload,
    flowSid, engagementSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.context = payload.context; // jshint ignore:line
  this.engagementSid = payload.engagement_sid; // jshint ignore:line
  this.flowSid = payload.flow_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {flowSid: flowSid, engagementSid: engagementSid, };
};

Object.defineProperty(EngagementContextInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new EngagementContextContext(
        this._version,
        this._solution.flowSid,
        this._solution.engagementSid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a EngagementContextInstance
 *
 * @function fetch
 * @memberof Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed EngagementContextInstance
 */
/* jshint ignore:end */
EngagementContextInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Produce a plain JSON object version of the EngagementContextInstance for serialization.
 * Removes any circular references in the object.
 *
 * @function toJSON
 * @memberof Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextInstance
 * @instance
 *
 * @returns Object
 */
/* jshint ignore:end */
EngagementContextInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextContext
 * @description Initialize the EngagementContextContext
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Studio.V1} version - Version of the resource
 * @param {sid} flowSid - The flow_sid
 * @param {sid} engagementSid - The engagement_sid
 */
/* jshint ignore:end */
EngagementContextContext = function EngagementContextContext(version, flowSid,
    engagementSid) {
  this._version = version;

  // Path Solution
  this._solution = {flowSid: flowSid, engagementSid: engagementSid, };
  this._uri = _.template(
    '/Flows/<%= flowSid %>/Engagements/<%= engagementSid %>/Context' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a EngagementContextInstance
 *
 * @function fetch
 * @memberof Twilio.Studio.V1.FlowContext.EngagementContext.EngagementContextContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed EngagementContextInstance
 */
/* jshint ignore:end */
EngagementContextContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new EngagementContextInstance(
      this._version,
      payload,
      this._solution.flowSid,
      this._solution.engagementSid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

module.exports = {
  EngagementContextList: EngagementContextList,
  EngagementContextPage: EngagementContextPage,
  EngagementContextInstance: EngagementContextInstance,
  EngagementContextContext: EngagementContextContext
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PathfindingRequest = _interopRequireDefault(require("../model/PathfindingRequest"));
var _PathfindingResponse = _interopRequireDefault(require("../model/PathfindingResponse"));
var _ValidationErrorModel = _interopRequireDefault(require("../model/ValidationErrorModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * MDP API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Pathfinding service.
* @module api/PathfindingApi
* @version 1.0.0
*/
var PathfindingApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new PathfindingApi. 
  * @alias module:api/PathfindingApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PathfindingApi(apiClient) {
    _classCallCheck(this, PathfindingApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the pathfindingPost operation.
   * @callback module:api/PathfindingApi~pathfindingPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PathfindingResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {module:model/PathfindingRequest} pathfindingRequest 
   * @param {module:api/PathfindingApi~pathfindingPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PathfindingResponse}
   */
  _createClass(PathfindingApi, [{
    key: "pathfindingPost",
    value: function pathfindingPost(pathfindingRequest, callback) {
      var postBody = pathfindingRequest;
      // verify the required parameter 'pathfindingRequest' is set
      if (pathfindingRequest === undefined || pathfindingRequest === null) {
        throw new Error("Missing the required parameter 'pathfindingRequest' when calling pathfindingPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PathfindingResponse["default"];
      return this.apiClient.callApi('/pathfinding/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return PathfindingApi;
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ErrorContext = _interopRequireDefault(require("./ErrorContext"));
var _ErrorType = _interopRequireDefault(require("./ErrorType"));
var _Location = _interopRequireDefault(require("./Location"));
var _Message = _interopRequireDefault(require("./Message"));
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
 * The ValidationErrorModel model module.
 * @module model/ValidationErrorModel
 * @version 1.0.0
 */
var ValidationErrorModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidationErrorModel</code>.
   * @alias module:model/ValidationErrorModel
   */
  function ValidationErrorModel() {
    _classCallCheck(this, ValidationErrorModel);
    ValidationErrorModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ValidationErrorModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ValidationErrorModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationErrorModel} obj Optional instance to populate.
     * @return {module:model/ValidationErrorModel} The populated <code>ValidationErrorModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidationErrorModel();
        if (data.hasOwnProperty('ctx')) {
          obj['ctx'] = _ErrorContext["default"].constructFromObject(data['ctx']);
        }
        if (data.hasOwnProperty('loc')) {
          obj['loc'] = _Location["default"].constructFromObject(data['loc']);
        }
        if (data.hasOwnProperty('msg')) {
          obj['msg'] = _Message["default"].constructFromObject(data['msg']);
        }
        if (data.hasOwnProperty('type_')) {
          obj['type_'] = _ErrorType["default"].constructFromObject(data['type_']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ValidationErrorModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValidationErrorModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `ctx`
      if (data['ctx']) {
        // data not null
        _ErrorContext["default"].validateJSON(data['ctx']);
      }
      // validate the optional field `loc`
      if (data['loc']) {
        // data not null
        _Location["default"].validateJSON(data['loc']);
      }
      // validate the optional field `msg`
      if (data['msg']) {
        // data not null
        _Message["default"].validateJSON(data['msg']);
      }
      // validate the optional field `type_`
      if (data['type_']) {
        // data not null
        _ErrorType["default"].validateJSON(data['type_']);
      }
      return true;
    }
  }]);
  return ValidationErrorModel;
}();
/**
 * @member {module:model/ErrorContext} ctx
 */
ValidationErrorModel.prototype['ctx'] = undefined;

/**
 * @member {module:model/Location} loc
 */
ValidationErrorModel.prototype['loc'] = undefined;

/**
 * @member {module:model/Message} msg
 */
ValidationErrorModel.prototype['msg'] = undefined;

/**
 * @member {module:model/ErrorType} type_
 */
ValidationErrorModel.prototype['type_'] = undefined;
var _default = exports["default"] = ValidationErrorModel;
/**
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

import ApiClient from '../ApiClient';

/**
 * The PathfindingPoint model module.
 * @module model/PathfindingPoint
 * @version 1.0.0
 */
class PathfindingPoint {
    /**
     * Constructs a new <code>PathfindingPoint</code>.
     * @alias module:model/PathfindingPoint
     * @param x {Number} 
     * @param y {Number} 
     */
    constructor(x, y) { 
        
        PathfindingPoint.initialize(this, x, y);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, x, y) { 
        obj['x'] = x;
        obj['y'] = y;
    }

    /**
     * Constructs a <code>PathfindingPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PathfindingPoint} obj Optional instance to populate.
     * @return {module:model/PathfindingPoint} The populated <code>PathfindingPoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PathfindingPoint();

            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'Number');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PathfindingPoint</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PathfindingPoint</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PathfindingPoint.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

PathfindingPoint.RequiredProperties = ["x", "y"];

/**
 * @member {Number} x
 */
PathfindingPoint.prototype['x'] = undefined;

/**
 * @member {Number} y
 */
PathfindingPoint.prototype['y'] = undefined;






export default PathfindingPoint;


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
import Cost from './Cost';
import Path from './Path';
import PathfindingResponseSegmentInstructionsInner from './PathfindingResponseSegmentInstructionsInner';

/**
 * The PathfindingResponseSegment model module.
 * @module model/PathfindingResponseSegment
 * @version 1.0.0
 */
class PathfindingResponseSegment {
    /**
     * Constructs a new <code>PathfindingResponseSegment</code>.
     * @alias module:model/PathfindingResponseSegment
     * @param cost {module:model/Cost} 
     * @param imageId {Number} 
     * @param instructions {Array.<module:model/PathfindingResponseSegmentInstructionsInner>} 
     * @param path {module:model/Path} 
     */
    constructor(cost, imageId, instructions, path) { 
        
        PathfindingResponseSegment.initialize(this, cost, imageId, instructions, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cost, imageId, instructions, path) { 
        obj['cost'] = cost;
        obj['image_id'] = imageId;
        obj['instructions'] = instructions;
        obj['path'] = path;
    }

    /**
     * Constructs a <code>PathfindingResponseSegment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PathfindingResponseSegment} obj Optional instance to populate.
     * @return {module:model/PathfindingResponseSegment} The populated <code>PathfindingResponseSegment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PathfindingResponseSegment();

            if (data.hasOwnProperty('cost')) {
                obj['cost'] = Cost.constructFromObject(data['cost']);
            }
            if (data.hasOwnProperty('image_id')) {
                obj['image_id'] = ApiClient.convertToType(data['image_id'], 'Number');
            }
            if (data.hasOwnProperty('instructions')) {
                obj['instructions'] = ApiClient.convertToType(data['instructions'], [PathfindingResponseSegmentInstructionsInner]);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = Path.constructFromObject(data['path']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PathfindingResponseSegment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PathfindingResponseSegment</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PathfindingResponseSegment.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `cost`
        if (data['cost']) { // data not null
          Cost.validateJSON(data['cost']);
        }
        if (data['instructions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['instructions'])) {
                throw new Error("Expected the field `instructions` to be an array in the JSON data but got " + data['instructions']);
            }
            // validate the optional field `instructions` (array)
            for (const item of data['instructions']) {
                PathfindingResponseSegmentInstructionsInner.validateJSON(item);
            };
        }
        // validate the optional field `path`
        if (data['path']) { // data not null
          Path.validateJSON(data['path']);
        }

        return true;
    }


}

PathfindingResponseSegment.RequiredProperties = ["cost", "image_id", "instructions", "path"];

/**
 * @member {module:model/Cost} cost
 */
PathfindingResponseSegment.prototype['cost'] = undefined;

/**
 * @member {Number} image_id
 */
PathfindingResponseSegment.prototype['image_id'] = undefined;

/**
 * @member {Array.<module:model/PathfindingResponseSegmentInstructionsInner>} instructions
 */
PathfindingResponseSegment.prototype['instructions'] = undefined;

/**
 * @member {module:model/Path} path
 */
PathfindingResponseSegment.prototype['path'] = undefined;






export default PathfindingResponseSegment;


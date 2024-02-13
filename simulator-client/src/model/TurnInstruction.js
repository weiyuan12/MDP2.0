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
* Enum class TurnInstruction.
* @enum {}
* @readonly
*/
export default class TurnInstruction {
    
        /**
         * value: "FORWARD_LEFT"
         * @const
         */
        "FORWARD_LEFT" = "FORWARD_LEFT";

    
        /**
         * value: "FORWARD_RIGHT"
         * @const
         */
        "FORWARD_RIGHT" = "FORWARD_RIGHT";

    
        /**
         * value: "BACKWARD_LEFT"
         * @const
         */
        "BACKWARD_LEFT" = "BACKWARD_LEFT";

    
        /**
         * value: "BACKWARD_RIGHT"
         * @const
         */
        "BACKWARD_RIGHT" = "BACKWARD_RIGHT";

    

    /**
    * Returns a <code>TurnInstruction</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TurnInstruction} The enum <code>TurnInstruction</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


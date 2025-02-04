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


import ApiClient from "../ApiClient";
import PathfindingRequest from '../model/PathfindingRequest';
import PathfindingResponse from '../model/PathfindingResponse';
import ValidationErrorModel from '../model/ValidationErrorModel';

/**
* Pathfinding service.
* @module api/PathfindingApi
* @version 1.0.0
*/
export default class PathfindingApi {

    /**
    * Constructs a new PathfindingApi. 
    * @alias module:api/PathfindingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    pathfindingPost(pathfindingRequest, callback) {
      let postBody = pathfindingRequest;
      // verify the required parameter 'pathfindingRequest' is set
      if (pathfindingRequest === undefined || pathfindingRequest === null) {
        throw new Error("Missing the required parameter 'pathfindingRequest' when calling pathfindingPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PathfindingResponse;
      return this.apiClient.callApi(
        '/pathfinding/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

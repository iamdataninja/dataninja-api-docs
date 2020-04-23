/**
 * @apiDefine Errors
 * @apiError ServerError Something unexpected happened
 * @apiErrorExample {json} Internal Server Error
 *     HTTP/1.1 500 Internal Server error
 *     {
 *       "status": 500,
 *       "success": false,
 *       "error": "[error message here]"
 *     }
 *
 * @apiError ValidationError Provided data is invalid
 * @apiHeader {String} Accept="application/json" Bearer user token
 * @apiErrorExample {json} Unprocessable Entity
 *     HTTP/1.1 422 Unprocessable Entity
 *     {
 *       "success": false,
 *       "errors": {
 *          "param_name": "error text",
 *          "param_name2": "error text",
 *          ...
 *        },
 *       "status": 422
 *     }
 */

/**
 * @apiDefine AuthError
 * @apiError Unauthorized Token incorrect or expired
 *
 * @apiErrorExample {json} Unauthorized
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "status": 401,
 *       "success": false
 *     }
 */

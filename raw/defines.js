/**
 * @apiDefine Secured
 * @apiHeader {String} Authorization="Bearer " Bearer user token
 *
 * @apiError Unauthorized Token incorrect or expired
 *
 * @apiErrorExample {json} Unauthorized
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "status": 401,
 *       "success": false
 *     }
 */

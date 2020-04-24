/**
 * @apiDefine AuthenticationSuccess
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "user": {
 *          "id": 1,
 *          "name": "Username",
 *          "email": "exampl@gmail.com",
 *          "language": "en",
 *          "token": "[some token here]"
 *        },
 *        "token": "[some token here]",
 *        "expires_at": 1587165099
 *     }
 *
 * @apiSuccess {Boolean} success Request Success
 * @apiSuccess {Object} user  Logged In User
 * @apiSuccess {Number} user.id  User Id
 * @apiSuccess {String} user.name  User Name
 * @apiSuccess {String} user.email  User Email
 * @apiSuccess {String} user.language  User Preffered Language Code
 * @apiSuccess {String} user.token  Generated Access Token
 * @apiSuccess {String} token  Generated Access Token
 * @apiSuccess {Number} expires_at  Timestamps In milliseconds when token expires
 *
 */

/**
 * @api {post} /login 1. Login User by credentials
 * @apiDescription Example Token: <code>d4uq1id9jynhne295dc758649859d5f940885287932f79xnytrrc97v</code>
 * @apiName bLoginUser
 * @apiGroup 2. Authentication
 * @apiVersion 0.0.1
 *
 * @apiParam {String} email="admin@admin.com" User email
 * @apiParam {String} password="123456" User password
 *
 * @apiUse AuthenticationSuccess
 *
 * @apiUse AuthError
 * @apiUse Errors
 */

/**
 * @api {post} /user 2. Get Current user
 * @apiName GetUser
 * @apiGroup 2. Authentication
 * @apiDescription Used for token validation. If token is incorrect then this returns 401 Unauthentiacated
 * @apiVersion 0.0.1
 *
 * @apiSuccess {Boolean} success Request Success
 * @apiSuccess {Object} user  Logged In User
 * @apiSuccess {Number} user.id  User Id
 * @apiSuccess {String} user.name  User Name
 * @apiSuccess {String} user.email  User Email
 * @apiSuccess {String} user.language  User Preffered Language Code
 * @apiSuccess {String} user.token  Generated Access Token
 *
 * @apiUse AuthenticationSuccess
 * @apiUse Secured
 */

/**
 * @api {post} /logout 3. Logout Current User
 * @apiName LogoutUser
 * @apiGroup 2. Authentication
 * @apiVersion 0.0.1
 *
 * @apiSuccess {Boolean} success Request Success
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true
 *     }
 * @apiUse Secured
 */

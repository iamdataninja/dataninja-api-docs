/**
 * @api {get} /ads 1. Get All User Ads
 * @apiName GetAllAds
 * @apiGroup 4. Ads
 * @apiVersion 0.0.1
 *
 * @apiSuccess {Boolean} success Request Success
 * @apiSuccess {Object[]} ads Returned ads
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "ads": [
 *          "name": "my ad name",
 *          "label": "my ad label",
 *          "created_at": "2020-04-25 14:33:45",
 *          ...
 *       ],
 *     }
 * @apiUse Secured
 */

/**
 * @api {post} /ads/new 2. Get Config for new AD
 * @apiName StartedAdCreation
 * @apiGroup 4. Ads
 * @apiVersion 0.0.1
 *
 * @apiSuccess {String} name New Ad Name
 * @apiSuccess {Array} fields Array of user Dynamic fields
 * @apiSuccess {Object} categories Ad Type Categories
 * @apiSuccess {Array} audiences User Defined Audiences
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "Some Unique Name",
 *       "fields": [
 *          "id": 1,
 *          "name": "Country",
 *          "type": "Select",
 *          "options": [
 *              {
 *                "id": 1,
 *                "value": "Georgia",
 *              }
 *          ],
 *       ],
 *       "categories": {
 *          "key": Value",
 *          "key2": Value2"
 *       },
 *       "audiences": {
 *          "key": Value",
 *          "key2": Value2"
 *       }
 *     }
 * @apiUse Secured
 */

/**
 * @api {post} /ads/create 3. Create Ad
 * @apiName CreateAd
 * @apiGroup 4. Ads
 * @apiVersion 0.0.1
 *
 * @apiParam {String} name Ad Name
 * @apiParam {String} label Ad Label
 * @apiParam {String="facebook","google"} network Ad Network
 * @apiParam {String} landing_page Landing page
 * @apiParam {String[object]} additional_params Additional parameters in url
 * @apiParam {String} audience_template Audience template [select field]
 *
 * @apiSuccess {Boolean} success Request Success
 * @apiSuccess {Object} request Given Request  [for testing ]
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *     }
 * @apiUse Secured
 */

//  Ad Fields Response
/**
 * @apiDefine FieldsResponse
 *
 * @apiSuccess {Array[Field]} data Containnig all fields
 * @apiSuccess {Number} data.field.id Field Id
 * @apiSuccess {String} data.field.name Field Name
 * @apiSuccess {String} data.field.type Field Type
 * @apiSuccess {Array} data.field.options If Field type is not text returns array of possible values
 * @apiSuccess {Number} data.feild.options.id Id of given option
 * @apiSuccess {Array} data.feild.options.value Value of given option
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "data": [
 *          "id": 1,
 *          "name": "Country",
 *          "type": "Select",
 *          "options": [
 *              {
 *                "id": 1,
 *                "value": "Georgia",
 *              }
 *          ],
 *       ],
 *     }
 */

/**
 * @api {post} /user/fields 1. Create Or Edit Fields
 * @apiName Create/Edit User Fields
 * @apiGroup 5. Settings
 * @apiVersion 0.0.1
 *
 * @apiDescription Create Or edit user fields, if field id is present then field will be edited If not field will be created
 *
 * @apiParam {Array[Field]} data Containnig all fields
 * @apiParam {Number} [data.field.id] Field Id (If field already created and needs to be edited)
 * @apiParam {String} [data.field.name] Field Name
 * @apiParam {String="text","select","radio","checkbox","multiple"} data.field.type Field Type
 * @apiParam {Array} [data.field.options] If Field type is not text array of possible values
 * @apiParam {Number} [data.field.options.id] Id of given option
 * @apiParam {Array} data.field.options.value Value of given option
 *
 * @apiUse Secured
 * @apiUse FieldsResponse
 * @apiUse Errors
 */

/**
 * @api {get} /user/fields 2. Get User Fields
 * @apiName Get User Fields
 * @apiGroup 5. Settings
 * @apiVersion 0.0.1
 *
 * @apiDescription Returns All Dynamic user fields
 *
 * @apiUse FieldsResponse
 * @apiUse Secured
 */

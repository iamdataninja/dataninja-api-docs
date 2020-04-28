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
 * @api {post} /ads/create 2. Create Ad
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

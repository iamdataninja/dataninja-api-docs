/**
 * @api {get} /page/config 1. Get Page Config
 * @apiDescription Returns menu config, header config & footer config.
 * @apiName Config
 * @apiGroup 3. Config
 * @apiVersion 0.0.1
 *
 * @apiSuccess {Boolean} success Request Success
 * @apiSuccess {Array} menu Contains Sidebar Menu Elements
 * @apiSuccess {String} menu.icon Icon Name
 * @apiSuccess {String} menu.name Menu Name (Applied Localization)
 * @apiSuccess {Array} menu.children Menu Children
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "menu": [
 *          {
 *            "icon": 'dashboard',
 *            "name": 'Dashboard',
 *            "children": []
 *          },
 *          {
 *            "icon": 'ads',
 *            "name": 'Ads',
 *            "children": []
 *          }
 *          ...
 *        ]
 *     }
 * @apiUse Secured
 */

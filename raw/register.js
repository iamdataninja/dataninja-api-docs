/**
 * @api {post} /register 1. User Registration
 * @apiName RegisterUser
 * @apiGroup 1.Registration
 * @apiVersion 0.0.1
 *
 * @apiParam {String} name User Name <code> max: 70 </code>
 * @apiParam {String} email User Email <code> max: 70 </code>
 * @apiParam {String} password User Password <code> min: 6 , max: 30 </code>
 * @apiParam {String} password_confirmation Password Comfirmation <code> =password </code>
 *
 * @apiUse AuthenticationSuccess
 *
 * @apiUse Errors
 */

/**
 * @api {post} /register/step/domain 2. Add Domain Step
 * @apiName DomainStep
 * @apiGroup 1.Registration
 * @apiVersion 0.0.1
 *
 * @apiParam {String="sub","own","new"} domain_type Domain Register type
 * @apiParam {String} domain Registered Domain: <strong>sub:</strong> <code>mysub1</code>, <strong>own:</strong>: <code>mydomain1.ge</code>, <strong>new:</strong>: <code>mynewdomain.ge</code>
 *
 * @apiUse Errors
 * @apiUse Secured
 */

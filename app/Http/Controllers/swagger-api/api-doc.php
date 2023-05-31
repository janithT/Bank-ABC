<?php

/**
 * @SWG\Swagger(
 *     basePath="/api/",
 *     schemes={"http", "https"},
 *     host=L5_SWAGGER_CONST_HOST,
 *     @SWG\Info(
 *         version="1.0.0",
 *         title="Bank-ABC API documentation",
 *         description="Bank-ABC API documentation",
 *         @SWG\Contact(
 *             email="info@example.com"
 *         ),
 *     )
 * )
 */

 /**
 *  @SWG\SecurityScheme(
 *      securityDefinition="bearer",
 *      type="apiKey",
 *      in="header",
 *      name="Authorization"
 * )
 */

 /**
 *
 *      @SWG\Post(
 *      path="/auth/register",
 *      tags={"User Auth Operations"},
 *      operationId="userregister",
 *      summary="User registration",
 *        @SWG\Parameter(
 *          name="name",
 *          required=true,
 *          type="string",
 *          in="formData"
 *      ),
 *       @SWG\Parameter(
 *          name="email",
 *          required=true,
 *          type="string",
 *          in="formData"
 *      ),
 *      @SWG\Parameter(
 *          name="phone",
 *          required=true,
 *          type="string",
 *          in="formData"
 *      ),
 *       @SWG\Parameter(
 *          name="password",
 *          required=true,
 *          type="string",
 *          in="formData"
 *      ),
 *        @SWG\Parameter(
 *          name="password_confirmation",
 *          required=true,
 *          type="string",
 *          in="formData"
 *      ),
 * 
 *        @SWG\Parameter(
 *          name="active",
 *          required=true,
 *          type="integer",
 *          in="formData",
 *          default="1",
 *          
 *      ),
 *      @SWG\Response(response=200,description="successful operation"),
 *      @SWG\Response(response=302,description="Found"),
 *      @SWG\Response(response=401,description="Unauthorized action."),
 *      @SWG\Response(response=403,description="Forbidden to access."),
 *      @SWG\Response(response=500,description="Server Error"),

 *  )
 *
*/


/**
 *
 *      @SWG\Post(
 *      path="/auth/login",
 *      tags={"User Auth Operations"},
 *      operationId="userlogin",
 *      summary="user login",
 *       @SWG\Parameter(
 *          name="body",
 *          in="body",
 *          @SWG\Schema(
 *          type="object",
 *              @SWG\Property(property="email", type="string", example="test@gmail.com"),
 *              @SWG\Property(property="password", type="string", example="123123123"),
 *          )
 *        ),
 *      @SWG\Response(response=200,description="successful operation"),
 *      @SWG\Response(response=302,description="Found"),
 *      @SWG\Response(response=401,description="Unauthorized action."),
 *      @SWG\Response(response=403,description="Forbidden to access."),
 *      @SWG\Response(response=500,description="Server Error"),
 *  )
 *
*/

/**
 *
 *      @SWG\Post(
 *      path="/auth/logout",
 *      tags={"User Auth Operations"},
 *      operationId="userlogout",
 *      summary="user logout",
 *      @SWG\Response(response=200,description="successful operation"),
 *      @SWG\Response(response=302,description="Found"),
 *      @SWG\Response(response=401,description="Unauthorized action."),
 *      @SWG\Response(response=403,description="Forbidden to access."),
 *      @SWG\Response(response=500,description="Server Error"),

 *  )
 *
*/

/**
 * @SWG\Get(
 *      path="/transactions/credit/logs",
 *      produces={"application/json"},
 * 		consumes={"application/json"},
 *      tags={"User Credits"},
 *      summary="Get all user credits",
 *      description="Returns all credits for user ",
 *		security={ {"bearer": {}} },
 *
 *      @SWG\Response(response=200,description="successful operation"),
 *      @SWG\Response(response=400, description="Bad request"),
 *     )
 */

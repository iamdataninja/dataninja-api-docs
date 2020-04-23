define({ "api": [
  {
    "type": "post",
    "url": "/user",
    "title": "3. Get Current user",
    "name": "GetUser",
    "group": "Authentication",
    "description": "<p>Used for token validation. If token is incorrect then this returns 401 Unauthentiacated</p>",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request Success</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Logged In User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.language",
            "description": "<p>User Preffered Language Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.token",
            "description": "<p>Generated Access Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Generated Access Token</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expires_at",
            "description": "<p>Timestamps In milliseconds when token expires</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"user\": {\n     \"id\": 1,\n     \"name\": \"Username\",\n     \"email\": \"exampl@gmail.com\",\n     \"language\": \"en\",\n     \"token\": \"[some token here]\"\n   },\n   \"token\": \"[some token here]\",\n   \"expires_at\": 1587165099\n}",
          "type": "json"
        }
      ]
    },
    "filename": "raw/auth.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "https://davikar.ge/api/user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer ",
            "description": "<p>Bearer user token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Token incorrect or expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": 401,\n  \"success\": false\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "4. Logout Current User",
    "name": "LogoutUser",
    "group": "Authentication",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request Success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "raw/auth.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "https://davikar.ge/api/logout"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer ",
            "description": "<p>Bearer user token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Token incorrect or expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": 401,\n  \"success\": false\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/register",
    "title": "1. User Registration",
    "name": "RegisterUser",
    "group": "Authentication",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User Name <code> max: 70 </code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email <code> max: 70 </code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password <code> min: 6 , max: 30 </code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>Password Comfirmation <code> =password </code></p>"
          }
        ]
      }
    },
    "filename": "raw/auth.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "https://davikar.ge/api/register"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"user\": {\n     \"id\": 1,\n     \"name\": \"Username\",\n     \"email\": \"exampl@gmail.com\",\n     \"language\": \"en\",\n     \"token\": \"[some token here]\"\n   },\n   \"token\": \"[some token here]\",\n   \"expires_at\": 1587165099\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request Success</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Logged In User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.language",
            "description": "<p>User Preffered Language Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.token",
            "description": "<p>Generated Access Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Generated Access Token</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expires_at",
            "description": "<p>Timestamps In milliseconds when token expires</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something unexpected happened</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Provided data is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server error\n{\n  \"status\": 500,\n  \"success\": false,\n  \"error\": \"[error message here]\"\n}",
          "type": "json"
        },
        {
          "title": "Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"success\": false,\n  \"errors\": {\n     \"param_name\": \"error text\",\n     \"param_name2\": \"error text\",\n     ...\n   },\n  \"status\": 422\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Bearer user token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/login",
    "title": "2. Login User by credentials",
    "description": "<p>Example Token: <code>d4uq1id9jynhne295dc758649859d5f940885287932f79xnytrrc97v</code></p>",
    "name": "bLoginUser",
    "group": "Authentication",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "defaultValue": "admin@admin.com",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "defaultValue": "123456",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "filename": "raw/auth.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "https://davikar.ge/api/login"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"user\": {\n     \"id\": 1,\n     \"name\": \"Username\",\n     \"email\": \"exampl@gmail.com\",\n     \"language\": \"en\",\n     \"token\": \"[some token here]\"\n   },\n   \"token\": \"[some token here]\",\n   \"expires_at\": 1587165099\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request Success</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Logged In User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.language",
            "description": "<p>User Preffered Language Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.token",
            "description": "<p>Generated Access Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Generated Access Token</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expires_at",
            "description": "<p>Timestamps In milliseconds when token expires</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Token incorrect or expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Something unexpected happened</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Provided data is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": 401,\n  \"success\": false\n}",
          "type": "json"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server error\n{\n  \"status\": 500,\n  \"success\": false,\n  \"error\": \"[error message here]\"\n}",
          "type": "json"
        },
        {
          "title": "Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"success\": false,\n  \"errors\": {\n     \"param_name\": \"error text\",\n     \"param_name2\": \"error text\",\n     ...\n   },\n  \"status\": 422\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Bearer user token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/page/config",
    "title": "1. Get Page Config",
    "description": "<p>Returns menu config, header config &amp; footer config.</p>",
    "name": "PageConfig",
    "group": "PageConfig",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request Success</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "menu",
            "description": "<p>Contains Sidebar Menu Elements</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "menu.icon",
            "description": "<p>Icon Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "menu.name",
            "description": "<p>Menu Name (Applied Localization)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "menu.children",
            "description": "<p>Menu Children</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"menu\": [\n     {\n       \"icon\": 'dashboard',\n       \"name\": 'Dashboard',\n       \"children\": []\n     },\n     {\n       \"icon\": 'ads',\n       \"name\": 'Ads',\n       \"children\": []\n     }\n     ...\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "raw/config.js",
    "groupTitle": "PageConfig",
    "sampleRequest": [
      {
        "url": "https://davikar.ge/api/page/config"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer ",
            "description": "<p>Bearer user token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Token incorrect or expired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": 401,\n  \"success\": false\n}",
          "type": "json"
        }
      ]
    }
  }
] });
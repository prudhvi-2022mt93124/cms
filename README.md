# cms
customer management system task

Tech stack used to setup CMS Backend

    - NodeJs server
    - Express framework for REST API
    - Postgresql Database

Node package managers - 
    - Bcrypt - Password encryption
    - Jsonwebtoken - OAuth JWT token
    - Sequelize - Database ORM
    - Express - Framework for HTTP
    - Cors

Node server setup & run commands -
    - npm init
    - npm i
    - npm start / node app.js
    - npm test

REST API enpoint details - 
    - Users 
        - http://127.0.0.1:8181/users - POST - Create user / Sign UP
        - http://127.0.0.1:8181/users - GET  - Fetch users list
        - http://127.0.0.1:8181/users/:id - PUT - Update user by id
        - http://127.0.0.1:8181/users/:id - DELETE - Delete user by id

    - Courses 
        - http://127.0.0.1:8181/courses - POST - Create course 
        - http://127.0.0.1:8181/courses - GET  - Fetch users course
        - http://127.0.0.1:8181/courses/:id - PUT - Update course by id
        - http://127.0.0.1:8181/courses/:id - DELETE - Delete course by id

    - Login
        - http://127.0.0.1:8181/auth/login - POST - Login by email & password - Validating user/email exists & password match and respond with token and roleID and roleName

1. Authentication - 
    - Implemented Sign up and Sign in API 
    - Custom OAuth2 using JWT token (JWT exp time & body with email, roleID, roleName)

2. Roles & Permissions
    - Created two roles - Admin & user through backend
    - Admin can access courses and users page (Not completly handled at API level due to time constraint)

3. CRUD operations are handled completly

4. Password security - Used bcrypt package for password storage and compare during login

5. Error handling - Handled using try and catch blocks and thrown error exception response with status code

6. Logging & Testing are not hadled due to time constraint







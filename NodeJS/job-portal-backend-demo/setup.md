1. npm i -g npm
2. npm install -g nodemon
3. create main folder
4. npm init -y
5. npm install express mongoose bcrypt jsonwebtoken cors dotenv express-session cookie-parser lodash morgan express-validator connect-mongo
npm install connect-mongo@latest
(npm)
6. npm install nodemon --save-dev
7.   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node server.js",
  "dev": "nodemon server.js"
},

8. job-portal-backend/
│
├── node_modules/
├── config/
│   └── db.js
│
├── models/
│   ├── User.js
│   └── Job.js
│
├── routes/
│   ├── authRoutes.js
│   └── jobRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── logger.js
│
├── controllers/
│   ├── authController.js
│   └── jobController.js
│
├── utils/
│   └── jwt.js
│
├── .env
├── server.js
└── package.json


0. .env
1. config - db.js
2. models - job.js, user.js
3. utils - jwt.js
4. middleware - authMiddleware.js
5. controller - authController.js, jobController.js
6. routes - authRoutes.js, jobRoutes.js



http://127.0.0.1:3000/api/accounts/register/
{
  "username": "seetha",
  "email": "seetha@gmail.com",
  "password": "seetha"
}

http://127.0.0.1:3000/api/accounts/login/
{
  "username": "seetha",
  "password": "seetha"
}

http://127.0.0.1:3000/api/jobs/add/
{
  "title": "Spring and Cloud Boot Developer",
  "desc": "Java",
  "salary": "80000",
  "vacancy": 2,
  "deadline": "2026-04-25",
  "job_type": "Full Time",
  "experience": 4,
  "company_location": "Pune"
}

http://127.0.0.1:3000/api/jobs/all/

http://127.0.0.1:3000/api/jobs/6a006a235865daea48d28c58/

http://127.0.0.1:3000/api/jobs/update/6a006a235865daea48d28c58/
{
  "title": "Cloud Engineer",
  "desc": "AWS + Azure",
  "salary": "40000",
  "vacancy": 7,
  "deadline": "2026-04-25",
  "job_type": "Full Time",
  "experience": 4,
  "company_location": "Pune",
  "isActive": true
}

http://127.0.0.1:3000/api/jobs/patch/6a006a235865daea48d28c58/
{
  "desc": "Javascript, MongoDB"
}

http://127.0.0.1:3000/api/jobs/delete/6a006a235865daea48d28c58/ 


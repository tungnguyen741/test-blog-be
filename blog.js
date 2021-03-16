require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// ===CONNECT DATABASE MONGODB===
mongoose.connect(process.env.MONGODB_URI, function (err) {
    if (err) 
      throw err;
    console.log('Successfully connected');
  })
// ===END CONNECT DATABASE MONGODB===

const port = process.env.PORT || 3001;

app.use(cookieParser('secret'));
app.use(morgan('combined'));
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

// ===API ROUTE===
const RoutePost = require('./route/post.route');
const RouteCreate = require('./route/create.route');
const RouteLogin = require('./route/login.route');
// ===END API ROUTE===

// ===MIDDLEWARE===
const LoginMiddleware = require('./middleware/login.middleware');
// ===END MIDDLEWARE===

app.use('/posts', RoutePost)
app.use('/create', RouteCreate)
app.use('/users', RouteLogin)


app.listen(port, function(){
    console.log(`Server listening on port ${port}`)
})
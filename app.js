var express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
var logger = require("morgan");

const sequelize = require("./helpers/db");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const courseRouter = require("./routes/courses");

var app = express();
var server = require('http').createServer(app);


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(cookieParser());
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const dbDriver = process.env.DB_USER;

console.log(dbDriver, "=====");

const corsOptions = {
  origin: (origin, callback) => {
    callback(null, true);
  }
};
app.use(cors(corsOptions));
// cors
if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: `*` }));
} else {
  app.use(cors({ origin: `*` }));
}
// sync DB models 
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Error creating database & tables:', err);
  });

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/courses', courseRouter);


const port = process.env.PORT || 80;
server.listen(port, () => {
  console.log(`Server is running on port ${port} in ${process.env.NODE_ENV} Mode`);
});

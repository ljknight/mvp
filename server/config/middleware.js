var morgan = require('morgan'); // used for logging incoming request
var bodyParser = require('body-parser');

module.exports = function (app, express) {
  var gifRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  app.use('/gifs', gifRouter); 

  require('../gifs/gifRoutes.js')(gifRouter);
};



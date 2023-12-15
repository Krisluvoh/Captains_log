// require dotenv so that I can use the .env fil
require('dotenv').config();
const express = require('express');
// require mongoose so that I can connect to my db
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
// const logs = require('./models/logs.js');
// we want to import the log model
const Log = require('./models/logs');
app.engine('jsx', jsxViewEngine());

// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})
// Set up jsx view engine
app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx', jsxViewEngine());

//=============================MIDDLEWARE===================================



const dayjs = require('dayjs');
// Create an instance of the express application
const app = express();

const log = require('./models/log');


app.get('/logs/new', (req, res) => {
    res.render('New');
});
  
app.get('/current-time', (req, res) => {
    const currentTime = dayjs().format('MMMM Do YYYY, h:mm:ss a');
    res.render(`Current Time: ${currentTime}`);
});


// Configure body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configure method-override
app.use(methodOverride('_method'));

// These are my routes
// We are going to create the 7 RESTful routes
// There is an order for them to listed in the code
// I - N - D - U - C - E - S
//  Action      HTTP Verb   CRUD 
// I - Index    GET         READ - display a list of elements
// N - New      GET         CREATE * - but this allows user input
// D - Delete   DELETE      DELETE
// U - Update   PUT         UPDATE * - this updates our database
// C - Create   POST        CREATE * - this adds to our database
// E - Edit     GET         UPDATE * - but this allows user input
// S - Show     GET         READ - display a specific element

// I - INDEX - dsiplays a list of all fruits











// Create a new logs model
const Log = mongoose.model('Log', {
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }, 
  });

  // Express server
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });


// Update a log (Update in the database)
app.put('/logs/:id', async (req, res) => {
  try {
      await Log.findByIdAndUpdate(req.params.id, { ...req.body, updatedAt: dayjs() }); 
      res.redirect(`/logs/${req.params.id}`);
    } catch (error) {
      console.error(error);
      res.send('Error updating log');
    }
  });



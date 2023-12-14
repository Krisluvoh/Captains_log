// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const moment = require('moment'); 

// Create an instance of the express application
const app = express();



app.get('/logs/new', (req, res) => {
    res.render('New');
});
  
app.get('/current-time', (req, res) => {
    const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    res.render(`Current Time: ${currentTime}`);
});


// Configure body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configure method-override
app.use(methodOverride('_method'));

// Set up jsx view engine
app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/captains_log', { useNewUrlParser: true, useUnifiedTopology: true });

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
      await Log.findByIdAndUpdate(req.params.id, { ...req.body, updatedAt: moment() }); 
      res.redirect(`/logs/${req.params.id}`);
    } catch (error) {
      console.error(error);
      res.send('Error updating log');
    }
  });


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

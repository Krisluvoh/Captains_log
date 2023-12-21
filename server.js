// require dotenv so that I can use the .env fil
require('dotenv').config();
const express = require('express');
const jsxViewEngine = require('jsx-view-engine');
// require mongoose so that I can connect to my db
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const dayjs = require('dayjs');
const app = express();
// const logs = require('./models/logs.js');
// we want to import the log model
const logsController = require('./controllers/logs');
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

app.use((req, res, next) => {
  console.log('Middleware: I run for all routes');
  next();
})

// Use the logsController for all routes related to logs
app.use('/logs', logsController);

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

// Configure method-override
app.use(methodOverride('_method'));

// Configure body-parser







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

app.get('/', (req, res) => {
  res.redirect('/logs');
});

// I - INDEX - dsiplays a list of all logs
app.get('/logs/', async (req, res) => {
  // res.send(logs);
  try {
    const foundLogs = await Log.find({});
    res.status(200).render('logs/Index', {logs: foundLogs});
  } catch (err) {
    res.status(400).send(err);
  }
  
});


// N - NEW - allows a user to input a new log
app.get('/logs/new', (req, res) => {
  res.render('logs/New');
});

// D - DELETE - PERMANENTLY removes log from the database
app.delete('/logs/:id', async (req, res) => {
  // res.send('deleting...');
  try {
      const deletedLog = await Log.findByIdAndDelete(req.params.id);
      console.log(deletedLog);
      res.status(200).redirect('/logs');
  } catch (err) {
      res.status(400).send(err);
  }
})

// U - UPDATE - makes the actual changes to the database based on the EDIT form
app.put('/logs/:id', async (req, res) => {
  if (req.body.readyToLog === 'on') {
      req.body.readyToLog = true;
  } else {
      req.body.readyToLog = false;
  }

  try {
      const updatedLog = await Log.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true },
      );
      console.log(updatedLog);
      res.status(200).redirect(`/logs/${req.params.id}`);
  } catch (err) {
      res.status(400).send(err);
  }
})

// C - CREATE - update our data store

app.post('/logs', async (req, res) => {
  if(req.body.shipIsBroken === 'on') { //if checked, req.body.shipIsBroken is set to 'on'
      req.body.shipIsBroken = true;
  } else {  //if not checked, req.body.shipIsBroken is undefined
      req.body.shipIsBroken = false;
  }

  try {
      const createdLog = await Log.create(req.body);
      res.status(200).redirect('/logs');
  } catch (err) {
      res.status(400).send(err);
  }
})

// E - EDIT - allow the user to provide the inputs to change the log
app.get('/logs/:id/edit', async (req, res) => {
  try {
      const foundLog = await Log.findById(req.params.id);
      console.log('foundLog');
      console.log(foundLog)
      res.status(200).render('logs/Edit', {log: foundLog});
  } catch (err) {
      res.status(400).send(err);
  }
})

// S - SHOW - show route displays details of an individual log
app.get('/logs/:id', async (req, res) => {
  // res.send(logs[req.params.indexOfLogsArray]);
  try {
      const foundLog = await Log.findById(req.params.id);
      res.render('logs/Show', {log: foundLog});
  } catch (err) {
      res.status(400).send(err);
  }

})

app.get('/current-time', (req, res) => {
  const currentTime = dayjs().format('MMMM Do YYYY, h:mm:ss a');
  res.render(`Current Time: ${currentTime}`);
});

app.listen(3000, () => {
  console.log('listening');
});

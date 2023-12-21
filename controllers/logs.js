// controllers/logs.js

const express = require('express');
const router = express.Router();
const Log = require('../models/logs');
// Define the routes for logs

// Index Route
router.get('/', async (req, res) => {
    try {
      const foundLogs = await Log.find({});
      res.status(200).render('logs/Index', { logs: foundLogs });
    } catch (err) {
      res.status(400).send(err);
    }
  });


// Show Route
router.get('/:id', async (req, res) => {
    try {
      const foundLog = await Log.findById(req.params.id);
      res.render('logs/Show', { log: foundLog });
    } catch (err) {
      res.status(400).send(err);
    }
  });
// New Route
router.get('/new', (req, res) => {
    res.render('logs/New');
  });

// Create Route
router.post('/', async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }
  
    try {
      const createdLog = await Log.create(req.body);
      res.status(200).redirect('/logs');
    } catch (err) {
      res.status(400).send(err);
    }
  });

// Edit Route
router.get('/:id/edit', async (req, res) => {
    try {
      const foundLog = await Log.findById(req.params.id);
      console.log('foundLog');
      console.log(foundLog);
      res.status(200).render('logs/Edit', { log: foundLog });
    } catch (err) {
      res.status(400).send(err);
    }
  });

// Update Route
router.put('/:id', async (req, res) => {
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
  });

// Delete Route
router.delete('/:id', async (req, res) => {
  try {
    const deletedLog = await Log.findByIdAndDelete(req.params.id);
    console.log(deletedLog);
    res.status(200).redirect('/logs');
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

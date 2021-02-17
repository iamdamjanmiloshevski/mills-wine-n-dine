const express = require("express");
const bodyParser = require("body-parser");
const Leaders = require("../models/leaders");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .get((req, res, next) => {
    Leaders.find({})
      .then(
        (leaders) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(leaders);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    const leader = req.body;
    Leaders.create(leader)
      .then(
        (leader) => {
          console.log("Leader created\n\n", leader);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(leader);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /leaders");
  })
  .delete((req, res, next) => {
    Leaders.remove()
      .then(
        (deleteResponse) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(deleteResponse);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

leaderRouter
  .route("/:leaderId")
  .get((req, res, next) => {
    const leaderId = req.params.leaderId;
    Leaders.findById(leaderId)
      .then(
        (leader) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(leader);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    const leaderId = req.params.leaderId;
    res.statusCode = 403;
    res.end(`POST operation not supported on /leader/${leaderId}`);
  })
  .put((req, res, next) => {
    const leaderId = req.params.leaderId;
    const propertyToUpdate = req.body;
    Leaders.findByIdAndUpdate(
      leaderId,
      {
        $set: propertyToUpdate,
      },
      { new: true }
    )
      .then(
        (leader) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(leader);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    const leaderId = req.params.leaderId;
    Leaders.findByIdAndRemove(leaderId)
      .then(
        (deleteResponse) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(deleteResponse);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = leaderRouter;

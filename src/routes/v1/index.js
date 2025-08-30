const express = require('express');
const citycontroller = require('../../controllers/city-controler');
const flightcontroller = require('../../controllers/flight_controller');
const airportcontroller = require('../../controllers/airport_contoller');
const { validationflight } = require('../../middlewares/index');
const router = express.Router();
router.post('/city', citycontroller.create);
router.delete('/city/:cityid', citycontroller.destroy);
router.get('/city/:cityid', citycontroller.get);
router.get('/city', citycontroller.getall); // Assuming you have a getall method in the controller
router.patch('/city/:cityid', citycontroller.update);
 // Assuming you have an update method in the controller
router.post('/flight', validationflight.validateCreateFlight, flightcontroller.createFlight);
router.get('/flight/:id', flightcontroller.getFlight);
router.get('/flight', flightcontroller.getAllFlights);
router.post('/airport', airportcontroller.create);
router.get('/airport/:id', airportcontroller.get);
router.get('/airport', airportcontroller.getAll);
module.exports = router; // export the router
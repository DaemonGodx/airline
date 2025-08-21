const express = require('express');
const citycontroller = require('../../controllers/city-controler');
const router = express.Router();
router.post('/city', citycontroller.create);
router.delete('/city/:cityid', citycontroller.destroy);
router.get('/city/:cityid', citycontroller.get);
router.get('/city', citycontroller.getall); // Assuming you have a getall method in the controller
router.patch('/city/:cityid', citycontroller.update); // Assuming you have an update method in the controller
module.exports = router; // export the router
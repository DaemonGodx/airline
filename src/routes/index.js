const express= require('express');
const router = express.Router();
const v1Api = require('./v1/index');
router.use('/v1', v1Api);
module.exports = router;
// This file serves as the main entry point for the API routes, directing requests to the appropriate
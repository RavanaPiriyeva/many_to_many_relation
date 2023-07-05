const express = require('express');
const { jobLocationsController } = require('../controllers/jobLocationsController');

const jobLocationsRoutes = express.Router();


jobLocationsRoutes.post('/', jobLocationsController.add)
jobLocationsRoutes.get('/', jobLocationsController.getAll)



module.exports = {
    jobLocationsRoutes
}
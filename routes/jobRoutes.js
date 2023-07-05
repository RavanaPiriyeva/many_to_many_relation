const express = require('express');
const { jobController } = require('../controllers/jobController');

const jobRoutes = express.Router();


jobRoutes.post('/', jobController.add)
//locationRoutes.get('/', jobController.getAll)
jobRoutes.get('/', jobController.getAll)
jobRoutes.get('/:id', jobController.getById)
jobRoutes.delete('/:id', jobController.deleteById)
jobRoutes.put('/:id', jobController.update)



module.exports = {
    jobRoutes
}
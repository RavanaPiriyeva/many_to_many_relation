const { JobLocations } = require("../models/JobLocations");


const jobLocationsController = {
    add: async (req, res) => {

        try {
            let jobLocation = new JobLocations({
                jobId: req.body.jobId,
                locationId: req.body.locationId,
            });
            await jobLocation.save();

            res.status(201).json(jobLocation);
        } catch (error) {
            res.status(500).json(error)
        }

    },
    getAll: async (req,res) => {

        let data = await JobLocations.find().populate("locationId").populate("jobId");

        res.json(data)

    }
}


module.exports = {
    jobLocationsController
}
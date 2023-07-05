const { Job } = require("../models/Job");
const { JobLocations } = require("../models/JobLocations");



const jobController = {
    add: async (req, res) => {

        try {
            let job = new Job({
                title: req.body.title,
                summary: req.body.summary,
                description: req.body.description,
                minSalary: req.body.minSalary,
                maxSalary: req.body.maxSalary,

            });
            await job.save();

            res.status(201).json(job);
        } catch (error) {
            res.status(500).json(error)
        }

    },
    getAll: (req, res) => {
        Job.find()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const job = await Job.findById(id);
            res.json(job);
        } catch (error) {
            res.status(500).json({ error: "Job hasn't" });
        }
    },
    update: (req, res) => {
        let id = req.params.id;

        Job.findById(id)
            .then(data => {
                data.title = req.body.title;
                data.summary = req.body.summary;
                data.description = req.body.description;
                data.minSalary = req.body.minSalary;
                data.maxSalary = req.body.maxSalary;
                data.save();

                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            })

    },
    deleteById: async (req, res) => {
        try {
            const jobId = req.params.id;

            const deletedJob = await Job.findByIdAndDelete(jobId);
            await JobLocations.deleteMany({ jobId: jobId });
            res.json(deletedJob);
        } catch (error) {
            res.status(500).json(error);
        }
    },
};



module.exports = {
    jobController
}
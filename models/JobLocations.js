
const { default: mongoose } = require("mongoose");


const JobLocationsSchema = mongoose.Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
   // jobs:[{type:mongoose.Schema.Types.ObjectId, ref:'Job'}]
})

const JobLocations = mongoose.model('JobLocations', JobLocationsSchema)


module.exports = {
    JobLocations
}
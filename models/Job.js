

//title, summary, description, minSalary, maxSalary, 
///locations[]

const { default: mongoose } = require("mongoose");
const { JobLocations } = require("./JobLocations");

const JobSchema = mongoose.Schema({
    addDate:{type:Date, default:Date.now},
    title:String,
    summary: String,
    description:String,
    minSalary:Number,
    maxSalary:Number,
  //  locations:[{type:mongoose.Schema.Types.ObjectId, ref:'Location'}]
})

JobSchema.pre('findOneAndDelete', async function (next) {
    const jobId = this.getQuery()['_id'];
      await JobLocations.deleteMany({ jobId: jobId });
  
    next();
  });
  
const Job = mongoose.model('Job', JobSchema)


module.exports = {
    Job
}
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cowList', (err)=>{
  if(err) {
    console.log(err);
    return;
  }
  console.log('connected to mongo')
});

const cowSchema = new mongoose.Schema({
  name: String,
  description: String
})

const Cow = mongoose.model('Cow', cowSchema);

let save = (cowData) => {
  let newCow = new Cow({
    name: cowData.name,
    description: cowData.description
  })
  return newCow.save()
}

let getAll = () => {
  return Cow.find({}).exec()
  .then((allCows) => {
    const convertedIdCows = allCows.map(cow => {
      const result = {};
      result.id = cow._id.toString()
      result.name = cow.name
      result.description = cow.description

      return result;
    })
    return convertedIdCows
  })
}

let deleteByid = (id) => {
  console.log("Id to delete: ", id)
  return Cow.deleteOne({_id: id})
}

let updateById = (id, dataToUpdate) => {
  console.log("Data to update: ", dataToUpdate)
  return Cow.updateOne({_id: id}, {
    name: dataToUpdate.name,
    description: dataToUpdate.description
  })
}

module.exports.save = save ;
module.exports.getAll = getAll;
module.exports.deleteByid = deleteByid;
module.exports.updateById = updateById;
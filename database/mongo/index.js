const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cowList', (err)=>{
  if(err) {
    console.log(err);
    return;
  }
  console.log('connected to mongo')
});
//unique!!!!!!!!
var currentId = 0;

const cowSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  description: String
})

const Cow = mongoose.model('Cow', cowSchema);

let save = (cowData) => {
  currentId = currentId+ 1;
  let newCow = new Cow({
    id: currentId,
    name: cowData.name,
    description: cowData.description
  })
  return newCow.save()
}

let getAll = () => {
  return Cow.find({}).exec();
}

module.exports.save = save ;
module.exports.getAll = getAll;
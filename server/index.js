const express = require('express');
let db = require('../database/mongo');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.post('/api/cows', (req, res) => {
  console.log("received cow: ", req.body)
  db.save(req.body)
  .then((createdCow) => {
    res.status(201).send(createdCow)

  })
  .catch((err) => {
    res.status(500).send(err)
    console.log(err)
  })

})

app.get('/api/cows', (req, res) => {
  db.getAll()
  .then((allCows) => {
    console.log("responding with cows:", allCows)
    res.status(200).send(allCows)
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  })
})

app.delete('/api/cows/:id', (req, res) => {
  var id = req.params.id;
  db.deleteByid(id)
  .then(() => {
    res.status(204).send()
    console.log('Data deleted');
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  })
})



app.put('/api/cows/:id', (req, res) => {
  console.log('Put request: ', req)
  var id = req.params.id;

  db.updateById(id, req.body)
  .then(() => {
    res.status(200).send()
    console.log('Data updated')
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  })
})



app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
  // db = require('../database/mongo');
    // readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice=>{
    //   if(choice==='mongo') {
    //     console.log('Your db is Mongo');
    //     db = require('../database/mongo');
    //   } else if(choice === 'mysql') {
    //     console.log('Your db is mysql');
    //     db = require('../database/mysql');
    //   } else {
    //     console.log('Stope node, restart and try again, valid options are mysql and mongo')
    //   }
    // })

});

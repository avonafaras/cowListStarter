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
  db.save(req.body)
  .then((createdCow) => {
    res.status(201).send(createdCow)
    console.log('Post responded with new object')
  })
  .catch((err) => res.status(500).send(err))

})

app.get('/api/cows', (req, res) => {
  db.getAll()
  .then((allCows) => {
    res.status(200).send(allCows)
  })
  .catch((err) => res.status(500).send(err));
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

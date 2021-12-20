const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'cowlist'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

module.exports = connection;





// Don't forget to export your functions!
let getAll = () => {
  return connection.promise().query('SELECT * FROM cows')
    .then((data) => data[0])
}

let save = (cowData) => {
  return connection.promise().query(`INSERT INTO cows(name, description) VALUES("${cowData.name}", "${cowData.description}")`)
}

let deleteByid = (id) => {
  return connection.promise().query(`DELETE FROM cows WHERE id=${id}`)
}

let updateById = (id, dataToUpdate) => {
  return connection.promise().query(`UPDATE cows SET name='${dataToUpdate.name}', description='${dataToUpdate.description}' WHERE id='${id}'`)
}

module.exports.getAll = getAll;
module.exports.save = save;
module.exports.deleteByid = deleteByid;
module.exports.updateById = updateById;

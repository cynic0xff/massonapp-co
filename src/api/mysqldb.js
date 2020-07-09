const mysql = require('mysql');

module.exports = class Database {

    mysql = require('mysql');

    // First you need to create a connection to the database
    // Be sure to replace 'user' and 'password' with the correct values
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'hwyaa370',
        database: 'sitepoint'
    });

    constructor() {
        console.log('Constructing....');
    }

    //connect
    connect() {
        this.connection.connect((err) => {
            if(err){
              console.log('Error connecting to Db');
              return;
            }
            console.log('Connection established');
          });
    }

    //get data with and id parsed in
    get_data_with_id(userSubmittedVariable) {

        this.connection.query(
            `SELECT * FROM authors WHERE id = ${userSubmittedVariable}`,
            (err, rows) => {
              if(err) throw err;
              console.log(`${rows[0].name}`);
            }
        );
    }

    //get the data
    get_data() {
        this.connection.query('SELECT * FROM authors', (err,rows) => {
            if(err) throw err;
          
            //foreach row get the name and city
            rows.forEach( (row) => {
                console.log(`${row.name} lives in ${row.city}`);
              });
          });
    }

    //insert the data
    insert(table_name, obj) {
          
        this.connection.query(`INSERT INTO ${table_name} SET ?`, obj, (err, res, fields) => {
        
            //thorw the error
            if(err) throw err;

            //return the id entered
            return res.insertId;
        });
        
    }

    //update the data
    update() {
        this.connection.query(
            'UPDATE authors SET city = ? Where ID = ?',
            ['London', 3],
            (err, result) => {
              if (err) throw err;
          
              console.log(`Changed ${result.changedRows} row(s)`);
            }
          );
    }

    //delete the data
    delete() {
        this.connection.query(
            'DELETE FROM authors WHERE id = ?', [25], (err, result) => {
              if (err) throw err;
          
              console.log(`Deleted ${result.affectedRows} row(s)`);
            }
          );
    }

    //close the connection
    close() {
        this.connection.end((err) => {
            console.log('Closing conneciton...');
        });
    }

}
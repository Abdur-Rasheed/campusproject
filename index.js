var express = require('express');
let {Sequelize} = require('sequelize');


const Sequelize = require('sequelize');
const db = require('../config/database');
//var app = express();

console.log("setting up the examples");

/* In this example, we are discussing sequlaize.
First, we need to establish a connection to the database.
If we want to create a connection to a database, we must create
an instance of sequalize. Let us also not forget to require sequalize 
module for our example.
*/

// Instance of Sequalize
var sequelize = new Sequelize('postgres://postgres:Password@localhost/postgres');

//Let's test the connection that we have created in the above line

try{
    sequelize.authenticate();
    console.log("The connect has been established.")
}catch(er){
    console.log("Some error", er);
}


/*  A Model in an abstraction that represents a table in your database.
*/

/*The following create a table if it does not exist.
*/

var Campus = sequelize.define('Campus', {
    //create name and material as strings,
    cName:
    {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    }, 
    imageUrl: 
    {
    type: Sequelize.STRING,
    defaultValue: 'https://placekitten.com/g/200/300',
    },
    adrs:
    {
    type: Sequelize.STRING,
    defaultValue: '250 Bedford Park Blvd W.',
    allowNull: false
    },

    //xtrmly large TEXT
    desc:
    {
    type: Sequelize.STRING,
    defaultValue: 'CUNY—Lehman College is a public institution that was' 
    +'founded in 1968. It has a total undergraduate enrollment of 13,002,'
    +'its setting is urban, and the campus size is 37 acres. It utilizes a'
    +'semester-based academic calendar.',
    },
   });

var Student = sequelize.define('Student', {
    //create name and material as strings,
    stuID:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    material: Sequelize.STRING,
    //height as an integer,
    height: Sequelize.INTEGER,
    //and brim as a true/false
    brim: Sequelize.BOOLEAN
});


   Campus
   //ensure the table exists,
   .sync()
   .then(function(){
   //`Hat` is now ready to be used.

   //console.log("The table is ready to be used");
   })
   Student
   //ensure the table exists,
   .sync()
   .then(function(){
   //`Hat` is now ready to be used.

   //console.log("The table is ready to be used");
   })



/* Command for data insert into a table called Hats.
*/
   Campus.create({
    
   });/**/

   Student.create({
    
    });/**/

/*
   Hat.findAll().then(function(rows) {
    for(var i = 0; i < rows.length; i++) {
    var columnData = rows[i].dataValues;
    var name = columnData.name;
    var brim = columnData.brim;
    console.log(name + " " + brim);
    }
   });

*/
/*
  let id = 2;
   Hat.findByPk(id).then(function (row) {
    var name = row.dataValues.name;
    var brim = row.dataValues.brim;
    console.log("Finding by Id " +name + " " + brim);
   });
/**/

console.log(Campus === sequelize.models.Campus);
console.log(Student === sequelize.models.Student);

/* To close a connection. we have to use: connectionName.close();
*/
//sequelize.close();

/*let port = 3000;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
   });*/
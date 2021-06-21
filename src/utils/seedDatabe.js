const { Campus, Student } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      description: "A college in Brooklyn",
    }),
    Campus.create({
      name: "College of Staten Island",
      address: "Staten Island",
      description: "A college on Staten Island",
    }),
    Campus.create({
      name: "John Jay College",
      address: "Manhattan",
      description: "A college in Manhattan",
    }),
    Student.create({
      firstName: "Daniel",
      lastName: "Phantom",
      email: "dphantom@gmail.com",
    }),
    Student.create({
      firstName: "Jack",
      lastName: "Black",
      email: "jblack@gmail.com",
    }),
    Student.create({
      firstName: "Clark",
      lastName: "Kent",
      email: "ckent@gmail.com",
    }),
  ]);
};

module.exports = seedDatabase;

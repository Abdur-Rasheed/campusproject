var express = require("express");
var router = express.Router();
const { Campus, Student } = require("./Server");


// /api/campuses retrieve data from database
router.get("/", async (req, res, next) => {
  
  try {
    
    const campuses = await Campus.findAll({ include: Student });
    
    console.log(campuses);
    res.status(200).json(campuses);
  } catch (err) {
    next(err);
  }
});

// Route to serve single campus based on its id
// /api/campuses/:id  here we use params
router.get("/:id", async (req, res, next) => {
 
  const { id } = req.params;
  
  try {
   
    const campus = await Campus.findByPk(id, { include: Student });
  
    res.status(200).json(campus);
  } catch (err) {
    
    next(err);
  }
});

// Route to get students associated with a campus
// /api/campuses/:id/students
// /api/campuses/456/students
router.get("/:id/students", async (req, res, next) => {
  const { id } = req.params;

  // find the campus by id
  let foundCampus;
  try {
    foundCampus = await Campus.findByPk(id);
  } catch (err) {
    next(err);
  }
         
  try {
    const studentsOfCampus = await foundCampus.getStudents();
    res.status(200).json(studentsOfCampus);
  } catch (err) {
    next(err);
  }
});

// Route to handle adding a campus
// /api/campuses/
router.post("/", async (req, res, next) => {
  
  const { name, address, description, imageUrl } = req.body;
  const campusObj = {
    name: name,
    address: address,
    imageUrl: imageUrl,
    description: description,
  };
  try {
   
    const newCampus = await Campus.create(campusObj);
    
    res.status(201).send(newCampus);
  } catch (err) {
    next(err);
  }
});


router.put("/:id", async (req, res, next) => {
  
  const { id } = req.params;
  
  const { name, address, description, imageUrl } = req.body;
  const updatedObj = {
    name: name,
    address: address,
    description: description,
    imageUrl: imageUrl,
  };
  try {
   
     // modify the campus object with new form data
    const campus = await Campus.findByPk(id, { include: Student });
    console.log(updatedObj);
   
    await campus.set(updatedObj);
    const updatedCampus = await campus.save();
    //console.log(updatedCampus);
  
    res.status(201).send(updatedCampus);
  } catch (err) {
    next(err);
  }
});


 // invoke the .destroy() method on the returned campus
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
   
    const campus = await Campus.findByPk(id);
    await campus.destroy();
    res.sendStatus(204);
    
  } catch (err) {
    next(err);
  }
});

module.exports = router;

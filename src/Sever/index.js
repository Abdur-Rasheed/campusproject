const express = require('express');
const router = express.Router();
const {Student} = require('./Server')



//this use to get all the student apis
router.get("/", async (req, res, next) => {
    // try to get students object from database
    try {
      // students will be the result of the Campus.findAll promise
      const students = await Student.findAll();
      // if students is valid, it will be sent as a json response
      console.log(students);
      res.status(200).json(students);
    } catch (err) {
      // if there is an error, it'll passed via the next parameter to the error handler middleware
      next(err);
    }
  });
  
  router.put("/:id", async (req, res, next) => {
    const { id } = req.params;
    const { campusId } = req.body;
    const updatedObj = { campusId: campusId };
    try {
      const student = await Student.findByPk(id);
      await student.set(updatedObj);
      const updatedStudent = await student.save();
      res.status(201).send(updatedStudent);
    } catch (err) {
      next(err);
    }
  });
  
  // Route to serve single student based on its id
  // /api/students/:id
  // /api/students/1 would respond with a student with id 1
  router.get("/:id", async (req, res, next) => {
    // take the id from params
    const { id } = req.params;
    // query the database for a student with matching id
    try {
      // if successful:
      const student = await Student.findByPk(id);
      // send back the student as a response
      res.status(200).json(student);
    } catch (err) {
      // if error:
      // handle error
      next(err);
    }
  });
  
  // Route to handle adding a student
  // /api/students/
  router.post("/", async (req, res, next) => {
    // Take the form data from the request body
    const { firstName, lastName, email, imageUrl, gpa } = req.body;
    // Create a student object
    const studentObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      imageUrl: imageUrl,
      gpa: gpa,
    };
  
    try {
      // Create a new student on the database
      const newStudent = await Student.create(studentObj);
      
      res.status(201).send(newStudent);
    } catch (err) {
      next(err);
    }
  });
  
 //delete using student id
  router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    
    try {
      
      const student = await Student.findByPk(id);
     
      await student.destroy();
     
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  });
  
  
app.listen("3001",function(){
    console.log("app is running on port 3000")
})

module.exports = router;
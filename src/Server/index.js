const express = require('express');
const router = express.Router();
const {Student} = require('./Server')



//this use to get all the student apis
router.get("/", async (req, res, next) => {
    
    try {
     
      const students = await Student.findAll();
      
      console.log(students);
      res.status(200).json(students);
    } catch (err) {
      // if there is an error, it'll passed via the next parameter to the error handler middleware
      next(err);
    }
  });
  
  //query specific element h
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

  
  router.get("/:id", async (req, res, next) => {

    const { id } = req.params;
  
    try {
      // if successful:
      const student = await Student.findByPk(id);
    
      res.status(200).json(student);
    } catch (err) {
      
      next(err);
    }
  });
  
  // Route to handle adding a student
  // /api/students/
  router.post("/", async (req, res, next) => {
    const { firstName, lastName, email, imageUrl, gpa } = req.body;
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
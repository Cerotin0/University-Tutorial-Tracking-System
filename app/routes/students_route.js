const express = require("express");
const router = express.Router();
const Student = require("../models/students_model");

// Getting all
router.get("/", async (req, res) => {
    try{
        const students = await Student.find();
        res.send(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// Getting one
router.get("/:id", getStudent, async (req, res) => {
    await res.json(studentRef);
});


// Creating one
router.post("/", async (req, res) =>{
    const newStudent = new Student(req.body);

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})


// Updating one
router.patch("/:id", getStudent, async (req, res) => {
    try{
        if (req.body.title) studentRef.title = req.body.title;
        if (req.body.fName) studentRef.fName = req.body.fName;
        if (req.body.lName) studentRef.lName = req.body.lName;
        if (req.body.DoB) studentRef.DoB = req.body.DoB;
        if (req.body.gender) studentRef.gender = req.body.gender;
        if (req.body.number) studentRef.number = req.body.number;
        if (req.body.email) studentRef.email = req.body.email;
        if (req.body.homeAddress) {
          if (req.body.homeAddress.line1) studentRef.homeAddress.line1 = req.body.homeAddress.line1;
          if (req.body.homeAddress.line2) studentRef.homeAddress.line2 = req.body.homeAddress.line2;
          if (req.body.homeAddress.town) studentRef.homeAddress.town = req.body.homeAddress.town;
          if (req.body.homeAddress.county) studentRef.homeAddress.county = req.body.homeAddress.county;
          if (req.body.homeAddress.eircode) studentRef.homeAddress.eircode = req.body.homeAddress.eircode;
        }
        if (req.body.permission) studentRef.permission = req.body.permission;
        if (req.body.degree) studentRef.degree = req.body.degree;
    } catch (err){
        res.status(400).json({ message: err.message });
    }

    try{
        updatedStudent = await studentRef.save();
        res.json(updatedStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})


// Deleting one
router.delete("/:id", getStudent, async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: student });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
})


// Attempts to find student with specified ID
async function getStudent(req, res, next){
    try{
        student = await Student.findById(req.params.id);
        
        // Check if student actually exists in our database
        if(!student) return res.status(404).json({ message: "Cannot find student with id " + req.params.id});

        studentRef = student;
        next();
    } catch (err){
        return res.status(500).json({ message: err.message, source: "getStudent"});
    }
}

module.exports = router;
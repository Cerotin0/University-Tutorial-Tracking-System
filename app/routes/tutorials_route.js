const express = require("express");
const router = express.Router();
const Tutorial = require("../models/tutorials_model");

// Getting all
router.get("/", async (req, res) => {
    try{
        const tutorials = await Tutorial.find();
        res.send(tutorials);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// Getting one
router.get("/:id", getTutorial, async (req, res) => {
    await res.json(tutorialRef);
});


// Creating one
router.post("/", async (req, res) =>{
    const newTutorial = new Tutorial(req.body);

    try {
        await newTutorial.save();
        res.status(201).json(newTutorial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})


// Updating one
router.patch("/:id", getTutorial, async (req, res) => {
    try {
      if (req.body.date) tutorialRef.date = req.body.date;
      if (req.body.time) tutorialRef.time = req.body.time;
      if (req.body.students) tutorialRef.students = req.body.students;
      if (req.body.tutor) tutorialRef.tutor = req.body.tutor;
      if (req.body.fee) tutorialRef.fee = req.body.fee;
      if (req.body.tutorialNumber) tutorialRef.tutorialNumber = req.body.tutorialNumber;
      if (req.body.tutorialAttendance) tutorialRef.tutorialAttendance = req.body.tutorialAttendance;
      if (req.body.tutorialSubject) tutorialRef.tutorialSubject = req.body.tutorialSubject;
      if (req.body.tutorialNotes) tutorialRef.tutorialNotes = req.body.tutorialNotes;
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  
    try {
      const updatedTutorial = await tutorialRef.save();
      res.json(updatedTutorial);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  


// Deleting one
router.delete("/:id", getTutorial, async (req, res) => {
    try {
        const tutorial = await Tutorial.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: tutorial });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
})


// Attempts to find Tutorial with specified ID
async function getTutorial(req, res, next){
    try{
        tutorial = await Tutorial.findById(req.params.id);
        
        // Check if Tutorial actually exists in our database
        if(!tutorial) return res.status(404).json({ message: "Cannot find tutorial with id " + req.params.id});

        tutorialRef = tutorial;
        next();
    } catch (err){
        return res.status(500).json({ message: err.message, source: "getTutorial"});
    }
}

module.exports = router;
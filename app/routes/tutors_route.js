const express = require("express");
const router = express.Router();
const Tutor = require("../models/tutors_model");

// Getting all
router.get("/", async (req, res) => {
    try{
        const tutors = await Tutor.find();
        res.send(tutors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// Getting one
router.get("/:id", getTutor, async (req, res) => {
    await res.json(tutorRef);
});


// Creating one
router.post("/", async (req, res) =>{
    const newTutor = new Tutor(req.body);

    try {
        await newTutor.save();
        res.status(201).json(newTutor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})


// Updating one
router.patch("/:id", getTutor, async (req, res) => {
    try {
        if (req.body.title) tutorRef.title = req.body.title;
        if (req.body.fName) tutorRef.fName = req.body.fName;
        if (req.body.lName) tutorRef.lName = req.body.lName;
        if (req.body.number) tutorRef.number = req.body.number;
        if (req.body.email) tutorRef.email = req.body.email;
        if (req.body.homeAddress) { if (req.body.homeAddress.line1) tutorRef.homeAddress.line1 = req.body.homeAddress.line1; 
            if (req.body.homeAddress.line2) tutorRef.homeAddress.line2 = req.body.homeAddress.line2; 
            if (req.body.homeAddress.town) tutorRef.homeAddress.town = req.body.homeAddress.town; 
            if (req.body.homeAddress.county) tutorRef.homeAddress.county = req.body.homeAddress.county; 
            if (req.body.homeAddress.eircode) tutorRef.homeAddress.eircode = req.body.homeAddress.eircode; }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

    try {
        updatedTutor = await tutorRef.save();
        res.json(updatedTutor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Deleting one
router.delete("/:id", getTutor, async (req, res) => {
    try {
        const tutor = await Tutor.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: tutor });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
})


// Attempts to find tutor with specified ID
async function getTutor(req, res, next){
    try{
        tutor = await Tutor.findById(req.params.id);
        
        // Check if tutor actually exists in our database
        if(!tutor) return res.status(404).json({ message: "Cannot find tutor with id " + req.params.id});

        tutorRef = tutor;
        next();
    } catch (err){
        return res.status(500).json({ message: err.message, source: "getTutor"});
    }
}

module.exports = router;
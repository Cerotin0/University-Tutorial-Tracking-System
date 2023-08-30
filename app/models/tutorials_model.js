const mongoose = require("mongoose");

const tutorialSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    students: [{
        studentID: {type: String, required: true}
    }],
    tutor: {type: String, required: true},
    fee: {type: Number, required: true},
    tutorialNumber: {type: Number, required: true},
    tutorialAttendance: {type: String, required: true},
    tutorialSubject: {type: String, required: true},
    tutorialNotes: {type: String, required: true}
});

module.exports = mongoose.model("Tutorial", tutorialSchema);


// const Tutorial = mongoose.model("Tutorial", tutorialSchema);

// module.exports = {
//     Tutorial
// }
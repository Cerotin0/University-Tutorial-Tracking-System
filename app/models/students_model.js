const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    title: {type: String, required: true},
    fName: {type: String, required: true},
    lName: {type: String, required: true},
    DoB: {type: String, required: true},
    gender: {type: String, required: true},
    number: {type: String, required: true},
    email: {type: String, required: true},
    homeAddress: {
        line1: {type: String, required: true},
        line2: {type: String},
        town: {type: String, required: true},
        county: {type: String, required: true},
        eircode: {type: String}
    },
    parent: {type: String},
    permission: {type: String, required: true},
    degree: {type: String},
    dateOfCreation: {type: String}
});

module.exports = mongoose.model("Student", studentSchema);

// const Student = mongoose.model("Student", studentSchema);

// module.exports = {
//     Student
// }
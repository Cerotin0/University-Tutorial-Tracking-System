const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    title: {type: String, required: true},
    fName: {type: String, required: true},
    lName: {type: String, required: true},
    number: {type: String, required: true},
    email: {type: String, required: true},
    homeAddress: {
        line1: {type: String, required: true},
        line2: {type: String},
        town: {type: String, required: true},
        county: {type: String, required: true},
        eircode: {type: String}
    },
});

module.exports = mongoose.model("Tutor", tutorSchema);


// const Tutor = mongoose.model("Tutor", tutorSchema);

// module.exports = {
//     Tutor
// }
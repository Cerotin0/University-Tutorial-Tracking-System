// Resets customers and their purchases to default
const mongoose = require('mongoose');

const Student = require("./app/models/students_model");
const Tutor = require("./app/models/tutors_model");
const Tutorial = require("./app/models/tutorials_model");

const kee = require('./uSS.js');

mongoose
.connect(kee.uS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {console.log("Connected to mongoDB");})
.catch((err) => console.error("Could not connect to MongoDB", err));

resetDatabase();

async function resetDatabase(){
    try {
        await Promise.all([
            // Deletes all student, tutor and tutorial information
            Student.deleteMany({}),
            Tutor.deleteMany({}),
            Tutorial.deleteMany({})
        ]);
        
        // Resets student information to default values
        await Student.insertMany(students);
        console.log("\nStudents reset successfully");
        await Tutor.insertMany(tutors);
        console.log("Tutors reset successfully");
        await Tutorial.insertMany(tutorials);
        console.log("Tutorials reset successfully\n");

        console.log("Database reset completed");
        await mongoose.disconnect();
    } catch (err) {
        console.error("Database reset failed: ", err);
        await mongoose.disconnect();
    }
}


const students = [{
      "_id": "s1",
      "title": "Mr",
      "fName": "John",
      "lName": "Doe",
      "DoB": "12-05-1998",
      "gender": "Male",
      "number": "0851234567",
      "email": "johndoe@gmail.com",
      "homeAddress": {
        "line1": "123 Main Street",
        "line2": "Apt 4B",
        "town": "Dublin",
        "county": "Dublin",
        "eircode": "D01AB12"
      },
      "dateOfCreation":"15-02-2012",
      "parent":"",
      "permission": "Yes",
      "degree": "Computer Science"
    },
    {
      "_id": "s2",
      "title": "Ms",
      "fName": "Jane",
      "lName": "Smith",
      "DoB": "15-08-1999",
      "gender": "Female",
      "number": "0869876543",
      "email": "janesmith@yahoo.com",
      "homeAddress": {
        "line1": "456 Elm Street",
        "town": "Cork",
        "county": "Cork",
        "eircode": "T12XY34"
      },
      "dateOfCreation":"11-11-2011",
      "parent":"",
      "permission": "No",
      "degree": "Business Administration"
    },
    {
      "_id": "s3",
      "title": "Mr",
      "fName": "David",
      "lName": "Johnson",
      "DoB": "01-03-1997",
      "gender": "Male",
      "number": "0875555555",
      "email": "davidjohnson@hotmail.com",
      "homeAddress": {
        "line1": "789 Oak Avenue",
        "town": "Galway",
        "county": "Galway",
        "eircode": "H91AB56"
      },
      "dateOfCreation":"5-12-2022",
      "parent":"",
      "permission": "Yes",
      "degree": "Mechanical Engineering"
    },
    {
      "_id": "s4",
      "title": "Miss",
      "fName": "Emily",
      "lName": "Brown",
      "DoB": "28-11-2007",
      "gender": "Female",
      "number": "0891111111",
      "email": "emilybrown@gmail.com",
      "homeAddress": {
        "line1": "321 Pine Lane",
        "line2": "Unit 9",
        "town": "Limerick",
        "county": "Limerick",
        "eircode": "V42CD78"
      },
      "dateOfCreation":"31-9-2015",
      "parent":"John Brown",
      "permission": "Yes",
      "degree":"Computer Science"
    },
    {
      "_id": "s5",
      "title": "Mr",
      "fName": "Michael",
      "lName": "Wilson",
      "DoB": "18-07-2008",
      "gender": "Male",
      "number": "0869999999",
      "email": "michaelwilson@yahoo.com",
      "homeAddress": {
        "line1": "987 Maple Street",
        "town": "Villageville",
        "county": "Countyvillage",
        "eircode": "E54321"
      },
      "dateOfCreation":"12-5-2023",
      "parent":"Jenny Wilson",
      "permission": "Yes",
      "degree": "Psychology"
    },
    {
      "_id": "s6",
      "title": "Ms",
      "fName": "Sophia",
      "lName": "Anderson",
      "DoB": "05-04-1998",
      "gender": "Female",
      "number": "0875554443",
      "email": "sophiaanderson@example.com",
      "homeAddress": {
        "line1": "654 Oak Street",
        "line2": "Apt 7C",
        "town": "Citytown",
        "county": "Townville",
        "eircode": "E98765"
      },
      "dateOfCreation":"19-3-2021",
      "parent":"",
      "permission": "Yes",
      "degree": "English Literature"
    },
    {
      "_id": "s7",
      "title": "Mr",
      "fName": "Daniel",
      "lName": "Lee",
      "DoB": "10-09-1999",
      "gender": "Male",
      "number": "0867777777",
      "email": "daniellee@hotmail.com",
      "homeAddress": {
        "line1": "789 Elm Avenue",
        "town": "Hamletville",
        "county": "Countyham",
        "eircode": "E12345"
      },
      "dateOfCreation":"3-12-2015",
      "parent":"",
      "permission": "Yes",
      "degree": "Chemistry"
    },
    {
      "_id": "s8",
      "title": "Miss",
      "fName": "Olivia",
      "lName": "Davis",
      "DoB": "25-01-1997",
      "gender": "Female",
      "number": "0852222222",
      "email": "oliviadavis@gmail.com",
      "homeAddress": {
        "line1": "456 Pine Lane",
        "line2": "Unit 3",
        "town": "Cityville",
        "county": "Countyshire",
        "eircode": "E54321"
      },
      "dateOfCreation":"12-12-2006",
      "parent":"",
      "permission": "No",
      "degree": "Biology"
    },
    {
      "_id": "s9",
      "title": "Mr",
      "fName": "Ethan",
      "lName": "Martinez",
      "DoB": "14-02-1998",
      "gender": "Male",
      "number": "0864444444",
      "email": "ethanmartinez@hotmail.com",
      "homeAddress": {
        "line1": "654 Maple Street",
        "town": "Townsville",
        "county": "Countyville",
        "eircode": "E98765"
      },
      "dateOfCreation":"20-2-2020",
      "parent":"",
      "permission": "Yes",
      "degree": "Physics"
    },
    {
      "_id": "s10",
      "title": "Ms",
      "fName": "Ava",
      "lName": "Moore",
      "DoB": "08-06-2008",
      "gender": "Female",
      "number": "0868888888",
      "email": "avamoore@yahoo.com",
      "homeAddress": {
        "line1": "789 Oak Avenue",
        "town": "Villagetown",
        "county": "Countytown",
        "eircode": "E12345"
      },
      "dateOfCreation":"15-9-2020",
      "parent":"Liam Moore",
      "permission": "No",
      "degree": "Economics"
    }]
  
const tutors = [{
      "_id": "t1",
      "title": "Mr",
      "fName": "John",
      "lName": "Smith",
      "number": "0871234567",
      "email": "johnsmith123@gmail.com",
      "homeAddress": {
        "line1": "123 Main Street",
        "line2": "Apt 4B",
        "town": "Dublin",
        "county": "Dublin",
        "eircode": "D01AB12"
      }
    },
    {
      "_id": "t2",
      "title": "Ms",
      "fName": "Emily",
      "lName": "Johnson",
      "number": "0869876543",
      "email": "emilyjohnson456@yahoo.com",
      "homeAddress": {
        "line1": "456 Elm Street",
        "town": "Cork",
        "county": "Cork",
        "eircode": "T12XY34"
      }
    },
    {
      "_id": "t3",
      "title": "Mrs",
      "fName": "Sophia",
      "lName": "Brown",
      "number": "0855555555",
      "email": "sophiabrown789@hotmail.com",
      "homeAddress": {
        "line1": "789 Oak Avenue",
        "town": "Galway",
        "county": "Galway",
        "eircode": "H91AB56"
      }
    },
    {
      "_id": "t4",
      "title": "Miss",
      "fName": "Daniel",
      "lName": "Lee",
      "number": "0891111111",
      "email": "daniellee234@gmail.com",
      "homeAddress": {
        "line1": "321 Pine Lane",
        "line2": "Unit 9",
        "town": "Limerick",
        "county": "Limerick",
        "eircode": "V42CD78"
      }
    },
    {
      "_id": "t5",
      "title": "Mr",
      "fName": "Olivia",
      "lName": "Davis",
      "number": "0869999999",
      "email": "oliviadavis567@yahoo.com",
      "homeAddress": {
        "line1": "987 Maple Street",
        "town": "Waterford",
        "county": "Waterford",
        "eircode": "X91AB34"
      }
    },
    {
      "_id": "t6",
      "title": "Ms",
      "fName": "Ethan",
      "lName": "Martinez",
      "number": "0874444444",
      "email": "ethanmartinez890@gmail.com",
      "homeAddress": {
        "line1": "654 Oak Street",
        "town": "Kilkenny",
        "county": "Kilkenny",
        "eircode": "R95XY12"
      }
    }]
  
const tutorials = [    {        
        _id: "tut1",        
        date: "01-03-23",        
        time: "09:00",        
        students: [            
            { studentID: "s1" },            
            { studentID: "s6" }        
        ],
        tutor: "t1",
        fee: 50,
        tutorialNumber: 1,
        tutorialAttendance: "Attended",
        tutorialSubject: "English",
        tutorialNotes: "Covered grammar and vocabulary"
    },
    {
        _id: "tut2",
        date: "05-03-23",
        time: "14:30",
        students: [
            { studentID: "s2" },
            { studentID: "s7" }
        ],
        tutor: "t3",
        fee: 60,
        tutorialNumber: 1,
        tutorialAttendance: "Attended",
        tutorialSubject: "Irish",
        tutorialNotes: "Discussed Irish literature"
    },
    {
        _id: "tut3",
        date: "08-03-23",
        time: "10:00",
        students: [
            { studentID: "s3" },
            { studentID: "s4" },
            { studentID: "s7" }
        ],
        tutor: "t2",
        fee: 30,
        tutorialNumber: 2,
        tutorialAttendance: "Attended",
        tutorialSubject: "Mathematics",
        tutorialNotes: "Solved trigonometry problems"
    },
    {
        _id: "tut4",
        date: "12-03-23",
        time: "13:45",
        students: [
            { studentID: "s4" },
            { studentID: "s8" }
        ],
        tutor: "t8",
        fee: 120,
        tutorialNumber: 4,
        tutorialAttendance: "Attended",
        tutorialSubject: "Biology",
        tutorialNotes: "Covered cell structure and functions"
    },
    {
        _id: "tut5",
        date: "15-03-23",
        time: "16:30",
        students: [
            { studentID: "s7" },
            { studentID: "s12" }
        ],
        tutor: "t2",
        fee: 56,
        tutorialNumber: 1,
        tutorialAttendance: "Attended",
        tutorialSubject: "Chemistry",
        tutorialNotes: "Discussed chemical reactions"
    },
    {
        _id: "tut6",
        date: "20-03-23",
        time: "11:15",
        students: [
            { studentID: "s11" },
            { studentID: "s12" }
        ],
        tutor: "t2",
        fee: 50,
        tutorialNumber: 5,
        tutorialAttendance: "Attended",
        tutorialSubject: "Physics",
        tutorialNotes: "Covered Newton's laws of motion"
    },
    {
        _id: "tut7",
        date: "25-03-23",
        time: "15:00",
        students: [
            { studentID: "s1" }
        ],
        tutor: "t3",
        fee: 50,
        tutorialNumber: 4,
        tutorialAttendance: "Attended",
        tutorialSubject: "Computer Science",
        tutorialNotes: "Introduction to programming concepts"
    },
    {
        _id: "tut8",
        date: "29-03-23",
        time: "12:45",
        students: [
            { studentID: "s1" },
            { studentID: "s7" }
        ],
        tutor: "t1",
        fee: 90,
        tutorialNumber: 2,
        tutorialAttendance: "Attended",
        tutorialSubject: "English",
        tutorialNotes: "Practiced reading and comprehension"
    },
    {
        _id: "tut9",
        date: "02-04-23",
        time: "09:30",
        students: [
            { studentID: "s2" },
            { studentID: "s3" },
            { studentID: "s8" }
        ],
        tutor: "t3",
        fee: 90,
        tutorialNumber: 2,
        tutorialAttendance: "Cancelled",
        tutorialSubject: "Irish",
        tutorialNotes: "Reviewed grammar rules"
    },
    {
        _id: "tut10",
        date: "06-04-23",
        time: "14:00",
        students: [
            { studentID: "s4" },
            { studentID: "s10" }
        ],
        tutor:"t7",
        fee: 85,
        tutorialNumber: 10,
        tutorialAttendance: "Cancelled",
        tutorialSubject: "Mathematics",
        tutorialNotes: "Explored calculus concepts"
    },
    {
        _id: "tut11",
        date: "10-04-23",
        time: "11:30",
        students: [
            { studentID: "s9" }
        ],
        tutor: "t5",
        fee: 50,
        tutorialNumber: 11,
        tutorialAttendance: "Attended",
        tutorialSubject: "Biology",
        tutorialNotes: "Discussed genetics and inheritance"
    },
    {
        _id: "tut12",
        date: "14-04-23",
        time: "16:15",
        students: [
            { studentID: "s10" },
            { studentID: "s11" }
        ],
        tutor:"t6",
        fee: 30,
        tutorialNumber: 3,
        tutorialAttendance: "Cancelled",
        tutorialSubject: "Chemistry",
        tutorialNotes: "Explored the periodic table"
    }
];


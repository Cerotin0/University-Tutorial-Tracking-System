const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const app = express();

const kee = require('../uSS.js');

// Sets up middleware
app.use( cors() );
app.use( express.json() );


// Connects to database
mongoose
.connect(kee.uS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {console.log("Connected to mongoDB");})
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Sets up custom routers //
// Student router
const studentRouter = require("./routes/students_route");
app.use("/students", studentRouter); 

// Tutor router
const tutorRouter = require("./routes/tutors_route");
app.use("/tutors", tutorRouter); 

// Tutorial router
const tutorialRouter = require("./routes/tutorials_route");
app.use("/tutorials", tutorialRouter); 


// Allows our API to "listen" on port 3000
app.listen(3000);


/*
Database Design:
This database design follows a relational model where we have multiple entities and their relationships. There are tables for students, tutorials
and tutors. Students and tutors have a one-to-many relationship with tutorials, and every tutorial can have multiple students and a single tutor.


Impact on REST API Development:
The database design had a big impact on the development of my REST API. It guides the structure and organization of the API endpoints, ensuring that they align with the relationships 
and data model defined in the database. The REST API endpoints are designed to perform CRUD operations on the entities (students, tutorials, tutors) and handle the necessary 
relationships between them.

For example, we have specific endpoints for creating, updating, retrieving, and deleting students, tutorials, and tutors. We also have endpoints to retrieve tutorials associated with a 
specific student or tutor, allowing for data retrieval based on the established relationships.
*/
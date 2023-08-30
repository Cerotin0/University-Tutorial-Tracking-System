const url = "http://localhost:3000";
changeUI();

let studentTable = document.getElementById("studentTable");
let tutorTable = document.getElementById("tutorTable");
let tutorialTable = document.getElementById("tutorialTable");




/// STUDENT LOGIC
async function fetchStudents(id) {
    // Clear existing table content    
    try{
        while (studentTable.firstChild) {
            studentTable.firstChild.remove();
        }
    } catch (err){};


    let response;
    let students;
    if(!id){
        response = await fetch(url+"/students");
        students = await response.json();
    } else {
        response = await fetch(url+"/students/"+id);
        if(response.ok){
            const student = await response.json();
            students = [student];
        } else {
            alert("Student with ID \'" + id + "\' doesn't exist.");
            fetchStudents();
            return;
        }
    }

    // Create headers
    const tableHeader = document.createElement("tr");

    const idHeader = document.createElement("th");
    idHeader.textContent = "Student ID";
    tableHeader.appendChild(idHeader);
    
    const titleHeader = document.createElement("th");
    titleHeader.textContent = "Title";
    tableHeader.appendChild(titleHeader);

    const nameHeader = document.createElement("th");
    nameHeader.textContent = "Name";
    tableHeader.appendChild(nameHeader);
    
    const dobHeader = document.createElement("th");
    dobHeader.textContent = "Date of Birth";
    tableHeader.appendChild(dobHeader);
    
    const genderHeader = document.createElement("th");
    genderHeader.textContent = "Gender";
    tableHeader.appendChild(genderHeader);
    
    const numberHeader = document.createElement("th");
    numberHeader.textContent = "Phone Number";
    tableHeader.appendChild(numberHeader);
    
    const emailHeader = document.createElement("th");
    emailHeader.textContent = "Email";
    tableHeader.appendChild(emailHeader);
    
    const addressHeader = document.createElement("th");
    addressHeader.textContent = "Address";
    tableHeader.appendChild(addressHeader);
    
    const parentHeader = document.createElement("th");
    parentHeader.textContent = "Guardian";
    tableHeader.appendChild(parentHeader);

    const permissionHeader = document.createElement("th");
    permissionHeader.textContent = "Permission";
    tableHeader.appendChild(permissionHeader);
    
    const degreeHeader = document.createElement("th");
    degreeHeader.textContent = "Course";
    tableHeader.appendChild(degreeHeader);

    const dateOfCreationHeader = document.createElement("th");
    dateOfCreationHeader.textContent = "Date of Creation";
    tableHeader.appendChild(dateOfCreationHeader);
    
    // Styles
    studentTable.style.borderCollapse = "collapse";
    studentTable.style.background = "lightgrey";
    studentTable.style.margin = "25px 0";
    studentTable.style.fontSize = "17px";
    studentTable.style.boxShadow = "0 0 20px rgb(0,0,0,0.2)";

    tableHeader.style.backgroundColor = "#009879";
    tableHeader.style.color = "white";
    tableHeader.style.textAlign = "left";

    idHeader.style.width = "100px";
    titleHeader.style.width = "60px";
    nameHeader.style.width = "150px";
    dobHeader.style.width = "130px";
    genderHeader.style.width = "100px";
    numberHeader.style.width = "110px";
    emailHeader.style.width = "250px";
    addressHeader.style.width = "400px";
    parentHeader.style.width = "150px";
    permissionHeader.style.width = "100px";
    degreeHeader.style.width = "150px";


    // Append the table header to the table
    studentTable.appendChild(tableHeader);

    // Acts as a way for us to alternate between colours
    let counter = 1;

    // Create the rows and col and populate it with data received from the server
    students.forEach(student => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = student._id;
        row.appendChild(idCell);

        const titleCell = document.createElement("td");
        titleCell.textContent = `${student.title}`;
        row.appendChild(titleCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = `${student.fName} ${student.lName}`;
        row.appendChild(nameCell);

        const dobCell = document.createElement("td");
        dobCell.textContent = student.DoB;
        row.appendChild(dobCell);

        const genderCell = document.createElement("td");
        genderCell.textContent = student.gender;
        row.appendChild(genderCell);

        const numberCell = document.createElement("td");
        numberCell.textContent = student.number;
        row.appendChild(numberCell);

        const emailCell = document.createElement("td");
        emailCell.textContent = student.email;
        row.appendChild(emailCell);

        const addressCell = document.createElement("td");
        addressCell.textContent = `${student.homeAddress.line1}, ${student.homeAddress.town}, ${student.homeAddress.county}`;
        row.appendChild(addressCell);

        const parentCell = document.createElement("td");
        parentCell.textContent = student.parent;
        row.appendChild(parentCell);

        const permissionCell = document.createElement("td");
        permissionCell.textContent = student.permission;
        row.appendChild(permissionCell);

        const degreeCell = document.createElement("td");
        degreeCell.textContent = student.degree;
        row.appendChild(degreeCell);

        const creationCell = document.createElement("td");
        creationCell.textContent = student.dateOfCreation;
        row.appendChild(creationCell);

        // studentTable.border = "3";

        // studentTable.style.background = "";
        // idCell.style.width = "100px";
        // titleCell.style.width = "60px";
        // nameCell.style.width = "150px";
        // dobCell.style.width = "100px";
        // genderCell.style.width = "100px";
        // numberCell.style.width = "110px";
        // emailCell.style.width = "250px";
        // addressCell.style.width = "400px";
        // parentCell.style.width = "150px";

        // Styles
        row.style.borderBottom = "2px solid #dddddd";
        if(counter%2==0) row.style.backgroundColor = "#dddddd";
        else row.style.backgroundColor = "#f3f3f3";

        counter++;
        studentTable.appendChild(row);
    });
}

async function findStudent() {
    const id = document.getElementById("id").value;

    // Check to make sure user has put in an ID
    if(id.length < 1) {
        alert("You need to put something into Student ID");
        return;
    }

    fetchStudents(id);
    // const rows = document.querySelectorAll("#studentTable tr");
  
    // rows.forEach((row) => {
    //   const idCell = row.querySelector("td:first-child");
    //   if (idCell && idCell.textContent === id) {
    //     row.style.backgroundColor = "yellow";
    //   } else {
    //     row.style.backgroundColor = "";
    //   }
    // });
  }

async function addStudent(){
    const form = document.getElementById("student-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const d = new Date();
        const currentDate = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();;
        
        const newStudent = {
            _id: document.getElementById("id").value,
            title: document.getElementById("title").value,
            fName: document.getElementById("fName").value,
            lName: document.getElementById("lName").value,
            DoB: document.getElementById("dob").value,
            gender: document.getElementById("gender").value,
            number: document.getElementById("number").value,
            email: document.getElementById("email").value,
            homeAddress: {
                line1: document.getElementById("address-line1").value,
                line2: document.getElementById("address-line2").value,
                town: document.getElementById("town").value,
                county: document.getElementById("county").value,
                eircode: document.getElementById("eircode").value,
            },
            parent: document.getElementById("parent").value,
            permission: document.getElementById("permission").value,
            degree: document.getElementById("degree").value,
            dateOfCreation: currentDate
        };

        const response = await fetch(url+"/students", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newStudent),
        });

        if (response.ok) {
            alert("Student added successfully!");
            fetchStudents();
            form.reset();
        } else {
            const errorMessage = await response.text();
            alert("An error occurred: " + errorMessage);
        }
    }, {once: true });
}

async function updateStudent(){
    const form = document.getElementById("student-form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const id =  document.getElementById("id").value;
        const newStudent = {
            title: document.getElementById("title").value,
            fName: document.getElementById("fName").value,
            lName: document.getElementById("lName").value,
            DoB: document.getElementById("dob").value,
            gender: document.getElementById("gender").value,
            number: document.getElementById("number").value,
            email: document.getElementById("email").value,
            homeAddress: {
                line1: document.getElementById("address-line1").value,
                line2: document.getElementById("address-line2").value,
                town: document.getElementById("town").value,
                county: document.getElementById("county").value,
                eircode: document.getElementById("eircode").value,
            },
            permission: document.getElementById("permission").value,
            degree: document.getElementById("degree").value,
        };

        const response = await fetch(url+"/students/"+id, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newStudent),
        });

        if (response.ok) {
            alert("Student updated successfully!");
            fetchStudents();
            form.reset();
        } else {
            const errorMessage = await response.text();
            alert("An error occurred: " + errorMessage);
        }
    }, {once: true });
}

async function deleteStudent(){
    const id =  document.getElementById("id").value;

    // Check to make sure user has put in an ID
    if(id.length < 1) {
        alert("You need to put something into ID");
        return;
    }

    const response = await fetch(url+"/students/"+id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    });

    if (response.ok) {
        alert("Student deleted successfully!");
        fetchStudents();
        // console.log("deleted");
    } else {
        const errorMessage = await response.text();
        alert("An error occurred: " + errorMessage);
    }
}




/// TUTOR LOGIC
async function fetchTutors(id) {
    // Clear existing table content    
    try{
        while (tutorTable.firstChild) {
            tutorTable.firstChild.remove();
        }
    } catch (err){};

    let response;
    let tutors;
    if(!id){
        response = await fetch(url+"/tutors");
        tutors = await response.json();
    } else {
        response = await fetch(url+"/tutors/"+id);
        if(response.ok){
            const tutor = await response.json();
            tutors = [tutor];
        } else {
            alert("Tutor with ID \'" + id + "\' doesn't exist.");
            fetchTutors();
            return;
        }
    }

    // Create headers
    const tableHeader = document.createElement("tr");

    const idHeader = document.createElement("th");
    idHeader.textContent = "Tutor ID";
    tableHeader.appendChild(idHeader);
    
    const titleHeader = document.createElement("th");
    titleHeader.textContent = "Title";
    tableHeader.appendChild(titleHeader);

    const nameHeader = document.createElement("th");
    nameHeader.textContent = "Name";
    tableHeader.appendChild(nameHeader);
    
    const numberHeader = document.createElement("th");
    numberHeader.textContent = "Phone Number";
    tableHeader.appendChild(numberHeader);
    
    const emailHeader = document.createElement("th");
    emailHeader.textContent = "Email";
    tableHeader.appendChild(emailHeader);
    
    const addressHeader = document.createElement("th");
    addressHeader.textContent = "Address";
    tableHeader.appendChild(addressHeader);
    
    // Styles
    tutorTable.style.borderCollapse = "collapse";
    tutorTable.style.background = "lightgrey";
    tutorTable.style.margin = "25px 0";
    tutorTable.style.fontSize = "17px";
    tutorTable.style.boxShadow = "0 0 20px rgb(0,0,0,0.2)";

    tableHeader.style.backgroundColor = "salmon";
    tableHeader.style.color = "white";
    tableHeader.style.textAlign = "left";

    idHeader.style.width = "100px";
    titleHeader.style.width = "60px";
    nameHeader.style.width = "150px";
    numberHeader.style.width = "110px";
    emailHeader.style.width = "250px";
    addressHeader.style.width = "400px";


    // Append the table header to the table
    tutorTable.appendChild(tableHeader);

    // Counter helps us create a pattern in the style sectiob below
    let counter = 1;
    
    // Create the rows and col and populate it with data received from the server
    tutors.forEach(tutor => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = tutor._id;
        row.appendChild(idCell);

        const titleCell = document.createElement("td");
        titleCell.textContent = `${tutor.title}`;
        row.appendChild(titleCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = `${tutor.fName} ${tutor.lName}`;
        row.appendChild(nameCell);

        const numberCell = document.createElement("td");
        numberCell.textContent = tutor.number;
        row.appendChild(numberCell);

        const emailCell = document.createElement("td");
        emailCell.textContent = tutor.email;
        row.appendChild(emailCell);

        const addressCell = document.createElement("td");
        addressCell.textContent = `${tutor.homeAddress.line1}, ${tutor.homeAddress.town}, ${tutor.homeAddress.county}`;
        row.appendChild(addressCell);

        // tutorTable.border = "2";
        // tutorTable.style.borderColor = "transparent";
        // tutorTable.style.background = "";

        row.style.borderBottom = "2px solid #dddddd";
        if(counter%2==0) row.style.backgroundColor = "#dddddd";
        else row.style.backgroundColor = "#f3f3f3";

        counter++;

        tutorTable.appendChild(row);
    });
}

async function findTutor(){
    const id = document.getElementById("t_id").value;
    // const rows = document.querySelectorAll("#tutorTable tr");
  
    // Check to make sure user has put in an ID
    if(id.length < 1) {
        alert("You need to put something into Tutor ID");
        return;
    }

    fetchTutors(id);

    // rows.forEach((row) => {
    //   const idCell = row.querySelector("td:first-child");
    //   if (idCell && idCell.textContent === id) {
    //     row.style.backgroundColor = "yellow";
    //   } else {
    //     row.style.backgroundColor = "";
    //   }
    // });
}

async function addTutor(){
    const form = document.getElementById("tutor-form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const newTutor = {
            _id: document.getElementById("t_id").value,
            title: document.getElementById("t_title").value,
            fName: document.getElementById("t_fName").value,
            lName: document.getElementById("t_lName").value,
            number: document.getElementById("t_number").value,
            email: document.getElementById("t_email").value,
            homeAddress: {
                line1: document.getElementById("t_address-line1").value,
                line2: document.getElementById("t_address-line2").value,
                town: document.getElementById("t_town").value,
                county: document.getElementById("t_county").value,
                eircode: document.getElementById("t_eircode").value,
            },
        };

        const response = await fetch(url+"/tutors", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTutor),
        });

        if (response.ok) {
            alert("Tutor added successfully!");
            fetchTutors();
            form.reset();
        } else {
            const errorMessage = await response.text();
            alert("An error occurred: " + errorMessage);
        }
    }, {once: true });
}

async function updateTutor(){
    const form = document.getElementById("tutor-form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const id =  document.getElementById("t_id").value;
        const newTutor = {
            title: document.getElementById("t_title").value,
            fName: document.getElementById("t_fName").value,
            lName: document.getElementById("t_lName").value,
            number: document.getElementById("t_number").value,
            email: document.getElementById("t_email").value,
            homeAddress: {
                line1: document.getElementById("t_address-line1").value,
                line2: document.getElementById("t_address-line2").value,
                town: document.getElementById("t_town").value,
                county: document.getElementById("t_county").value,
                eircode: document.getElementById("t_eircode").value,
            },
        };

        const response = await fetch(url+"/tutors/"+id, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTutor),
        });

        if (response.ok) {
            alert("Tutor updated successfully!");
            fetchTutors();
            form.reset();
        } else {
            const errorMessage = await response.text();
            alert("An error occurred: " + errorMessage);
        }
    }, {once: true });
}

async function deleteTutor(){
    const id =  document.getElementById("t_id").value;

    // Check to make sure user has put in an ID
    if(id.length < 1) {
        alert("You need to put something into Tutor ID");
        return;
    }

    const response = await fetch(url+"/tutors/"+id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    });

    if (response.ok) {
        alert("Tutor deleted successfully!");
        fetchTutors();
        console.log("deleted");
    } else {
        const errorMessage = await response.text();
        alert("An error occurred: " + errorMessage);
    }
}




/// TUTORIAL LOGIC
async function fetchTutorials(id){
    // Clear existing table content    
    try{
        while (tutorialTable.firstChild) {
            tutorialTable.firstChild.remove();
        }
    } catch (err){};

    let response;
    let tutorials;
    if(!id){
        response = await fetch(url+"/tutorials");
        tutorials = await response.json();
    } else {
        response = await fetch(url+"/tutorials/"+id);
        if(response.ok){
            const tutorial = await response.json();
            tutorials = [tutorial];
        } else {
            alert("Tutorial with ID \'" + id + "\' doesn't exist.");
            fetchTutorials();
            return;
        }
    }

    // Create headers
    const tableHeader = document.createElement("tr");

    const idHeader = document.createElement("th");
    idHeader.textContent = "Tutorial ID";
    tableHeader.appendChild(idHeader);
    
    const dateHeader = document.createElement("th");
    dateHeader.textContent = "Date";
    tableHeader.appendChild(dateHeader);

    const timeHeader = document.createElement("th");
    timeHeader.textContent = "Time";
    tableHeader.appendChild(timeHeader);

    const studentsHeader = document.createElement("th");
    studentsHeader.textContent = "Students";
    tableHeader.appendChild(studentsHeader);

    const tutorHeader = document.createElement("th");
    tutorHeader.textContent = "Tutor";
    tableHeader.appendChild(tutorHeader);

    const feeHeader = document.createElement("th");
    feeHeader.textContent = "Fee (€)";
    tableHeader.appendChild(feeHeader);

    const tutorialNumberHeader = document.createElement("th");
    tutorialNumberHeader.textContent = "Tutorial Number";
    tableHeader.appendChild(tutorialNumberHeader);

    const tutorialAttendanceHeader = document.createElement("th");
    tutorialAttendanceHeader.textContent = "Tutors Attendance";
    tableHeader.appendChild(tutorialAttendanceHeader);

    const tutorialSubjectHeader = document.createElement("th");
    tutorialSubjectHeader.textContent = "Tutorial Subject";
    tableHeader.appendChild(tutorialSubjectHeader);

    const tutorialNotesHeader = document.createElement("th");
    tutorialNotesHeader.textContent = "Tutorial Notes";
    tableHeader.appendChild(tutorialNotesHeader);
    
    // tutorialTable.border = "3";
    // tutorialTable.style.background = "lightgrey";

    // Styles
    tutorialTable.style.borderCollapse = "collapse";
    tutorialTable.style.background = "lightgrey";
    tutorialTable.style.margin = "25px 0";
    tutorialTable.style.fontSize = "17px";
    tutorialTable.style.boxShadow = "0 0 20px rgb(0,0,0,0.2)";

    tableHeader.style.backgroundColor = "steelblue";
    tableHeader.style.color = "white";
    tableHeader.style.textAlign = "left";

    idHeader.style.width = "100px";
    dateHeader.style.width = "100px";
    timeHeader.style.width = "60px";
    studentsHeader.style.width = "150px";
    tutorHeader.style.width = "50px";
    feeHeader.style.width = "70px";
    tutorialNumberHeader.style.width = "100px";
    tutorialAttendanceHeader.style.width = "150px";
    tutorialSubjectHeader.style.width = "150px";
    tutorialNotesHeader.style.width = "300px";

    // Append the table header to the table
    tutorialTable.appendChild(tableHeader);

    // Allows us to alternate between colours in style down below
    let counter = 1;

    // Create the rows and col and populate it with data received from the server
    tutorials.forEach(tutorial => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = tutorial._id;
        row.appendChild(idCell);

        const dateCell = document.createElement("td");
        dateCell.textContent = `${tutorial.date}`;
        row.appendChild(dateCell);

        const timeCell = document.createElement("td");
        timeCell.textContent = `${tutorial.time}`;
        row.appendChild(timeCell);

        const studentsCell = document.createElement("td");
        studentsCell.textContent = tutorial.students.map(student => student.studentID).join(", ");
        row.appendChild(studentsCell);

        const tutorCell = document.createElement("td");
        tutorCell.textContent = tutorial.tutor;
        row.appendChild(tutorCell);

        const feeCell = document.createElement("td");
        feeCell.textContent = `${tutorial.fee}`;
        row.appendChild(feeCell);

        const tutorialNumberCell = document.createElement("td");
        tutorialNumberCell.textContent = `${tutorial.tutorialNumber}`;
        row.appendChild(tutorialNumberCell);

        const tutorialAttendanceCell = document.createElement("td");
        tutorialAttendanceCell.textContent = `${tutorial.tutorialAttendance}`;
        row.appendChild(tutorialAttendanceCell);

        const tutorialSubjectCell = document.createElement("td");
        tutorialSubjectCell.textContent = `${tutorial.tutorialSubject}`;
        row.appendChild(tutorialSubjectCell);

        const tutorialNotesCell = document.createElement("td");
        tutorialNotesCell.textContent = `${tutorial.tutorialNotes}`;
        row.appendChild(tutorialNotesCell);

        // tutorialTable.border = "2";
        tutorialTable.style.borderColor = "transparent";
        // tutorialTable.style.background = "";

        row.style.borderBottom = "2px solid #dddddd";
        if(counter%2==0) row.style.backgroundColor = "#dddddd";
        else row.style.backgroundColor = "#f3f3f3";

        counter++;

        tutorialTable.appendChild(row);
    });
}

async function findTutorial(){
    const id = document.getElementById("tut_id").value;
    // const rows = document.querySelectorAll("#tutorialTable tr");
  
    // Check to make sure user has put in an ID
    if(id.length < 1) {
        alert("You need to put something into Tutorial ID");
        return;
    }
    fetchTutorials(id);
    // rows.forEach((row) => {
    //   const idCell = row.querySelector("td:first-child");
    //   if (idCell && idCell.textContent === id) {
    //     row.style.backgroundColor = "yellow";
    //   } else {
    //     row.style.backgroundColor = "";
    //   }
    // });
}

async function addTutorial(){
    const form = document.getElementById("tutorial-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Need to handle students individually since there can be up to 5 of them
        const studentIDs = []

        for(i = 1; i <= 5; i++){
            const tempStudent = document.getElementById("tut_students"+i).value;
            if(tempStudent.trim() !== "") studentIDs.push({ studentID: tempStudent });
        }

        const newTutorial = {
            _id: document.getElementById("tut_id").value,
            date: document.getElementById("tut_date").value,
            time: document.getElementById("tut_time").value,
            students: studentIDs,
            tutor: document.getElementById("tut_tutor").value,
            fee: document.getElementById("tut_fee").value,
            tutorialNumber: document.getElementById("tut_tutorialNumber").value,
            tutorialAttendance: document.getElementById("tut_tutorialAttendance").value,
            tutorialSubject: document.getElementById("tut_tutorialSubject").value,
            tutorialNotes: document.getElementById("tut_tutorialNotes").value
        };        

        const response = await fetch(url+"/tutorials", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTutorial),
        });

        if (response.ok) {
            alert("Tutorial added successfully!");
            fetchTutorials();
            form.reset();
        } else {
            const errorMessage = await response.text();
            alert("An error occurred: " + errorMessage);
        }
    }, {once: true });
}

async function updateTutorial(){
    const form = document.getElementById("tutorial-form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const id =  document.getElementById("tut_id").value;

        // Need to handle students individually since there can be up to 5 of them
        const studentIDs = []

        for(i = 1; i <= 5; i++){
            const tempStudent = document.getElementById("tut_students"+i).value;
            if(tempStudent.trim() !== "") studentIDs.push({ studentID: tempStudent });
        }

        const newTutorial = {
            date: document.getElementById("tut_date").value,
            time: document.getElementById("tut_time").value,
            tutor: document.getElementById("tut_tutor").value,
            fee: document.getElementById("tut_fee").value,
            tutorialNumber: document.getElementById("tut_tutorialNumber").value,
            tutorialAttendance: document.getElementById("tut_tutorialAttendance").value,
            tutorialSubject: document.getElementById("tut_tutorialSubject").value,
            tutorialNotes: document.getElementById("tut_tutorialNotes").value
        };   

        if(studentIDs.length > 1){
            newTutorial.students = [...studentIDs];
        }

        const response = await fetch(url+"/tutorials/"+id, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTutorial),
        });

        if (response.ok) {
            alert("Tutorial updated successfully!");
            fetchTutorials();
            form.reset();
        } else {
            const errorMessage = await response.text();
            alert("An error occurred: " + errorMessage);
        }
    }, {once: true });
}

async function deleteTutorial(){
    const id =  document.getElementById("tut_id").value;

    // Check to make sure user has put in an ID
    if(id.length < 1) {
        alert("You need to put something into ID");
        return;
    }

    const response = await fetch(url+"/tutorials/"+id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    });

    if (response.ok) {
        alert("Tutorial deleted successfully!");
        fetchTutorials();
        console.log("deleted");
    } else {
        const errorMessage = await response.text();
        alert("An error occurred: " + errorMessage);
    }
}




function changeUI(){
    const curr = document.getElementById("menu").value;

    studentContent = document.getElementById("student-content");
    studentContent.style.display = "none";

    tutorContent = document.getElementById("tutor-content");
    tutorContent.style.display = "none";

    tutorialContent = document.getElementById("tutorial-content");
    tutorialContent.style.display = "none";

    if(curr == "Students"){
        console.log("Students");
        studentContent.style.display = "block";
        fetchStudents();
    } else if(curr == "Tutors"){
        console.log("Tutors");
        tutorContent.style.display = "block";
        fetchTutors();
    } else if(curr == "Tutorials"){
        console.log("Tutorials");
        tutorialContent.style.display = "block";
        fetchTutorials();
    }
}



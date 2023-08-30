This project requires XAMPP, more specifically Apache and MySQL services running to work.

To start the project, simply
	- open up 'app' directory
	- open 'front-end.html'


--- IF ENCOUNTERED ANY ISSUES ---
If you run into any issues, go back to main directory and with command terminal do 'node resetDatabase.js'. This will reset the database and hopefully fix any problems.

You might also encounter problems if you have an adblocker installed. Disabling it should fix any problems relating to 'cors'.


Here's a list of modules installed:
	cors
	express	
	mongoose
	mongodb


--- How to use ---
At the very top of the page, there's an options bar called 'Change view'. You can switch between Students, Tutors and Tutorials. They all show their own tables.

// const http = require('http');

// const server = http.createServer(function (request, response) {

//   response.writeHead(200, { "Content-Type": "text/html" });

//   // Get the current date and time
//   const today = new Date(); // Creates a new Date object representing the current moment

//   switch (request.url) {
    

//     // --- NEW CASE FOR MONTHS ---
//     case "/months":
//       const monthNames = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//       ];
//       const currentMonthIndex = today.getMonth(); // getMonth() returns 0 for January, 1 for February, etc.
//       const currentMonthName = monthNames[currentMonthIndex];
//       response.end(`The current month is: ${currentMonthName}`);
//       return;

//     // --- NEW CASE FOR DAYS ---
//     case "/days":
//       const dayNames = [
//         "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
//       ];
//       const currentDayIndex = today.getDay(); // getDay() returns 0 for Sunday, 1 for Monday, etc.
//       const currentDayName = dayNames[currentDayIndex];
//       response.end(`The current day is: ${currentDayName}`);
//       return;

//     default:
//       response.end("no implementation for " + request.url);
//   }
// });

// // IMPORTANT: Keep the console.log for server start confirmation
// server.listen(3000, () => {
//     console.log('Server is running and listening on port 3000');
//     console.log('Open your browser and visit: http://localhost:3000/');
//     console.log('Try: http://localhost:3000/months'); // New URL
//     console.log('Try: http://localhost:3000/days');
// });
const express = require('express'); // Import the Express library
const app = express();              // Create an Express application
const port = 3000;                  // Define the port your server will listen on

// --- Import your API routes from the new file ---
const apiRoutes = require('./Routes/apiroutes'); // Path is relative to index.js

// --- Tell Express to use your API routes ---
// Any request that comes to your server will now be handled by apiRoutes.js.
// So, /list, /ping, /time will still work as before.
app.use('/', apiRoutes);

// --- Start the server ---
app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});

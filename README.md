# Captain's Log App

This is a web application for managing ship logs.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [RESTful Routes](#restful-routes)
- [Technologies Used](#technologies-used)
- [License](#license)

## Description

The Captain's Log App helps you manage ship logs. You can create, edit, and delete logs easily.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Krisluvoh/Captains_log.git

2. Navigate to the project folder:
    cd captains-log-express

3. Install dependencies:
    npm install

4. Set up your MongoDB database and update the .env file with your connection string.

Run the application: nodemon

5. Visit http://localhost:3000 in your web browser.

Usage
Access the home page to see the list of ship logs.
Navigate to /logs/new to create a new log entry.
Edit and delete logs as needed.

RESTful Routes
Index (List): GET /logs
Show (Details): GET /logs/:id
New (Create Form): GET /logs/new
Create (Submit Form): POST /logs
Edit (Edit Form): GET /logs/:id/edit
Update (Submit Edit Form): PUT /logs/:id
Destroy (Delete): DELETE /logs/:id

Technologies Used
Node.js
Express
MongoDB
Mongoose
JSX View Engine
Day.js


# MARP

![alt text](Assets/sample.jpg)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Summary
MERN-based mapping API <br>

IMPORTANT: As of 28 November 2022 app will no longer be accessible due to Heroku changes. 
App to be cloned and hosted on Firebase. 

<Br><Br>

## Description 
An application for viewing a map with seeded/input values. 

Mongo and GraphQL for seeding and mutations

Express for server, and connecting front-to-back.

React frontend, with React-map-gl and Mapbox for map display.

Node.js for backend connection and helper apps. 
<Br><Br>

## Instructions

### Pre-requisite Installations
Visual Studio<Br> 
Node.js <Br>
MongoDB <Br>
MongoDB Atlas <Br>
React <Br>
<Br>

IMPORTANT: Register with Mapbox.com to procure an access token, and copy these to 
the mapboxAccessToken variable in Mapview.js. Process.env is currently not working;
Haven't found a workaround for this. 

### NPM Dependencies
See package.json for client, server and root files. 
<Br>

### Execution
Client only: npm start from client folder 
Server only: npm start from server folder
Client + Server: npm run develop from root
Web link: http://mabsky05project3.herokuapp.com/

### Usage
Upon loading, App will show base site.

This consists of header with all access information and map with marker at 
default coordinates. 

Logging in with pre-seeded data will load marker at seeded locations. 
Test app with following seeds (Email and password fields required):  

| User | Email | Password |
|------|-------|----------|
|Arthur|art@mail.map| password01|
|Bryan |bry@mail.map| password02|
|Chelsea|che@mail.map|password03|
|Daniel|dan@mail.map|password04|
|Emma|emm@mail.map|password05|


Signing up will provide seeding fields for username, email, longitude, latitude and password.
<br><br>

## Contact
grimdango@gmail.com
<br><br>

## Log

### 28/05/22 
-Project to be discontinued due to Heroku updates, cloning repo for Firebase hosting. 

### 28/05/22 
-Login/out working seamlessly. 
-Added about page with credits.  
-Deployed fully working version to heroku.
-Removed mapbox access token from code.  
-Happy times!

### 28/05/22 
Login mutations fixed. Pruned dead code. 

### 20/05/22 
Good time for branching?

Remaining issues (priority):<br>
-Use dotenv for JWT token.<br>
-Fix About Page and Link. Include credits.<br>

Remaining issues (secondary, more complex):<br>
-Create centering toggle.<br>
-Draw routes to nearby locations.<br> 
-Add day/night mode via toggle.<br><br>

### 20/05/22 
Readme uploaded. 

### 19/04/22
Styling updates.

### 18/04/22
Base app functioning

### 16/05/22
Nodules updated.

### 16/05/22
Fixing untracked files. 

### 16/05/22
Links updated. 

### 16/05/22
Testing via deployment initiated. 

### 15/05/22
Overhaul of links.

### 15/05/22
Maps are working, login to fix.

### 12/05/22
Updates for file organization and structure.

### 12/05/22
Initial upload. 

   


# Task Manager Web-App

A simple task manager web application that allows users to create, read, update, and delete tasks. Built with Express.js for the backend and MongoDB for the database.

## Features
- User authentication and authorization.
- Create, read, update, and delete tasks.
- Task categorization and prioritization.
- Due date and reminder functionality.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, Passport.js

## Installation
```bash
# Clone the repository
git clone https://github.com/your-username/task-manager-web-app.git

# Navigate into the project directory
cd task-manager-web-app

# Install dependencies
npm install

# Set up environment variables
Create a .env file in the root directory and add the following:
PORT=3000
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-secret-key

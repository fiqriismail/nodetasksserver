## Simple NodeJS Rest Server
This is to demonstrate a simple NodeJS REST Server which has 

 - Add Task
 - Update Task
 - List Tasks
 - Delete Tasks

What you need: 

 - Node.js  
 - MongoDB Server  
 - REST Client to test (eg: POSTMAN)

**Endpoints:** 

| Method | Endpoint  |Description|
|--|--|--|
| GET | http://localhost:3000/tasks/ |Lists Available Tasks |
| GET | http://localhost:3000/tasks/12345 | Get one task with id |
| POST | http://localhost:3000/tasks/ | Create a task (see below for sample JSON) | 
| PUT | http://localhost:3000/tasks/12345 |  Update a task (see below for sample JSON) | 
| DELETE | http://localhost:3000/tasks/12345 |  Delete a task with ID |

**JSON Sample (Create / Update Task)**

    {
    	"title": "C# Class - OOP",
    	"desciprtion": "Object Oriented Concepts",
    	"deadline": "2018-12-22",
    	"completed": false
    }

**Enjoy**
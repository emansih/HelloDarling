Role: Full Stack Dev - Technical task 

Company: Hello Darling

This repository contains 2 folder, backend and frontend. Each folder has a README.md with instructions on running the software. 

Requirements: 

The point of this test is much more about testing your ability to build something from scratch and to see how you setup, architect/design the solution, than it is the actual solution. Although the system you are asked to design is basic and could be solved rough and dirty, we would like to see it as though it is part of a larger more complex system. eg. Follow good React principals, separation of concerns, type safety, etc.

Please design and implement a basic web based CRUD system. including a React FE, node backend, and a Postgres db.

The task is to build a single page application that allows an admin to create a date between two users.

The users can be made up, but should include the following info: First name, last name, gender, post code, dietary restrictions, availabilities (the days for that week they are able to go on a date), and 3 images (just use this url for every image https://picsum.photos/200/300)

Create the ui however you see fit. but it should include the following:

A list of selectable users
A list of the upcoming dates
A way to enter the date information (date and time & location)
A button to create the date between the two selected users.
You should cater for the error case where the admin tries to book a date where

The users' availability doesn't line up
One of the users already has a date at that day/time.
the admin should be able to see all of the users info (dietary restrictions, availability, post code etc) when booking the date.

You will need to create the REST api’s and the db tables for storing users, their info and the dates. Will leave this up to your judgment on how you go about this. Just use express and Postgres. The Api’s should be type safe.

Optional: Write 2 basic tests, testing the api can successfully create a date, and that it throws an error if you try to create a date for a time a user already has a date.

Things to not do: no need to create, update or delete users for admin, you can just seed these. no need to delete or update dates. No need to go crazy on the styling.

Feel free to make it your own, the below is just a guide. Use whatever libraries you want for things like API requests from the FE, state management, database querying etc. To get you started, we use; React query on the front end, JOI for api schema validation and, sequelize as an ORM.

please submit to github when done and just send me the link to the public repo.

Again, the actual functionality/date booking is not what is of interest, it is the setup, architecture and structuring of the code and the system as a whole, hence why it is quite open ended and vague.


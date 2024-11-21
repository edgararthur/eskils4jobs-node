const express = require('express');

const server = express()

let students = [
    {id: 1, name: "edward arthur", dob: "2002-10-11", email: "test@gmail.com"}
]

const db = require('./util/database')

// db.execute('SELECT * FROM students')

server.get('/', (request, response) => {
    response.send('<h1>This is my first node server after installing express</h1>')
})

server.get('/api/student/:id', (request, response) => {
    const id = parseInt(request.params.id);

    const student = students.find(student => student.id === id);

    console.log(student)

    if (!student) {
        return response.json({ message: "student with id not found" })
    } else {
        response.json(student);
    }
        
});

server.listen(8000, () => {
    console.log("Server listening on port 8000");
})
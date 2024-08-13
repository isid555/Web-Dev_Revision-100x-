const express = require('express');
const {createTodo} = require("./types");
const app = express();

app.use(express.json());
/*
const express = require('express');
This line imports the express module into your application. express is a popular web framework for Node.js that simplifies the process of building server-side applications and APIs.

const app = express();
This creates an instance of an Express application and assigns it to the app variable. You use this app instance to configure and handle HTTP requests, set up middleware, define routes, and more.

app.use(express.json());
This line sets up middleware for your Express application. Specifically, express.json() parses incoming JSON requests and puts the parsed data into req.body. This middleware is essential for handling JSON payloads in HTTP requests, especially for APIs.
* */


app.post("/todo" , function(req,res) {
    const createpayload = req.body;
    const parsedPayload = createTodo.safeParse(createpayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: parsedPayload.error

        })
        return;
    }

})
app.get("todos" , function(req,res){

})
app.put("/completed",function(req,res){
    const updatepayload = req.body;
    const parsedPayload = createTodo.safeParse(updatepayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: parsedPayload.error

        })
        return;
    }

})

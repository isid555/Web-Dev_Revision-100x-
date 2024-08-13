const zod = require('zod');

// zod is a TypeScript-first schema declaration and validation library. It is used to define schemas for data validation and type checking. In this snippet, we import the zod module into our application.
// zod is a powerful tool for ensuring that the data we receive from clients is in the correct format and adheres to the specified schema. This helps prevent bugs and security vulnerabilities in our applications.
// zod provides a fluent API for defining schemas, validating data, and generating TypeScript types from schemas. It is a valuable tool for building robust and type-safe applications in JavaScript and TypeScript.

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string(),
})

const updateTodo = zod.object({
   id : zod.string(),
})
module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo
}

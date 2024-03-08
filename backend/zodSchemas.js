const zod = require("zod");

const createTodo = zod.object(
    {
        id : zod.string(),
        title : zod.string(),
        completed : zod.boolean(),
        priority : zod.string()
    }
);

const updateTodo = zod.object({
    id : zod.string()
})

module.exports = {createTodo,updateTodo};
import {PrismaClient} from '@prisma/client'
import { z } from 'zod';
import dotenv from 'dotenv';
import express from 'express';
// import jwt from 'jsonwebtoken'

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

const userSchema = z.object({
    username: z.string(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string().optional()
})

//Signup
app.post('/signup',async (req, res) => {
    try {
        const {username, password, firstName, lastName} = userSchema.parse(req.body);
        const user = await prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName
            }
        });
        res.json({
            message: "User created",
            data: user
        })

    } catch (err) {
        res.status(400).json({
            message: "Invalid input",
            error: err
        })
    }

});

//Login
app.post("/login",async (req,res) =>{
    try{
        const {username,password} = req.body;
        const user = await prisma.user.findUnique({where:{username}});
        if(!user){
            res.status(404).json({
                message: "User not found"
            })
        }

       else if(user.password !== password){
            res.status(401).json({
                message: "Invalid password"
            })
        }

       else{
           res.send({
                message: "Login success"
           })
        }
    }
    catch (err){
        res.status(400).json({
            message: "Invalid input",
            error: err
        })
    }
})


//Create todo

app.post("/todos",async (req,res)=>{
    try{
        const {title,description,done,userId} = req.body;
      const  todo =  await prisma.todo.create({
          data:{
                title,
                description,
                done,
                userId
          }
      })
        res.json({
            message: "Todo created",
            data: todo
        })
    }
    catch(err){
        res.status(400).json({
            message: "Invalid input",
            error: err
        })
    }
})
//Fetch todos

app.get('/todos',async (req,res)=>{
    const todos = await prisma.todo.findMany({where:{userId:req.body.userId}});
    res.json({
        message: "Todos fetched",
        data: todos
    });
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})



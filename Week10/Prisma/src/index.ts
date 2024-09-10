import  {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();



async function insertUser(username: string, password: string, firstName: string, lastName: string) {

    const result = await  prisma.user.create({
        data:{
            username,
            password,
            firstName,
            lastName
        }
    })
    console.log(result)

}

// insertUser("admin1", "123456", "harkirat", "singh")

interface UpdateParams {
    firstName: string;
    lastName: string;
}
async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: { username },
        data: {
            firstName,
            lastName
        }
    });
    console.log(res);
}

// updateUser("admin1", {
//     firstName: "Siddharth",
//     lastName: "Siddharth"
// })


async function getUser(username: string) {
    const user = await prisma.user.findFirst({
        where: {
            username: username
        }
    })
    console.log(user);
}

// getUser("admin1");


async function createTodo(userId: number, title: string, description: string) {
    const todo = await prisma.todo.create({
        data: {
            title,
            description,
            userId
        },
    });
    console.log(todo);

}
// createTodo(1, "go to gym", "go to gym and do 10 pushups");

async function getTodos(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
    });
    console.log(todos);
}

getTodos(1);

async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    });
    console.log(todos);
}

getTodosAndUserDetails(1);


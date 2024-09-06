const {Client}= require('pg')


// const client = new Client({
//     host:"localhost",
//     port:5432,
//     user:"postgres",
//     password:"baahubali",
// })

// client.connect()
//     .then(() => console.log('Connected to PostgreSQL'))
//     .catch(err => console.error('Connection error', err.stack));


const client = new Client({
    connectionString: "postgresql://postgres:baahubali@localhost/postgres"
})
client.connect().then(() => console.log('Connected to PostgreSQL'))


const  result = async () =>{
    try {
        await  client.query('SELECT * FROM USERS;')
    }
    catch (err){
        console.log(err);
    }
}
console.log(result)
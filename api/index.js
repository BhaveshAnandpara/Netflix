const express = require("express")
const mongoose = require('mongoose');

const app = express()
const dotenv = require("dotenv")
const authRoute = require("../api/routes/auth")
const userRoute = require("../api/routes/user")
const movieRoute = require("../api/routes/movie")
const listRoute = require("../api/routes/list")
dotenv.config()

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB COnnection Succesful"));
}


app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/movies", movieRoute)
app.use("/api/lists", listRoute)


app.listen( 8800 , ()=>{
    console.log( "Backend Server is Running" );
})
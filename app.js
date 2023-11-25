const express = require("express");
const cors = require("cors")
const app = express();
const port = process.env.PORT || 3001;
const dbconfig=require("./db");
const roomsRoute=require("./routes/roomsRoute");
const usersRoute=require("./routes/usersRoute");
const bookingsRoute=require("./routes/bookingsRoute");

app.use(cors())

app.use(express.json())


app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingsRoute)

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


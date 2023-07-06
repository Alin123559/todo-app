const express = require('express')
const cors = require('cors')
const mongoose = require('./database')

const routes = require("./routes/ListRoute")


const app = express()
const port = 3000

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send()
})
app.use(routes)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
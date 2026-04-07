import express from 'express'

const app = express();

import connectDB from "./db/dbConfig.js"




app.get('/', (req, res) => {
    res.json({ msg: "home page" })
});


app.listen(8000, () => {
    connectDB();
    console.log('server started')
});



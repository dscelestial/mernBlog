import express from 'express'

const app = express()

app.listen(5000, () => {
    console.log('App started at PORT 5000');
})
const express = require('express');
const app = express();
const path = require('path');

var recipesRouter = require('./routes/recipes');
app.use(express.json());

app.use( '/api', (req, res, next) => {
    res.set('Content-Type', 'application/json'); 
    next();
})

app.use('/', express.static(path.join(__dirname, '/public')));


app.get('/api', (req, res) => {
    res.send( JSON.stringify( {test:'hello world'} ) );
})



app.use('/api/recipes', recipesRouter);

app.get('*', (req, res)=>{
    res.status(404).json({success:false, result:"Resource cannot be found"})
})

app.listen( process.env.PORT )
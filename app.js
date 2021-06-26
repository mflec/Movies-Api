'use strict';

const express= require('express');
const morgan = require('morgan');
const app= express()
const model = require('./model/model.js');

//setting
app.set('port', process.env.port || 3001)

//middlewares
app.use(morgan('dev'))
app.use(express.json());

//routes

app.get('/', (req, res)=> {
    res.status(200).send('HELLO! If this is not enough, I am willing to learn more.')
})

app.get('/characters', (req, res)=>{
    if(req.query.name) return res.status(200).json(model.listCharacters(req.query.name, null , null));
    if(req.query.age) return res.status(200).json(model.listCharacters(null, req.query.age , null));
    if(req.query.movies) return res.status(200).json(model.listCharacters(null, null, req.query.movies));
    res.status(200).json(model.showCharacters());
})

app.post('/characters', (req, res)=>{
     const character = req.body;
     model.addCharacter(character);
     res.status(200).json(model.showCharacters());
})

app.put('/characters/:id', (req, res)=>{
    let {id} = req.params;
    model.editCharacter(id);
    res.status(200).json({msg: 'successfully edited character'});
})

app.delete('/characters/:id', (req, res)=>{
    let {id} = req.params;
    model.deleteCharacter(id);
    res.status(200).json({msg: 'successfully deleted character'});
})

app.get('/movies', (req, res)=>{
    if(req.query.name) return res.status(200).json(model.listCharacters(req.query.name, null));
    if(req.query.genre) return res.status(200).json(model.listCharacters(null, req.query.genre ));
    res.status(200).json(model.showMovies());
})

app.post('/movies', (req, res)=>{
    const movie = req.body;
    model.addCharacter(movie);
    res.status(200).json(model.showMovies());
})

app.put('/movies/:id', (req, res)=>{
    let {id} = req.params;
    model.editMovies(id);
    res.status(200).json({msg: 'successfully edited movie'});
})

app.delete('/movies/:id', (req, res)=> {
    let {id}= req.params;
    if(model.listMovies().length>= id) {
        return res.status(404).json({msg: 'non-existent movie'})
    } else {
    model.deleteMovie(id)};
})

//starting the server
app.listen(app.get('port'), ()=>{
    console.log('Esperando cambios');
});
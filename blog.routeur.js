const express= require('express');

const blogRouter= express.Router();

blogRouter.get('/', (request, response)=>{
    const prenom = "jm";
    response.render('index.pug',{prenom});
});
blogRouter.get('/admin', (request, response)=>{
    response.send("Bienvenue sur l\'espace d\'administration!");
});

module.exports =blogRouter;
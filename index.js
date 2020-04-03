const express= require('express');
const app= express();
const PORT = 9000;
const HOST= 'localhost';
const blogRouter = require('./blog.routeur');
require ('dotenv').config();
const mongoose= require('mongoose');

app.use('/', blogRouter); 
app.use(express.static('./public'));
// traite les routes pour la partie front-office 

// Démarre de l'application 
//----------------------------

const options= {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
app.set('view engine', 'pug');

app.set('views', './views');




mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, options)
.then (()=> console.log('Mongoose : Connexion établie avec Atlas'))
.then(() =>{app.listen(PORT, HOST, ()=> {
    console.log(`express : le serveur écoute sur hhtp://${HOST}: ${PORT}`);
    });

})
.catch((err) =>console.error(err));

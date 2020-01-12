const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');

//const logger = require('./middleware/logger');

const app = express();

//app.use(logger); //init middleware

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Set static folder
//app.use(express.static(path.join(__dirname, 'public')));

//Members api route
app.use('/api/members', require('./routes/api/members'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'test',
        members: members
    });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`Port ${PORT} speaks...`);
});
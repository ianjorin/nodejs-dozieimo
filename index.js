require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();


app.set('view engine','ejs');
app.set('views','views');


const adminRoutes = require('./routes/admin')
const postRoutes = require('./routes/post') 


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(postRoutes);

app.listen(process.env.PORT || 3000);
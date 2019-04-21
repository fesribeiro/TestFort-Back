const express = require('express');
const cors = require('cors');

// DB Connection
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://feliperibeiro:felipe@123@mymongodb-xegdw.mongodb.net/crudescolas?retryWrites=true', {
    useNewUrlParser : true
});

// Server Config 
app = express();
PORT = 3333;


// Middleware + JsonUser Config
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(cors());


// Routes
app.use(require('./routes'));

app.listen(PORT, () => console.log('Server is running on PORT 3333 ..') );

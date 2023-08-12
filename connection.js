const mongoose = require('mongoose');

const url ="mongodb+srv://sumit1166:sumit1166@cluster0.nryr8tb.mongodb.net/mydb?retryWrites=true&w=majority";

//asynchronus function -return a promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});


// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// app.listen(port,()=> {
// console.log(`listening at ${port}`);
// });
// app.use(express.static('public/template'));






const express = require('express');
const app = express();
// to import the nedb module to the script
const Datastore = require('nedb');

const port = process.env.PORT || 3000;
app.listen(port,()=> {
console.log(`listening at ${port}`);
});
app.use(express.static('public/template'));
app.use(express.json({ limit: '1mb' }));
// we create a new object
const database = new Datastore('database.json');
// with the dot notaion we call the nedb library method
// loadDatabase. ----loadDatabase creates the file database inside the folder----
database.loadDatabase();
// to insert item on the database file
// database.insert({name: "Mannino", status: 'rainbow'});
// database.insert({name: "Giulio", status: 'star'});

app.get('/api',(request, response) => {
    // we use the find function as per nedb docs
    database.find({},(err, data)=>{
        // to handle errors
        if(err){
            response.end();
            return;
        }
        
        response.json(data);
    });

});

app.post('/api', (request, response) => {
    console.log('I got a request');
    // console.log(request.body);
    const data = request.body;
    // we insert the Date.now method to insert a timestamp
    const timestamp = Date.now();
    data.timestamp = timestamp;
// line of code which inserts the actual data in database
    database.insert(data);
  
    //  response from the server to the client totally made
    // up by us
    response.json({
        status: 'success',
        timestamp : timestamp,
        latitude: data.lat,
        longitude: data.lon,
        mood:data.mood
    });
});


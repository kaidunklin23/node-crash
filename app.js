const express = require('express');

//express app 
const app = express();

//listen for request
app.listen(3000);

app.get('/', (res, req) => {

// res.send('<p>home page</p>')
res.sendFile('./views/index.html', {root: __dirname})

});

app.get('/about', (res, req) => {

// res.send('<p>about page</p>')
res.sendFile('./views/about.html', {root: __dirname})

});

//redirects
app.get('/about-us', (res, req) => {
    res.redirect('/about')
})

//404 page
app.use((res,req) => {
    res.status(404).sendFile('./views/about.html', {root: __dirname})
})
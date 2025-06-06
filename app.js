
const express= require('express')

const app = express()

app.set("view engine","ejs");

// app.use(function(req , res, next ){
//     console.log("lalalaland");
//     next();   
// });

app.use(express.static('./public'));

app.get('/' , function(req , res ){
    res.render("index");
});

app.get('/nexteffect' , function(req , res ){
    res.render("cursor");
});


// app.get('/profile/:username' , function(req , res ){
//     res.send(`hello ${req.params.username} in local host`);
// });

app.listen(3000)
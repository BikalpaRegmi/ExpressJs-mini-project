const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const staticPath = path.join(__dirname , '..')

app.use(express.static(staticPath))
app.set('views' , path.join(__dirname , '../views'))
app.set('view engine' , 'hbs');

hbs.registerPartials(path.join(__dirname , '../partials'))

app.get('/' , (req,res)=>{
res.render('index.hbs' , {
    place : 'london',
})
})

app.get('/aboutus' , (req,res)=>{
  res.render('aboutus.hbs' , {
    city : req.query.city,
  })
})
app.get('/more' , (req,res)=>{
    res.render('more.hbs')
})
app.get('/contact' , (req,res)=>{
    res.render('contact.hbs')
})
app.get('*' , (req,res)=>{
    res.render('404.hbs' , {
        ERRcomment : 'oops! page couldnt be found'
    })
})
app.listen(5173 , ()=>{
    console.log('listening...')
})
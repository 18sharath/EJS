const express=require('express');
const app=express();
app.set('view engine', 'ejs');
// app.set('view',path.join(__dirname,'/views'));
app.get('/',(req,res)=>{
    // res.send("hello");
    res.render('home.ejs');
})
app.get('/rand',(req,res)=>{
    const num=Math.floor(Math.random()%10)+1;
    res.render('home',{rand:num});
})
app.get('/cats',(req,res)=>{
    const cat=['mee','monkeycat','buaibhau'];
    res.render('cats',{cats:cat});
})
app.listen(3000,()=>{
    console.log("port is listening 3000");
})
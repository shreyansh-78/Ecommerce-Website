const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const users =[
    {uname:"admin", pass:"admin@csed"},
    {uname:"Ajay", pass:"ajay@123"},
    {uname:"binod", pass:"bin@123"},
    {uname:"cheTan", pass:"chetan@123"},
    {uname:"dhiraj", pass:"dhir@12"},
    {uname:"Ela", pass:"ela@123"},
 ]
 

const product =[
    {id:"1", category:"electronics", name:"Samsung Smartphone", description:"Best Smartphone in town", currency:"$",price:"1000",rating:"🌟🌟🌟🌟", Image:"samsung.jpeg"},
    {id:"2", category:"Home appliances", name:"Lg Washing machine", description:"Best Washing Machine in town", currency:"$",price:"25000",rating:"🌟🌟🌟", Image:"lg.jpeg"},
    {id:"3", category:"apperal", name:"Men's Blue T-Shirt", description:"Comfortable Tshirt", currency:"$",price:"50",rating:"🌟🌟🌟🌟🌟",Image:"shirt.jpg"},
    {id:"4", category:"apperal", name:"Women's Red T-shirt", description:"Comfortable Tshirt", currency:"$",price:"50",rating:"🌟🌟🌟🌟🌟",Image:"shirt2.jpg"},
    {id:"5", category:"apperal", name:"Men's Grey T-Shirt", description:"Comfortable Tshirt", currency:"$",price:"50",rating:"🌟🌟🌟🌟🌟",Image:"shirt3.jpg"},
    {id:'6', category:"apperal", name:"Men's Black T-Shirt", description:"Comfortable Tshirt", currency:"$",price:"50",rating:"🌟🌟🌟🌟🌟",Image:"shirt4.jpg"},
    {id:'7', category:"Home appliances", name:"Lg Washing machine", description:"Best Washing Machine in town", currency:"$",price:"25000",rating:"🌟🌟🌟", Image:"lg5.jpg"},
    {id:'8', category:"Home appliances", name:"Lg Washing machine", description:"Best Washing Machine in town", currency:"$",price:"25000",rating:"🌟🌟🌟", Image:"lg6.jpg"},
    {id:'9', category:"shoes", name:"Nike Sport Shoes", description:"Best Running sport shoes", currency:"$",price:"250",rating:"🌟🌟",Image:"Nike_Air.jpg"},
    {id:'10', category:"shoes", name:"Nike Sport Shoes", description:"Best Running sport shoes", currency:"$",price:"250",rating:"🌟🌟",Image:"Nike_Go_FlyEase.jpg"},
    {id:'11', category:"shoes", name:"Nike Sport Shoes", description:"Best Running sport shoes", currency:"$",price:"250",rating:"🌟🌟",Image:"Nike_Air_Max270.jpg"},
    {id:'12', category:"shoes", name:"Nike Sport Shoes", description:"Best Running sport shoes", currency:"$",price:"250",rating:"🌟🌟",Image:"Nike90.jpg"}
 ]

app.post("/login",(req,res)=>{
    const data = req.body;
    var arr = users.filter((item,index)=>{
        return(
            item.uname === data.uname && item.pass === data.pass ? item
            : null

        )
    })

    arr.length > 0?
    console.log("valid user")
    : console.log("invalid user")
})

// app.post("/add",(req,res)=>{
//     const product = req.body;
// })
 

app.get("/",(req,res)=>{
    res.send(product)

})



app.listen(8000,()=>{
    console.log("Api woking at port 8000")
})

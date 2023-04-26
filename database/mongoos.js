const mongoose = require('mongoose')

const connection = () => mongoose.connect("mongodb+srv://faiz63440:Faizan@1808@cluster0.ubh59hd.mongodb.net/Ecommerce?retryWrites=true&w=majority")

.then((res)=>{
    (res)
    console.log("connected")
})
.catch(()=>{
    console.log("not connected")
    
})


module.exports = connection

const mongoose = require('mongoose')

const connection = () => mongoose.connect("mongodb://127.0.0.1:27017/ecommerce-user")

.then((res)=>{
    (res)
    console.log("connected")
})
.catch(()=>{
    console.log("not connected")
    
})


module.exports = connection
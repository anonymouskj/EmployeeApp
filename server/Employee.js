const mongoose=require('mongoose')

const EmployeeSchema =new mongoose.Schema({
    Name:String,
    email:String,
    phone:String,
    salary:String,
    picture:String,
    position:String,
})

mongoose.model("employee",EmployeeSchema)
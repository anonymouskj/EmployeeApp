const express = require('express')
const app=express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

 require('./Employee')

  app.use(bodyParser.json())
 const Employee=mongoose.model("employee")
 

 const mongoUri="mongodb+srv://cnq:riya01riri@cluster0-t8lkz.mongodb.net/test?retryWrites=true&w=majority"
   
  mongoose.connect(mongoUri,{
      useNewUrlParser:true,
      useUnifiedTopology:true
  })

mongoose.connection.on("connected",()=>{
    console.log("connected to mongo  yeahh")
})
mongoose.connection.on("error",(err)=>{
    console.log("error",err)
})
 app.get('/',(req,res)=>{
    Employee.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
     
})

app.post('/send-data',(req,res)=>{
    //console.log(req.body)
    const employee=new Employee({
        Name:req.body.Name,
        email:req.body.email,
        phone:req.body.phone,
        picture:req.body.picture,
        salary:req.body.salary,
        position:req.body.position
    })
    employee.save().
    then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
   // res.send("posted")
})
app.post('/delete',(req,res)=>{
    Employee.findByIdAndRemove(req.body.id).
    then(data=>{
        console.log(data)
        res.send(data)
    })
    .catch(err=>{
        console.log(err)
    })

})
app.post('/update',(req,res)=>{
    Employee.findByIdAndUpdate(req.body.id,{
        Name:req.body.Name,
        email:req.body.email,
        phone:req.body.phone,
        picture:req.body.picture,
        salary:req.body.salary,
        position:req.body.position
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).
    catch(err=>{
        console.log(err)
    })

})
app.listen(3000,()=>{
    console.log("server running")
})

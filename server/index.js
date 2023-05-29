const express = require('express')
const app = express()
const dotenv=require('dotenv')
dotenv.config()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var cors = require('cors')
app.use(cors())
const mongoose = require('mongoose');
const kittySchema = new mongoose.Schema({
    name: String, 
    image:String,
    age:Number
});
const Kitten = mongoose.model('Hello', kittySchema);

DB_PASSWORD=process.env.DB_PASSWORD
DB_CONNECTION=process.env.DB_CONNECTION
DB_CONNECTION=DB_CONNECTION.replace('<password>', DB_PASSWORD)
mongoose.connect(DB_CONNECTION)
.then(()=>{
    console.log("connected");
})

app.get('/api/hello', async(req,res)=>{
    const {name}=req.query
    const datas=await Kitten.find()
    if(name===undefined){
        res.status(200).send({
            data:datas,
            message:"sucssees"
        })
    }else{
        res.status(200).send({
            data:datas.filter((x)=>x.name.toLowerCase().trim().includes(name.toLowerCase().trim())),
            message:'sucssesss'
        })
    }
})

app.get('/api/hello/:id', async(req,res)=>{
    const id=req.params.id
    const data= await Kitten.findById(id)
    if(!data){
        res.status(204).send('data dont found')
    }else{
        res.status(200).send({
            data:data,
            message:'data sucsses'
        })
    }
})
app.delete('/api/hello/:id', async (req,res)=>{
    const id =req.params.id
    const deleted=await Kitten.findByIdAndDelete(id)
if(deleted=== undefined){
    res.status(404).send('data dont found')

}else{
    res.status(201).send({
        data:deleted,
        message:'data dleted'
    })
}
})
app.post('/api/hello', async(req,res)=>{
    const {name, age, image}=req.body
    const posted= new Kitten({
name:name,
age:age,
image:image
    })
    await posted.save()
    res.status(201).send({
        data:posted,
        message:'posted data'
    })
})

app.put('/api/hello/:id', async(req,res)=>{
    const id=req.params.id
   const {name,age, image}=req.body
   const posted=await Kitten.findByIdAndUpdate(id, {name:name, age:age, image:image})
if(posted===undefined){
    res.status(404).send('data dont found')
}
else{
    res.status(200).send(`put ${posted.name}`)
}
})





PORT=process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})
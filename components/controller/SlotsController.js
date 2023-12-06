import Slots from "../moduels/Slots.js"
export const addSlot = async(req,res)=>{

try{
const response =  new Slots({date:req.body.date.date,time:req.body.time})

await response.save()
console.log(response)

}catch(err){
  console.error(err)
}
}


export const getSlot = async(req,res)=>{
 
  try{
const date = req.body.date.date
   

 const response = await Slots.find({date:date})
  
console.log(response)
if(response){
  res.status(200).json(response)
}

  }catch(err){
    console.error(err)
  }
  }
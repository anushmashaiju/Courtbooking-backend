const COURT=require('../Models/courtSchema')

const addCourtData=async (req,res)=>{
    console.log("addCourt")
    try{

await COURT({courtName:req.query.courtName,
       location:req.query.location,
       address:req.query.address,
       type:req.query.type,
    courtPicture:req.file.filename}).save()
    res.status(200).json('court registration successfull')
} catch(error){
    res.status(200).json('court registration failed')
  console.log(error)
}

}
module.exports={addCourtData}
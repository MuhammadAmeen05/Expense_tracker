//@desc Get all transcation
//@acces public
//@router GET /api/v1/transcations
const Transaction=require('../Model/Transaction')
exports.getTranscations=async(req,res,next)=>{
try {

    const transcation= await Transaction.find()
    return res.status(201).json({
        success:true,
        data:transcation
    })    
} catch (err) {
    return res.status(500).json({
        success:false,
        error:'Server Error'
    })
}


}

//@desc add  transcation
//@acces public
//@router POST /api/v1/transcations

exports.addTranscation=async (req,res,next)=>{
    try {
        const {text,amount}=req.body
        const transcation= await Transaction.create(req.body)
        return res.status(200).json({
            success:true,
            data:transcation
        })    
    }
    
    catch (err) {
        if(err.name ==='ValidationError'){
            const message=Object.values(err.errors).map(val=>val.msg)
            return res.status(400).json({
               success:false,
               error:message
           })
            }
        else{
                return res.status(500).json({
                     success:false,
                     error:'Server Error'
                 })
        }   
    }
     
    }

//@desc delete transcation
//@acces public
//@router  DELETE/api/v1/transcations:id

exports.deleteTranscation=async(req,res,next)=>{
    try {
       const transcation= await Transaction.findById(req.params.id)
       if(!transcation){
        return res.status(400).json({
            success:false,
            error:'transcation not found'
        
        })
        
       }
       await transcation.remove()
       return res.status(200).json({
        success:true,
        data:{}
    })
    } 
    catch (error) {
        return res.status(500).json({
            success:false,
            error:'Server Error'
        })  
    }
    }
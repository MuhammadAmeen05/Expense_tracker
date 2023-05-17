const express=require('express')
const router=express.Router();
const {getTranscations,addTranscation,deleteTranscation}=require('../controller/transcations')
/*
router.get('/',(req,res)=>{
    res.send('hello ')
})
*/
router
      .route('/')
      .get(getTranscations)
      .post(addTranscation)

router.route('/:id').delete(deleteTranscation)
module.exports=router;
var express = require('express');
const { addCourtData } = require('../controllers/adminControllers');
var router = express.Router();
const multer=require('multer')
const fileStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/courts')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
})
const upload=multer({storage:fileStorage})

router.post('/addCourtData',upload.single('image'),addCourtData)

module.exports = router;

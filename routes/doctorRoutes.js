const express=require('express')
const doctorController=require('../controller/doctorController')
const router=express.Router();

router.get('/doctor', doctorController.getDoctor)
router.get('/doctors/:id', doctorController.getDoctorById)
router.post('/doctor',doctorController.addDoctor)
router.delete('/doctor/:id',doctorController.deleteDoctorById)


module.exports=router

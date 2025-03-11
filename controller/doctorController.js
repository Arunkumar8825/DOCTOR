const doctor = require('../model/doctorSchema');
const { param } = require('../routes/doctorRoutes');

//get
const getDoctor = async (req, res) => {
    try {
        const data = await doctor.find();
        res.send(data);
        console.log(data);
    } catch (error) {
        res.status(500).json({ "code": 500, "message": "Error", "error": error.message });
    }
};


//get id
const getDoctorById = async (req, res) => {
    try {
        const getDoctor = await doctor.findById(req.params.id);

        if (!getDoctor) {
            return res.status(404).json({ "code": 404, "message": "Doctor not found" });
        }

        res.send(getDoctor);
        console.log(getDoctor);
    } catch (error) {
        res.status(500).json({ "code": 500, "message": "Error", "error": error.message });
    }
};


//post
const addDoctor = async (req, res) => {
    try {
        const { name, age, gender, address, date_of_registration, specialist, experience, visiting_time } = req.body;

        // Validate input
        if (!name || !age || !gender || !address || !date_of_registration || !specialist || !experience || !visiting_time) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create new doctor entry
        const newDoctor = new doctor({ name, age, gender, address, date_of_registration, specialist, experience, visiting_time });
        await newDoctor.save();

        res.status(201).json({ message: "Doctor added successfully", doctor: newDoctor });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


//del
const deleteDoctorById = async (req, res) => {
    try {
        const deletedDoctor = await doctor.findByIdAndDelete(req.params.id);
        if (!deletedDoctor) {
            return res.status(404).json({ "code": 404, "message": "Doctor not found" });
        }
        res.json({ "message": "Doctor deleted successfully", doctor: deletedDoctor });
        console.log(deletedDoctor);
    } catch (error) {
        res.status(500).json({ "code": 500, "message": "Error", "error": error.message });
    }
};


module.exports = { getDoctor, getDoctorById, addDoctor , deleteDoctorById};

const {CityService} = require('../services/index');
const cityService = new CityService();
const create= async (req, res) => {
    try{
        const city= await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully",
            err: {}
        });
    }
    catch(error) {
        console.log("Something went wrong in creating city");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Error in creating city",
            err: error
        });
    }
}
const destroy = async (req, res) => {
    try {
        const result = await cityService.deleteCity(req.params.cityid);
        return res.status(200).json({
            data: result,
            success: true,
            message: "City deleted successfully",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in deleting city");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Error in deleting city",
            err: error
        });
    }
}
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.cityid);
        return res.status(200).json({
            data: city,
            success: true,
            message: "City fetched successfully",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in fetching city");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Error in fetching city",
            err: error
        });
    }
}
const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.cityid, req.body.name);
        return res.status(200).json({
            data: city,
            success: true,
            message: "City updated successfully",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in updating city");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Error in updating city",
            err: error
        });
    }
}
const getall = async (req, res) => {
    try {
        const cities = await   cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "Cities fetched successfully",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in fetching cities");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Error in fetching cities",
            err: error
        });
    }
}
module.exports = {
    create,
    destroy,
    get,
    update,
    getall
};
 
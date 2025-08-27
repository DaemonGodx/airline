const {FlightService} = require('../services/index');
const flightService = new FlightService();
class FlightController{
    async createFlight(req,res){
        try {
            const flight = await flightService.createFlight(req.body);
            return res.status(201).json({
                data:flight,
                success:true,
                message:"Successfully created a flight",
                err:{}
            });
        } catch (error) {
            console.log("Something went wrong in the controller layer");
            return res.status(500).json({
                data:{},
                message:"Failed to create a flight",
                err:error
            });
        }
    }
    async getFlight(req,res){
        try {
            const flight = await flightService.getFlight(req.params.id);
            return res.status(200).json({
                data:flight,
                success:true,
                message:"Successfully fetched a flight",
                err:{}
            });
        } catch (error) {
            console.log("Something went wrong in the controller layer");
            return res.status(500).json({
                data:{},
                message:"Failed to fetch a flight",
                err:error
            });
        }
    }
    async getAllFlights(req,res){
        try {
            const flights = await flightService.getAllFlights(req.query);
            return res.status(200).json({
                data:flights,
                success:true,
                message:"Successfully fetched all flights",
                err:{}
            });
        } catch (error) {
            console.log("Something went wrong in the controller layer");
            return res.status(500).json({
                data:{},
                message:"Failed to fetch all flights",
                err:error
            });
        }
    }
}
module.exports = new FlightController();
const { flightRepository, AirplaneRepository } = require('../resposrity/index');
const{ compareDates } = require('../utils/CompareDate');
class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new flightRepository();
    }
    async createFlight(data) {
        try {
            if (compareDates(data.departureTime, data.arrivalTime)) {
                throw { message: "Arrival time cannot be less than departure time" };   
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({ ...data, totalseats: airplane.capacity });
            return flight;
        } catch (error) {
            console.log("Service error:", error);
            throw error;
        }
    }
    async getFlight(id) {
        try {
            const flight = await this.flightRepository.getFlight(id);
            return flight;
        } catch (error) {
            console.log("Service error:", error);
            throw error;
        }
    }
    async getAllFlights(data) {
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Service error:", error);
            throw error;
        }
    }
}
module.exports = FlightService;

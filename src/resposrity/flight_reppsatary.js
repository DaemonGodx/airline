const { Flight } = require('../models/index');
const { Op } = require('sequelize');
class FlightRepository {
    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if (data.minPrice) Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
        if (data.maxPrice) Object.assign(filter, { price: { ...filter.price, [Op.lte]: data.maxPrice } });
        return filter;
    }
    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async getFlight(id) {
        try {
            const flight = await Flight.findByPk(id);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async getAllFlights(filter) {
        try {
            const filterobject = this.#createFilter(filter);
            const flights = await Flight.findAll({ where: filterobject});
            return flights;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
}
module.exports = FlightRepository;
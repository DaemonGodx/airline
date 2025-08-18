const {CityRepository} = require('../resposrity/index');

class CityService {
    constructor() {
        this.CityRepository = CityRepository;
    }
    async createCity({name}) {
        try {
            const city = await this.CityRepository.createcity({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in creating city");
            throw {error};
        }
    }

    async deleteCity(cityid) {
        try {
            const result = await this.CityRepository.deletecity(cityid);
            return result;
        } catch (error) {
            console.log("Something went wrong in deleting city");
            throw {error};
        }
    }

    async getCity(cityid) {
        try {
            const city = await this.CityRepository.getcity(cityid);
            return city;
        } catch (error) {
            console.log("Something went wrong in fetching city");
            throw {error};
        }
    }

    async updateCity(cityid, name) {
        try {
            const city = await this.CityRepository.updatecity(cityid, name);
            return city;
        } catch (error) {
            console.log("Something went wrong in updating city");
            throw {error};
        }
    }
   

}
 module.exports = CityService;
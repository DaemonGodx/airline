const {Airplanes}= require('../models/index');
class airplaneRepository{
    async getAirplane(id){
        try {
            const airplane = await Airplanes.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports = airplaneRepository;
const {AirportReposetory}  = require("../resposrity/index");
const crudservices = require("./crud_service");
class AirportService extends crudservices{
    constructor(){
        const airportReposetory=new AirportReposetory();
        super(airportReposetory);
    }
}
module.exports=AirportService;

const crudReposetory = require("./crud-reposetory");
const {Airport}= require("../models/index");
class AirportReposetory extends crudReposetory {
  constructor() {
    super(Airport);
  }
}
module.exports = AirportReposetory;
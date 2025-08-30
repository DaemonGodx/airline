class crudReposetory {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
        console.log("error in crud repo");
      throw error;
    }
  }

  async destroy(modelid) {
    try {
      const result = await this.model.destroy({
        where: modelid,
      });
      return result;
    } catch (error) {
        console.log("error in crud repo");
      throw error;
    }
  }

  async get(modelid) {
    try {
      const result = await this.model.findByPk(modelid);
      return result;
    } catch (error) {
        console.log("error in crud repo"); 
      throw error;
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
        console.log("error in crud repo");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const result = await this.model.update(data, {
        where: {
            id: id,
        }
      });
      return result;
    } catch (error) {
        console.log("error in crud repo");
      throw error;
    }
  }
  
}
module.exports = crudReposetory;
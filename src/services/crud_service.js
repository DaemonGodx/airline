class crudservices{
    constructor(reposetory){
        this.reposetory=reposetory;
    }
    async create(data){
        try {
            const response=await this.reposetory.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in crud service");
            throw error;
        }
    }
    async destroy(id){
        try {
            const response=await this.reposetory.destroy(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in crud service");
            throw error;
        }
    }
    async get(id){
        try {
            const response=await this.reposetory.get(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in crud service");
            throw error;
        }
    }
    async getAll(){
        try {
            const response=await this.reposetory.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in crud service");
            throw error;
        }
    }
    async update(id,data){
        try {
            const response=await this.reposetory.update(id,data);
            return response;
        } catch (error) {
            console.log("Something went wrong in crud service");
            throw error;
        }
    }
}
module.exports=crudservices;
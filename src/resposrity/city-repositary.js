const {City}=require('../models/index');

class CreateRepo{
    async  createcity({name})
    {
        try
        {
            const city= await City.create({name});
            return city;
        }
        catch(error)
        {
            console.log("somthing went wrong");
            throw {error};
        }
    }
     async  deletecity(cityid)
    {
        try
        {
         await City.destroy({
            where :{
                id:cityid
            }
        });
        return true;
            
        }
        catch(error)
        {
            throw {error};
        }
    }
    async getcity(cityid)   
{
        try
        {
            const city=await City.findByPk(cityid);
            return city;
        }
        catch(error)
        {
            console.log("somthing went wrong");
            throw {error};
        }
    }
    async updatecity(cityid,name)
    {
        try
        {
            const city=await City.update({name},{
                where:{
                    id:cityid
                }
            });
            return city;
        }
        catch(error)
        {
            console.log("somthing went wrong");
            throw {error};
        }
    }

}
module.exports=CreateRepo;
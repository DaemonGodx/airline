const {City}=require('../models/index');
const {Op}=require('sequelize');

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
            // const city=await City.update({name},{
            //     where:{
            //         id:cityid
            //     }
            // });
            const city = await City.findByPk(cityid);
            city.name = name;
            await city.save();
            return city;
        }
        catch(error)
        {
            console.log("somthing went wrong");
            throw {error};
        }
    }
    async getAllCities(filter) {
        try {
            if(filter.name) {
                const cities=  await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }

            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in fetching all cities");
            throw {error};
        }
    }

}
module.exports=CreateRepo;
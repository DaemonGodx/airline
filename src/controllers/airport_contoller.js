 const {AirportService} = require("../services/index");
 const AirportServices = new AirportService();

   const create = async (req, res) => {
     try {
       const airport = await AirportServices.create(req.body);
       return res.status(201).json({
         data: airport,
         success: true,
         message: "Successfully created a airport",
         err: {},
       });
     } catch (error) {
       console.log(error);
       return res.status(500).json({
         data: {},
         success: false,
         message: "Not able to create a airport",
         err: error,
       });
     }
    }
     const get= async (req,res)=>{
      try{
        const airport=await AirportServices.get(req.params.id);
        return res.status(200).json({
          data:airport,
          success:true,
          message:"Successfully fetched a airport",
          err:{},
        });
      }
        catch(error){
          console.log(error);
          return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch a airport",
            err:error,
          }); 
      }
    }
    const getAll= async (req,res) =>{
      try{
      const getallairport=await AirportServices.getAll();
      return res.status(200).json({
        data:getallairport,
        success:true,
        message:"Successfully fetched all airport",
        err:{},
      });
    }
    catch(error){
      console.log(error);
      return res.status(500).json({
        data:{},
        success:false,
        message:"Not able to fetch all airport",
        err:error,
      });
    
    }
  }
   module.exports = {
     create,
     get,
      getAll,
   };

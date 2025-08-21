const exp=require('express');
// const {port}=require('./config/environment');
port=3000;
const {City}=require('./models/index');
// const repo=require('./resposrity/city-repositary');
const routes = require('./routes/index');
const bodyParser=require('body-parser');
const {Airport} = require('./models/index');
const db= require('./models/index');

   
const start= async ()=> {
    const app=exp();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
        app.use('/api', routes);
    app.get('/test', (req, res) => res.send('OK'));
        app.listen(port,async ()=>{
   
        console.log(`Server is running on port ${port}`);
    // const airports=await Airport.findAll({
    //     include: {
    //         model: City
    //     },
    // });
    // console.log(airports);
    if(process.env.DB_SYNC === 'true') {
        await db.sequelize.sync({force: true});
    }
    // // db.sequelize.sync({alter: true});
    // const city= await City.findOne({
    //     where:{
    //         id:10
    //     }
        
    // });
    // console.log(city);
    // const airports = await city.getAirports();
    // console.log(airports);

    
 
   
});
};
start();



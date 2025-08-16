const exp=require('express');
const {port}=require('./config/environment');
// const {City}=require('./models/index');
// const repo=require('./resposrity/city-repositary');
const bodyParser=require('body-parser')
const start= async ()=> {
    const app=exp();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
    
        app.listen(port, ()=>{
   
        console.log(`Server is running on port ${port}`);
        // City.create({
        //     name:"delhi",
        // })
    //    const  repox=new repo();
    //     repox.deletecity(1);
   
});
};
start();


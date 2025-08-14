const exp=require('express');
const {port}=require('./config/environment')
const bodyParser=require('body-parser')
const start= async()=> {
    const app=exp();
    app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
});
};
start();


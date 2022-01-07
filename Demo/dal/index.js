const {MongoClient}=require('mongodb');
const uri =
  "mongodb+srv://admin:admin@cluster0.pa3x2.mongodb.net/social?retryWrites=true&w=majority";

const client= new MongoClient('mongodb+srv://quanganh:123@cluster0.mlreu.mongodb.net/Facebook?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
client.connect(err=>{
    if(err){
        console.error(err);
        process.exit(-1);
    }
    console.log("Successfully connected to mongodb");

})
module.exports=client;
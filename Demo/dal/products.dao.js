const products=require('./index').db('Facebook').collection('User');
const OjectId=require('mongodb').ObjectId;
const save=async({fullname,avatar,age})=>{
    const result=await products.insertOne({fullname,avatar,age});
    return result.ops[0];
}
const getAll=async ()=>{
    const curson=await products.find();
    return curson.toArray();
}
const getById=async(id)=>{
    return await products.findOne({_id:OjectId(id)});

}
const updata=async(id,{fullname,avatar,age})=>{
    const result=await products.replaceOne({_id:OjectId(id)},{fullname,avatar,age})
    return result.ops[0];
}
const removeById=async id=>{
    await products.deleteOne({_id:OjectId(id)});
}
module.exports={getAll,getById,removeById,save,updata};
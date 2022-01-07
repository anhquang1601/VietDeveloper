const {getAll,getById,removeById,save,updata}=require('../dal/products.dao');
const createProduct=async({fullname,avatar,age})=>{
    const product={
        fullname,avatar,age
    }
    return await save(product);
}
const getProducts=async ()=>{
    return await getAll();
}
const getProduct=async id=>{
    return await getById(id);
}
const deleteProduct=async id=>{
    return await removeById(id);

}
const updateProduct=async (id,{fullname,avatar,age})=>{
    return await updata(id,{fullname,avatar,age});
}
module.exports={
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}
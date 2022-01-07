const Koa=require('koa');
const bodyParser=require('koa-bodyparser');
const productRouter=require('./router/products.routes');
const app=new Koa();
app.use(bodyParser());
app.use(productRouter.routes()).use(productRouter.allowedMethods());
app.listen(3000);
console.log("appliation is running on port 3000");
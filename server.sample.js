const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
const router = new Router();

/**
 * ctx.req , ctx.res -> nodejs 的 request 对象以及 response 对象
 * ctx.request, ctx.response -> koa 封装的 request 对象 以及 response 对象
 * ctx上很多属性是从 ctx.request ctx.reponse 中获取的
 */
router.get('/test/:id', (ctx) => {
  // ctx.body = `<p>hello test ${ctx.params.id}</p>`
  ctx.body = { success: true };
  ctx.set('Content-type', 'Application');
})

/**
 * 中间节，采用 next 将处理向下传递，即下一个中间节被应用
 */
server.use(async (ctx, next) => {
  await next();
})

server.use(router.routes());

server.listen(3000, () => { console.log('koa is listening on 3000') });

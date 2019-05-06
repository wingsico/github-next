const Koa = require('koa');
const next = require('next');

/**
 * 判断开发环境
 */
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

/**
 * 等待next渲染完成之后
 */
app.prepare().then(_ => {
  const server = new Koa();

  /**
   * 中间件
   * 给handle传入的ctx.req而不是ctx.request
   * next不是专门为koa设计的，不同的框架对于request和response的封装不同
   * 所以需要传入原生的Nodejs的 request和response对象
   */
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  })

  server.listen(3000, () => {
    console.log('koa is listening at port: 3000');
  })
})

(async () => {
  const Redis = require('ioredis');

  const redis = new Redis({
    port: 6379
  })

  await redis.set('c', 123);
  await redis.setex('b', 20, 'test')
  const keys = await redis.keys('*')
  console.log(keys);

})()

const router = require('koa-router')();
const fs = require('fs');
const path = require('path');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})


router.get('/getCoreConfig', async (ctx, next) => {
  const yaml2json = require('../service/yamlService').yaml2json;
  let filePath = path.resolve(process.cwd(), '../../../../../vine/vinejs-blog-core/vine.core.yml');
  ctx.body = yaml2json(filePath);
})

module.exports = router

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

// 回调数据
router.get('/searchAns', async (ctx, next) => {
  const id = ctx.request.query.id
  // 假数据
  const searchAns = [
    [
      {
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
        showCover: true,
        id: 0,
        type: 'core',
        isOfficial: true,
        title: '常规个人博客主核心',
        projectTitle: 'blog-core',
        fit: 'all',
        description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
        author: 'Shawn Zhou',
        publishTime: '2022/05/02',
        downloadCount: 2331
      },
      {
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
        showCover: true,
        id: 1,
        type: 'core',
        isOfficial: true,
        title: '常规个人博客主核心',
        projectTitle: 'blog-core',
        fit: 'all',
        description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
        author: 'Shawn Zhou',
        publishTime: '2022/05/02',
        downloadCount: 2332
      },
    ],
    [
      {
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
        showCover: true,
        id: 2,
        type: 'core',
        isOfficial: true,
        title: '常规个人博客主核心',
        projectTitle: 'blog-core',
        fit: 'all',
        description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
        author: 'Shawn Zhou',
        publishTime: '2022/05/02',
        downloadCount: 2333
      },
      {
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
        showCover: true,
        id: 3,
        type: 'core',
        isOfficial: true,
        title: '常规个人博客主核心',
        projectTitle: 'blog-core',
        fit: 'all',
        description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
        author: 'Shawn Zhou',
        publishTime: '2022/05/02',
        downloadCount: 2334
      },
    ],
    [
      {
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
        showCover: true,
        id: 4,
        type: 'core',
        isOfficial: true,
        title: '常规个人博客主核心',
        projectTitle: 'blog-core',
        fit: 'all',
        description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
        author: 'Shawn Zhou',
        publishTime: '2022/05/02',
        downloadCount: 2335
      },
      {
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
        showCover: true,
        id: 5,
        type: 'core',
        isOfficial: true,
        title: '常规个人博客主核心',
        projectTitle: 'blog-core',
        fit: 'all',
        description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
        author: 'Shawn Zhou',
        publishTime: '2022/05/02',
        downloadCount: 2336
      },
    ],
    [
      {
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
        showCover: true,
        id: 6,
        type: 'core',
        isOfficial: true,
        title: '常规个人博客主核心',
        projectTitle: 'blog-core',
        fit: 'all',
        description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
        author: 'Shawn Zhou',
        publishTime: '2022/05/02',
        downloadCount: 2337
      },
      {
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
        showCover: true,
        id: 7,
        type: 'core',
        isOfficial: true,
        title: '常规个人博客主核心',
        projectTitle: 'blog-core',
        fit: 'all',
        description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
        author: 'Shawn Zhou',
        publishTime: '2022/05/02',
        downloadCount: 2338
      },
    ],
    [
      {
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
        showCover: true,
        id: 8,
        type: 'core',
        isOfficial: true,
        title: '常规个人博客主核心',
        projectTitle: 'blog-core',
        fit: 'all',
        description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
        author: 'Shawn Zhou',
        publishTime: '2022/05/02',
        downloadCount: 2339
      },
      {
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
        showCover: true,
        id: 9,
        type: 'core',
        isOfficial: true,
        title: '常规个人博客主核心',
        projectTitle: 'blog-core',
        fit: 'all',
        description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
        author: 'Shawn Zhou',
        publishTime: '2022/05/02',
        downloadCount: 23310
      },
    ],
    [
      {
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
        showCover: true,
        id: 10,
        type: 'core',
        isOfficial: true,
        title: '常规个人博客主核心',
        projectTitle: 'blog-core',
        fit: 'all',
        description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
        author: 'Shawn Zhou',
        publishTime: '2022/05/02',
        downloadCount: 23311
      },
      {
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
        showCover: true,
        id: 11,
        type: 'core',
        isOfficial: true,
        title: '常规个人博客主核心',
        projectTitle: 'blog-core',
        fit: 'all',
        description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
        author: 'Shawn Zhou',
        publishTime: '2022/05/02',
        downloadCount: 23312
      },
    ],
    [
      {
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
        showCover: true,
        id: 12,
        type: 'core',
        isOfficial: true,
        title: '常规个人博客主核心',
        projectTitle: 'blog-core',
        fit: 'all',
        description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
        author: 'Shawn Zhou',
        publishTime: '2022/05/02',
        downloadCount: 23313
      },
      {
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
        showCover: true,
        id: 13,
        type: 'core',
        isOfficial: true,
        title: '常规个人博客主核心',
        projectTitle: 'blog-core',
        fit: 'all',
        description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
        author: 'Shawn Zhou',
        publishTime: '2022/05/02',
        downloadCount: 23314
      },
    ],
  ]
  ctx.body = {
    data: searchAns[id]
  }
})


router.get('/getCoreConfig', async (ctx, next) => {
  const yaml2json = require('../service/yamlService').yaml2json;
  let filePath = path.resolve(process.cwd(), '../../../../../vine/vinejs-blog-core/vine.core.yml');
  ctx.body = yaml2json(filePath);
})

module.exports = router

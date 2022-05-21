const router = require("koa-router")();

const cmd = require("node-cmd");

const path = require('path');

router.prefix("/commands");

function command(ctx, next, command) {
  const path = ctx.request.query.path;
  console.log(command)

  cmd.runSync("chcp 65001");
  const promise = new Promise((resolve, reject) => {
    let obj = cmd.runSync(`cd ${path} && ${command}`);
    if (obj.err) reject(obj.err);
    else resolve(obj.data);
  });
  promise
    .then((res) => {
      ctx.body = res;
    })
    .catch((err) => {
      ctx.body = err;
    });
}

router.get("/build", (ctx, next) => {
  command(ctx, next, "vine build");
});
router.get("/debug", (ctx, next) => {
  command(ctx, next, "vine debug");
});
router.get("/publish", (ctx, next) => {
  command(ctx, next, "vine publish");
});

router.post('/create', (ctx, next) => {
  let data = ctx.request.body.data;
  let ans = cmd.runSync(`vine create ${data.projectName} '${data.workspace}' '${data.core}' '${data.deployer}'`);
  console.log(ans);
  ctx.body = {
    workspace: path.resolve(data.workspace, data.projectName)
  };
});

module.exports = router;

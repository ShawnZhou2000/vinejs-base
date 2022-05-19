const router = require("koa-router")();

const cmd = require("node-cmd");

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

module.exports = router;

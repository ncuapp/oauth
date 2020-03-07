const Router = require('koa-router');

const oauthController = require('../controllers/oauth');

const router = new Router();

router.get('/', async ctx => await ctx.render('index'));
router.get('/login', oauthController.ncuapp.login)
router.get('/authorize', oauthController.ncuapp.authorize);
router.post('/token', oauthController.ncuapp.token);

router.get('/test', async (ctx) => {
  ctx.body = `return to client success, code is ${ctx.request.query.code}`;
})

module.exports = router;
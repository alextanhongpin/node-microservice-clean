import Koa from 'koa'

import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import './database/index.mjs'

const app = new Koa()
app.use(bodyParser())

const router = new Router()

const delay = (duration = 1000) =>
  new Promise(resolve => {
    setTimeout(resolve, duration)
  })

router.get('/', async (ctx, next) => {
  await delay(3000)
  ctx.body = 'hello world'
})

app.use(router.routes()).use(router.allowedMethods())

const server = app.listen(3000, () => {
  console.log('listening to port *:3000. press ctrl + c to cancel.')
})

server.setTimeout(2000, data => {
  console.log('timeout exceeded', data)
})

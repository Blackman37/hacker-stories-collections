import * as Koa from "koa"
import * as Router from "koa-router"

import * as logger from "koa-logger"
import * as json from "koa-json"

import { getStatus } from "./helpers/get-status"

const app = new Koa()
const router = new Router()

export const status = { status: "ok" }

// Hello world
router.get("/", async (ctx, next) => {
  ctx.body = getStatus()

  await next()
})

// Middlewares
app.use(json())
app.use(logger())

// Routes
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log("Server started")
})

import * as Koa from "koa"
import * as Router from "koa-router"

import * as logger from "koa-logger"
import * as json from "koa-json"
import * as bodyParser from "koa-bodyparser"

import { getStatus } from "./helpers/get-status"
import {
  ICreateCollection,
  createCollection,
} from "./api/collections/create-collection/controller"

const app = new Koa()
const router = new Router()

export const status = { status: "ok" }

// Middlewares
app.use(json())
app.use(logger())
app.use(bodyParser())

// Hello world
router.get("/status", async (ctx, next) => {
  ctx.body = getStatus()

  await next()
})

// Create collection
router.post("/collections", async (ctx, next) => {
  console.log("test", ctx.request.body)
  const body = <ICreateCollection>ctx.request.body

  const { userId, name, stories } = body
  const id = createCollection({
    userId,
    name,
    stories,
  })

  ctx.body = { id }

  await next()
})

router.get("/", async (ctx, next) => {
  ctx.body = getStatus()

  await next()
})

// Routes
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log("Server started")
})

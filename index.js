import 'dotenv/config'
import './database/index.js'
import express from 'express'
import cors from 'cors'
import { ProductRouter } from './router/productRouter.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/products', ProductRouter)

app.listen(process.env.port, () => console.log(`Running in port ${process.env.port}`))
import { Router } from 'express'
import { products } from '../utils/productos.js'
import { Product } from '../models/Product.js'

export const ProductRouter = Router()

ProductRouter.get('/get', async (req, res) => {
  try {
    const product = await Product.find()
    res.json(product)
  } catch (error) {
    console.log(error)
  }
})

ProductRouter.post('/add', async (req, res) => {
  try {
    products.forEach(async p => {
      const newProduct = new Product(p)
      await newProduct.save()
      console.log(newProduct)
    })
    res.send('Productos agregados')
  } catch (e) {
    console.log('error al agregar los productos')
  }
})
import * as types from './mutations-types'
import { attemptListProducts } from '../services'

export const getProducts = (context, payload) => {
  console.log(payload)
  return attemptListProducts(payload)
    .then(data => {
      context.commit(types.setProducts, data)
    })
}

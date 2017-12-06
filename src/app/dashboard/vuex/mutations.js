import * as types from './mutations-types'

export default {
  [types.setProducts] (state, products) {
    state.products = products
  }
}

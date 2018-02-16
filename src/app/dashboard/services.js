import http from 'src/http'

export const attemptListProducts = (response) => {
  return http.get('//raw.githubusercontent.com/emunhoz/shopping-cart-demo/master/public/data/products.json')
    .then(response => Object.assign({}, response.data.products))
}

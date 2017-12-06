import http from 'src/http'

export const attemptListProducts = (response) => {
  return http.get('./../../public/data/products.json')
    .then(response => Object.assign({}, response.data.products))
}

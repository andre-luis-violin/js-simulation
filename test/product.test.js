import Product from '../src/model/product'
import sell from '../src/service/sellProduct'

// A quantidade vendida pode ser de 1 ou mais unidades
test('must validate low stock of one unit', () => {
  let product = new Product('Celular', 500.00, 900.00, 10)
  sell(product, 1)
  expect(product.stock).toBe(9)
})

test('must accept the sale of more than one unit', () => {
  let product = new Product('Celular', 500.00, 900.00, 10)
  sell(product, 3)
  expect(product.stock).toBe(7)

})
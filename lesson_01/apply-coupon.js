// JSBin https://jsbin.com/watelex/edit?js,console

function applyCoupon(item) {
  return function(discount) {
    const price = item.price - (discount * item.price / 100);
    return Object.assign(item, { price });
  };
}

const item = {
  "name": "Avocado",
  "type": "fruits",
  "category": "Food",
  "price": 200
}

console.log(applyCoupon(item)(10).price);

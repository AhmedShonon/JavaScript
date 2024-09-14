const numbers = [35, 44, 56, 67, 87, 9];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

//simplified version -- for of loop
for (const number of numbers) {
  console.log(number);
}

const products = [
  { id: 1, name: "xiami phone one nine", price: 11900 },
  { id: 2, name: "iphone", price: 30900 },
  { id: 3, name: "mac book air", price: 11900 },
  { id: 4, name: "lenovo yoga laptop 2025", price: 30900 },
  { id: 5, name: "Dell inspiron laptop", price: 110900 },
  { id: 6, name: "samsung phone note 7", price: 50900 },
  { id: 7, name: "phone one", price: 21900 },
  { id: 8, name: "Nokia old phone", price: 31600 },
  { id: 9, name: "Razer Laptop", price: 21900 },
  { id: 10, name: "MackBook Pro M1 Laptop", price: 31600 },
];

// for (const product of products) {
//   console.log(product);
// }

function matchProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}
const result = matchProducts(products, "laptop");
console.log(result);

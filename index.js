const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];
students.forEach((student) => {
  console.log(`Name: ${student.name}, Grade: ${student.grade}`);
});

const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);
const youngStudents = students.filter((student) => student.age <= 21);

const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];
products.forEach((product) => {
  console.log(`Product: ${product.name}, Price: $${product.price}`);
});

products.forEach((product) => {
  product.price *= 1.1;
});
products.forEach((product) => {
  console.log(
    `Product: ${product.name}, Updated Price: $${product.price.toFixed(2)}`
  );
});

const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log("Unique Categories:", categories);

const electronics = products.filter(
  (product) => product.category === "Electronics"
);
console.log("Electronics:", electronics);

const expensiveProducts = products.filter((product) => product.price > 300);
console.log("Expensive Products:", expensiveProducts);

const highRatedProducts = products.filter((product) => product.rating >= 4.5);
highRatedProducts.forEach((product) => {
  console.log(`Product: ${product.name}, Rating: ${product.rating}`);
});

const highlyRatedProducts = products.filter((product) => product.rating >= 4.5);
highlyRatedProducts.forEach((product) => {
  console.log(product.name);
});

const affordableElectronics = products.filter(
  (product) => product.category === "Electronics" && product.price < 1000
);
affordableElectronics.forEach((product) => {
  console.log(
    `Product: ${product.name}, Price: $${product.price}, Rating: ${product.rating}`
  );
});

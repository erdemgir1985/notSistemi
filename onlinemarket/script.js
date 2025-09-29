//! Örnek 1: Online Market Sepeti (callback + reduce + scope + recursive)
// Ürün ekle
// Sepetteki ürünleri listele
// Toplam fiyatı hesapla (callback ile)
// Recursive olarak sepetteki ürün sayısını bul

let product = [
  {name : "Apple", price : 10, adet : 2},
  {name : "Banana", price : 5, adet : 3},
  {name : "Orange", price : 8, adet : 1},
  {name : "Grapes", price : 12, adet : 2}
]

// Ürün ekle
function addProduct(name, price, adet) {
  let newProduct = { name: name, price: price, adet: adet }
  product.push(newProduct) 
  console.log("Yeni ürün sepete eklendi:", newProduct)
  console.log("Güncel sepet:", product)
}

// Sepetteki ürünleri listele
function listProducts(arr) {
  console.log("Sepetteki ürünler:")
  arr.forEach(p => {
    console.log(`- ${p.name} | Fiyat: ${p.price} | Adet: ${p.adet}`)
  })
}

// Toplam fiyatı hesapla (callback ile)
function calculateTotal(callback) {
  let total = product.reduce((sum, p) => sum + p.price * p.adet, 0)
  return callback(total)
}

// Recursive olarak sepetteki ürün sayısını bul
function countProductsRecursive(arr, index = 0) {
  if (index >= arr.length) return 0
  return arr[index].adet + countProductsRecursive(arr, index + 1)
}


let productName = prompt("Ürün adını giriniz:");
let productPrice = Number(prompt("Ürün fiyatını giriniz:"));
let productAdet = Number(prompt("Ürün adedini giriniz:"));

addProduct(productName, productPrice, productAdet)
listProducts(product)

let totalPrice = calculateTotal(total => `Toplam fiyat: ${total} TL`)
console.log(totalPrice)

let totalCount = countProductsRecursive(product)
console.log(`Toplam ürün sayısı: ${totalCount}`)
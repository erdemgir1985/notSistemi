//! 📌 Örnek 1: Online Market Sepeti (callback + reduce + scope + recursive)
// Ürün ekle
// Sepetteki ürünleri listele
// Toplam fiyatı hesapla (callback ile)
// Recursive olarak sepetteki ürün sayısını bul

let product = [
  {name : "Apple", price : 10, adet : 2},
  {name : "Banana", price : 5, adet : 3},
  {name : "Orange", price : 8, adet : 1} ,
  {name : "Grapes", price : 12, adet : 2}
]

// Ürün ekle
function addProduct(name, price, adet) {
  product.push({ name, price, adet })
}

// Sepetteki ürünleri listele

function listProducts() {
  console.log("Sepetteki ürünler:")
  product.forEach(p => {
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

addProduct("Mango", 15, 4)
listProducts()
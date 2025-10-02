// ? 🏪 SORU 3 – Online Market Sepet & Stok Yönetim Sistemi
// Bir "onlineStore" objesi oluşturun

const onlineStore = {
  products: [], // { name, price, stock, category }
  cart: [],     // { name, price, quantity }
  totalCartPrice: 0,

  // 1) Ürün ekleme
  addProduct(name, price, stock, category){
    const newProduct = { name, price, stock, category };
    this.products.push(newProduct);
    console.log(`Ürün eklendi: ${name} | Fiyat: ${price} | Stok: ${stock} | Kategori: ${category}`);
  },

  // 2) Sepete ekleme (stok kontrol + miktar artırma + stoktan düşme)
  addToCart(name, quantity){
    const product = this.products.find(p => p.name === name);
    if(!product){
      console.log(`${name} ürünü bulunamadı.`);
      return;
    }
    if(product.stock < quantity){
      console.log(`${name} için yeterli stok yok. Mevcut stok: ${product.stock}`);
      return;
    }
    const item = this.cart.find(c => c.name === name);
    if(item){
      item.quantity += quantity;
    } else {
      this.cart.push({ name: product.name, price: product.price, quantity });
    }
    product.stock -= quantity;
    console.log(`${quantity} adet ${name} sepete eklendi. Kalan stok: ${product.stock}`);
  },

  // 3) Sepetten çıkarma (miktar kadar, fazlaysa tamamen çıkar; stoğu güncelle)
  removeFromCart(name, quantity){
    const itemIndex = this.cart.findIndex(c => c.name === name);
    if(itemIndex === -1){
      console.log(`${name} sepette bulunamadı.`);
      return;
    }
    const item = this.cart[itemIndex];
    const product = this.products.find(p => p.name === name);
    const removeQty = Math.min(quantity, item.quantity);
    item.quantity -= removeQty;
    if(product) product.stock += removeQty;

    if(item.quantity <= 0){
      this.cart.splice(itemIndex, 1);
      console.log(`${name} sepetten tamamen çıkarıldı.`);
    } else {
      console.log(`${name} ürününden ${removeQty} adet çıkarıldı. Sepette kalan: ${item.quantity}`);
    }
  },

  // 4) Toplam fiyat
  calculateTotal(){
    this.totalCartPrice = this.cart.reduce((sum, it) => sum + it.price * it.quantity, 0);
    return this.totalCartPrice;
  },

  // 5) Sepeti listele
  listCart(){
    if(this.cart.length === 0){
      console.log('Sepet boş.');
      return;
    }
    console.log('Sepet:');
    this.cart.forEach(it => console.log(`- ${it.name} x${it.quantity} | ${it.price} => ${it.price * it.quantity}`));
    console.log(`Toplam: ${this.calculateTotal()}`);
  },

  // 6) Kategoriye göre ürün listele
  listProductsByCategory(category){
    const filtered = this.products.filter(p => p.category === category);
    if(filtered.length === 0){
      console.log(`${category} kategorisinde ürün yok.`);
      return;
    }
    console.log(`${category} kategorisindeki ürünler:`);
    filtered.forEach(p => console.log(`- ${p.name} | Fiyat: ${p.price} | Stok: ${p.stock}`));
  }
};

onlineStore.addProduct('Elma', 10, 50, 'Meyve');
onlineStore.addProduct('Muz', 12, 20, 'Meyve');
onlineStore.addProduct('Süt', 30, 15, 'Süt Ürünleri');
onlineStore.addToCart('Elma', 5);
onlineStore.addToCart('Muz', 2);
onlineStore.removeFromCart('Elma', 1);
onlineStore.listCart();
onlineStore.listProductsByCategory('Meyve');



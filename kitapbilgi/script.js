//?📌 Kitap Bilgi Sistemi
// bir book nesnesi oluştur ( title, author, year, genres).   genres: ["Programming", "JavaScript"],
// Funksiyonlar:  showInfo (bilgileri göster), updateYear (yılı güncelle), addGenre (tür ekle).
// this methodu kullanilmali 3 foksiyon icerisinde de 

const book = {
    title: "Türkülerle Javascript",
    author: "Erdem Gir",
    year: 2018,
    genres: ["Programming", "JavaScript"],

  showInfo() {
    console.log(`${this.title} - ${this.author} (${this.year})`);
    console.log(`Türler: ${this.genres.join(", ")}`);
  },

  updateYear(newYear) {
    this.year = newYear;
    console.log(`Yıl güncellendi: ${this.year}`);
  },

  addGenre(newGenre) {
      this.genres.push(newGenre);
        console.log(`Yeni tür eklendi: ${newGenre}`)
  }

  };

book.showInfo();
console.log("---");
book.updateYear(2025)
console.log("---");
book.showInfo();
book.addGenre("türkü");
console.log("---");
book.showInfo();

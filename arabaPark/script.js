//? 📌 Araç Park Yeri Takip Sistemi
// Araçlar: (plaka, marka, parktaMı).
// Fonksiyonlar: yeni araç ekleme, araç giriş/çıkış, parkta olan araçları listeleme.
// Kullanılan konular: obje, array (araç listesi), push, filter, forEach.


let vehicles = [
    {plate: '34ABC123', brand: 'Toyota', inPark: true},
    {plate: '06XYZ456', brand: 'Honda', inPark: false},
    {plate: '35DEF789', brand: 'Ford', inPark: true},
    {plate: '07GHI012', brand: 'Chevrolet', inPark: false}
];


// fonsiyondan promtdan yeni araba ekleyeceginz  plakasini ve  markasini girerek ve park durumu otomatik ekleme yaparken true olucak yeni ekleniyorsa
newPlate = prompt("Lütfen plakayı yazın");
newBrand = prompt("Lütfen markayı yazın");
addVehicle(vehicles, { plate: newPlate, brand: newBrand, inPark:true});

function addVehicle(vehicles, newVehicle){
vehicles.push(newVehicle) 
console.log(`${newVehicle.plate} eklendi.`);
}

// fonsiyonda promtdan plaka girilicek ve eger park durumundaysa true ise false donucek , false ise zaten  arac bulunmuyor gibi yazi cikicak

// function toggleVehicleStatus(vehicles)

// fonsiyonda  inPark durumu true olanlari filtreleyecegiz
// fonsiyonda forEach kullanicaz filtrelediklerimizi dondururken

// function listVehiclesInPark(vehicles)






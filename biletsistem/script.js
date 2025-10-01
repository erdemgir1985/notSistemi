//? 📌 Etkinlik Katılımcı Yönetim Sistemi
// Katılımcılar: (isim, yaş, biletTuru, checkInMi)
// Fonksiyonlar: yeni katılımcı ekleme, katılımcı silme, check-in yapma,
//               bilet türüne göre listeleme, kaç kişinin giriş yaptığını sayma.
// Kullanılan konular: obje, array methods (push, filter, find, forEach, reduce), if/else.


let attendees = [
{name: 'John', age: 25, ticketType: 'VIP', checkedIn: false},
{name: 'Jane', age: 30, ticketType: 'Regular', checkedIn: true},
{name: 'Mike', age: 22, ticketType: 'VIP', checkedIn: false},
{name: 'Emily', age: 28, ticketType: 'Regular', checkedIn: true}
];


// yeni katılımcı ekleme islemi yapilir (push methodu)
function addAttendee(attendees, newAttendee) {
  attendees.push(newAttendee);
  console.log(`${newAttendee.name} eklendi.`);
}

// addAttendee(attendees, { name: 'Ali', age: 27, ticketType: 'VIP', checkedIn: false });

 // promtdan girilen kullanicinin ismine ve tickert turune gore silme islemi yapilir (filter)
function removeAttendee(attendees, name, ticketType) {
  let filtered = attendees.filter(
    att => !(att.name === name && att.ticketType === ticketType)
  );
  console.log(`${name} (${ticketType}) listeden silindi.`);
  return filtered;
}

// attendees = removeAttendee(attendees, 'Mike', 'VIP');

  // check-in yapma islemi yapilir (find methodu) false ise true yapar true ise zaten check-in yapildi der
function checkInAttendee(attendees, name) {
  let person = attendees.find(att => att.name === name);
  if (person) {
    if (!person.checkedIn) {
      person.checkedIn = true;
      console.log(`${name} check-in yaptı.`);
    } else {
      console.log(`${name} zaten check-in yapmış.`);
    }
  } else {
    console.log(`${name} bulunamadı.`);
  }
}

// checkInAttendee(attendees, 'John');

// bilet türüne göre listeleme islemi yapilir (filter methodu)
function listByTicketType(attendees, ticketType) {
  let list = attendees.filter(att => att.ticketType === ticketType);
  console.log(`${ticketType} bilet sahipleri:`);
  list.forEach(att => console.log(`- ${att.name}`));
}

// listByTicketType(attendees, 'VIP');

// giriş yapan katılımcıları sayma islemi yapilir (reduce methodu)
function countCheckedIn(attendees) {
  let count = attendees.reduce((acc, att) => acc + (att.checkedIn ? 1 : 0), 0);
  console.log(`Check-in yapan kişi sayısı: ${count}`);
  return count;
}

// countCheckedIn(attendees);

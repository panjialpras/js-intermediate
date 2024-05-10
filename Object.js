// Object literal

let Karyawan = {
    "name": "Panji",
    "age": 22,
    "sallary": 23456,
    responsibility: function (berapa) {
        this.sallary = this.sallary + (berapa * 300000)
        console.log(`Hi, ${this.name}, You gain Rp. ${this.sallary} of sallary`)
    }
}

Karyawan.responsibility(6)

let Karyawan1 = {
  name: "Riko",
  age: 23,
  sallary: 12345,
  responsibility: function (berapa) {
    this.sallary = this.sallary + berapa * 300000;
    console.log(`Hi, ${this.name}, You gain Rp. ${this.sallary} of sallary`);
  },
};

Karyawan1.responsibility(6);

// Function declaration

function Karyawan(name, sallary) {
  let karyawan = {};
  (karyawan.name = name), (karyawan.sallary = sallary);

  karyawan.responsibility = function (berapa) {
    this.sallary += berapa * 30000;
    console.log(
      `Hello ${this.name}, you've gain Rp. ${this.sallary} of sallary. Congrats!!!`
    );
    };
    karyawan.shopping = function (belanjaBerapa) {
        this.sallary -= belanjaBerapa
        console.log(`Your money is Rp. ${this.name} now`)
}
  return karyawan;
}

let Panji = Karyawan("Panji", 100000);
let Riko = Karyawan("Riko", 123123);
console.log(Riko);
console.log(Panji);
Panji.responsibility(3);
console.log(Panji);
Riko.shopping(40000)
console.log(Riko)
// Kurang bagus karena tiap method yang dibuat, disimpan ke dalam memori yang padahal method tersebut belum tentu digunakan ketika instansiasi object

// Constructor function
function Karyawan(name, sallary) {

  (this.name = name), (this.sallary = sallary);

  this.responsibility = function (berapa) {
    this.sallary += berapa * 30000;
    console.log(
      `Hello ${this.name}, you've gain Rp. ${this.sallary} of sallary. Congrats!!!`
    );
  };
  this.shopping = function (belanjaBerapa) {
    this.sallary -= belanjaBerapa;
    console.log(`Your money is Rp. ${this.sallary} now`);
  };
}

let Panji = new Karyawan("Panji", 100000);
let Riko = new Karyawan("Riko", 123123);
console.log(Riko)
Panji.shopping(40000)

// Prototype (Protyping inheritance)

function Karyawan(name, sallary) {
  this.name = name;
  this.sallary = sallary;
}

Karyawan.prototype.respons = function (banyak) {
  this.sallary += banyak * 500000;
  return `Hai ${this.name}, uangmu sekarang ada sebanyak ${this.sallary}`;
};
let panji = new Karyawan('Panji', 10000)
console.log(panji)
panji.respons(10)
console.log(panji)

// Prototype class
class Karyawan {
  constructor(name, sallary) {
    (this.name = name), (this.sallary = sallary);
  }
  response (banyak) {
    this.sallary += banyak * 500000;
    return `Hai ${this.name}, uangmu sekarang ada sebanyak ${this.sallary}`;
  };

}

let panji = new Karyawan('Panji', 1123123)
console.log(panji)
panji.response(123)
console.log(panji)

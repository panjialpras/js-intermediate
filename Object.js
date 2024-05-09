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
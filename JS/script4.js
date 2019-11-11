class Audience {
  constructor(name, qrt, fac) {
    this.name = name;
    this.qrt = qrt;
    this.fac = fac;
  }

  toString() {
    return `${this.name}: ${this.qrt}, ${this.fac}\n`;
  }
}

class Group extends Audience {}

let arr = [
  new Audience("Biology", 15, "Med"),
  new Audience("Math", 10, "FITKI"),
  new Audience("Programing", 20, "FEO"),
  new Audience("History", 12, "Med"),
  new Audience("Biology", 15, "Med")
];

let groups = [
  new Group("1-FN", 20, "Med"),
  new Group("2-KN", 30, "FITKI"),
  new Group("1-BN", 25, "FEO"),
  new Group("3-AN", 35, "Law")
];

let list = arr => {
  let str = "";
  for (let prop of arr) {
    str += prop.toString();
  }
  return str;
};
// alert(list(arr));

let facultet = _name => {
  for (let prop of arr) {
    if (_name == prop.fac) {
      return prop.toString();
    }
  }
};
// alert(facultet("FITKI"));

let allocate = (obj, arr) => {
  let str = "";
  for (let prop of arr) {
    if (obj.fac == prop.fac) {
      str += prop.toString();
    }
  }
  return str;
};
// alert(allocate(groups[0], arr));

let counts = arr => {
  arr.sort((a, b) => {
    return a.qrt - b.qrt;
  });
};

let sortByName = arr => {
  arr.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
};
sortByName(arr);
alert(list(arr));

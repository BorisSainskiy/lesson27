class Products {
  constructor(name, counts, buy) {
    this.name = name;
    this.counts = counts;
    this.buy = buy;
  }

  toString() {
    return `${this.name}{${this.counts}, ${this.buy}}\n`;
  }

  setBuy(buy) {
    this.buy = buy;
  }

  getBuy() {
    return this.buy;
  }
}

let arr = [
  new Products("milk", 5, true),
  new Products("sugar", 8, false),
  new Products("apples", 15, true)
];

let list = arr => {
  let str = "";
  arr.sort((a, b) => {
    return a.buy - b.buy;
  });
  for (let prop of arr) {
    str += prop.toString();
  }
  return str;
};

let buy = (_name, _counts, arr) => {
  for (let prop of arr) {
    if (_name == prop.name) {
      prop.counts += _counts;
      return;
    }
  }
  let node;
  node = new Products(_name, _counts, false);
  arr.push(node);
};

let bought = name => {
  for (let prop of arr) {
    if (name == prop.name) {
      prop.setBuy(true);
    }
  }
};
buy("ooo", 5, arr);
bought("ooo");
alert(list(arr));

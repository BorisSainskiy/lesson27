class Check {
  constructor(product, qty, price) {
    this.product = product;
    this.qty = qty;
    this.price = price;
  }

  toString() {
    return `${this.product}: ${this.qty}, ${this.price}\n`;
  }
}

let arr = [
  new Check("milk", 5, 20),
  new Check("sugar", 3, 40),
  new Check("bread", 8, 10)
];

let list = arr => {
  let str = "";
  for (let prop of arr) {
    str += prop.toString();
  }
  return str;
};

let sum = arr => {
  let sum = 0;
  for (let prop of arr) {
    sum += prop.price;
  }
  return sum;
};

let max = arr => {
  let m = arr[0].price;
  for (let prop of arr) {
    if (prop.price > m) {
      m = prop.price;
    }
  }
  return m;
};

let average = arr => {
  return sum(arr) / arr.length;
};
alert(average(arr));
// alert(max(arr));
// alert(sum(arr));
// alert(list(arr));

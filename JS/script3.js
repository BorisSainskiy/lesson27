class CSSProperty {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  toString() {
    return `${this.name}:${this.value};`;
  }
}

let css = [
  new CSSProperty("color", "red"),
  new CSSProperty("font-size", "16px"),
  new CSSProperty("text-align", "left"),
  new CSSProperty("text-decoration", "underline"),
  new CSSProperty("font-weight", "bold")
];

let show = (text, arr) => {
  let cssStyles = arr.reduce((obj, str) => {
    return str + obj.toString();
  }, "");

  let p = document.createElement("p");
  p.innerText = text;
  p.setAttribute("style", cssStyles);
  document.body.appendChild(p);
};

show("Hello, World!!!", css);

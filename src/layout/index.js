import layout from "./layout.html";

export default class Layout {
  render() {
    document.querySelector("body").innerHTML = layout;
  }
}

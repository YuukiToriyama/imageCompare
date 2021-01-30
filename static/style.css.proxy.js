// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/* style.css */\n\n.bg-round {\n\theight: 30px;\n\twidth: 30px;\n\tborder-radius: 50%;\n\tline-height: 30px;\n\ttext-align: center;\n\tfont-size: 20px;\n\tcolor: white;\n\tbackground: black;\n\topacity: 0.6;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
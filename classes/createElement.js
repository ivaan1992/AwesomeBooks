export default function createElement(html) {
  const tr = document.createElement('table');
  tr.innerHTML = html;
  return tr.firstElementChild;
}

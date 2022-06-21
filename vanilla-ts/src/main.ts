import './style.css'


export const $ = (selectors: string) => {
  return document.querySelector(selectors);
};
export const $$ = (selectors: string) => {
  return document.querySelectorAll(selectors);
};
const app = $('#app')!

app.innerHTML = `
  <h1>计算 setTimeout 和 setInterval 的误差</h1>
  <button id="setIntervalDelay">
    setIntervalDelay
  </button>
`
function setIntervalDelay() {
  setInterval(() => {
    app.innerHTML += `<li></li>`
  }, 1000)
}
$('#setIntervalDelay')!.addEventListener('click', setIntervalDelay)

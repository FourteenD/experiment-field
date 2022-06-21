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
    打印setInterval延迟
  </button>
  <button id="setTimeoutDealy">
    打印setTimeout延迟
  </button>
  <ul id='list'></ul>
  `
const list = $('#list')!

$('#setIntervalDelay')!.addEventListener(
  'click',
  () => {
    intervalDelay()
  }
)
$('#setTimeoutDealy')!.addEventListener(
  'click',
  () => {
    timeoutDealy()
  }
)
// setInterval延迟
function intervalDelay(timeout = 1000) {
  // 执行开始时间
  const startTime = new Date()
  // 执行次数
  let count = 0
  setInterval(() => {
    count++
    // 延迟时间 = 当前实际时间 - 理论最佳时间(执行开始时间+执行次数*间隔时间)
    let dealy = new Date().getTime() - (startTime.getTime() + count * timeout)
    list.innerHTML += `<li>${dealy}ms</li>`
  }, timeout)
}
// setTimeout延迟
function timeoutDealy(timeout = 1000) {
  // 执行开始时间
  const startTime = new Date()
  // 执行次数
  let count = 0
  const timeoutHandler = () => {
    setTimeout(() => {
      count++
      // 延迟时间 = 当前实际时间 - 理论最佳时间(执行开始时间+执行次数*间隔时间)
      let dealy = new Date().getTime() - (startTime.getTime() + count * timeout)
      list.innerHTML += `<li>${dealy}ms</li>`
      timeoutHandler()
    }, timeout)
  }
  timeoutHandler()
}

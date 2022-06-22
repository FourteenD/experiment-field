// rem移动端适配
export const setRemSize = (logicWidth = 750) => {
  // 页面可视宽度
  const screenWidth = document.documentElement.clientWidth
  // 1rem像素
  const remPx = screenWidth * 100 / logicWidth

  document.documentElement.style.fontSize = remPx + 'px'
  window.onresize = function () {
    setRemSize()
  }
}


// flexible.js 移动端自适应方案

// rem移动端适配
export const setRemSize = (logicWidth = 750, remPx = 100) => {
  // 页面可视宽度
  const screenWidth = document.documentElement.clientWidth
  // 1rem像素
  const rpx = screenWidth * remPx / logicWidth

  document.documentElement.style.fontSize = rpx + 'px'
  window.onresize = function () {
    setRemSize()
  }
}

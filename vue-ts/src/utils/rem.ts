export const setRemSize = (logicWidth = 750) => {
  const screenWidth = document.documentElement.clientWidth
  const rpx = screenWidth * 1000 / logicWidth
  document.documentElement.style.fontSize = rpx + 'px'
  window.onresize = function () {
    setRemSize()
  }
}

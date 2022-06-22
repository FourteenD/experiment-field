export const setRemSize = (logicWidth = 750) => {
  const screenWidth = document.documentElement.clientWidth
  const rpx = screenWidth / logicWidth
  document.documentElement.style.fontSize = rpx + 'px'
  window.onresize = function () {
    setRemSize()
  }
}

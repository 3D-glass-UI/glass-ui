/* ========================================== */
/* Spotlight effect JS */
/* ========================================== */
const spotlightCursor = ({ x, y }) => {
  document.documentElement.style.setProperty('--x', Math.round(x))
  document.documentElement.style.setProperty('--y', Math.round(y))
}

document.body.addEventListener('pointermove', spotlightCursor)
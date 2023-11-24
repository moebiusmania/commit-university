import "normalize.css"
import './style.css'

import "./components/participants"
import "./components/grid"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <cu-participants></cu-participants>
  <cu-grid></cu-grid>
`
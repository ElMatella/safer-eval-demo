import { h, render } from 'preact'
import safeEval from 'safe-eval'

render((
  <h1>1 + 1 = {safeEval('1 + 1')}</h1>
), document.getElementById('content'))

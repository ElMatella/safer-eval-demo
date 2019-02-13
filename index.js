import { h, render } from 'preact'
import saferEval from 'safer-eval'

render((
  <h1>1 + 1 = {saferEval('1 + 1')}</h1>
), document.getElementById('content'))

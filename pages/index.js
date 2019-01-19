import safeEval from 'safe-eval'
export default () => <h1>{safeEval('1 + 1')}</h1>

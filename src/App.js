import React, { useState } from 'react';
import './App.scss'

const App = () => {
  const [password, setPassword] = useState('');

  const rules = {
    characters: /.{10,}/,
    numbers: /.*[0-9].*/,
    lower: /[a-z]/,
    upper: /[A-Z]/
  }

  const checkPass = reg => reg.test(password);

  const finalCheck = () => Object.keys(rules).map(e => checkPass(rules[e])).every(e => e)

  return (
    <div className="app">
      <input
        type="password"
        placeholder="password check"
        onChange={e => setPassword(e.target.value)}
      />
      <div className="rules">
        <ul>
          <li className={checkPass(rules['lower']) ? "passed" : "missing"}>
            1 lowercase character
            </li>
          <li className={checkPass(rules['upper']) ? "passed" : "missing"}>
            1 uppercase character
            </li>
          <li className={checkPass(rules['numbers']) ? "passed" : "missing"}>
            1 number
            </li>
          <li className={checkPass(rules['characters']) ? "passed" : "missing"}>
            8 minimum characters
            </li>
        </ul>
      </div>
      <button disabled={finalCheck() ? false : true}> Submit </button>
    </div>
  );
}

export default App;

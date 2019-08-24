import React, { useState } from 'react';
import './App.scss'

const App = () => {
  const [password, setPassword] = useState('');

  const rules = {
    characters: /.{8,}/,
    numbers: /.*[0-9].*/,
    lower: /[a-z]/,
    upper: /[A-Z]/
  }

  const ruleDescription = [
    "At least 8 characters", 
    "At least 1 number",
    "At least 1 lower case character",
    "At least 1 upper case character"
  ]

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
          {Object.keys(rules).map((r,i) =>
            <li className={checkPass(rules[r]) ? "passed" : "missing"}>
              {ruleDescription[i]}
            </li>
          )}
        </ul>
      </div>
      <button disabled={finalCheck() ? false : true}> Submit </button>
    </div>
  );
}

export default App;

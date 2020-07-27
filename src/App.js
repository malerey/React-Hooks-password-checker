import React, { useState } from 'react';
import './App.scss'

const App = () => {
  const [password, setPassword] = useState('');

  const rules = [
    { name: 'characters', regex: /.{8,}/, description: "At least 8 characters" },
    { name: 'numbers', regex: /.*[0-9].*/, description: "At least 1 number" },
    { name: 'lowercase', regex: /[a-z]/, description: "At least 1 lower case character" },
    { name: 'uppercase', regex: /[A-Z]/, description: "At least 1 upper case character" }
  ]

  const checkPassword = regex => regex.test(password);

  const finalCheck = () => rules.reduce((i, e) => checkPassword(e.regex))

  return (
    <div className="app">
      <input
        type="password"
        placeholder="password check"
        onChange={e => setPassword(e.target.value)}
      />
      <div className="rules">
        <ul>
          {rules.map((r, i) =>
            <li className={checkPassword(r.regex) ? "passed" : "failed"}>
              {r.description}
            </li>
          )}
        </ul>
      </div>
      <button disabled={finalCheck()}> Submit </button>
    </div>
  );
}

export default App;

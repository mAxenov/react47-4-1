import React, { useState } from 'react';
import './App.css';



function App() {
  const [inputColor, setInputColor] = useState('#34495e');
  const [backgroundColor, setBackgroundColor] = useState('#34495e');
  const [outColor, setOutColor] = useState('rgb(52,73,94)');

  function convertColor(string) {
    if (string.length === 7) {
      const re = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
      if (re.test(string)) {
        const strRgb = `rgb(${parseInt(string.substring(1, 3), 16)},${parseInt(string.substring(3, 5), 16)},${parseInt(string.substring(5, 7), 16)})`
        setOutColor(strRgb);
        setBackgroundColor(strRgb);
      } else {
        setOutColor('Ошибка!');
        setBackgroundColor('rgb(255,0,0)')
      }
    }
  }

  function handlerInputChange(e) {
    const value = e.target.value;
    setInputColor(value);
    convertColor(value);
  }

  return (
    <div style={{ background: backgroundColor }} className="App">
      <input className="input-color" onChange={handlerInputChange} value={inputColor} type="text" name="name" maxlength="7" />
      <div className="input-color out-rgb">{outColor}</div>
    </div>
  );
}

export default App;

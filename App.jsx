import './App.css';
import React, { useState } from 'react';


function App() {
  const [answer, setAnswer] = useState(null);
  const handleAnswer = (respond) => {setAnswer(respond);
  };

  return (
    <div id='header'>
      <h1 id='dwa'>Pytanie z quizu</h1>
      <p id='jeden'>Czy React to biblioteka do budowy interfejsów użytkownika?</p>
      <button onClick={() => handleAnswer('tak')} id='przycisk1'>Tak</button>
      <button onClick={() => handleAnswer('nie')} id='przycisk'>
        Nie
      </button>
      {answer && (
        <p id='pytanie'>
          {answer === 'tak' ? 'Dobrze!' : 'Spróbuj ponownie!'}
        </p>
      )}
    </div>
  );
}
 
export default App;
 

 


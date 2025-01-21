import './App.css';
import React, { useState } from 'react';


function App() {
  const [answer, setAnswer] = useState(null);
  const handleAnswer = (respond) => {setAnswer(respond);
  };

  return (
    <div id='header'>
      <h1>Pytanie z quizu</h1>
      <p>Czy React to biblioteka do budowy interfejsów użytkownika?</p>
      <button onClick={() => handleAnswer('tak')}>Tak</button>
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
 

 


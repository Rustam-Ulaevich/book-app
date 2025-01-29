import React from 'react';
import { Cards } from './conmponents/cards';
import { Header } from './conmponents/header';
import { Main } from './conmponents/main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Cards />
        <Main />
      </div>
      

    </div>
  );
}

export default App;

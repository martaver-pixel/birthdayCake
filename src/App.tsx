// @ts-nocheck
import React, { useState } from 'react';
import Years from './components/Years';
import Cake from './components/Cake';

const App = () => {
  const [years, setYears] = useState('');

  return (
    <div>
      <Years age={years ? years : ''} />
      <Cake setYears={setYears} />
    </div>
  );
};

export default App;

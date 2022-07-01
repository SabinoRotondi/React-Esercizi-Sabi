import React from "react";
import { CarDetails } from './Esercizi svolti/CarDetails';

function App() {
  return (
    <div className="App">
      <CarDetails initialData={{ model: 'Ford Mustang', color: 'Red', year: 2012, cc: 5000 }} />
    </div>
  );
}

export default App;
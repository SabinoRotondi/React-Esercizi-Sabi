import React from "react";
import FilteredList from "./Esercizi svolti/useMemo";
const list = [
  { name: 'Sabi', age: 22, id: 1 },
  { name: 'Luigi', age: 23, id: 2 },
  { name: 'Ciccio', age: 16, id: 3 }, 
  { name: 'Rick', age: 25, id: 4 },
]
console.log(list)
function App() {
  return (
    <div className="App">
      <FilteredList list={list} />
    </div>
  );
}
export default App;
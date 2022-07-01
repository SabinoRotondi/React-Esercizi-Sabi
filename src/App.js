import TodoList from "./Esercizi svolti/RenderProps";

function App() {
  return (
    <div className="App">
      <TodoList render={todo => {
        return (
          <ul>
            {todo.map((name, i) => {
              return <li key={i}>{name}
                <button type="button" onClick={e => { e.target.parentElement.remove() }}
                >Remove</button>
              </li>
            })}
          </ul>
        )
      }} />
    </div>
  );
}

export default App;
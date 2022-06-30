import React from "react";
import GithubUser2 from "./Esercizi svolti/GithhubUser2";
import GithubUser from "./Esercizi svolti/GithubUser";
import { Counter } from "./Esercizi svolti/Counter";
import {Form }from "./Esercizi svolti/Form";


function App() {
  return (
    <div className="App">
      <Counter />
      <Form />
      <GithubUser username='SabinoRotondi' />
      <GithubUser2 username='SabinoRotondi' />
    </div>
  );
}

export default App;
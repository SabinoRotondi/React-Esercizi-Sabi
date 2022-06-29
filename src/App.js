// import ClickCounter from "./Esercizi svolti/useEffect01";
// import ClickCounterSec from "./Esercizi svolti/useEffect02";
// import GithubUser from "./Esercizi svolti/useEffect03";
import GithubUsersList from "./Esercizi svolti/useEffect04";

function App() {
  // const onCounterChange = (counter) => console.log(`the counter is ${counter}`)
  return (
    <div className="App">
      {/* <ClickCounter change={onCounterChange} initialValue={2} /> */}
      {/* <ClickCounterSec /> */}
      {/* <GithubUser username='SabinoRotondi'/> */}
      <GithubUsersList />
    </div>
  );
}

export default App;
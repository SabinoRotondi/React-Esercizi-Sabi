//import Hello from './Esercizi svolti/JSX01'
//import Name from './Esercizi svolti/JSX02'
//import Sum from './Esercizi svolti/JSX05'
//import HelloSciuti from './Esercizi svolti/Components02'
//import AppSciuti from './Esercizi svolti/Components03'
//import HelloSciutiSec from './Esercizi svolti/Components06'
import Welcome from './Esercizi svolti/Props01'
import WelcomeSec from './Esercizi svolti/Props03'
import WelcomeStrong from './Esercizi svolti/Props04';
function App() {
  return (
    <div className="App">
      <Welcome name="Sabi" />
      <WelcomeSec age={22} />
      <WelcomeStrong name={<strong>StrongSabi</strong>} />
    </div>
  );
}

export default App;
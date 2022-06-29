import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './Esercizi svolti/Welcome';
import ClickCounter from './Esercizi svolti/ClickCounter';
import { NotFound } from './Esercizi svolti/NotFound';
import GitHubUsersList from './Esercizi svolti/GitHubUserList';
import ShowGitHubUser from './Esercizi svolti/ShowGitHubUser';
function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>                                                  {/*Esercizio04*/}
            <Link to='/'>Welcome</Link>
          </li>                                                 {/*Esercizio04*/}
          <li>
            <Link to='/counter'>Counter</Link>                  {/*Esercizio04*/}
          </li>
          <li>                                                  {/*Esercizio04*/}
            <Link to='/users'>Users</Link>                      {/*Esercizio04*/}
          </li>
          <li>                                                  {/*Esercizio04*/}
            <Link to='*'>A million Dollar</Link>                {/*Esercizio05*/}
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Welcome name="Sabi" />} />
          <Route path="counter" element={<ClickCounter />} />
          <Route path="users" element={<GitHubUsersList />}>    {/*Esercizio06*/}
            <Route index element={<p>Add a user and select it</p>} />   {/*Esercizio07*/}
            <Route path=":username" element={<ShowGitHubUser />} />  {/*Esercizio06*/}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GithubUser from './Esercizi Svolti/GithubUser';
import GithubUser2 from './Esercizi Svolti/GithubUser2';
import GithubUsersList from './Esercizi Svolti/GithubUsersList';
function App() {
  return (    
    <Router>
      <div className="App">
        <ul>
          <li>                                                  
            <Link to='/'>Welcome</Link>
          </li>                                                
          <li>
            <Link to='/counter'>Counter</Link>                  
          </li>
          <li>                                                  
            <Link to='/users:username'>Users</Link>                     
          </li>
          <li>                                                  
            <Link to='/userciccio'>Users 2</Link>                     
          </li>
          <li>                                                  
            <Link to='/userpippo'>Users 3</Link>                     
          </li>
          <li>                                                  
            <Link to='*'>A million Dollar</Link>                
          </li>
        </ul>
        <Routes>
          <Route path="/" element />
          <Route path="/counter" element />
          <Route path="/users:username" element={<GithubUser username='SabinoRotondi'/>}/> 
          <Route path="/userciccio" element={<GithubUser2 username=''/>}/> 
          <Route path="/userpippo" element={<GithubUsersList />}/>  
          <Route path="/*" element />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <switch>
        <Route path={['/', '/home']} exact component={Home} />
          
        <Route path="/profile">
          <Profile />
        </Route>
      </switch>
    </BrowserRouter>
  );
}

export default App;

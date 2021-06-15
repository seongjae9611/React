
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App({authService}) {
  return (
    <div class={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
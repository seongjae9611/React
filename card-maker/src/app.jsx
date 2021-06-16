
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CardRepository from './service/card_repository';

function App({FileInput, authService, cardRepository}) {
  return (
    <div class={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

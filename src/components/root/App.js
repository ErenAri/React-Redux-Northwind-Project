import { Container } from 'reactstrap';
import Navi from '../navi/Navi';
import './App.css';
import Dashboard from './Dashboard';
import {Route, Switch} from "react-router-dom";
import cartDetail from '../cart/cartDetail';

function App() {
  return (
    <Container>
      <Navi>
        <Dashboard>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/product" exact component={Dashboard}/>
          <Route path="/cart" exact component={cartDetail}/>
        </Switch>
        </Dashboard>
      </Navi>
    </Container>
    );
}

export default App;

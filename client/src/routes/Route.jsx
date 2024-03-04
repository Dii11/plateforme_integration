
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Accueil from '../modules/page/Accueil'
import APropos from '../modules/page/About'
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={<Accueil/>} />
        <Route path="/apropos" component={<APropos/>} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

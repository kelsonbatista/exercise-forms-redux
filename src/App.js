import './App.css';
import './styles/style.css';
import { BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import PersonalForm from './components/PersonalForm';
import ProfessionalForm from './components/ProfessionalForm';
import DisplayData from './components/DisplayData';
import { Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ PersonalForm } />
        <Route exact path="/professional" component={ ProfessionalForm } />
        <Route exact path="/display" component={ DisplayData } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

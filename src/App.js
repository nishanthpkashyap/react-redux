import './App.css';
import { CakeView } from './features/cake/CakeView';
import { IcecreamView } from './features/ice-cream/IcecreamView';
import { UserView } from './features/users/UserView';
import {CountryAndCities} from './components/countryAndCity';
import { CheckDelete } from './components/checkDelete';


function App() {
  return (
    <div className="App">
      <CakeView/>
      <IcecreamView/>
      <UserView/>
      <CountryAndCities/>
      <CheckDelete/>
    </div>
  );
}

export default App;

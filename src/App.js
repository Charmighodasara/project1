
import './App.css';
import Demo from './components/Demo';
import City from './containers/City';
import CityFun from './containers/CityFun';
import Counter from './containers/Counter/Counter';
import CounterFun from './containers/Counter/CounterFun';
import Country from './containers/Country';
import CountryFun from './containers/CountryFun';
import Time from './containers/time/Time';
import TimeFunctin from './containers/time/TimeFunctin';

function App() {
  return (
    <div>
      {/* <Counter /> */}
      <CounterFun />  
     
    </div>
  );
}

export default App;

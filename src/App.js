import logo from './logo.svg';
import './App.css';
import Data from './components/Data';
import { Provider } from 'react-redux';
import {store} from '../src/redux-store/store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Welcome To App</h1>
      <Data/>
    </div>
    </Provider>
  );
}

export default App;

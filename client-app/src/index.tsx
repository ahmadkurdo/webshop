import ReactDOM from 'react-dom';
import {Router} from './App/AppRouter'
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import {initialState } from './App/AppState';

ReactDOM.render(
<BrowserRouter>
  <Router />
</BrowserRouter>,document.getElementById('root'));

reportWebVitals();

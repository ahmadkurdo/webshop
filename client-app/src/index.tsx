import ReactDOM from 'react-dom';
import './App/index.css';
import 'semantic-ui-css/semantic.min.css'
import {Router} from './App/AppRouter'
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import {initialState } from './App/AppState';

ReactDOM.render(
<BrowserRouter>
  <Router {...initialState()}/>
</BrowserRouter>,document.getElementById('root'));

reportWebVitals();

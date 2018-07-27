import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Movie from './components/Movie'
import MovieDetails from './components/movieDetails'
import reducer from './store/reducer'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
<BrowserRouter>
  <Provider store = {store}>
    <App>
      <Switch>
        <Route exact path= '/' component={Movie} />
        <Route path= '/details' component={MovieDetails} />
      </Switch>
    </App>
  </Provider>
  </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();

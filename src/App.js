import React, { Component } from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import ShowComponent from './ShowComponent';
import logo from './logo.svg';
import './App.css';

const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

console.log(store);

class App extends Component {
  render() {
    return (
      <div className="App">
       <Provider store = {store}>
         <ShowComponent />
       </Provider>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import Main from './components/MainComponent';

const store = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
        <Provider store={store}>
            
              <div className="App">
                <Main />
              </div>
            
      </Provider>
    );
  }
}

export default App;
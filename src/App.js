import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import Navigation from './components/navigation';
import Content from './components/content';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <div>
                <Navigation />
                <Content />
              </div>
            </Route>
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

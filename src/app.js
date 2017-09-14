import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todos from './reducers/reducer';
import ListContainer from './containers/ListContainer';

const store = createStore(todos);

class App extends Component {

    render() {

        return (
            <Provider store={store}>
                <ListContainer/>
            </Provider>
        );
    }
}

export default App;
import React,{ Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';

export default class Todoapp extends Component {

    render(){
        const store = createStore(reducer);

        return(
            <Provider store={store}>
                <App />
            </Provider>
        );
    }

}

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider,connect } from 'react-redux';
// import todos from './reducers/reducer';
import combine from './reducers/index';
import ListContainer from './containers/ListContainer';
import AddContainer from './containers/AddContainer';
import { Actions, ActionConst , Router, Scene } from 'react-native-router-flux';

const Scenes = Actions.create(
    <Scene key='root'>
        <Scene key='list' hideNavBar component={ListContainer} type={ActionConst.REPLACE} ></Scene>
        <Scene key='add' hideNavBar component={AddContainer} type={ActionConst.REPLACE} ></Scene>
    </Scene>
);

const ConnectedRouter = connect()(Router);
const store = createStore(combine);

class App extends Component {

    render() {

        return (
            <Provider store={store}>
                <ConnectedRouter scenes={Scenes}/>
                {/*<ListContainer />*/}
            </Provider>
        );
    }
}

export default App;
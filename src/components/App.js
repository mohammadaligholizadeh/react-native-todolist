import React,{ Component } from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import { View } from 'react-native';

class App extends Component {
    render(){
        return(

            <View>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </View>

        );
    }
}

export default App;
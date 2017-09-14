import { StackNavigator } from 'react-navigation';
import todolistapp from "./splash";
import walkthrough from "./walkthrough";
import Todoapp from "./todolist";
// import addtodo from "./addtodo";
import App from "./app";
// import AddContainer from './containers/AddContainer';
import AddContainer from './containers/AddContainer';
// import PageTwo from './listview';


const Routes = {
    InitialScreen: {
        screen: todolistapp
    },
    WalkthroughScreen: {
        screen: walkthrough
    },
    TodolistScreen: {
        screen: App
    },
    AddtodoScreen: {
        screen: AddContainer
    }
};

const MyApplicationNavigator = StackNavigator(Routes, {
    initialRouteName: 'InitialScreen',
    headerMode: 'none',
});

export default MyApplicationNavigator;
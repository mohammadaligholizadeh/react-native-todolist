import { StackNavigator } from 'react-navigation';
import todolistapp from "./splash";
import walkthrough from "./walkthrough";
import TodoApp from "./todolist";


const Routes = {
    InitialScreen: {
        screen: todolistapp
    },
    WalkthroughScreen: {
        screen: walkthrough
    },
    TodolistScreen: {
        screen: TodoApp
    }
};

const MyApplicationNavigator = StackNavigator(Routes, {
    initialRouteName: 'InitialScreen',
    headerMode: 'none',
});

export default MyApplicationNavigator;
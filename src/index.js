import { StackNavigator } from 'react-navigation';
import todolistapp from "./splash";
import walkthrough from "./walkthrough";
import Todoapp from "./app";


const Routes = {
    InitialScreen: {
        screen: todolistapp
    },
    WalkthroughScreen: {
        screen: walkthrough
    },
    TodolistScreen: {
        screen: Todoapp
    }
};

const MyApplicationNavigator = StackNavigator(Routes, {
    initialRouteName: 'InitialScreen',
    headerMode: 'none',
});

export default MyApplicationNavigator;
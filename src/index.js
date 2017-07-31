import { StackNavigator } from 'react-navigation';
import todolistapp from "./splash";

const Routes = {
    InitialScreen: {
        screen: todolistapp
    }
};

const MyApplicationNavigator = StackNavigator(Routes, {
    initialRouteName: 'InitialScreen',
    headerMode: 'none',
});

export default MyApplicationNavigator;
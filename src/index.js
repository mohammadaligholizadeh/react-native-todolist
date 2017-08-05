import { StackNavigator } from 'react-navigation';
import todolistapp from "./splash";
import walkthrough from "./walkthrough";

const Routes = {
    InitialScreen: {
        screen: todolistapp
    },
    WalkthroughScreen: {
        screen: walkthrough
    }
};

const MyApplicationNavigator = StackNavigator(Routes, {
    initialRouteName: 'InitialScreen',
    headerMode: 'none',
});

export default MyApplicationNavigator;
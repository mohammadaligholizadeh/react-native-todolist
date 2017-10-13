import { ActionConst } from 'react-native-router-flux';


const nav = (state = {}, {type, scene}) => {
    switch(type){
        case ActionConst.FOCUS:
            return { ...state, scene };
        default:
            return state;
    }
}

export default nav;
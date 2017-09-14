import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import Addtodo from '../components/addtask';

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text))
        }
    }
}

export default connect(()=>{}, mapDispatchToProps)(Addtodo);
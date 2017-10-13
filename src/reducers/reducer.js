const todo = (state={todoList:{}}, action) => {
    const todoList = { ...state.todoList };
    switch (action.type) {
        case 'ADD_TODO':
            const newId = Object.keys(todoList).length;
            todoList[`todo${newId}`] = {text:action.text , time: new Date()};
            return { ...state, todoList };
        default:
            return state
    }
};

export default todo;
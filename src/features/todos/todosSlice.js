import axios from "axios";

export const todosReducer = function (state = [], action) {
  if(action.type === "SET_TODOS"){
    return action.payload
  }
  if (action.type === "add") {
    return [
      ...state,
      { id: Math.random(), title: action.payload.title, completed: false },
    ];
  }
  if (action.type === "delete") {
    return state.filter((todo) => {
        return todo.id !== action.payload.id;
      })
  }
  if(action.type === "undo"){
    return state.map(todo=>{
      if(todo.id===action.payload.id){
        return {
          ...todo,
          completed: false
        }
      }else{
        return todo
      }
    })
  }
  if (action.type === "mark-as-completed") {
    return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...action.payload,
            completed: true,
          };
        } else {
          return {
            ...todo,
          };
        }
      })
  }
  return state;
};

export const fetchTodosSuccess = (todos) => ({
  type: "SET_TODOS",
  payload: todos.slice(0,10).map((todo)=>{
    return {
      ...todo,
      completed: false,
    }
  })
});

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?limit=10'); 
      dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      throw new Error('Error fetching todos:', error )
    }
  };
};

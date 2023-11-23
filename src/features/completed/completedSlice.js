export const initialCompleted = [];

export const completedReducer = function(state=initialCompleted,action){
  if (action.type === "mark-as-completed") {
    return [
        ...state,
        { id: action.payload.id, title: action.payload.title, completed: true},
    ]
  }
  if(action.type === "undo"){
    return state.filter( todo => todo.id !== action.payload.id)
  }
  return state;
}
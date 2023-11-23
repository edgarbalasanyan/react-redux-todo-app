export const complete = function(id,title){
  return {
    type: "mark-as-completed",
    payload: {
      id: id,
      title: title,
      completed: true
    },
  }
}

export const undo = function(id){
  return {
    type: "undo",
    payload: {
      id: id
    }
  }
}
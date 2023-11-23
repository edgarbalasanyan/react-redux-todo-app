import axios from "axios";

export const add = function(text){
  return {
    type: "add",
    payload: {
      title: text,
    },
  }
}

export const deleteTodo = function(id){
  return {
    type: "delete",
    payload: {
      id: id
    }
  }
}


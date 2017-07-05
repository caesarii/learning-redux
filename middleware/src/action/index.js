import {ADD_TODO} from '../constants'

const addTodo = (text)=> {
  console.log('aciton add todo ')
  return {
    type: ADD_TODO,
    text
  }
}


export {addTodo, }

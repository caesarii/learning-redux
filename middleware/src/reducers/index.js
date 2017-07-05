import { combineReducers } from 'redux'
import { ADD_TODO} from '../constants'

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    default:
      return state
  }
}

const reducers = combineReducers({
  todos: todos
})

export default reducers



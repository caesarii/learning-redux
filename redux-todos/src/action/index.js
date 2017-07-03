import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER} from '../constants'


// actionCreator
function addTodo(text) {
     return {type: ADD_TODO, text}
 }

function completeTodo(index) {
     return {type: COMPLETE_TODO, index}
 }

function setVisibilityFilter(filter) {
     return {type: SET_VISIBILITY_FILTER, filter}
 }
 
 export {addTodo, completeTodo, setVisibilityFilter}
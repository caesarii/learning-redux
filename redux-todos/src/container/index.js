import { connect } from 'react-redux'
import { VisibilityFilters } from '../constants'
import AppView  from '../components/index'
import {addTodo, completeTodo, setVisibilityFilter} from '../action'


function mapStateToProps (state) {
  return {
    visibleTodos    : selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
  }
}

// 过滤层
function selectTodos (todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text))
    },
    completeTodo: (index) => {
      dispatch(completeTodo(index))
    },
    changeFilter: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView)
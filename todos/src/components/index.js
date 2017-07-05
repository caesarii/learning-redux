import React, {Component, PropTypes} from  "react"
import AddTodo from "../components/AddTodo"
import TodoList from "../components/TodoList"
import Footer from "../components/Footer"

class AppView extends Component {
    render() {
        // 由 connect 插入
        const {visibleTodos, visibilityFilter, addTodo, completeTodo, changeFilter} = this.props;

        return (
            <div>
                <AddTodo
                    onAddClick={addTodo}
                />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={completeTodo}
                />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={changeFilter}
                />
            </div>
        )
    }
}

AppView.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        "SHOW_ALL",
        "SHOW_COMPLETED",
        "SHOW_ACTIVE"
    ]).isRequired
};

export default AppView;
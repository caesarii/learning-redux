
import React, {Component, PropTypes} from "react"

class AddTodo extends Component {
    constructor (props) {
      super(props)
      this.state = {
        inputVal: " "
      }
    }

    // 这样不能清空 input, 加上clear
    // 好像还是直接操作 dom 方便
    handleClick(e) {
        this.props.onAddClick(this.state.inputVal);
        this.setState({
          inputVal: ''
        })
        
    }
    handleChange(e) {
      this.setState({
        inputVal: e.target.value
      })
    }
    handleBlur(e) {
      e.target.value = ''
    }
    render() {
        const {inputValue} = this.state
      console.log('val', this.state.inputVal)
        return (
            <div>
                <input type="text" value={inputValue} onChange={e => this.handleChange(e)} onBlur={(e) => {this.handleBlur(e)}} />
                <button onClick={(e) => this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }
}


AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequire
};

export default AddTodo
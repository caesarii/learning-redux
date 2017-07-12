import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'

// import { setVisibilityFilter } from '../actions'
// import Link from '../components/Link'
// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter
// })
//
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     dispatch(setVisibilityFilter(ownProps.filter))
//   }
// })
//
// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link)

const FilterLink = ({filter, children}) => {
    return (
        <NavLink
            to={filter === 'all' ? '' : filter}
            activeStyle={{
                textDecoration: 'none',
                color: 'black'
            }}
        >
            {children}
        </NavLink>
    )
}




export default FilterLink

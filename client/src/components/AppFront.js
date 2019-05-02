import React, { Component } from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authActions'

// const AppFront = () => (
//     <div>
//         <AddTodo />
//         <VisibleTodoList />
//         <Footer />
//     </div>
// )

class AppFront extends Component {
    onLogoutClick = e => {
        e.preventDefault()
        this.props.logoutUser()
    }
    render() {
        
        const { user } = this.props.auth
        return (
            <React.Fragment>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            <div style={{ height: '75vh' }} className='container valign-wrapper'>
                <div className='row'>
                    <div className='col s12 center-align'>
                        <h4>
                            <b>Hey there,</b> { user.name.split(' ')[0] }
                            <p className='flow-text grey-text text-darken-1'>
                            You are logged in
                            </p>
                        </h4>
                        <button style={{
                            width: '150px',
                            borderRadius: '3px',
                            letterSpacing: '1.5px',
                            marginTop: '1rem'
                        }}
                        onClick={ this.onLogoutClick }
                        className='btn btn-large waves-effect waves-light hoverable blue accent-3'
                        >Logout
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

AppFront.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps,
    { logoutUser }
)(AppFront)
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
    render() {
        return (
            <div style={{ height: '75vh' }} className='container valign-wrapper'>
                <div className='row'>
                    <div className='col s12 center-align'>
                        <h4>
                            Fullstack{' '}<b>ToDo</b> list app{' '}
                            
                        </h4>
                        <p className='flow-text grey-text text-darken-1'>
                            {' '}using{' '}
                            <span style={{ fontFamily: 'monospace' }}>passport</span>
                            {' '}and{' '}
                            <span style={{ fontFamily: 'monospace' }}>JWTs</span>
                            {' '}for user auth{' '}
                        </p>
                        <br />

                        <Link to='/register' style={{
                            width: '150px',
                            borderRadius: '3px',
                            letterSpacing: '1.5px'
                        }}
                        className='btn btn-large waves-effect waves-light hoverable blue accent-3'
                        >Register</Link>

                        <Link to='/login' style={{
                            marginLeft: '2rem',
                            width: '150px',
                            borderRadius: '3px',
                            letterSpacing: '1.5px'
                        }}
                        className='btn btn-large waves-effect white hoverable black-text'
                        >Log In</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing
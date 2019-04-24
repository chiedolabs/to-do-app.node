import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            errors: {}
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault()
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm
        }
    }
    render() {
        const { errors } = this.state
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col s8 offset-s2'>
                        <Link to='/' className='btn-flat waves-effect'>
                            <i className='material-icons left'>keyboard_backspace</i>
                            Back to home
                        </Link>
                        <div className='col s12' style={{ paddingLeft: '11.250px' }}>
                            <h4><b>Register</b></h4>
                            <p className='grey-text text-darken-1'>
                                Already have an account?
                                <Link to='/login'>Login</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id='name'
                                    type='text'
                                />
                                <label htmlFor='name'>Name</label>
                            </div>
                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id='email'
                                    type='text'
                                />
                                <label htmlFor='name'>Email</label>
                            </div>
                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id='password'
                                    type='password'
                                />
                                <label htmlFor='name'>Password</label>
                            </div>
                            <div className='input-field col s12'>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.passwordConfirm}
                                    error={errors.passwordConfirm}
                                    id='passwordConfirm'
                                    type='password'
                                />
                                <label htmlFor='name'>Confirm Password</label>
                            </div>
                            <div className='col s12' style={{ paddingLeft: '11.250px ' }}>
                                <button
                                    style={{
                                        width: '150px',
                                        borderRadius: '3px',
                                        letterSpacing: '1.5px',
                                        marginTop: '1rem'
                                    }}
                                    type='submit'
                                    className='btn btn-large waves-effect waves-light hoverable blue accent-3'
                                >Sign up
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register

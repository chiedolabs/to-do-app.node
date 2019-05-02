import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <input ref={node => (input = node)} />
                <button style={{
                    width: '100px',
                    borderRadius: '3px',
                    letterSpacing: '1.5px',
                    marginTop: '1rem'
                }}
                type='submit'
                className='btn btn-medium waves-effect waves-light hoverable green accent-3'
                >Add something</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)
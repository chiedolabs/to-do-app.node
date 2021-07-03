// set and delete the Authorization header for our axios requests depending on whether a user is logged in or not
import axios from 'axios'
import authReducers from '../reducers/authReducers';

const setAuthToken = token => {
    if (token) {
        // Appy auth token to every request if logged in
        axios.defaults.headers.common['Authorization'] = token
    } else {
        // Delete auth header
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthToken
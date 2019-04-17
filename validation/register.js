const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateRegisterInput (data) {
  let errors = {}

  // Convert empty fields to an empty string
  // to use validator functions
  data.name = !isEmpty(data.name) ? data.name : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.password = !isEmpty(data.password) ? data.password : ''
  data.passwordConfirm = !isEmpty(data.passwordConfirm) ? data.passwordConfirm : ''

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name is required'
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required'
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required'
  }
  if (Validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = 'Please confirm the password'
  }
  if (!Validator.isLength(data.password, { min: 8, max: 32 })) {
    errors.password = 'Password must be 8-32 characters long'
  }
  if (!Validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = 'Passwords must match'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

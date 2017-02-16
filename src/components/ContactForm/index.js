import React from 'react'
import { Field, reduxForm } from 'redux-form'

const renderTextInput = field => {
	const { input, label, type, meta: { touched, error } } = field
	return (
    // asyncValidating is coming true after the call of asyncValidate
		<div >
			<label>{label}</label>
			{' '}
      <input {...input} type={type} className={input.name}/>
			{' '}
			{touched && error && <span className='help-block'>{error}</span>}
		</div>
	)
}


const contactForm = (props) => {
  const { handleSubmit, onChange} = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component={renderTextInput} type="text" />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component={renderTextInput} type="text" />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component={renderTextInput} type="email"/>
        </div>
      </div>
      <button type="submit"></button>
    </form>
  )
}

export default reduxForm({
  form: 'contact',
  initialValues: {
    "firstName": "Please Enter First Name",
    "lastName": "Please Enter Last Name",
    "email": "soni@gmail.com"
  }
})(contactForm)

// // You have to connect() to any reducers that you wish to connect to yourself
// InitializeFromStateForm = connect(
//   state => ({
//     initialValues: state.account.data // pull initial values from account reducer
//   }),
//   { load: loadAccount }               // bind account loading action creator
// )(InitializeFromStateForm)


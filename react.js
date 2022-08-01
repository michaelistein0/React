import React, { useState } from 'react';
improt Logo from '/logo';
import 'App.css';


function App (){

	const [values, setValues] = useState({
		Firstname:'';
		Lastname:'';
		Email:'';
		});

const [submitted, setSubmit] = useState(false);

const [valid, setValid] =useState(false);

const handleFirstNameInputChange = (event) =>{
	setValues({...values ,Firstname: event.target.value})
}

const handleFirstNameInputChange = (event) =>{
	setValues({...values ,Lastname: event.target.value})
}

const handleEmailInputChange = (event) =>{
	setValues({...values ,Email: event.target.value})
}

const handleSubmitInputChange = (event) =>{
	event.preventDefault();
	if(values.firstname && values.Lastname && values.Email){
		setvalid(true);

	}
	setSubmitted(true); 
}

	return(){
		<div className='container'/>
		<form className='form-register' onSubmit={handleSubmit}/>
		{subimitted && valid ? <div className='success-message'>success! Thank you for registering</div> : null}

		<input 
		disable={submitted}
		onChange={handleFirstNameInputChange}
		value={values.Firstname} 
		className='input1' 
		type ='' 
		placeholder='First Name' 
		name ='Firstname' />
		{submitted &&! values.Fisrtname ? <span>please enter a first name</span> :null }

		<input 
		disable={submitted}
		onChange={handleLastNameInputChange}
		value={values.Lastname} 
		className='input2' 
		type ='' 
		placeholder='First Name' 
		name ='Lastname'/>
		{submitted &&! values.Lastname ? <span>please enter a last name</span> :null }


		<input 
		disable={submitted}
		onChange={handleEmailInputChange}
		value={values.Email} 
		className='input3' 
		type ='' 
		placeholder='First Name' 
		name ='Email' />
		{submitted &&! values.Email ? <span>please enter an email address</span>:null}


		<button 
		className='Register' 
		type ='submit'>Register</button>
	}
}
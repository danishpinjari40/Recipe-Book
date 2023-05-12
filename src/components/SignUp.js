import React, { useState } from 'react';
import './signup.css';
import InputControl from './InputControl';
import { Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

const Signup = () => {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		name: '',
		email: '',
		pass: '',
	});

	// for error handling
	const [errorMsg, setErrorMsg] = useState('');
	// for submit btn
	const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);

	const handleSubmit = () => {
		// console.log(values)

		if (!values.name || !values.email || !values.pass) {
			setErrorMsg('Please Fill All the Fields');
			return;
		}
		setErrorMsg('');
		setsubmitButtonDisabled(true);
		createUserWithEmailAndPassword(auth, values.email, values.pass)
			.then(async (res) => {
				setsubmitButtonDisabled(false);
				const user = res.user;
				await updateProfile(user, {
					displayName: values.name,
				});
				// redirecting to home page
				navigate('/login');
			})
			.catch((err) => {
				setsubmitButtonDisabled(false);
				setErrorMsg(err.message);
			});
	};

	return (
		<div className="container">
			<div className="innerBox">
				<h1 className="heading">Sign Up</h1>
				<InputControl
					label="Name"
					placeholder="Enter Your name"
					onChange={(event) =>
						setValues((prev) => ({ ...prev, name: event.target.value }))
					}
				/>
				<InputControl
					label="Email"
					placeholder="Enter Your Email"
					onChange={(event) =>
						setValues((prev) => ({ ...prev, email: event.target.value }))
					}
				/>
				<InputControl
					label="password"
					placeholder="Enter Your password"
					onChange={(event) =>
						setValues((prev) => ({ ...prev, pass: event.target.value }))
					}
				/>
				<div className="footer">
					<b className="error">{errorMsg}</b>
					<button onClick={handleSubmit} disabled={submitButtonDisabled}>
						Sign Up
					</button>
					<p>
						Already have an account?{' '}
						<span>
							<Link to="/login">login</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Signup;

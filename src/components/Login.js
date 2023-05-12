import './login.css';
import InputControl from './InputControl';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		email: '',
		pass: '',
	});

	// for error handling
	const [errorMsg, setErrorMsg] = useState('');
	// for submit btn
	const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);

	const handleSubmit = () => {
		// console.log(values)

		if (!values.email || !values.pass) {
			setErrorMsg('Please Fill All the Fields');
			return;
		}
		setErrorMsg('');
		setsubmitButtonDisabled(true);
		signInWithEmailAndPassword(auth, values.email, values.pass)
			.then(async (res) => {
				setsubmitButtonDisabled(false);

				// redirecting to home page
				navigate('/');
			})
			.catch((err) => {
				setsubmitButtonDisabled(false);
				setErrorMsg(err.message);
			});
	};

	// const handleSignOut = () => {
	// 	signOut(auth)
	// 		.then(async (res) => {
	// 			setsubmitButtonDisabled(false);

	// 			// redirecting to home page
	// 			navigate('/login');
	// 		})
	// 		.catch((err) => {
	// 			setsubmitButtonDisabled(false);
	// 			setErrorMsg(err.message);
	// 		});
	// };

	return (
		<div className="container">
			<div className="innerBox">
				<h1 className="heading">login</h1>
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
						Log in
					</button>
					<p>
						Already have an account?{' '}
						<span>
							<Link to="/signup">Sign Up</Link>
						</span>
					</p>
				</div>
				{/* <button onClick={handleSignOut}>Sign Out</button> */}
			</div>
		</div>
	);
};

export default Login;

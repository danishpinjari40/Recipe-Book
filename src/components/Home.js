import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Home = (props) => {
	const navigate = useNavigate();
	const handleSignOut = () => {
		signOut(auth)
			.then(async (res) => {
				// redirecting to home page
				setTimeout(() => {
					navigate('/login');
				}, 3000);
			})
			.catch((err) => {
				console.log('Error', err);
			});
	};
	return (
		<div>
			<div>
				<h1>
					<Link to="/login">Login</Link>
				</h1>
				<br />
				<h1>
					<Link to="/signup">signup</Link>
				</h1>
			</div>
			<br />
			<br />
			<br />
			<h2>{props.name ? `Welcome - ${props.name}` : 'login Please'} </h2>
			<button onClick={handleSignOut}>Sign Out</button>
		</div>
	);
};

export default Home;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {

const [userName, setUserName] = useState("");

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
		if(user){
			setUserName(user.displayName)
		}else setUserName("")
		});
	}, []);

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/" element={<Home name={userName} />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;

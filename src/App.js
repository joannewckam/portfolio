import './App.css';
import React from 'react';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
}

export default App;

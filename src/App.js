import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/styles';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

const useStyles = makeStyles({
	root: {
		height: '100%',
		width: '100%',
		position: 'absolute',
		backdropFilter: 'blur(10px)'
	}
});

export default function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}
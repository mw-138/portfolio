import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-scroll';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		textAlign: 'center'
	},
	center: {
		width: 'fit-content',
		height: 'fit-content',
		color: 'white'
	},
	title: {
		textTransform: 'uppercase',
		fontSize: '50px'
	},
	subtitle: {
		textTransform: 'uppercase',
		fontSize: '30px'
	},
	btn: {
		borderRadius: '2rem',
		backgroundColor: 'transparent',
		border: '2px solid white',
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		width: '200px',
		height: '50px',
		transition: '250ms ease-in-out',
		'&:hover': {
			backgroundColor: 'white',
			color: 'black'
		}
	}
});

export default function Home() {
	const classes = useStyles();
	return (
		<div id="home" className={classes.root}>
			<div className={classes.center}>
				<h1 className={classes.title}>Hi, I'm Matthew Watson</h1>
				<h2 className={classes.subtitle}>An aspiring games developer</h2>
				<br />
				<Link to="about" spy={true} smooth={true}>
					<button className={classes.btn}>Get Started</button>
				</Link>
			</div>
		</div>
	)
}
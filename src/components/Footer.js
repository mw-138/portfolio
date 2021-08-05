import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		width: '100%',
		backgroundColor: 'white',
		color: 'black',
		padding: '2rem',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default function Footer() {
	const classes = useStyles();
	return (
		<div id="footer" className={classes.root}>
			<p>Made by Matthew Watson | {new Date().getFullYear()}</p>
		</div>
	)
}
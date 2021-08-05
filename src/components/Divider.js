import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		marginTop: '1rem',
		marginBottom: '1rem'
	}
});

export default function Divider(props) {
	const classes = useStyles();
	return (
		<div
			className={classes.root}
			style={{
				backgroundColor: props.color,
				width: props.width,
				height: props.height
			}}
		></div>
	)
}
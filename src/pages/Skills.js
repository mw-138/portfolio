import React from 'react';
import { makeStyles } from '@material-ui/styles';
import * as Config from '../config';

import Divider from '../components/Divider';
import SkillCard from '../components/SkillCard';

const useStyles = makeStyles({
	root: {
		backgroundColor: 'white',
		color: 'black',
		width: '100%',
		height: 'fit-content',
		padding: '2rem',
	},
	body: {
		position: 'relative',
		flexDirection: "row",
		display: "flex",
	},
});

export default function Skills() {
	const classes = useStyles();
	return (
		<div id="skills" className={classes.root}>
			<h1>Skills</h1>
			<Divider color="black" width="100%" height="2px" />
			<div className={classes.body} id="skillBody">
				{Config.skillList.map((item, index) => (
					<SkillCard
						key={`skillCard-${index}`}
						title={item.title}
						points={item.points}
					/>
				))}
			</div>
		</div>
	)
}
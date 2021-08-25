import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Divider from '../components/Divider';
import BoldLink from '../components/BoldLink';

const useStyles = makeStyles({
	root: {
		backgroundColor: 'white',
		color: 'black',
		width: '100%',
		height: 'fit-content',
		padding: '2rem'
	}
});

export default function About() {
	const classes = useStyles();

	const getAge = () => {
		const diffInMs = Math.abs(new Date() - new Date("08/13/1999"));
		const age = diffInMs / (1000 * 60 * 60 * 24 * 365);
		return Math.floor(age);
	}

	return (
		<div id="about" className={classes.root}>
			<h1>About</h1>
			<Divider color="black" width="100%" height="2px" />
			<p>
				Hello, my name is Matthew Watson, {getAge()}, and I am an aspiring games developer from the United Kingdom.
				I am a passionate programmer with 5+ years of experience working with C# and Unity. Ready to utilize my skills and passion within the games industry
				to create games to further the mission of a company.
			</p>
			<br />
			<h2>College</h2>
			<Divider color="black" width="100px" height="2px" />
			<p>
				I have spent 5 years at <BoldLink link="https://www.ncl-coll.ac.uk/">Newcastle College</BoldLink> learning the core fundamentals of game development.
				Within the many years I spent at College, I learnt about many different areas/topics in game development such as:
			</p>
			<ul className="mapList">
				{[
					"3D Modelling",
					"Programming",
					"Storyboards",
					"Game Monetization",
					"Multiplayer Game Development",
					"Mobile Game Development",
					"VR Game Development",
				].map((item, index) => <li key={`aboutMapListOption-${index}`}>{item}</li>)}
			</ul>
			<p>
				In my studies, I focussed more on the programming side of things as that is an area I hold more interest within game development.
				I used C# to create my College projects within Unity.
				Before starting College, I had some prior knowledge of Unity which helped give me a boost with my College projects.
			</p>
			<br />
			<h2>Graduation</h2>
			<Divider color="black" width="150px" height="2px" />
			<p>I graduated from Newcastle College in 2021 receiving an Upper Second-class Honours degree (2:1) in <BoldLink link="https://www.ncl-coll.ac.uk/courses/775000430300711/bsc-hons-games-technologies-top-up">BSc (Hons) Games Technologies</BoldLink>.</p>
		</div>
	)
}
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
		padding: '2rem',
	},
	body: {
		display: 'flex',
		flexDirection: 'row'
	},
	skills: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	skillEntry: {
		lineHeight: '30px',
		listStyle: 'none',
		textIndent: -30
	}
});

export default function Skills() {
	const classes = useStyles();

	const renderSection = (data) => {
		return (
			<div>
				<h2 style={{ textDecoration: 'underline', textUnderlineOffset: '15px' }}>{data.title}</h2>
				<ul className="mapList">
					{data.points.map((item) => {
						if (typeof (item) === 'object') {
							if (item.link) {
								return <li className={classes.skillEntry}><BoldLink link={item.link}>{item.label}</BoldLink></li>;
							} else {
								return <li className={classes.skillEntry}>{item.label}</li>;
							}
						} else {
							return <li className={classes.skillEntry}>{item}</li>;
						}
					})}
				</ul>
			</div>
		)
	}

	return (
		<div id="skills" className={classes.root}>
			<h1>Skills</h1>
			<Divider color="black" width="100%" height="2px" />
			<div className={classes.body}>
				{[
					{
						title: "Languages",
						points: [
							"C#",
							"JavaScript",
							"TypeScript",
							"Lua",
							"HTML",
							"CSS"
						]
					},
					{
						title: "Engines / Frameworks",
						points: [
							{ label: "Unity", link: "https://unity.com/" },
							{ label: "Unreal Engine", link: "https://www.unrealengine.com/en-US/" },
							{ label: "Monogame", link: "https://www.monogame.net/" },
							{ label: "React", link: "https://reactjs.org/" },
						]
					},
					{
						title: "Tools",
						points: [
							{ label: "Trello", link: "https://trello.com/en-GB" },
							{ label: "GitHub", link: "https://github.com/" },
							{ label: "Adobe Photoshop", link: "https://www.adobe.com/uk/products/photoshop.html" }
						]
					},
					{
						title: "Fields",
						points: [
							"Procedural Generation",
							"Gameplay",
							// "Tools",
							"Scripting"
						]
					}
				].map((item) => (
					<div
						style={{
							flex: 1,
							minHeight: '100px',
							maxHeight: 'fit-content',
							display: 'block',
							position: 'relative'
						}}
					>
						{renderSection(item)}
					</div>
				))}
			</div>
		</div>
	)
}
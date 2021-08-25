import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Divider from '../components/Divider';
import Card from '../components/Card';

import MonogameProjectThumbnail from '../assets/images/project_thumbnails/monogame_project.png';
import AndroidPlatformerThumbnail from '../assets/images/project_thumbnails/college_android_game.jpg';
import VRShooterThumbnail from '../assets/images/project_thumbnails/vr_shooter_game.jpeg';
import EscapeRoomThumbnail from '../assets/images/project_thumbnails/escape_room_game.jpeg';
import ProceduralToolThumbnail from '../assets/images/project_thumbnails/procedural_tool.png';
import RPGClickerThumbnail from '../assets/images/project_thumbnails/rpg_clicker.png';
import WaveSurvivalThumbnail from '../assets/images/project_thumbnails/wave_survival.jpeg';
import CLSThumbnail from '../assets/images/project_thumbnails/cls.jpg';
import MoneyCatcherThumbnail from '../assets/images/project_thumbnails/money_catcher.png';

const useStyles = makeStyles({
	root: {
		backgroundColor: 'white',
		color: 'black',
		width: '100%',
		height: 'fit-content',
		padding: '2rem'
	},
	body: {
		position: 'relative',
		display: 'grid',
		gridAutoFlow: 'column',
		gridTemplateRows: 'repeat(3, 1fr)',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gap: '20px'
	},
});

export default function Projects() {
	const classes = useStyles();
	return (
		<div id="projects" className={classes.root}>
			<h1>Projects</h1>
			<Divider color="black" width="100%" height="2px" />
			<div className={classes.body}>
				{[
					{
						title: "Money Catcher",
						platform: "PC",
						engine: "Unity",
						description: "Money Catcher is a game where you catch money falling from the sky and obtain a score as high as possible in 60 seconds.",
						img: MoneyCatcherThumbnail,
						link: "https://lionstargames.itch.io/money-catcher"
					},
					{
						title: "RPG Clicker",
						platform: "PC",
						engine: "Unity",
						description: "An RPG clicker game that includes enemies, bosses and loot. Collect loot to be able to do more damage to your enemies.",
						img: RPGClickerThumbnail,
						link: "https://lionstargames.itch.io/rpg-clicker"
					},
					{
						title: "Wave-based RPG Survival",
						platform: "PC",
						engine: "Unity",
						description: "This is a first-person zombie survival game created in Unity that was made for a college assignment. In this game, you fight waves of enemies whilst also being able to unlock new areas of the map, get new weapons with an RPG loot system, weapon upgrades and boss fights.",
						img: WaveSurvivalThumbnail
					},
					{
						title: "Escape Room",
						platform: "PC",
						engine: "Unity",
						description: "This is an escape room created in Unity that was made for a college assignment. This game contains multiple rooms that the player has to figure out how to get through. Each room contains one or more puzzles in order for them to complete to advance further into the level.",
						img: EscapeRoomThumbnail
					},
					{
						title: "2D Platformer",
						platform: "Android",
						engine: "Unity",
						description: "This is a 2D platformer project created in Unity that was made for a college assignment. You can find your way around the level collecting coins and opening crates get loot. You are also able to rotate the entire level to access areas you would not normally be able to.",
						img: AndroidPlatformerThumbnail
					},
					{
						title: "Tile-based Prototype Project",
						platform: "PC",
						engine: "Monogame",
						description: "This was a prototype project made within a group of 3 (including myself) for a college assignment. (ADD MORE)",
						img: MonogameProjectThumbnail
					},
					{
						title: "VR Shooter Game",
						platform: "Oculus",
						engine: "Unity",
						description: "This is a VR shooter game created in Unity that was made for a college assignment. This game contains 3 levels in which the player has to shoot all targets to complete each level and progress further.",
						img: VRShooterThumbnail
					},
					{
						title: "Procedural Terrain Generation Tool",
						platform: "PC",
						engine: "Unity",
						description: "This is a Unity tool that I made for my dissertation project. This allows users to create procedurally generated terrain with foliage and textures within a couple minutes.",
						img: ProceduralToolThumbnail
					},
					{
						title: "Customizable Levelling System v2.0",
						platform: "PC",
						engine: "Unity",
						description: "This is a Unity package that I created and uploaded onto the Unity Asset Store. This is a levelling system that can be easily integrated into any game project.",
						img: CLSThumbnail,
						link: "https://assetstore.unity.com/packages/tools/gui/customizable-levelling-system-v2-120348"
					},
				].map((item, index) => (
					<Card
						key={`projectCard-${index}`}
						title={item.title}
						platform={item.platform}
						engine={item.engine}
						description={item.description}
						img={item.img}
						link={item.link}
					/>
				))}
			</div>
		</div>
	)
}
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-scroll';

import Logo from '../assets/images/logos/logo_light.png';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: 'fit-content',
		position: 'absolute',
		display: 'block'
	},
	navList: {
		margin: 0,
		padding: '1rem 0',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	navItem: {
		listStyle: 'none',
		marginRight: '2rem',
		transition: '250ms ease-in-out',
		cursor: 'pointer',
		'&:first-child': {
			marginRight: 'auto',
			marginLeft: '2rem'
		},
		'&:first-child:hover': {
			transform: 'scale(1.2)'
		}
	},
	navItemLink: {
		color: 'white'
	},
	navItemLinkBtn: {
		color: 'black'
	},
	headerBtn: {
		fontFamily: 'Montserrat',
		fontSize: '1rem',
		backgroundColor: 'white',
		color: 'black',
		border: 'none',
		outline: 'none',
		borderRadius: '0.2rem',
		padding: '0.5rem 1rem',
	}
});

export default function Header() {
	const renderItem = (item) => {
		switch (item.type) {
			case 'text':
				return (
					<Link className={classes.navItemLink} to={item.link} spy={true} smooth={true}>
						<a className="header-label">{item.label}</a>
					</Link>
				)
			case 'button':
				return (
					<button className={classes.headerBtn}>
						<Link className={classes.navItemLinkBtn} to={item.link} spy={true} smooth={true}>
							<a>{item.label}</a>
						</Link>
					</button>
				)
			case 'img':
				return <img src={item.img} width={50} height={50} alt="" />
			default:
				return <div></div>
		}
	}
	const classes = useStyles();
	return (
		<header className={classes.root}>
			<nav>
				<ul className={classes.navList}>
					{[
						{ type: "img", link: "home", img: Logo },
						{ type: "text", link: "about", label: "About" },
						{ type: "text", link: "skills", label: "Skills" },
						{ type: "text", link: "projects", label: "Projects" },
						{ type: "text", link: "contact", label: "Contact" }
					].map((item, index) => (
						<li className={classes.navItem}>
							{renderItem(item)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
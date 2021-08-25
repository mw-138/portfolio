import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Divider from '../components/Divider';
import BoldLink from '../components/BoldLink';

import EmailBlackLogo from '../assets/images/logos/email_black.png';
import LinkedInBlackLogo from '../assets/images/logos/linkedin_black_small.png';

const useStyles = makeStyles({
	root: {
		backgroundColor: 'white',
		color: 'black',
		width: '100%',
		height: 'fit-content',
		padding: '2rem'
	},
	container: {
		display: 'block'
	}
});

export default function Contact() {
	const classes = useStyles();
	return (
		<div id="contact" className={classes.root}>
			<h1>Contact</h1>
			<Divider color="black" width="100%" height="2px" />
			<div className={classes.container}>
				{[
					{
						link: "mailto:mattheww138@gmail.com",
						label: "Email",
						icon: EmailBlackLogo
					},
					{
						link: "https://www.linkedin.com/in/matthew-watson-311642170/",
						label: "LinkedIn",
						icon: LinkedInBlackLogo
					}
				].map((contact, index) => (
					<div
						key={`contactOption-${index}`}
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							marginRight: '20px'
						}}
					>
						<img src={contact.icon} width={25} height={25} alt="" />
						&nbsp;&nbsp;
						<BoldLink link={contact.link}>{contact.label}</BoldLink>
					</div>
				))}
			</div>
		</div>
	)
}
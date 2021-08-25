import React from 'react';
import { makeStyles } from '@material-ui/styles';
import * as Config from '../config';

import Divider from '../components/Divider';
import ProjectCard from '../components/ProjectCard';

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
	},
});

export default function Projects() {
	const classes = useStyles();
	const [projectSearch, setProjectSearch] = React.useState("");

	const handlePlayerSearch = (e) => {
		setProjectSearch(e.target.value);
	}

	const handleSearchList = () => {
		let result = Config.projectList.filter((project) => {
			const title = String(project.title).toLowerCase();
			const titleFound = title.search(projectSearch.toLowerCase()) !== -1;
			const platform = String(project.platform).toLowerCase();
			const platformFound = platform.search(projectSearch.toLowerCase()) !== -1;
			const engine = String(project.engine).toLowerCase();
			const engineFound = engine.search(projectSearch.toLowerCase()) !== -1;
			const language = String(project.language).toLowerCase();
			const languageFound = language.search(projectSearch.toLowerCase()) !== -1;
			return titleFound || platformFound || engineFound || languageFound;
		});
		return result.map((project, index) => (
			<ProjectCard
				key={`projectCard-${index}`}
				title={project.title}
				platform={project.platform}
				engine={project.engine}
				language={project.language}
				description={project.description}
				link={project.link}
				screenshots={project.screenshots}
			/>
		));
	}

	return (
		<div id="projects" className={classes.root}>
			<h1>Projects</h1>
			<Divider color="black" width="100%" height="2px" />
			<div className="project-search-input">
				<input
					type="text"
					placeholder="Search for project (title/platform/engine/language)"
					onChange={(e) => handlePlayerSearch(e)}
				/>
			</div>
			<div className={classes.body}>
				{projectSearch === "" ? (
					Config.projectList.map((project, index) => (
						<ProjectCard
							key={`projectCard-${index}`}
							title={project.title}
							platform={project.platform}
							engine={project.engine}
							language={project.language}
							description={project.description}
							link={project.link}
							screenshots={project.screenshots}
						/>
					))
				) : (
					<div>{handleSearchList()}</div>
				)}
			</div>
		</div>
	)
}
import ProjectComponent from './ProjectComponent';

const projects = [
	{
		title: 'DnD Soundboard',
		body: 'A soundboard application for Dungeons & Dragons sessions.',
		url: '/soundboard',
	},
];

const convertToElements = (list) => {
	const projectElements = list.map((item, index) => {
		if (index % 2 === 0) {
			return (
				<ProjectComponent
					key={index}
					isFlipped={true}
					title={item.title}
					body={item.body}
					url={item.url}
				/>
			);
		} else {
			return (
				<ProjectComponent
					key={index}
					isFlipped={false}
					title={item.title}
					body={item.body}
					url={item.url}
				/>
			);
		}
	});
	return projectElements;
};

const ProjectList = () => {
	return <div className='project-list-container'>{convertToElements(projects)}</div>;
};

export default ProjectList;

import ProjectComponent from './ProjectComponent';

const projects = [
    {
        title: 'To-Do List App',
        body: 'A simple and intuitive application to manage daily tasks.',
    },
    {
        title: 'Weather Dashboard',
        body: 'Displays weather information for any location using an external API.',
    },
    {
        title: 'Chat Application',
        body: 'A real-time messaging app with user authentication and chat rooms.',
    },
    {
        title: 'Expense Tracker',
        body: 'Tracks income and expenses to help users manage their finances.',
    },
    {
        title: 'Recipe Finder',
        body: 'Searches for recipes based on available ingredients.',
    },
    {
        title: 'Portfolio Website',
        body: 'A personal website to showcase projects, skills, and resume.',
    },
    {
        title: 'E-commerce Platform',
        body: 'A platform for buying and selling products online with payment integration.',
    },
    {
        title: 'Movie Recommendation System',
        body: 'Suggests movies based on user preferences and viewing history.',
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
                />
            );
        } else {
            return (
                <ProjectComponent
                    key={index}
                    isFlipped={false}
                    title={item.title}
                    body={item.body}
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

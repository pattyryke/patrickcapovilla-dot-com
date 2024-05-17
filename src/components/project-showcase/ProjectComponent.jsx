import PropTypes from 'prop-types';
import NormalButton from '../common-elements/NormalButton';



function testHandleClick(title) {
    return (`${title} has been clicked.`);
}

const ProjectComponent = ({ isFlipped, title, body }) => {

    if (isFlipped === true) {
        return (
            <div className='project-row-container flipped'>
                <div className='blank'></div>
                <div className='content'>
                    <div className='project-list-item' style={{marginRight: '10vw'}}>
                        <h2 className='project-item-title header-font'>{title}</h2>
                        <p className='project-item-body body-font'>{body}</p>
                        <NormalButton
                            className='project-item-btn'
                            label='Read more'
                            handleClick={testHandleClick(title)}
                        />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='project-row-container'>
                <div className='content'>
                    <div className='project-list-item' style={{marginLeft: '10vw'}}>
                        <h2 className='project-item-title header-font'>{title}</h2>
                        <p className='project-item-body body-font'>{body}</p>
                        <NormalButton
                            className='project-item-btn'
                            label='Read more'
                            handleClick={testHandleClick(title)}
                        />
                    </div>
                </div>
                <div className='blank'></div>
            </div>
        );
    }
};

ProjectComponent.propTypes = {
    isFlipped: PropTypes.bool, 
    title: PropTypes.string, 
    body: PropTypes.string, 
};

export default ProjectComponent;

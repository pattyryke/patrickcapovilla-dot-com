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
                    <div className='project-list-item' style={{marginRight: '150px'}}>
                        <h3 className='project-item-title'>{title}</h3>
                        <p className='project-item-body'>{body}</p>
                        <NormalButton
                            label='See more'
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
                    <div className='project-list-item' style={{marginLeft: '150px'}}>
                        <h3 className='project-item-title'>{title}</h3>
                        <p className='project-item-body'>{body}</p>
                        <NormalButton
                            label='See more'
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

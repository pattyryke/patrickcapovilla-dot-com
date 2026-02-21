import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import NormalButton from '../common-elements/NormalButton';

function useHandleClick(url) {
    const navigate = useNavigate();
    return () => {
        if (url.startsWith('/')) {
            navigate(url);
        } else {
            window.open(url, '_blank');
        }
    };
}

const ProjectComponent = ({ isFlipped, title, body, url }) => {
    const handleClick = useHandleClick(url);

    if (isFlipped === true) {
        return (
            <div className='project-row-container flipped'>
                <div className='blank'></div>
                <div className='content'>
                    <div className='project-list-item' style={{marginRight: '10vw'}}>
                        <h2 className='title outline-text header-font'>{title}</h2>
                        <hr />
                        <p className='body body-font'>{body}</p>
                        <hr />
                        <NormalButton
                            className='btn body-font'
                            label='Read more'
                            handleClick={handleClick}
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
                        <h2 className='title outline-text header-font'>{title}</h2>
                        <hr />
                        <p className='body body-font'>{body}</p>
                        <hr />
                        <NormalButton
                            className='btn body-font'
                            label='Read more'
                            handleClick={handleClick}
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
    url: PropTypes.string, 
};

export default ProjectComponent;

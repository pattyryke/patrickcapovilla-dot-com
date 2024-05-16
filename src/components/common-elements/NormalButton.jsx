import PropTypes from 'prop-types';

const NormalButton = ({ label, handleClick }) => {
    return (
        <button 
            className='project-item-btn'
            onClick={() => console.log(handleClick)}
        >
            {label}
        </button>
    );
}

NormalButton.propTypes = {
    label: PropTypes.string,
    handleClick: PropTypes.string,
};

export default NormalButton;
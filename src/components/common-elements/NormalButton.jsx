import PropTypes from 'prop-types';

const NormalButton = ({ label, className, handleClick }) => {
    return (
        <button 
            className={className}
            onClick={() => console.log(handleClick)}
        >
            {label}
        </button>
    );
}

NormalButton.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    handleClick: PropTypes.string,
};

export default NormalButton;
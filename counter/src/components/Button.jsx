import PropTypes from 'prop-types';

const Button = ({ counter, setCounter, children }) => {

    const onHandleClick = (evt) => {
        const targetValue = evt.target.textContent;
        switch (targetValue) {
            case 'Inc':
                setCounter(counter + 1);
                break;
            case 'Dec':
                setCounter(counter - 1);
                break;
            case 'Res':
                setCounter(0);
                break;
            case 'Rand':
                setCounter(Math.round(Math.random() * (50 - 1) + 1));
                break;
            default:
                throw new Error(`The button doesn't exist`);
        }
    }

    return (
        <button onClick={(evt) => onHandleClick(evt)}
            className="py-2 px-4 bg-pink-400 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            {children}
        </button>
    )
}

Button.propTypes = {
    counter: PropTypes.number,
    setCounter: PropTypes.func,
    children: PropTypes.string
}

export default Button

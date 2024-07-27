import PropTypes from 'prop-types';

const NumberOfEvents = ({ numberOfEvents, onNumberOfEventsChange }) => {
    return (
        <div className="events-number-buttons">
            <button onClick={() => onNumberOfEventsChange(5)}>5 events</button>
            <button onClick={() => onNumberOfEventsChange(10)}>10 events</button>
            <button onClick={() => onNumberOfEventsChange(20)}>20 events</button>
            <button onClick={() => onNumberOfEventsChange(32)}>32 events</button>
        </div>
    );
};

NumberOfEvents.propTypes = {
    numberOfEvents: PropTypes.number.isRequired,
    onNumberOfEventsChange: PropTypes.func.isRequired,
};

export default NumberOfEvents;
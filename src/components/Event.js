import { useState } from "react";

const Event = ({ event }) => {

    const [showDetails, setShowDetails] = useState(false);

    if (!event) {
        return null
    }
    return (
        <li>
            <div>{event.summary}</div>
            <div>{event.created}</div>
            <div>{event.location} </div>
            <button onClick={() => setShowDetails(true)}>show details</button>
            <button onClick={() => setShowDetails(false)}>hide details</button>
            {showDetails && (
                <div>
                    <p>Event Details Here</p>
                </div>
            )}
        </li>
    );
};

export default Event;
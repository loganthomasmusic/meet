import { render, fireEvent } from "@testing-library/react";
import Event from "../components/Event";
import allEvents from "../mock-data";

describe("<Event /> component", () => {

    test("renders event title", () => {
        const EventComponent = render(<Event event={allEvents[0]} />);
        expect(
            EventComponent.queryByText(allEvents[0].summary)
        ).toBeInTheDocument();
    });

    test("renders event start time", () => {
        const EventComponent = render(<Event event={allEvents[0]} />);
        expect(
            EventComponent.queryByText(allEvents[0].created)
        ).toBeInTheDocument();
    });

    test("renders event location", () => {
        const EventComponent = render(<Event event={allEvents[0]} />);
        expect(
            EventComponent.queryByText(allEvents[0].location)
        ).toBeInTheDocument();
    });

    test("renders event details button with the title (show details)", () => {
        const EventComponent = render(<button>show details</button>);
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

    test("event details section hidden by default", () => {
        const EventComponent = render(<Event event={allEvents[0]} />);
        expect(EventComponent.queryByText('Event Details Here')).not.toBeInTheDocument();
    });

    test("hides details section when show details button is clicked", async () => {
        const EventComponent = render(<Event event={allEvents[0]} />);
        const showDetailsButton = EventComponent.getByText('show details');
        fireEvent.click(showDetailsButton);
        expect(EventComponent.queryByText('Event Details Here')).toBeInTheDocument();
    });

    test("shows details section when hide details button is clicked", async () => {
        const EventComponent = render(<Event event={allEvents[0]} />);
        const showDetailsButton = EventComponent.getByText('show details');
        fireEvent.click(showDetailsButton);
        const hideDetailsButton = EventComponent.getByText('hide details');
        fireEvent.click(hideDetailsButton);
        expect(EventComponent.queryByText('Event Details Here')).not.toBeInTheDocument();
    });

});
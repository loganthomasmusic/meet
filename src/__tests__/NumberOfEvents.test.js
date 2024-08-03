// src/__tests__/NumberOfEvents.test.js

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
import { getEvents } from "../api";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
    });

    test('renders number of events text input', () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toBeInTheDocument();
        expect(numberTextBox).toHaveClass('number-of-events-input');
    });

    test('default number is 32', async () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toHaveValue("32");
    });

    test('number of events text box value changes when the user types in it', async () => {
        const user = userEvent.setup();
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(numberTextBox, "123")

        // 32 (the default value already written) + 123
        expect(numberTextBox).toHaveValue("32123");
    });

    /*
    test('value changes accordingly when user types', async () => {
        const numberTextbox = NumberOfEventsComponent.queryByRole('textbox');
        await userEvent.type(numberTextbox, "{backspace}{backspace}10");
        expect(numberTextbox.value).toBe("10");
    });
    */

    test('change number of events when a user types in the textbox', async () => {
        const numverOfEvents = NumberOfEventsComponent.getByRole('textbox');
        const user = userEvent.setup();
        await user.type(numverOfEvents, '{backspace}{backspace}10');
        const allEvents = await getEvents();
        NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={allEvents} />);
        expect(numverOfEvents).toHaveValue('10');
    });

});
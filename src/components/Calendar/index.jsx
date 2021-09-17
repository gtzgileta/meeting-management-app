import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    hasEvent, daysArr, daysOfWeek, getEventFromDay
} from '../../utils/calendar-util';
import useDoubleClick from './customHook/useDoubleClick';
import './Calendar.css';

const Calendar = ({meetings, modal}) => {
    const [clickedDateNum, setClickedDateNum] = useState(null);
    
    const history = useHistory();

    // Single / Double click
    const hybridClick = useDoubleClick(
        () => {
            console.log('double clicked');
            const has = getEventFromDay(meetings, clickedDateNum)[0];
            if (has) {
                // Edit meeting data
                history.push(`/panel/schedule-meeting/${ has.id }`);
            }
        },
        () => {
            console.log('single clicked');
            const has = getEventFromDay(meetings, clickedDateNum)[0];
            if (has) {
                // Show modal
                modal.open();
                modal.setSelectedMeeting(has);
            }
        }
    );

    return (
        <div id="calendar">
            <h1>September 2021</h1>

            <ul className="days">
                { daysOfWeek.map((day, i) => <li key={i}>{ day }</li>) }
            </ul>

            <ol>
                { daysArr.map((num, i) =>
                    <li
                        key={i}
                        className={ `${ num === 1 && 'first-day' } ${ hasEvent(meetings, num) && 'has-event' }` }
                        onClick={() => setClickedDateNum(num)}
                    ><button
                        onClick={hybridClick}
                        >{ num }</button></li>
                ) }
            </ol>
        </div>
    );
}

export default Calendar;

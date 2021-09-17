import React from 'react';

const MeetingDetails = ({ selectedMeeting }) => (
    <React.Fragment>
        <h2>Meeting details</h2>
        { Object.keys(selectedMeeting).length &&
            <ul id="meeting-details">
                <li><div>Id</div><div>{ selectedMeeting.id }</div></li>
                <li><div>Date</div><div>{ selectedMeeting.date }</div></li>
                <li><div>Name</div><div>{ selectedMeeting.name }</div></li>
                <li><div>Description</div><div>{ selectedMeeting.description }</div></li>
                <li><div>Attendees</div><div>{ selectedMeeting.attendees.join(', ') }</div></li>
            </ul>
        }
    </React.Fragment>
);

export default MeetingDetails;

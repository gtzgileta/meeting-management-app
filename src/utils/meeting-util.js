export const getMeetingsList = () => JSON.parse(localStorage.getItem('meetings')) || [];

export const addMeeting = ({id, date, name, description, attendees}) => {
    const meetingsList = getMeetingsList();
    // Add new meeting to meetings list
    const newMeetingsList = [
        ...meetingsList,
        {
            id,
            date,
            name,
            description,
            attendees,
        }
    ];
    // Update meetings list on localstorage
    localStorage.setItem('meetings', JSON.stringify(newMeetingsList));
    return newMeetingsList;
};

export const removeMeeting = (id) => {
    const meetingsList = getMeetingsList();
    // Remove 
    const newMeetingsList = meetingsList.filter(meeting => meeting.id !== id);
    // Update meetings list on localstorage
    localStorage.setItem('meetings', JSON.stringify(newMeetingsList));
    return newMeetingsList;
};

export const updateMeeting = ({id, date, name, description, attendees}) => {
    const meetingsList = getMeetingsList();
    // Update meeting data
    const newMeetingsList = meetingsList.map(meeting => {
        if(meeting.id === id) {
            meeting.date = date;
            meeting.name = name;
            meeting.description = description;
            meeting.attendees = attendees;
        }
        return meeting;
    });
    // Update meetings list on localstorage
    localStorage.setItem('meetings', JSON.stringify(newMeetingsList));
    return newMeetingsList;
};
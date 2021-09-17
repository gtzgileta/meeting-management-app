import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import ScheduleLayout from './ScheduleLayout';
import { submitMeeting, updateTheMeeting } from '../../store/meeting';
import { validateForm } from '../../utils/validation-util';

const Schedule = ({ computedMatch }) => {
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [attendees, setAttendees] = useState(['']);
    const [formError, setFormError] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [meetingId, setMeetingId] = useState(false);

    const error = useSelector((state) => state.Meeting.error);
    const meetings = useSelector((state) => state.Meeting.meetings);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const { id } = computedMatch.params;
        if (id) {
            setMeetingId(id);
            setIsUpdating(true);
        }
        if (id && meetings.length) {
            const meeting = meetings.filter((meeting) => meeting.id === id)[0];
            setDate(meeting.date);
            setName(meeting.name);
            setDescription(meeting.description);
            setAttendees(meeting.attendees);
        }
    }, [meetings])

    const submit = () => {
        const formValues = { date, name, description, attendees };
        const validationResult = validateForm(formValues);
        if(validationResult !== "valid") {
            setFormError(validationResult);
            return false;
        } else {
            setFormError(null);
        }
        const action = (data) => isUpdating ? updateTheMeeting({...data, id: meetingId}) : submitMeeting(data);
        dispatch(action(formValues)).then((success) => {
            if (success) { // navigate to dashboard
                history.push("/panel/dashboard");
            }
        });
    };

    return (
        <ScheduleLayout
            formObj={{date, name, description, attendees, error, formError}}
            fn={{submit, setDate, setName, setDescription, setAttendees}}
            isUpdating={isUpdating}
        />
    );
}

export default Schedule;

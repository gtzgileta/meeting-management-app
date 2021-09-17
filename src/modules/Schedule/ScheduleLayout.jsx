import React from 'react';
import Input from '../../components/Input';
import { preventSpacing } from '../../utils/schedule-util.js';
import './ScheduleLayout.css';

const ScheduleLayout = ({ formObj, fn, isUpdating }) => (
    <div id="container" className="schedule-screen">
        <Input
            type="text"
            title="Date (DD-MM-YYYY)"
            placeholder="ex. 16-09-2021"
            value={formObj.date}
            onChange={ e => fn.setDate(e.target.value) }
            onKeyPress={preventSpacing}
        />
        <Input
            type="text"
            title="Name"
            value={formObj.name}
            onChange={ e => fn.setName(e.target.value) }
        />
        <Input
            type="text"
            title="Description"
            value={formObj.description}
            onChange={ e => fn.setDescription(e.target.value) }
        />
        <Input
            type="multiple"
            title="Attendees"
            value={formObj.attendees}
            onChange={ fn.setAttendees }
            onKeyPress={preventSpacing}
        />
        { formObj.error && <div className="error">{ formObj.error }</div> }
        { formObj.formError && <div className="error">{ formObj.formError }</div> }
        <button
            type="submit"
            onClick={() => fn.submit()}
        >{`${ isUpdating ? 'Save changes' : 'Create new meeting'}`}</button>
    </div>
);

export default ScheduleLayout;

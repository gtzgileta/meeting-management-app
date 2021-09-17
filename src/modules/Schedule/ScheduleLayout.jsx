import React from 'react';
import Input from '../../components/Input';
import { preventSpacing } from '../../utils/schedule-util.js';
import './ScheduleLayout.css';

const ScheduleLayout = ({ formObj, formError, fn, isUpdating }) => (
    <div id="container" className="schedule-screen">
        <Input
            type="text"
            title="Date (DD-MM-YYYY)"
            placeholder="ex. 16-09-2021"
            value={formObj.date}
            onChange={ e => fn.updateFormValue('date', e.target.value) }
            onKeyPress={preventSpacing}
        />
        <Input
            type="text"
            title="Name"
            value={formObj.name}
            onChange={ e => fn.updateFormValue('name', e.target.value) }
        />
        <Input
            type="text"
            title="Description"
            value={formObj.description}
            onChange={ e => fn.updateFormValue('description', e.target.value) }
        />
        <Input
            type="multiple"
            title="Attendees"
            value={formObj.attendees}
            onChange={ fn.updateFormValue }
            onKeyPress={preventSpacing}
        />
        { formObj.error && <div className="error">{ formObj.error }</div> }
        { formError && <div className="error">{ formError }</div> }
        <button
            type="submit"
            onClick={() => fn.submit()}
        >{`${ isUpdating ? 'Save changes' : 'Create new meeting'}`}</button>
    </div>
);

export default ScheduleLayout;

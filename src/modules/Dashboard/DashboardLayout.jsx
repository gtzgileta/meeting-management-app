import React, { useState } from 'react';
import Calendar from '../../components/Calendar';
import Modal from '../../components/Modal';
import MeetingDetails from '../../components/MeetingDetails';
import './DashboardLayout.css';

const DashboardLayout = ({ meetings }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMeeting, setSelectedMeeting] = useState([]);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return (
        <div id="container">
            <Calendar
                meetings={meetings}
                modal={{close, open, setSelectedMeeting}}
            />
            {modalOpen && <Modal children={<MeetingDetails selectedMeeting={selectedMeeting} />} handleClose={close} />}
        </div>
    );
}

export default DashboardLayout;

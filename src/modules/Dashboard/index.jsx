import React from 'react';
import { useSelector } from 'react-redux';
import DashboardLayout from './DashboardLayout';

const Dashboard = () => {
    const meetings = useSelector((state) => state.Meeting.meetings);

    return (
        <DashboardLayout
            meetings={meetings}
        />
    );
}

export default Dashboard;

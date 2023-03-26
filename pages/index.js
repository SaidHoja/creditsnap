import React from 'react';
import Navbar from './navbar'
import CreditReports from './credithistory';
import TipsToRaiseCreditScore from './tips';
import withAuthRedirect from '@/config/withAuthRedirect';

export default withAuthRedirect(function HomePage() {
    return (
        <>
        <Navbar />
        <CreditReports />
        <TipsToRaiseCreditScore />
        </>
    )
})
import React from 'react';
import Header from '../components/Global/Header';

const Month = () => {
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    return (
        <Header 
            title={`${currentMonth}'s goals`}
            subtitle={`Take a look at your goals for ${currentMonth}`}
            firstname="Brennan"
            lastname="Jenkins"
            image="../assets/brennan-jenkins.png"
        />
    );
};

export default Month;
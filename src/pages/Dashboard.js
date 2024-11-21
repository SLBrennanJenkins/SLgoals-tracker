import React from 'react';
import Header from '../components/Global/Header';
import Overview from '../components/overview';
import Stats from '../components/stats';
import DashGoals from '../components/dashGoals';

const Dashboard = () => {
  return (
    <>
      <Header 
        title="Dashboard"
        subtitle="Welcome back Brennan"
        firstname="Brennan"
        lastname="Jenkins"
        image="../assets/brennan-jenkins.png"
      />
      <Overview />
      <Stats />
      <div className="goals">
        <DashGoals />
      </div>
    </>
  );
};

export default Dashboard;
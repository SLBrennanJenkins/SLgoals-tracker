import React from 'react';
import { NavLink } from'react-router-dom';
import Goal from './dashGoal';
import goalsData from '../goals.json';
import Month from '../pages/Month';

const DashGoals = () => {
  const currentMonth = new Date().getMonth() + 1;
  const currentGoals = goalsData.goals.filter(goal => goal.month === currentMonth);

  return (
    <div className="flex flex-row mt-12 justify-between gap-8">
        <div className="w-1/2">
            <div className="flex flex-row justify-between mb-2">
                <h3 className="text-xs text-greymed tracking-wider">THIS MONTHS GOALS</h3>
                <NavLink to={'/all'} className="text-xs text-blue-700">View All</NavLink>
            </div>
            {currentGoals.map((goal) => (
                <Goal 
                    key={goal.id}
                    id={goal.id}
                    month={goal.month}
                    objective={goal.objective}
                    description={goal.description}
                    status={goal.status}
                />
            ))}
        </div>
        <div className="w-1/2">
            <div className="flex flex-row justify-between mb-2">
                <h3 className="text-xs text-greymed tracking-wider">TGOAL TIME</h3>
                <NavLink to={'/all'} className="text-xs text-blue-700">View All</NavLink>
            </div>
            {currentGoals.map((goal) => (
                <Goal 
                    key={goal.id}
                    id={goal.id}
                    month={goal.month}
                    objective={goal.objective}
                />
            ))}
        </div>
    </div>
  );
};

export default DashGoals;
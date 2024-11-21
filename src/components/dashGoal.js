import React from 'react';

const Goal = ({objective, description}) => {
  return (
    <div className="flex flex-col shadow-custom mb-2 py-2 px-5">
      <p className="text-sm">{objective}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Goal;
import React from 'react';

const Overview = () => {
  return (
    <div className="flex flex-row justify-start mt-12">
        <div className="w-2/12 pr-4 border-r">
            <h3 className="text-xs text-greymed tracking-wider">CURRENT GOAL</h3>
            <p className="text-sm mt-2">Dedicate time to master advanced concepts in your primary front-end framework (e.g., React, Angular, Vue).</p>
        </div>
        <div className="w-2/12 pl-4">
            <h3 className="text-xs text-greymed tracking-wider">TIME SPENT THIS WEEK</h3>
            <p className="text-2xl mt-2">7h</p>
        </div>
    </div>
  );
};

export default Overview;
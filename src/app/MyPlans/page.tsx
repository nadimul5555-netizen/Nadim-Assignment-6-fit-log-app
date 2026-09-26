import React from 'react';
import CalculatePlan from '../Components/PlansShow/Calculate';
import PlanSaveTab from '../Components/PlansShow/PlanSaveTab';

const MyPlans = () => {
  return (
    <div>
      <div className='container mx-auto my-8'>

      <h1 className='text-4xl font-bold'>MY PLAN</h1>
      <p className='text-gray-400'>Cap of five lifts for today. Finish them, then load more.</p>
      </div>
      <div  className="gird grid-cols-3">
        <PlanSaveTab></PlanSaveTab>
      </div>
    </div>
  );
};

export default MyPlans;
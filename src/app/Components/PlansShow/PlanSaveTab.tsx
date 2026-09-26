'use client'
import React, { useState } from 'react';
import CalculatePlan from './Calculate';
import CalculateSaved from './CalculateSaved';
import PlanCard from '../Cards/PlanCard';
import SavedCard from '../Cards/SavedCard';

const PlanSaveTab = () => {
    const [activeTab, setActiveTab] = useState("today");
  return (
    <div>

    <div>
      {
       activeTab === "today"? <CalculatePlan ></CalculatePlan>: <CalculateSaved></CalculateSaved>
      } 
        
    </div>

 <div className='container mx-auto my-5 grid grid-cols-2 '>

    <div className="  flex w-fit   my-10 rounded-lg bg-[#191a25] p-1">
      
      <button
        title="Today's Plan"
        onClick={() => setActiveTab("today")}
        className={`px-5 py-2 rounded-md text-xs transition ${
          activeTab === "today"
          ? "bg-[#252938] text-white"
          : "text-gray-400"
        }`}
      >
        Today&lsquo;s Plan
      </button>

      <button
        title="Saved"
        onClick={() => setActiveTab("saved")}
        className={`px-5 py-2 rounded-md text-xs transition ${
          activeTab === "saved"
          ? "bg-[#252938] text-white"
          : "text-gray-400"
        }`}
        >
        Saved
      </button>

    

    </div>
    <div className=' flex justify-end'>
      shortby
    </div>
        </div>
        <div>
          {
            activeTab === "today"? <PlanCard></PlanCard>:<SavedCard></SavedCard>
          }
        </div>
    </div>
  );
};

export default PlanSaveTab;
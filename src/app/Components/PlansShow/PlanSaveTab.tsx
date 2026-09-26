'use client'
import React, { useContext, useState } from 'react';
import CalculatePlan from './Calculate';
import CalculateSaved from './CalculateSaved';
import PlanCard from '../Cards/PlanCard';
import SavedCard from '../Cards/SavedCard';
import { LibraryType, StateTypes } from '@/app/AllDataType';
import { PlaneContext } from '@/app/Context/page';
import NothingHere from '../Cards/NothingHere';

const PlanSaveTab = () => {
    const [activeTab, setActiveTab] = useState("today");
       const {plan,saved,setPlan,setSaved}:StateTypes=useContext(PlaneContext);
       const [sort,setSort]=useState<"duration"|"calories"|"rating">('calories')


const handleSorted=(values:LibraryType[])=>{
  const newSorted = [...values];

  if(sort === "duration"){
    newSorted.sort((a ,b)=> b.duration -a.duration)
  }else if(sort === "calories"){
    newSorted.sort((a ,b)=> b.caloriesBurned - a.caloriesBurned );
  }else if(sort === "rating"){
    newSorted.sort((a,b)=> b.rating - a.rating)
  }
  return newSorted


}

const SortedPlan:LibraryType[] =handleSorted(plan);
const SortedSaved:LibraryType[] =handleSorted(saved);
console.log(
  SortedPlan.map(item => ({
    name: item.name,
    duration: item.duration,
    calories: item.caloriesBurned,
    rating: item.rating
  }))
);

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
      <label className='m-2'>Sort by</label>
      <select 
      value={sort}
      onChange={(e)=> setSort(e.target.value as "duration"|"calories"|"rating")}
      className="select appearance-none bg-[#252938] flex w-fit">
  
  <option value={"duration"}>Duration</option>
  <option value={"calories"}>Calories</option>
  <option value={"rating"}>Rating</option>
</select>
    </div>
        </div>
        <div>
          {
            activeTab === "today"?  SortedPlan.length >0? <PlanCard SortedPlan={SortedPlan}></PlanCard>:<NothingHere></NothingHere>:SortedSaved.length>0?<SavedCard SortedSaved={SortedSaved}></SavedCard>:<NothingHere></NothingHere>
          }
        </div>
    </div>
  );
};

export default PlanSaveTab;
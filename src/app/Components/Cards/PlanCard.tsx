'use client'
import { LibraryType, StateTypes } from "@/app/AllDataType";
import { PlaneContext } from "@/app/Context/page";
import Image from "next/image";
import { useContext } from "react";



const PlanCard = () => {
  const {plan,setPlan}:StateTypes=useContext(PlaneContext)
  
 
    return (
    <div>
      {
        plan.map((Data:LibraryType,ind:number)=>(
          <div key={ind} className="flex items-center gap-4 rounded-xl border border-[#242833] bg-[#14161d] p-3">
      
     
      <Image
        src={Data.image}
        alt={Data.name}
        className="h-16 w-24 shrink-0 rounded-lg object-cover"
      />

      
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-bold uppercase text-white">
          {Data.name}
        </h3>

        <p className="text-xs text-gray-500">
          {Data.equipment}
        </p>

        {/* Stats */}
        <div className="mt-1 flex items-center gap-3 text-[10px] text-gray-300">
          <span>◉ {Data.duration} min</span>

          <span>🔥 {Data.caloriesBurned} kcal</span>

          <span>⭐ {Data.rating}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2">
        
        <button
          className="rounded-full border border-[#303542] px-4 py-1.5 text-[10px] text-gray-300 transition hover:bg-[#20232d]"
        >
          View Details
        </button>

        <button
          onClick={onDone}
          className="rounded-full bg-[#baff00] px-4 py-1.5 text-[10px] font-semibold text-black transition hover:bg-[#a9ed00]"
        >
          ✓ Mark as Done
        </button>

        <button
          onClick={onRemove}
          className="px-1 text-sm text-gray-500 transition hover:text-white"
        >
          ×
        </button>

      </div>
    </div>
        ))
      }
    </div>
  )
}

export default PlanCard;
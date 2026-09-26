'use client'
import {  StateTypes } from "@/app/AllDataType"
import{ PlaneContext } from "@/app/Context/page"
import { useContext } from "react"



const CalculateSaved = () => {
  const {saved}:StateTypes=useContext(PlaneContext)

  return (
<div className="bg-[#191a25] container mx-auto grid grid-cols-3 p-5 border border-gray-700 rounded-2xl">
  

        <div className="border-r border-gray-700 m-5">
        <p className="text-gray-400">Exercises</p>
        <h1 className="text-5xl text-[#C2F800] font-bold">{saved.length}</h1>
        </div>
        <div className="border-r border-gray-700 m-5">
        <p className="text-gray-400">Minutes</p>
        <h1 className="text-5xl font-bold">
          {
            saved.reduce((defValue,newValue)=> (defValue+newValue.duration),0)
          }
        </h1>
        </div>
        <div className="m-5">
        <p className="text-gray-400">Celories</p>
        <h1 className="text-5xl font-bold">
          {
            saved.reduce((defValue,newValue)=> (defValue+newValue.caloriesBurned),0)
          }
        </h1>
        </div>
         
      </div>
  )
}


export default CalculateSaved;
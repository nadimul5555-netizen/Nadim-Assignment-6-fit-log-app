'use client'
import { LibraryType, StateTypes } from "@/app/AllDataType";
import { PlaneContext } from "@/app/Context/page";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { GiBurningDot } from "react-icons/gi";
import { IoIosTimer } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

export interface SavedProps {
  SortedSaved: LibraryType[];
}

const SavedCard = ({SortedSaved}:SavedProps) => {
  const {saved,setSaved}:StateTypes=useContext(PlaneContext)
  const [done,setDone]=useState<number[]>([])

  const onRemove=(Data:LibraryType)=>{
    const afterRemove = saved.filter(data=> data.id !== Data.id)
    setSaved(afterRemove)
    toast.error(`${Data.name} removed successfully !`)
  }

  const handleDone=(id:number)=>{
    setDone([...done,id])
    toast.success('Successfully Mark as Dane !')
  }

  return (
    <div className="container mx-auto">
      {
        SortedSaved.map((Data:LibraryType)=>(
  <div
            key={Data.id}
            className="my-10 flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-[#242833] bg-[#14161d] p-3"
          >

            <Image
              src={Data.image}
              alt={Data.name}
              className="shrink-0 rounded-lg object-cover w-full sm:w-[100px] h-[180px] sm:h-[100px]"
              height={100}
              width={100}
            />

            <div className="min-w-0 flex-1">

              <h3 className="truncate text-2xl font-bold uppercase text-white">
                {Data.name}
              </h3>

              <p className="text-xs text-gray-500 my-2">
                {Data.equipment}
              </p>

              <div className="my-2 flex flex-wrap items-center gap-3 text-[10px] text-gray-300">

                <span className="flex gap-2">
                  <IoIosTimer className="mt-0.5 text-[#C2F800]" />
                  {Data.duration} min
                </span>

                <span className="flex gap-2">
                  <GiBurningDot className="mt-0.5 text-[#C2F800]"/>
                  {Data.caloriesBurned} kcal
                </span>

                <span className="flex gap-2">
                  <FaRegStar className="mt-0.5 text-[#C2F800]"/>
                  {Data.rating}
                </span>

              </div>

            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-5 shrink-0">

              <Link href={`/Workouts/${Data.id}`}>
                <button
                  className="rounded-full border border-[#303542] px-4 py-1.5 text-[10px] text-gray-300 transition hover:bg-[#20232d]"
                >
                  View Details
                </button>
              </Link>

              {
                done.includes(Data.id) ? '' :
                <button
                  onClick={()=> handleDone(Data.id)}
                  className="rounded-full bg-[#baff00] flex gap-1 px-4 py-1.5 text-[10px] font-semibold text-black transition hover:bg-[#a9ed00]"
                >
                  <IoCheckmarkDoneSharp className="mt-0.5" />
                  Mark as Done
                </button>
              }

              <button
                onClick={()=> onRemove(Data)}
                className="px-3 text-sm text-gray-500 transition hover:text-white"
              >
                <RxCross1 />
              </button>

            </div>

          </div>
        ))
      }
    </div>
  )
}

export default SavedCard;
'use client'
import { LibraryType, StateTypes } from "@/app/AllDataType";
import { PlaneContext } from "@/app/Context/page";
import { useContext } from "react";
import { IoBookmarksOutline } from "react-icons/io5";
import { toast } from "react-toastify";

export type LaterButtonProps = {
  Data: LibraryType  
}

const LaterButton = ({ Data }: LaterButtonProps) => {
  const {saved,setSaved,plan}:StateTypes=useContext(PlaneContext);
   const handleLater=(Data:LibraryType)=>{
    const alradySaved =saved.some(data=> Data.id === data.id)
    const ExistLater =plan.some(data=> Data.id === data.id)
    if(alradySaved){
      toast.error( `${Data.name} Alrady Saved !`)
      return ''
    }else if(ExistLater){
      toast.error(`${Data.name} Alrady exist in Todays plan!`)
      return ''
    }
     setSaved([...saved,Data])
     toast.success(`Successfully ${Data.name} Saved for Later!`)
   }
  
  return (
      <button onClick={()=> handleLater(Data)} className="rounded-2xl btn  border border-t-gray-700 bg-black text-white m-5"><IoBookmarksOutline /> Save for Later</button>
  )
}

export default LaterButton;
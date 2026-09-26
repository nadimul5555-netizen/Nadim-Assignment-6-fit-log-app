'use client'
import { LibraryType, StateTypes } from "@/app/AllDataType";
import { PlaneContext } from "@/app/Context/page";
import { useContext } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { toast } from "react-toastify";

export type TodaysButtonProps = {
  Data: LibraryType

}

const TodaysButton = ({ Data }: TodaysButtonProps) => {
  
   const {plan,setPlan,saved}:StateTypes=useContext(PlaneContext);
    const alradySaved =plan.some(data=> Data.id === data.id)
    const ExistSaved =saved.some(data=> Data.id === data.id)
    const handleToday=(Data:LibraryType)=>{
    if(alradySaved){
      toast.error( `${Data.name} Alrady exist !`)
      return ''
    }else if(ExistSaved){
      toast.error(`${Data.name} alrady saved for Later !`)
      return ''
    }
     setPlan([...plan,Data])
     toast.success(`Successfully ${Data.name}  added to todays plan !!`)
   }

  return (
    <button onClick={()=> handleToday(Data)} className="btn bg-[#C2F800] rounded-2xl m-5"><MdAddToPhotos /> Add to today&apos;s plan</button>
  )
}

export default TodaysButton;
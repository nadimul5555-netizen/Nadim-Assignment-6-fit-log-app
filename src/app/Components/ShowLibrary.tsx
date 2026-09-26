import Image from "next/image";
import { LibraryType } from "../AllDataType";
import { GiBurningDot } from "react-icons/gi";
import { IoIosTimer } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";

export type ShowLibraryProps = {
  Data: LibraryType;
}

const ShowLibrary = ({ Data }: ShowLibraryProps) => {
  
  return (
    <div>
      <Link href={`/Workouts/${Data.id}`}>
      <div className="card   shadow-sm bg-[#191a25]">
  <figure>
    <Image src={Data.image} alt="Fit image " width={500} height={500}/>
  </figure>
  <div className="card-body">
      <div className=" ">
        {
      Data.muscleGroups.map((data:string,ind:number)=>(
        <div className="badge bg-[#C2F800] mr-3 rounded-3xl font-bold" key={ind}>
          {data}
        </div>
      ) )
      }
        </div>
    <h2 className="card-title font-bold text-2xl">
      {Data.name}
      </h2>
    
    <p className="text-gray-500">{Data.equipment}</p>
      <hr className="my-2 text-gray-700" />
    <div className="card-actions ">
      <div className="text-gray-500 flex gap-2 ml-3"><IoIosTimer className="mt-1 text-[#C2F800]" /> {Data.duration} min</div>
      <div className="text-gray-500 flex gap-2 ml-3"><GiBurningDot className="mt-1 text-[#C2F800]"/> {Data.caloriesBurned} Kcal</div>
      <div className="text-gray-500 flex gap-2 ml-3"><FaRegStar className="mt-1 text-[#C2F800]"/> {Data.rating}</div>
    </div>
  </div>
</div>
    </Link>
    </div>
  )
}

export default ShowLibrary;
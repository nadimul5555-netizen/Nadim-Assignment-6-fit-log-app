import { LibraryType, ParamsType } from "@/app/AllDataType";
import LaterButton from "@/app/Components/SelectButtons/LaterButton";

import TodaysButton from "@/app/Components/SelectButtons/TodaysButton";
import Image from "next/image";



export type DetailsPageProps = {
  params: Promise<ParamsType>;
};

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const Data: LibraryType = await res.json();

  return (
    <div className="container mx-auto my-10 grid grid-cols-2">
      <div className="flex justify-center">
        <Image
          src={Data.image}
          height={740}
          width={740}
          alt="Details image"
          className="rounded-3xl"
        ></Image>
      </div>
      <div className="px-14">
        <h1 className="text-4xl font-bold my-3">{Data.name}</h1>
        <h2 className="text-gray-500 my-1.5">{Data.description}
        </h2>
        <div className="flex gap-3 my-4">
          {
            Data.muscleGroups.map((data:string,ind:number)=> (
              <div className="badge rounded-3xl font-bold bg-[#C2F800]"  key={ind}>
                {data}
              </div>
            ))
          }
        </div>
        <div className="bg-[#191a25] rounded-2xl border border-gray-700">
          <div className="flex border-b border-gray-700 p-4 justify-between">
            <p className="text-gray-300">EQUIPMENT</p><p>{Data.equipment}</p>
          </div>
          <div className="flex border-b border-gray-700 p-4 justify-between">
            <p className="text-gray-300">DIFFICULTY</p><p>{Data.difficulty}</p>
          </div>
          <div className="flex border-b border-gray-700 p-4 justify-between">
            <p className="text-gray-300">SETS</p><p>{Data.sets}</p>
          </div>
          <div className="flex border-b border-gray-700 p-4 justify-between">
            <p className="text-gray-300">REPS</p><p>{Data.reps}</p>
          </div>
          <div className="flex border-b border-gray-700 p-4 justify-between">
            <p className="text-gray-300">DURATION</p><p>{Data.duration} min</p>
          </div>
          <div className="flex border-b border-gray-700 p-4 justify-between">
            <p className="text-gray-300"> CALORIES</p><p>{Data.caloriesBurned} Kcal</p>
          </div>
          <div className=" flex p-4 justify-between">
            <p className="text-gray-300">RATING</p><p>{Data.rating}</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl my-4">INSTRUCTIONS</h1>
          {
            Data.instructions.map((dat:string,ins:number)=>(
              <p className="text-gray-500 my-2" key={ins}>{ins+1}. {dat}</p>
            ))
          }
        </div>
        <div>
          <TodaysButton Data={Data} ></TodaysButton>
        <LaterButton Data={Data} ></LaterButton>
        </div>

      </div>
    </div>
  );
};

export default DetailsPage;


import { LibraryType, ParamsType } from "@/app/AllDataType";
import LaterButton from "@/app/Components/SelectButtons/LaterButton";

import TodaysButton from "@/app/Components/SelectButtons/TodaysButton";
import Image from "next/image";



export type DetailsPageProps = {
  params: Promise<ParamsType>;
};

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
  const Data: LibraryType = await res.json();

  return (
    <div className="container mx-auto my-10 grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 lg:px-0">
      <div className="flex justify-center">
        <Image
          src={Data.image}
          height={740}
          width={740}
          alt="Details image"
          className="rounded-3xl w-full max-w-[740px] h-auto"
        ></Image>
      </div>

      <div className="px-0 lg:px-14">
        <h1 className="text-4xl font-bold my-3">{Data.name}</h1>

        <h2 className="text-gray-500 my-1.5">{Data.description}</h2>

        <div className="flex flex-wrap gap-3 my-4">
          {
            Data.muscleGroups.map((data:string,ind:number)=> (
              <div className="badge rounded-3xl font-bold bg-[#C2F800]" key={ind}>
                {data}
              </div>
            ))
          }
        </div>

        <div className="bg-[#191a25] rounded-2xl border border-gray-700">

          <div className="flex border-b border-gray-700 p-4 justify-between gap-4">
            <p className="text-gray-300">EQUIPMENT</p>
            <p className="text-right">{Data.equipment}</p>
          </div>

          <div className="flex border-b border-gray-700 p-4 justify-between gap-4">
            <p className="text-gray-300">DIFFICULTY</p>
            <p className="text-right">{Data.difficulty}</p>
          </div>

          <div className="flex border-b border-gray-700 p-4 justify-between gap-4">
            <p className="text-gray-300">SETS</p>
            <p className="text-right">{Data.sets}</p>
          </div>

          <div className="flex border-b border-gray-700 p-4 justify-between gap-4">
            <p className="text-gray-300">REPS</p>
            <p className="text-right">{Data.reps}</p>
          </div>

          <div className="flex border-b border-gray-700 p-4 justify-between gap-4">
            <p className="text-gray-300">DURATION</p>
            <p className="text-right">{Data.duration} min</p>
          </div>

          <div className="flex border-b border-gray-700 p-4 justify-between gap-4">
            <p className="text-gray-300">CALORIES</p>
            <p className="text-right">{Data.caloriesBurned} Kcal</p>
          </div>

          <div className="flex p-4 justify-between gap-4">
            <p className="text-gray-300">RATING</p>
            <p className="text-right">{Data.rating}</p>
          </div>

        </div>

        <div>
          <h1 className="font-bold text-2xl my-4">INSTRUCTIONS</h1>

          {
            Data.instructions.map((dat:string,ins:number)=>(
              <p className="text-gray-500 my-2" key={ins}>
                {ins+1}. {dat}
              </p>
            ))
          }

        </div>

        <div className="flex flex-wrap gap-3">
          <TodaysButton Data={Data}></TodaysButton>
          <LaterButton Data={Data}></LaterButton>
        </div>

      </div>
    </div>
  );
};

export default DetailsPage;


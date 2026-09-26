import React from 'react';
import Banner from '../Components/Common/Banner';
import { LibraryType } from '../AllDataType';
import ShowLibrary from '../Components/ShowLibrary';

const FetchData = async () => {

  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const Data = await res.json();
  return Data
}
  const Workouts = async()=>{
 const UseData =await FetchData();
 console.log(UseData)
  return (
    <div>
      <Banner></Banner>
      <div className='container mx-auto'>
        <h1 className='font-bold text-3xl my-5'>THE LIBRARY</h1>
        <p className=' text-gray-500 '>Twelve lifts covering every major muscle group.</p>
        <div className='grid grid-cols-3 gap-8 my-8'>
        {
          UseData.map((Data:LibraryType)=> <ShowLibrary key={Data.id} Data={Data}></ShowLibrary>  )
        }
        </div>
      </div>
    </div>
  );
};

export default Workouts;

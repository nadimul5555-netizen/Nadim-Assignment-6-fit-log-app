'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import logo from '@/assets/logo.png'
import { usePathname } from 'next/navigation';
import { StateTypes } from '@/app/AllDataType';
import { PlaneContext } from '@/app/Context/page';

const Navbar = () => {
const {saved,plan}:StateTypes=useContext(PlaneContext);
         const pathName = usePathname();
  const Lists = <>
         <Link  className={ pathName === '/Workouts'? 'rounded-2xl bg-[#3b5425]  text-[#C2F800] px-2':""} href={'/Workouts'}><li>Workouts</li></Link>
         <Link className={ pathName === '/MyPlans'? 'rounded-2xl bg-[#3b5425]  text-[#C2F800] px-2':""} href={'/MyPlans'}><li>My Plan</li></Link>
  
         
  </>

  return (
    <div className='  text-white border-b border-gray-700  bg-[#0c0d10]'>

 <div className="navbar container mx-auto sticky ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {Lists}
      </ul>
    </div >
    <Image src={logo} alt='Logo' ></Image>
    <a className="m-3 font-bold btn-ghost text-xl text-white">FITLOG</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
      {Lists}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    

   <Link className='flex gap-2' href={'/MyPlans'}> <h1 className='mt-0.5'>
      Plan
    </h1>
    <h1 className="font-bold px-3 py-1  bg-[#C2F800] text-black rounded-full">
     {plan.length}
    </h1></Link>
   <Link className='flex gap-2 ' href={'/MyPlans'}><h1 className='mt-0.5'>
      Saved
    </h1>
    <h1 className=" font-bold px-3 py-1  border border-gray-600 rounded-full">
     {saved.length}
    </h1>
    </Link>
    
   
</div>
</div>
    </div>
  );
};

export default Navbar;

'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import logo from '@/assets/logo.png'
import { usePathname } from 'next/navigation';
import { StateTypes } from '@/app/AllDataType';
import { PlaneContext } from '@/app/Context/page';
import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {

  const {saved,plan}:StateTypes = useContext(PlaneContext);
  const pathName = usePathname();
  const [isOpen,setIsOpen] = useState(false);

  const Lists = <>
    <Link
      onClick={() => setIsOpen(false)}
      className={pathName === '/Workouts' ? 'rounded-2xl bg-[#3b5425] text-[#C2F800] px-2' : ""}
      href={'/Workouts'}
    >
      <li>Workouts</li>
    </Link>

    <Link
      onClick={() => setIsOpen(false)}
      className={pathName === '/MyPlans' ? 'rounded-2xl bg-[#3b5425] text-[#C2F800] px-2' : ""}
      href={'/MyPlans'}
    >
      <li>My Plan</li>
    </Link>
  </>

  return (
    <div className='text-white border-b border-gray-700 bg-[#0c0d10]'>

      <div className="navbar container mx-auto sticky">

        <div className="navbar-start">

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl"
            >
              <IoMdMenu />
            </button>

            {isOpen && (
              <ul className="absolute left-0 top-16 z-50 w-full bg-[#0c0d10] p-4">
                {Lists}
              </ul>
            )}
          </div>

          <Image src={logo} alt='Logo'></Image>

          <a className="m-3 font-bold btn-ghost text-xl text-white">
            FITLOG
          </a>

        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {Lists}
          </ul>
        </div>

        <div className="navbar-end gap-2">

          <Link className='flex gap-2' href={'/MyPlans'}>
            <h1 className='mt-0.5'>
              Plan
            </h1>

            <h1 className="font-bold px-3 py-1 bg-[#C2F800] text-black rounded-full">
              {plan.length}
            </h1>
          </Link>

          <Link className='flex gap-2' href={'/MyPlans'}>
            <h1 className='mt-0.5'>
              Saved
            </h1>

            <h1 className="font-bold px-3 py-1 border border-gray-600 rounded-full">
              {saved.length}
            </h1>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Navbar;

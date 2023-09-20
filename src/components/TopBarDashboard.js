import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { IoIosAdd } from "react-icons/io"
import { useState } from "react";

const TopBarDashboard = ({ navbarButton }) => {
  const { data: session } = useSession();
  const [profileDropdown, setProfileDropdown] = useState(false);
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row gap-4 items-start sm:items-center sm:justify-between md:px-2">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex sm:hidden w-full border-t-[1px] h-[1px] border-gray-500/50"></div>
        <div className="flex flex-row gap-4 justify-end items-center w-full lg:w-auto">
          <div className="flex flex-row bg-white items-center gap-4 rounded-lg p-1 px-3 text-sm text-slate-500 ">
            <input
              placeholder="Search..."
              className="bg-inherit  focus:outline-none"></input><AiOutlineSearch /></div>
          <span>
            <BiBell className="text-xl" />
          </span>
          <div className="relative">
            <button
              id="Profile Dropdown Menu"
              title="Account menu"
              onClick={() => setProfileDropdown(!profileDropdown)}
              className="flex items-center">

              {!profileDropdown ?

                <Image
                  src={session?.user.image}
                  alt="avatar"
                  className="rounded-full"
                  width={32}
                  height={32}
                />
                :
                <>
                  <button
                    id="Profile Dropdown Menu"
                    title="Close menu"
                    onClick={() => !profileDropdown}>
                    <IoIosAdd className='text-black text-2xl bg-white/10 rotate-45 rounded-full h-8 w-8' /></button></>}
            </button>

            {/*Profile dropdown menu*/}
            <div className={`${!profileDropdown && "hidden"} origin-top-right right-0 absolute mt-2 max-w-56 min-w-fit bg-white border border-gray-300 rounded-xl shadow-lg z-20 overflow-hidden`}>
              <div className="flex flex-col items-start w-full">
                <button className="flex w-full px-4 py-2 text-gray-800 hover:bg-blue-100 border-b border-gray-500/50 ">
                  <span className="flex flex-col w-full items-start text-medium pointer-events-none ">
                    <h1>{session?.user.name}</h1>
                    <h4 className="text-sm text-gray-500">{session?.user.email}</h4>
                  </span>
                </button>
                <button
                  title="Log Out"
                  id="Log Out"
                  onClick={() => signOut("google")}
                  className="flex w-full px-4 py-2 bg-red-100 hover:bg-red-200 text-red-400">Log out</button>
              </div>
            </div>
          </div>

          <button
            id="navbarOpenButton"
            title="Sidebar"
            onClick={navbarButton}
            className="lg:hidden h-8 w-8 rounded-full"><AiOutlineMenu className="text-2xl" /></button>
        </div>
      </div>

    </>
  );
}

export default TopBarDashboard;
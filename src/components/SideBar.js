import { FiPieChart,FiTag } from 'react-icons/fi';
import { TbCalendarTime } from 'react-icons/tb';
import { PiGearSix,PiUserCircle } from 'react-icons/pi';
import React from 'react';
import { IoIosAdd } from "react-icons/io"


const Data = [
  {name : "Dashboard",
    icon : <FiPieChart />,
  },
  {name : "Transactions",
    icon : <FiTag />,
  },
  {name : "Schedules",
    icon : <TbCalendarTime />,
  },
  {name : "Users",
    icon : <PiUserCircle />,
  },
  {name : "Settings",
    icon : <PiGearSix />,
  }
]


const SideBar = ({navbarState , navbarButton}) => {
  return (
    <>
    <div className={`fixed flex w-full lg:w-3/12 min-w-fit max-h-screen h-full p-8 z-20 transition-all duration-1000 ease-in-out backdrop-blur-md lg:backdrop-blur-none`}>
      <div className="flex flex-col bg-blue-500 p-10 rounded-2xl gap-10 h-full w-full">
      
        <div className="flex flex-row w-full justify-between items-start">
          <h1 className='font-bold text-4xl text-white'>Board.</h1>
          <button
          id="Close Navbar Button"
          title="Close"
          onClick={navbarButton} className='lg:hidden'><IoIosAdd className='text-white text-4xl bg-white/10 rotate-45 rounded-full'/></button>
        </div>
      
      <div className="flex flex-1 flex-col gap-4 ">
      {Data.map((option,i) => (
        <button id={option.name} title={option.name} key={`${option}-${i}`} className='flex flex-row gap-6 items-center text-lg text-white font-light hover:font-medium hover:cursor-pointer hover:translate-x-1 transition-all duration-300 focus:font-semibold'>
          <span className="pt-[3px]">{option.icon}</span>
          <h2>{option.name}</h2>
        </button>
      ))}
      </div>

        <div className="flex flex-col justify-start gap-2 font-light text-sm text-white w-full ">
          <h3 className="hover:cursor-pointer hover:underline hover:decoration-solid">Help</h3>
          <h3 className="hover:cursor-pointer hover:underline hover:decoration-solid">Contact Us</h3>
        </div>
        </div>
    </div>
    </>
  );
}

export default SideBar;
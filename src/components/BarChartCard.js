import { GoDotFill } from "react-icons/go"
import BarChart from './BarChart';

const BarChartCard = ({ data }) => {
  return (
    <>
    <div className="flex flex-col w-full h-96 rounded-3xl border-[1px] border-[#E0E0E0] drop-shadow-md pr-5 pt-6 pb-3 p-1 md:px-4 md:pr-6  bg-white gap-4">
      <div className="flex flex-row justify-between items-center">
      <div className="px-6 pb-4">
      <h1 className="font-bold text-xl">Activities</h1>
      <h3 className="font-normal text-[#858585]">May - June 2023</h3>
      </div>
      <div className="flex flex-row gap-10 pr-4">
        <span className="flex flex-row items-center gap-2 "><GoDotFill className="text-xl text-[#98D89E]"/><p className="text-sm">{"Guest"}</p></span>
        <span className="flex flex-row items-center gap-2 "><GoDotFill className="text-xl text-[#EE8484]"/><p className="text-sm">{"User"}</p></span>
      </div>
      </div>
    <BarChart data={data} />
    
    </div>
    </>
  );
}

export default BarChartCard;
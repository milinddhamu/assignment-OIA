import { GoDotFill } from "react-icons/go"
import PieChart from './PieChart';


const PieChartCard = ({ data }) => {
  return (
    <>
    <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 rounded-3xl border-[1px] border-[#E0E0E0] drop-shadow-md bg-white w-full py-6 pb-4 px-6 pt-7  ">
          <div className="flex flex-row justify-between items-center font-bold text-xl px-4">
            <h1>Top Products</h1>
            <h3 className="font-normal text-sm text-[#858585]">May - June 2021</h3>
          </div>
        <div className="flex flex-row w-full justify-around sm:gap-3 md:gap-0 ">

          {data && <PieChart data={data} />}

          <div className="flex flex-col items-start justify-center gap-5 min-w-fit overflow-hidden">
            {data.map((item , index) => (
              <div key={item.name} className="flex flex-row items-start gap-2 ">
                <GoDotFill style={{color: `${item.fill}`}} className={`scale-150 mt-[6px] `}/>
                  <span className="flex flex-col">
                    <h3 className="text-xs sm:text-sm md:text-base font-bold">{item.name}</h3>
                    <p className="text-xs md:text-sm text-[#858585] ">{item.value}{"%"}</p>
                  </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PieChartCard;
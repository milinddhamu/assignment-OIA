import { BiBell } from 'react-icons/bi';
import { TbCashBanknote } from 'react-icons/tb';
import { BsTags } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';

const SmallCard = ({name,value,change}) => {
  const IconSwitchCase = (name) => {
    let icon, backgroundIconColor;
  
    switch (name) {
      case "Total Revenues":
        icon = <TbCashBanknote />;
        backgroundIconColor = "bg-[#7FCD93]";
        break;
      case "Total Transactions":
        icon = <BsTags />;
        backgroundIconColor = "bg-[#DEBF85]";
        break;
      case "Total Likes":
        icon = <AiOutlineLike />;
        backgroundIconColor = "bg-[#ECA4A4]";
        break;
      case "Total Users":
        icon = <FiUsers />;
        backgroundIconColor = "bg-[#A9B0E5]";
        break;
      default:
        icon = null; // Or set a default icon
        backgroundIconColor = "bg-gray-500"; // Or set a default background color class
        break;
    }
  
    return { icon, backgroundIconColor };
  };
  
  const { icon, backgroundIconColor } = IconSwitchCase(name);
  return (
    <div title={name} id={name} className="flex flex-col rounded-3xl border-[3px] border-[#E0E0E0] drop-shadow-md p-4 gap-3 bg-white w-full hover:cursor-pointer hover:shadow-xl transition-all">
        {/* icon here*/}
        <div className={`rounded-full ${backgroundIconColor} max-w-fit text-xl p-2 text-white`}>
          {icon}
          </div>
      <div className="flex flex-row justify-between items-end gap-2">
        <div><p className="text-xs">{name}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
        </div>
        <div className={`bg-green-300/40 rounded-full px-3 py-1 text-green-600 font-bold text-xs`}>
          <p>{change}</p>  
        </div>
      </div>
      </div>
  );
}

export default SmallCard;
import { AiOutlineYoutube,AiOutlineMail,AiOutlineInstagram, AiOutlineWhatsApp ,AiOutlineEdit } from "react-icons/ai"
const Profile = ({formData,setModalToggle}) => {
  const Data = [
    {name : "Phone",
      icon : <AiOutlineWhatsApp className="text-[#3CC952]"/>,
      value: formData.phone,
      color: "bg-[#3CC952]"
    },
    {name : "Instagram",
      icon : <AiOutlineInstagram className="text-[#ff4eaf]"/>,
      value: formData.insta,
      color: "bg-[#ff4eaf]"
    },
    { name : "Email",
      icon : <AiOutlineMail className="text-[#7c33cf]"/>,
      value: formData.email,
      color: "bg-[#7c33cf]"
    },
    {name : "Youtube",
      icon : <AiOutlineYoutube className="text-[#FF0000]"/>,
      value: formData.youtube,
      color: "bg-[#FF0000]"
    }
  ];

  const filteredData = Data.filter((item) => item.value !== "");
  return (
    <>
    <div className="flex flex-col w-full h-full justify-between p-8 md:px-12 md:py-10 gap-8">
            <div className="flex flex-row justify-between w-full items-start">
              <h1 className="text-3xl font-bold">{formData.name}</h1><button title="edit" id="edit" onClick={()=> setModalToggle(true)}>
                <AiOutlineEdit className="text-2xl text-[#858585] hover:text-black"/></button>
            </div>

            <div className="grid grid-cols-2 grid-flow-row md:grid-cols-1 xl:grid-cols-2 gap-4 w-full overflow-hidden min-w-fit">
                {filteredData.map((item , index) => (
                  <div key={index} className="flex flex-row gap-4">
                    <span className={`rounded-full ${item.color} bg-opacity-20 max-w-fit text-xl p-2`}>
                      {item.icon}
                    </span>
                    <h3 title={item.value} className="underline truncate">{(item.name === "Phone" ? `+91 ${item.value}` : item.value)}</h3>
                  </div>
                ))}
              </div>
          </div>
    </>
  );
}

export default Profile;
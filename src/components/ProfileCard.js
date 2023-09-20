import Profile from './Profile';
import { IoIosAdd } from "react-icons/io"
import ModalForm from './ModalForm';
import { useState  } from "react";

const ProfileCard = ({}) => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'John@xyz.com',
    phone: '9145673438',
    insta: 'john_official',
    youtube: 'john_official'
  });
  const [profileState , setProfileState] = useState(false)
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <>
    <div className="flex flex-col gap-2 rounded-3xl border-[3px] border-[#E0E0E0] drop-shadow-md bg-white w-full h-full ">
          {!profileState ? <>
            <div className="flex flex-col justify-center items-center min-h-full gap-4 py-16 md:py-0">
            <button
              title="Add Profile"
              id="Add Profile" 
              className="bg-[#EBEBEB] rounded-full max-w-fit aspect-square p-3 hover:brightness-90 transition-all duration-300"
              onClick={()=>setModalToggle(true)}
            >
              <IoIosAdd className="text-6xl text-[#999CA0]" />
          </button>
          <h2 className="pl-2 text-lg text-[#858585]">Add Profile</h2>
          </div>
          </> : <>
          <Profile formData={formData} setModalToggle={setModalToggle} />
          </>}
      </div>
      
      {modalToggle && <ModalForm setModalToggle={setModalToggle} modalToggle={modalToggle} formData={formData} setFormData={setFormData} setProfileState={setProfileState} /> }
    </>
  )
}

export default ProfileCard;
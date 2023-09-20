import { IoIosAdd } from "react-icons/io"
import { useState , useEffect } from "react";

const ModalForm = ({modalToggle ,setModalToggle ,setProfileState , setFormData , formData}) => {
  const [nextForm , setNextForm] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^\d{10}$/;
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Validate phone number with regex
    if (name === 'email') {
      if (!emailRegex.test(value)) {
        setErrors({
          ...errors,
          email: 'Invalid email format.',
        });
      } else {
        setErrors({
          ...errors,
          email: '',
        });
      }
    } else if (name === 'phone') {
      if (!phoneRegex.test(value)) {
        setErrors({
          ...errors,
          phone: 'Phone no. must be of 10 digits.',
        });
      } else {
        setErrors({
          ...errors,
          phone: '',
        });
      }
    } else if (name === 'name') {
      if (value.length <= 3) {
        setErrors({
          ...errors,
          name: 'Name must be of 3 digits.',
        });
      } else {
        setErrors({
          ...errors,
          name: '',
        });
      }
    }
  };

  const borderColor = (formState) => formState ? "border-blue-500" : "border-gray-500"

  const validateFormData = () => {
    let isValid = true;
    const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
    const phoneRegex = /^\d{10}$/;

    // Validate name
    if (formData.name.trim() === '') {
      isValid = false;
    }

    // Validate phone
    if (!phoneRegex.test(formData.phone)) {
      isValid = false;
    }

    // Validate email
    if (!emailRegex.test(formData.email)) {
      isValid = false;
    } else {
    }
    return isValid;
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    const isValid =  validateFormData();
    if(isValid && !nextForm){
      setNextForm(true);
    } else if (nextForm) {
      setModalToggle(!modalToggle)
      setProfileState(true)
    } 
  };

  return (
    <>
    <div className={`fixed z-20 overflow-y-auto top-0 w-full left-0`} id="modal">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center w-full">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="inline-block align-center bg-white rounded-xl text-left overflow-hidden drop-shadow-xl transform transition-all my-8 align-middle max-w-lg w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="flex flex-col bg-white">
            <div className="flex flex-row justify-between items-start w-full md:text-lg font-semibold border-b-[.5px] p-3 md:p-4"><h1>Add New Profile</h1><button
          title="Close"
          onClick={() => setModalToggle(!modalToggle)} className=''><IoIosAdd className='text-slate-500 text-2xl rotate-45'/></button></div>
            <div className="flex flex-row justify-around items-center px-8 py-2 w-full gap-8">
              <button id="basic" className={`w-full text-center border-b-4 text-semibold rounded-b ${borderColor(!nextForm)} py-2`}>Basic</button>
              <button id="contact" className={`w-full text-center border-b-4 text-semibold rounded-b ${borderColor(nextForm)} py-2`}>Contact</button>
            </div>
            <div className="container p-4">
            {!nextForm ? 
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="block text-gray-600">Enter Name{"*"}</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Eg. John Doe"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="block text-gray-600">Enter Email{"*"}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Eg. John@xyz.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="block text-gray-600">Enter Phone{"*"}</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Eg. 9121234383"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 ${
              errors.phone ? 'border-red-500' : ''
            }`}
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
      </form> : <>
      <div className="mb-[90px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{minHeight: "288px !important" }}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="block text-gray-600">Instagram Link{"(Optional)"}</label>
          <input
            type="text"
            id="insta"
            name="insta"
            placeholder="Eg. ..instagram.com/username"
            value={formData.insta}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="block text-gray-600">Youtube Link {"(Optional)"}</label>
          <input
            type="text"
            id="youtube"
            name="youtube"
            placeholder="Eg. ..youtebe/username"
            value={formData.youtube}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>
      </form>
      </div>
      </>}
    </div>
              </div>
  <div className="px-4 py-3 text-right">
                <button 
                  id={!nextForm ? "Next" : "Submit"}
                  title={!nextForm ? "Next" : "Submit"}
                  className="py-2 px-5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 w-24" onClick={handleSubmit}>
                
                    {!nextForm ? "Next" : "Submit"}
                
                </button>
                </div>
            </div>
          </div>
        </div>
        </>
  );
}

export default ModalForm;
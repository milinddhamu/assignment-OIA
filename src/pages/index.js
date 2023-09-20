import { useRouter } from "next/router"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import DashBoard from "../components/DashBoard";
import Loading from "../components/Loading";

export default function Home() {
  const router = useRouter();
  const { data:session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [isNavbarActive , setIsNavbarActive] = useState(false);
  const handleActive = () => setIsNavbarActive((prev)=> !(prev));
  useEffect(() => {
    if (!session || session?.status === "unauthenticated") {
      router.push('/auth/login');
    } else {
      setIsLoading(false);
    }
  }, [session, router]);

  if (isLoading) {
    return
    <> 
    <div className="min-w-screen min-h-screen">
      <Loading />;
    </div>
    </>
  };
  return (
    <>
    <div className="bg-[#F8FAFF]">
      <div className={` ${isNavbarActive ? "flex" : "hidden lg:flex"} `}>
        <SideBar navbarState={isNavbarActive} navbarButton={handleActive} />
      </div>

      <div className="flex justify-end w-full ">        
        <DashBoard navbarButton={handleActive}/>
      </div>
      
    </div>
    </>
  )
}

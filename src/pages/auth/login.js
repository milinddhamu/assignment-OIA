import LoginCard from "@/components/LoginCard";
import { FaGithub, FaLinkedin, FaSquareXTwitter, FaDiscord } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
const login = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push('/');
    }
  }, [session]);
  return (
    <>
      <main className="flex flex-col lg:flex-row lg:justify-between bg-[#F8FAFF] min-h-screen">
        <section className="relative flex lg:min-h-screen lg:w-1/2 h-full">
          <div className="flex flex-col justify-between items-center w-full p-12 gap-20 lg:gap-0 z-10 pb-24 lg:pb-12">
          <div className="flex w-full items-start font-bold text-white">LOGO</div>
            <h1 className="font-bold text-5xl text-white">Board.</h1>
              <div className="flex w-full justify-center gap-8 text-4xl text-white">
                <a href="https://github.com">
                <FaGithub className="hover:cursor-pointer hover:scale-105 transition-all ease-out" />
                </a>
                <a href="https://x.com">
                <FaSquareXTwitter className="hover:cursor-pointer hover:scale-105 transition-all ease-out" />
                </a>
                <a href="https://linkedin.com">
                <FaLinkedin className="hover:cursor-pointer hover:scale-105 transition-all ease-out" />
                </a>
                <a href="https://discord.com">
                <FaDiscord className="hover:cursor-pointer hover:scale-105 transition-all ease-out" />
                </a>
              </div>
          </div> 
          <div className="flex w-full h-full absolute top-0 bg-gradient-to-b from-blue-500 to-blue-700 skew-y-6 lg:-skew-x-6 -my-14 lg:-ml-20 lg:mt-0 lg:skew-y-0"></div>
        </section>
        <section className="flex lg:w-1/2 h-full lg:min-h-screen justify-center items-center p-10">
          <LoginCard />
        </section>
      </main>
    </>
  );
}

export default login;
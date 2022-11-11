import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="fixed w-full z-50 top-0">
      <nav className="relative text-black items-center bg-white py-1 border-b border-gray-300">
        <div className="flex items-center h-14">
          <div className="inline-flex px-8 items-center w-full justify-between ">
            <div className="hover:cursor-pointer p-4 select-none ">
              <div className="inline-flex mx-2">
                <a
                  href={"/"}
                  className="text-left text-3xl font-bold items-center text-indigo-600 tracking-tighter"
                >
                  <Image
                    src={"/vercel.svg"}
                    priority={true}
                    height={80}
                    width={100}
                    alt="Logo"
                    className="inline-block h-5 w-fit"
                  />
                </a>
              </div>
            </div>
            <div className=" inline-flex justify-between">
              {/*{router.pathname !== "/" ? <NavSearch /> : null}*/}
            </div>
            <div className="flex px-4 gap-x-4 font-medium mx-4">
              <button
                className="flex w-fit my-4 mx-auto text-center justify-center py-1.5 px-8 text-black bg-white
              rounded hover:opacity-90"
                onClick={() => router.push("/login")}
              >
                Log In
              </button>
              <button
                className="flex w-fit my-4 mx-auto text-center justify-center py-1.5 px-8 text-white bg-blue-700 rounded
              hover:bg-opacity-90 active:scale-95"
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

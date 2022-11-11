import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <div className="relative flex bottom-0 w-full h-14 justify-center bg-white text-black border-t border-gray-300 items-center mt-auto">
      <div className="flex justify-between items-center w-full px-8  ">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center justify-start text-md tracking-tighter">
            <a href={"/"} className="font-bold text-md text-black">
              © 2022 COMPANY
            </a>
          </div>
        </div>
        <div className="inline-flex gap-x-20 text-sm tracking-tighter">
          <a href={"/#about"} className=" hover:cursor-pointer hover:underline">
            About
          </a>
          <a href="/terms" className=" hover:cursor-pointer hover:underline">
            Terms
          </a>
          <a href="/privacy" className=" hover:cursor-pointer hover:underline">
            Privacy
          </a>
          <span className="hover:underline">
            <a
              href="https://github.com/sponsors/MarketMakerLite"
              target="_blank"
              className="inline-flex items-center tracking-tighter hover:cursor-pointer "
            >
              <HeartIcon className="h-3.5 items-center text-pink-700 pr-2 hover:underline" />{" "}
              Sponsor
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

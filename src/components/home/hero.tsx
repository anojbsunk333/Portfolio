import Image from "next/image";
import { Icon } from "@iconify/react";
export default function Hero() {
  return (
    <div className=" bg-black h-screen flex justify-center items-center ">
      
      <div>
        <div className=" absolute ">
          <h1 className="text-white relative heading text-[90px] font-bold  -translate-y-20  -translate-x-45 ">
            <div className="absolute inset-0 blur-[80px] opacity-80 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <span className="relative z-50"> 𝒜𝒩𝒪𝒥 𝐵𝐼𝒮𝐻𝒰𝒩𝒦𝐸</span>
          </h1>
        </div>
        <Icon
          icon={"devicon:react-wordmark"}
          className="size-12 absolute left-40 top-40"
        />
        <Icon
          icon={"devicon:nodejs-wordmark"}
          className="size-20 absolute bottom-30 right-50"
        />
        <Icon
          icon={"arcticons:easy-coder"}
          className="size-20 text-white absolute right-68 top-60"
        />
        <Icon
          icon={"fluent-emoji-flat:laptop"}
          className="size-15 text-white absolute left-70 bottom-40"
        />
        <Icon
          icon={"fa7-solid:bugs"}
          className="size-20 text-green-900 absolute right-10 top-20"
        />
        <h2 className="text-white text-3xl mt-10">
          ---------- <strong>Frontend Developer</strong> ----------
        </h2>
        <h3 className="px-40 text-amber-100">Where Design Meets Code</h3>
      </div>
    </div>
  );
}
//

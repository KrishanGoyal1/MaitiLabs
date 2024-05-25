import Image from "next/image";
import React from "react";

export function Appbar({children}: {children: React.ReactNode}){
    return <div className="">
        <div className="cursor-default sticky nav w-auto top-0 flex-row flex justify-between items-center mt-[20px] text-[#1E3A2B] bg-[#ffffff] h-[80px] z-10">
            <div className="md:ml-2 ml-3 flex order-first">
                <Image className="ml-20" src="https://www.maitilabs.org/static/media/Logo.00129f1c05848c338b15.png" alt="" height={40} width={40}/>
                <div className="font-thin text-[30px] ml-1">Maiti Labs</div>
            </div>
            <div className="flex flex-row mx-auto my-auto text-lg">
                <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">Home</div>
                <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">About</div>
                <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">Awareness Portal</div>
                <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">Career</div>
                <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">Contact</div>
                <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]">Team</div>
            </div>
        <div className="md:flex hidden text-center mr-20">
            <button className="group relative  font-mediumcursor-pointer w-[150px] h-[40px] delay-75 rounded-full bg-[#1e3a2b] hover:bg-slate-100/50 hover:shadow-md hover:shadow-emerald-800/50 text-slate-100 transition-colors duration-[300ms] hover:text-[#1e3a2b]">
                <span>
                    <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62] text-lg">Login</div>
                </span>
            </button>
        </div>
        </div>
        {children}
    </div>
}
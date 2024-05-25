import Image from "next/image";

export function Footer() {
    return <div>
        <footer className="realtive top-[82px] h-fit flex w-auto">
            <div className="mx-auto ml-10 mt-[68px] h-fit w-[50%]">
                <div className="flex h-[70px] font-light text-[32px]">
                    <Image src="https://www.maitilabs.org/static/media/Logo.00129f1c05848c338b15.png" alt="" height={100} width={100} className="w-[68px] h-[68px]" />
                    <div className="pl-4 pt-2 font-bold">Maiti Labs</div>
                </div>
                <div className="block my-[66px] font-light text-[25px] h-auto leading-[29px] w-[415px]">
                    <p className="justify-left">Join a diverse and passionate community, making a lasting impact on our planet. Together, let&apos;s raise awareness and accelerate climate action worldwide.</p>
                </div>
                <div className="flex w-full mx-auto mt-[80px]">
                    <button className="group relative font-mediumcursor-pointer mr-1 md:w-[150px] w-[100px] h-[40px] delay-50 rounded-full bg-[#1e3a2b] hover:bg-[#ffff] hover:shadow-md hover:shadow-emerald-800/50 text-[#ffff] transition-colors duration-[300ms] hover:text-[#1e3a2b] hover:bg-[#1e3a2b] hover:font-semibold transform scale-100 group-hover:scale-110">
                        <span>
                            <p className="transition-transform transform scale-105 group-hover:scale-100 font-medium">Join Us</p>
                        </span>
                    </button>
                </div>
            </div>
                <div className="flex flex-col w-[40%] mx-auto ml-[280px] my-[46px] mr-[46px] h-[470px]">
                    <button className="group relative font-medium cursor-pointer mr-1 w-[200px] h-[40px] delay-50 rounded-full bg-[#1e3a2b] hover:bg-[#ffff] hover:shadow-md hover:shadow-emerald-800/50 text-[#ffff] transition-colors duration-[300ms] hover:text-[#1e3a2b] hover:bg-[#1e3a2b] hover:font-semibold transform scale-100 group-hover:scale-110">
                        <span>
                            <p className="transition-transform transform scale-105 group-hover:scale-100 font-medium">Sign Up</p>
                        </span>
                    </button>
                    <div className="flex mt-[80px]">
                        <div className="mt-[23px] w-[40%] font-bold text-[28px] leading-[24px]">
                            Company<div
                                className="mt-[19px] md:text-[20px] text-[18px] font-light text-left leading-[40px]">
                                <ul>
                                    <li> <a className="block   hover:text-[#1E3A2B]  " href="/">About</a></li>
                                    <li> <a className="block  hover:text-[#1E3A2B]" href="/">Awareness Portal</a>
                                    </li>
                                    <li><a className="block   hover:text-[#1E3A2B]" href="/">GreenBit</a></li>
                                    <li><a className="block   hover:text-[#1E3A2B]" href="/">Team</a></li>
                                    <li><a className="block  hover:text-[#1E3A2B]" href="/">Career</a></li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="mt-[23px] w-[40%] font-bold  text-[28px] leading-[1.2em] ml-[85px]">
                            Resources<div
                                className="mt-[19px] md:text-[20px] text-[18px] font-light text-left leading-[40px]">
                                <ul>
                                    <li> <a className="block  hover:text-[#1E3A2B]  " href="/">Blogs</a></li>
                                    <li> <a className="block  hover:text-[#1E3A2B]"
                                        href="/">Linkedin</a></li>
                                    <li><a className="block  hover:text-[#1E3A2B]"
                                        href="/">Twitter</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    </div>
}
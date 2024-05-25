
export function HomeComponent(){
    return <div>
        <div className="cursor-default mx-auto w-auto">
            <p className="text-[#1E3A2B] text-center mt-[115px] md:text-[80px] text-[62px] font-extrabold">The Voice of Planet Earth in every Language!</p>
            <p className="mx-auto md:mt-[40px] mt-[19px] text-center text-[30px] leading-[1.4] font-light text-[#1E3A2B] md:w-[589px] w-full h-auto font-medium">Global youth-led Non-Profit Organization</p>
            <div className="flex justify-evenly md:justify-around w-[540px] text-[18px] h-[112px] mt-[20px] mx-auto">
                <button className="group relative font-mediumcursor-pointer w-[230px] my-[32px] h-[40px] delay-50 rounded-full bg-[#1e3a2b] hover:bg-slate-100/50 hover:shadow-md hover:shadow-emerald-800/50 text-slate-100 transition-colors duration-[300ms] hover:text-[#1e3a2b] hover:font-semibold transform scale-100 group-hover:scale-110">
                    <span>
                        <p className="transition-transform transform scale-105 group-hover:scale-100">Join Us</p>
                    </span>
                </button>
                <button className="group relative font-mediumcursor-pointer w-[230px] my-[32px] h-[40px] delay-50 rounded-full bg-[#1e3a2b] hover:bg-slate-100/50 hover:shadow-md hover:shadow-emerald-800/50 text-slate-100 transition-colors duration-[300ms] hover:text-[#1e3a2b] hover:font-semibold transform scale-100 group-hover:scale-110">
                    <span>
                        <p className="transition-transform transform scale-105 group-hover:scale-100">Awareness Portal</p>
                    </span>
                </button>
            </div>
        </div>
        <div className="cursor-default w-[90%] px-4 h-auto font-[Belleza] mt-[185px] mx-auto">
            <p className="text-[85px] leading-[100px]  text-center tracking-[-0.05em]">
                We are a Non-Profit Youth-led Org fostering <span className="bg-green-900 text-white">Climate Action</span> by making information accessible in every language possible. 🌱
            </p>
        </div>
    </div>
}
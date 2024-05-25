
export function Scroll() {
    return <div>
        <div className="mt-[50px] md:w-full md:h-[600px] bg-cover bg-center backdrop-opacity-65" id="awareness" style={{ backgroundImage: `url("https://www.maitilabs.org/static/media/pexels-eberhard-grossgasteiger-572897.8296201ae6cfc6fae818.jpg")` }}>
            <div className="flex flex-col items-center justify-center my-auto">
                <div className="mt-[115px]">
                    <p className="text-center text-[50px] text-white font-extrabold">AWARENESS PORTAL</p>
                </div>
                <div className="text-center md:w-[50%] w-[80%] text-white font-light ">
                    <p className="mt-[20px] text-[27px] leading-[1.5em] tracking-[-0.5px]">We speak about important issue to address climate change.</p>
                </div>
                <div className=" mt-[20px] md:mb-0 mb-[64px]"><button
                    className="group relative font-mediumcursor-pointer w-[210px] h-[40px] delay-50 rounded-full bg-[#1e3a2b] hover:bg-[#ffff] hover:shadow-md hover:shadow-emerald-800/50 text-[#ffff] transition-colors duration-[300ms] hover:text-[#1e3a2b] hover:bg-[#1e3a2b] hover:font-semibold transform scale-100 group-hover:scale-110"
                    name="awareness"><span>
                        <p className="transition-transform transform scale-105 group-hover:scale-100 font-medium">Awareness Portal</p>
                    </span></button></div>
            </div>
        </div>
        <div className="relative md:w-full md:h-[600px] bg-cover bg-center backdrop-opacity-65" id="career"
            style={{ backgroundImage: `url("https://www.maitilabs.org/static/media/pexels-roberto-nickson-2559941.dc3ba4c1aaf8a91f289b.jpg")` }}>
            <div className="flex flex-col items-center justify-center my-auto">
                <div className="mt-[115px]">
                    <p className="text-center text-[50px] text-white font-extrabold">Join Us</p>
                </div>
                <div className="text-center md:w-[50%] w-[80%] text-white font-light ">
                    <p className="mt-[20px] text-[27px] leading-[1.5em] tracking-[-0.5px]">We cannot do this alone.
                        We need your voice; your actions. Join us in our fight against the climate crisis. Sign
                        up today and be part of the change.</p>
                </div>
                <div className="flex mt-[20px] md:mb-0 mb-[64px]"><button
                    className="group relative font-mediumcursor-pointer mr-1 w-[100px] h-[40px] delay-50 rounded-full bg-[#1e3a2b] hover:bg-[#ffff] hover:shadow-md hover:shadow-emerald-800/50 text-[#ffff] transition-colors duration-[300ms] hover:text-[#1e3a2b] hover:bg-[#1e3a2b] hover:font-semibold transform scale-100 group-hover:scale-110"
                    name="Career"><span>
                        <p className="transition-transform transform scale-105 group-hover:scale-100 font-medium">Careers</p>
                    </span></button><button className="group relative font-mediumcursor-pointer ml-1 w-[100px] h-[40px] delay-50 rounded-full bg-[#ffff] hover:bg-[#1e3a2b] hover:shadow-md hover:shadow-emerald-800/50 text-[#1e3a2b] transition-colors duration-[300ms] hover:text-[#ffff] hover:font-semibold transform scale-100 group-hover:scale-110"
                        name="Signup"><span>
                            <p className="transition-transform transform scale-105 group-hover:scale-100 font-medium">
                                Join Us</p>
                        </span></button></div>
            </div>
        </div>
    </div>
}
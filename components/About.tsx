import Image from "next/image";

export function About() {
    return <div>
        <div className="cursor-default w-auto mx-auto mt-[101px] bg-white">
            <div className="w-auto mx-auto bg-[#F8F4F0]">
                <div className="cursor-default mt[54px] w-[310px] h-[71px] mx-auto text-center text-[57px] text-[#1E3A2B] font-bold md:pt-[30px] pt-[15px]">About Us</div>
                <div className="mx-auto mt-[69px] flex w-[90%]">
                    <div className="w-[630px] my-[20px] mx-auto">
                        <Image src='https://www.maitilabs.org/static/media/pexels-roberto-nickson-2559941.dc3ba4c1aaf8a91f289b.jpg' alt="" height={10000} width={10000} className="rounded-[20px]" />
                    </div>
                    <div className="w-[50%] h-auto my-auto ml-[37px]">
                        <h1 className="text-green-900 text-[42px] mt-[34px] font-bold text-left">Youth-Led &amp; Global</h1>
                        <p className="font-light text-[22px] text-left">We are a global youth-led Non-Profit Organization committed to tackling the pressing climate crisis through our innovative community-first approach.</p>
                    </div>
                </div>
                <div className="mx-auto mt-[69px] flex w-[90%]">
                    <div className="w-[50%] h-auto my-auto mr-[37px]">
                        <h1 className="text-green-900 text-[42px] mt-[34px] font-bold text-right">Tech Driven Action</h1>
                        <p className="font-light text-[22px] text-right">Powerful technology products, specifically cutting-edge news sites, that empower users to raise their voices and contribute to climate action</p>
                    </div>
                    <div className="flex w-[630px] my-[20px] mx-auto">
                        <Image src="https://www.maitilabs.org/static/media/pexels-baskin-creative-studios-1766838.d0aae02a14e21ccdb459.jpg" alt="" height={10000} width={10000} className="rounded-[20px]" />
                    </div>
                </div>
                <div className="mx-auto mt-[69px] flex w-[90%]">
                    <div className="w-[630px] my-[20px] mx-auto">
                        <Image src='https://www.maitilabs.org/static/media/pexels-james-wheeler-417074.7730cedcf5c33b1f5fdf.jpg' alt="" height={10000} width={10000} className="rounded-[20px]" />
                    </div>
                    <div className="w-[50%] h-auto my-auto ml-[37px]">
                        <h1 className="text-green-900 text-[42px] mt-[34px] font-bold text-left">Inclusivity through Translations</h1>
                        <p className="font-light text-[22px] text-left">Breaking down barriers through advanced artificial intelligence translations. Our content is accessible and readable in any language.</p>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-[#1f3a2b] text-2xl font-bold mt-10">Our Initiative</h1>
                    <div className="flex flex-row justify-evenly w-1/2 m-[8px] mx-auto h-full p-5 bg-[#f7f1ec] rounded-xl border-2 border-[#c2bebb] mt-10">
                        <div className="flex flex-col justify-center items-center align-center h-full p-5 w-full">
                            <Image src="https://www.maitilabs.org/static/media/Awareness.45126e082c8be53eb6b4.jpg" alt="" height={250} width={250} className="m-[10px] rounded-xl" />
                            <h1 className="text-[#1f3a2b] text-center font-bold mt-4">Awareness Portal</h1>
                            <h3 className="text-sm text-center">Climate Information in Every Language</h3>
                            <button className="text-darkblue text-sm text-blue-500">Learn More &gt;</button>
                        </div>
                        <div className="flex flex-col justify-center items-center align-center h-full p-5 w-full">
                            <Image src="https://www.maitilabs.org/static/media/black%20white%20leaf%20logo.a74b09806fdb83fb3de3.png" alt="" height={250} width={250} className="m-[10px] rounded-xl" />
                            <h1 className="text-[#1f3a2b] text-center font-bold mt-4">GreenBit</h1>
                            <h3 className="text-sm text-center">Compressing data, <br />Expanding Futures</h3>
                            <button className="text-darkblue text-sm text-blue-500">Learn More &gt;</button>
                        </div>
                    </div>
                </div>
                <div className="w-[17%] h-[58px] mx-auto text-center relative top-[7vh] mt-[77px] pb-[100px]">
                    <button className="group relative font-medium cursor-pointer w-[130px] my-[32px] h-[40px] delay-50 rounded-full bg-green-900 hover:bg-slate-100/50 hover:shadow-md hover:shadow-emerald-800/50 text-slate-100 transition-colors duration-[300ms] hover:text-green-900 hover:font-semibold transform scale-100 group-hover:scale-110">
                        <span>
                            <p className="transition-transform transform-scale-100 group-hover:scale-110 font-medium">More</p>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
}
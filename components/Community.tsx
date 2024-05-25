import Image from "next/image";

export function Community(){
    return <div>
        <div className="cursor-default bg-[#D9A673] pt-[101px] w-[100%] h-[712px] mt-[102px]">
            <p className="mx-auto w-fit text-center font-extrabold text-[50px] tracking-[-2.1px] leading-[1.2em]">Our Community Members Come from ❤️</p>
            <div className="w-[973px] h-auto mt-[80px] container mx-auto">
                <div className="text-center mt-5 mb-16 carousel-item">
                    <Image src="https://www.maitilabs.org/static/media/cr1.76e6e874bd666bda8063.png" alt="" height={250} width={250} className="inline w-[300px] rounded-[25px] bg-cover bg-[#EFE6DC]" />
                    <Image src="https://www.maitilabs.org/static/media/cr2.eb57499f4077f8729bc1.png" alt="" height={250} width={250} className="inline w-[300px] rounded-[25px] bg-cover bg-[#B5C7A4] ml-8" />
                </div>
            </div>
            <div className="flex justify-around w-full mt-[20px]">
                    <button className="group relative font-medium cursor-pointer w-[130px] my-[32px] h-[40px] delay-50 rounded-full bg-green-900 hover:bg-slate-100/50 hover:shadow-md hover:shadow-emerald-800/50 text-slate-100 transition-colors duration-[300ms] hover:text-green-900 hover:font-semibold transform scale-100 group-hover:scale-110">
                        <span>
                            <p className="transition-transform transform-scale-100 group-hover:scale-110 font-medium">Join Us</p>
                        </span>
                    </button>
                </div>
        </div>
    </div>
}
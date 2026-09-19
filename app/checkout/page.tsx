import Image from "next/image";
import Link from "next/link";

export default function checkout() {
    return (
        <main className="relative mx-auto h-[2950px] w-[1440px]">
            {/* Banner */}
            <div className="absolute left-[153px] top-[187px] h-[300px] w-[1137px] overflow-hidden rounded-[10px]">
                <Image src="/SD Banner.jpg" alt="Service Details" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#151515_0%,rgba(21,21,21,0)_100%)]" />

                {/* 1st Layout - Check Out */}
                <div className="absolute left-[100px] top-[123px] h-[54px] w-[233px]">
                    <h1 className="m-0 font-['Inter'] text-[45px] font-bold leading-[100%] tracking-[0%] text-white">
                        Check Out
                    </h1>
                </div>

                {/* 2nd Layout - Breadcrumb */}
                <div className="absolute left-[421px] top-[251px] h-[49.3px] w-[296px] bg-[#FF3811]" style={{ clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)" }}>
                    <div className="absolute left-[45px] top-[13px] h-[24px] w-[207px]">
                        <span className="font-['Inter'] text-[20px] font-medium leading-[100%] tracking-[0%] text-white">
                            Home/Checkout
                        </span>
                    </div>
                </div>
            </div>


            {/* Main Layout */}
            <div className="absolute left-[150px] top-[617px] h-[700px] w-[1140px] rounded-[10px] bg-[#F3F3F3]">

                {/* 1st Layout */}
                <div className="absolute left-[97px] top-[97px] h-[60px] w-[946px] rounded-[10px]">

                    {/* Left Layout */}
                    <div className="absolute left-[0px] top-[0px] h-[60px] w-[461px] rounded-[10px] bg-[#FFFFFF]">

                        {/* First Name */}
                        <div className="absolute left-[25px] top-[15px] h-[30px] w-[83px]">
                            <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#A2A2A2]">
                                First Name
                            </span>
                        </div>

                    </div>

                    {/* Right Layout */}
                    <div className="absolute left-[485px] top-[0px] h-[60px] w-[461px] rounded-[10px] bg-[#FFFFFF]">

                        {/* Last Name */}
                        <div className="absolute left-[25px] top-[15px] h-[30px] w-[81px]">
                            <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#A2A2A2]">
                                Last Name
                            </span>
                        </div>

                    </div>

                </div>

                {/* 2nd Layout */}
                <div className="absolute left-[97px] top-[181px] h-[60px] w-[946px] rounded-[10px]">

                    {/* Left Layout */}
                    <div className="absolute left-[0px] top-[0px] h-[60px] w-[461px] rounded-[10px] bg-[#FFFFFF]">

                        {/* Your Phone */}
                        <div className="absolute left-[25px] top-[15px] h-[30px] w-[87px]">
                            <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#A2A2A2]">
                                Your Phone
                            </span>
                        </div>

                    </div>

                    {/* Right Layout */}
                    <div className="absolute left-[485px] top-[0px] h-[60px] w-[461px] rounded-[10px] bg-[#FFFFFF]">

                        {/* Your Email */}
                        <div className="absolute left-[25px] top-[15px] h-[30px] w-[79px]">
                            <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#A2A2A2]">
                                Your Email
                            </span>
                        </div>

                    </div>

                </div>

                {/* 3rd Layout */}
                <div className="absolute left-[97px] top-[265px] h-[250px] w-[946px] rounded-[10px] bg-[#FFFFFF]">

                    {/* Your Message */}
                    <div className="absolute left-[25px] top-[25px] h-[30px] w-[108px]">
                        <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#A2A2A2]">
                            Your Message
                        </span>
                    </div>

                </div>

                {/* 4th Layout */}
                <div className="group absolute left-[97px] top-[539px] h-[64px] w-[946px] cursor-pointer overflow-hidden rounded-[10px] bg-[#FF3811] transition-[box-shadow] duration-300 ease-out hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(0,0,0,0.10)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.14)]">

                    {/* Premium Surface - Full Layout */}
                    <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-gradient-to-b from-white/[0.12] via-transparent to-black/[0.06] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></div>

                    {/* Soft Reflection - Full Layout */}
                    <div className="pointer-events-none absolute -left-[35%] top-0 h-full w-[35%] skew-x-[-20deg] bg-white/[0.10] opacity-0 transition-all duration-700 ease-out group-hover:left-[100%] group-hover:opacity-100"></div>

                    {/* Order Confirm */}
                    <Link href="/addnewservice" aria-label="Order Confirm" className="absolute left-[404px] top-[17px] z-10 flex h-[30px] w-[139px] cursor-pointer items-center justify-center rounded-[4px] bg-transparent focus:outline-none">
                        <span className="whitespace-nowrap font-['Inter'] text-[20px] font-semibold leading-[30px] tracking-[0%] text-white">
                            Order Confirm
                        </span>
                    </Link>

                </div>

            </div>

        </main>
    );
}
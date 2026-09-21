import FormNavbar from "@/components/formNavbar/page";

import Image from "next/image";

export default function Login() {
    return (
        <>
            {/* Specific Navbar */}
            <FormNavbar />
            {/* Main Content */}
            <main className="relative mx-auto -mt-[137px] h-[1100px] w-[1440px]">

                {/* Left Layout - Image */}
                <div className="absolute left-[150px] top-[300px] h-[502px] w-[460px]">
                    <Image src="/Sign Up.png" alt="Sign Up" fill className="object-cover" />
                </div>

                {/* Right Layout */}
                <div className="absolute left-[679px] top-[160px] h-[782px] w-[611px] rounded-[10px] border-[1px] border-[#D0D0D0]">

                    {/* Form Layout */}
                    <form className="absolute left-[75px] top-[75px] h-[632.0001px] w-[461px]">

                        {/* Login */}
                        <div className="absolute left-[177px] top-[0px] h-[48px] w-[107px]">
                            <h1 className="m-0 text-center font-['Inter'] text-[40px] font-semibold leading-[100%] tracking-[0%] text-[#444444]">
                                Login
                            </h1>
                        </div>

                        {/* 2nd Layout */}
                        <div className="absolute left-[0px] top-[98px] h-[534.0001px] w-[461px]">

                            {/* 1st Layout */}
                            <div className="absolute left-[0px] top-[0px] h-[325px] w-[461px] rounded-[10px]">

                                {/* 1st Inner Layout */}
                                <div className="absolute left-[0px] top-[0px] h-[102px] w-[461px] ">

                                    {/* Email */}
                                    <div className="absolute left-[0px] top-[0px] h-[22px] w-[47px]">
                                        <span className="font-['Inter'] text-[18px] font-semibold leading-[100%] tracking-[0%] text-[#444444]">
                                            Email
                                        </span>
                                    </div>

                                    {/* Input Layout */}
                                    <div className="absolute left-[0px] top-[42px] h-[60px] w-[461px] rounded-[10px] border-[1px] border-[#E8E8E8]">

                                        {/* Your Email */}
                                        <div className="absolute left-[25px] top-[15px] h-[30px] w-[79px]">
                                            <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#A2A2A2]">
                                                Your email
                                            </span>
                                        </div>

                                    </div>

                                </div>

                                {/* 2nd Inner Layout */}
                                <div className="absolute left-[0px] top-[130px] h-[102px] w-[461px] ">

                                    {/* Confirm Password */}
                                    <div className="absolute left-[0px] top-[0px] h-[22px] w-[160px]">
                                        <span className="font-['Inter'] text-[18px] font-semibold leading-[100%] tracking-[0%] text-[#444444]">
                                            Confirm Password
                                        </span>
                                    </div>

                                    {/* Input Layout */}
                                    <div className="absolute left-[0px] top-[42px] h-[60px] w-[461px] rounded-[10px] border-[1px] border-[#E8E8E8]">

                                        {/* Your Password */}
                                        <div className="absolute left-[25px] top-[15px] h-[30px] w-[113px]">
                                            <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#A2A2A2]">
                                                Your password
                                            </span>
                                        </div>

                                    </div>

                                </div>

                                {/* 3rd Inner Layout */}
                                <div className="absolute left-[0px] top-[261px] h-[64px] w-[461px] rounded-[10px] bg-[#FF3811]">

                                    {/* Sign Up */}
                                    <div className="absolute left-[196.88px] top-[17px] h-[30px] w-[76px]">
                                        <span className="font-['Inter'] text-[20px] font-semibold leading-[30px] tracking-[0%] text-white">
                                            Sign In
                                        </span>
                                    </div>

                                </div>

                            </div>

                            {/* 2nd Inner Layout */}
                            <div className="absolute left-[132px] top-[355px] h-[107.0001px] w-[197px]">

                                {/* 1st Layout */}
                                <div className="absolute left-[31px] top-[0px] h-[22px] w-[135px]">
                                    <span className="font-['Inter'] text-[18px] font-medium leading-[100%] tracking-[0%] text-[#444444]">
                                        Or Sign Up with
                                    </span>
                                </div>

                                {/* 2nd Layout */}
                                <div className="absolute left-[0px] top-[52px] h-[55px] w-[197px]">

                                    {/* 1st Social Media Layout */}
                                    <div className="absolute left-[0px] top-[0px] h-[55px] w-[55px] rounded-full bg-[#F5F5F8]">
                                        <div className="absolute left-[12px] top-[12px] h-[31px] w-[31px]">
                                            <Image src="/bxl-facebook.png" alt="Facebook" width={31} height={31} className="h-full w-full object-contain" />
                                        </div>
                                    </div>

                                    {/* 2nd Social Media Layout */}
                                    <div className="absolute left-[71px] top-[0px] h-[55px] w-[55px] rounded-full bg-[#F5F5F8]">
                                        <div className="absolute left-[15.5px] top-[15.5px] h-[24px] w-[24px]">
                                            <Image src="/bxl-linkedin.png" alt="LinkedIn" width={24} height={24} className="h-full w-full object-contain" />
                                        </div>
                                    </div>

                                    {/* 3rd Social Media Layout */}
                                    <div className="absolute left-[142px] top-[0px] h-[55px] w-[55px] rounded-full bg-[#F5F5F8]">
                                        <div className="absolute left-[18px] top-[18px] h-[20px] w-[20px]">
                                            <Image src="/google 1.png" alt="Google" width={20} height={20} className="h-full w-full object-contain" />
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* 3rd Inner Layout */}
                            <div className="absolute left-[123px] top-[512px] flex h-[22px] w-[216px] items-center justify-center">
                                <span className="font-['Inter'] text-center text-[18px] font-normal leading-[100%] tracking-[0%] text-[#737373]">
                                    Have an account?{" "}
                                </span>
                                <span className="font-['Inter'] text-center text-[18px] font-semibold leading-[100%] tracking-[0%] text-[#FF3811]">
                                    Sign In
                                </span>
                            </div>

                        </div>

                    </form>

                </div>

            </main>
        </>

    );
}
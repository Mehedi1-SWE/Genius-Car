

import CartDetailsNavbar from "@/components/cartdetailsNavbar/page";
import Footer from "@/components/shared/Footer";
import Image from "next/image";

export default function CartDetails() {
    return (
        <>
            <CartDetailsNavbar />
            {/* Main Content */}
            <main className="relative mx-auto -mt-[136.7755px] h-[1250px] w-[1440px]">

                {/* Banner */}
                <div className="absolute left-[150px] top-[159px] h-[319px] w-[1140px] overflow-hidden rounded-[10px]">

                    {/* Banner Image */}
                    <Image src="/man-polishing-car-inside-car-service.jpg" alt="Banner" fill className="object-cover" />

                    {/* Banner Gradient */}
                    <div className="absolute inset-0 rounded-[10px] bg-[linear-gradient(90deg,#151515_0%,rgba(21,21,21,0)_100%)]"></div>

                    {/* Banner Inner Layout */}
                    <div className="absolute left-[124px] top-[125px] h-[71px] w-[203px]">

                        {/* 1st Inner Layout */}
                        <div className="absolute left-[0px] top-[0px] h-[42px] w-[203px]">
                            <span className="font-['Inter'] text-[35px] font-bold leading-[100%] tracking-[0%] text-white">
                                Cart Details
                            </span>
                        </div>

                        {/* 2nd Inner Layout */}
                        <div className="absolute left-[0px] top-[52px] h-[19px] w-[178px]">
                            <span className="font-['Inter'] text-[16px] font-medium leading-[100%] tracking-[0%] text-[#FF3811]">
                                Home - Product Details
                            </span>
                        </div>

                    </div>

                </div>


                {/* 1st Layout */}
                <div className="absolute left-[150px] top-[609px] h-[150px] w-[1140px]">

                    {/* 1st Inner Layout - Image */}
                    <div className="absolute left-[69px] top-[0px] h-[150px] w-[150px] overflow-hidden rounded-[10px]">
                        <Image src="/Martha Knit Top.jpg" alt="Image" fill className="object-cover" />
                    </div>

                </div>

                {/* 1st Layout */}
                <div className="absolute left-[150px] top-[609px] h-[150px] w-[1140px]">

                    {/* 1st Inner Layout - Image */}
                    <div className="absolute left-[69px] top-[0px] h-[150px] w-[150px] overflow-hidden rounded-[10px]">
                        <Image src="/your-image.png" alt="Image" fill className="object-cover" />
                    </div>

                    {/* 2nd Inner Layout */}
                    <div className="absolute left-[249px] top-[27px] h-[95px] w-[155px]">

                        {/* 1st Layout */}
                        <div className="absolute left-[0px] top-[0px] h-[30px] w-[155px]">
                            <span className="font-['Inter'] text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#444444]">
                                Martha Knit Top
                            </span>
                        </div>

                        {/* 2nd Layout */}
                        <div className="absolute left-[0px] top-[62px] h-[60px] w-[107px]">
                            <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#A2A2A2]">
                                Color : Green<br />
                                Size: S
                            </span>
                        </div>

                    </div>

                    {/* 3rd Inner Layout */}
                    <div className="absolute left-[563px] top-[60px] h-[30px] w-[70px]">
                        <span className="font-['Inter'] text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#444444]">
                            $25.00
                        </span>
                    </div>

                    {/* 4th Inner Layout */}
                    <div className="absolute left-[795px] top-[60px] h-[30px] w-[115px]">
                        <span className="font-['Inter'] text-[20px] font-medium leading-[30px] tracking-[0%] text-[#2D2D2D]">
                            22-10-2022
                        </span>
                    </div>

                    {/* 5th Inner Layout */}
                    <div className="absolute left-[1020px] top-[51px] h-[48px] w-[120px] rounded-[10px] bg-[#FF3811]">

                        {/* Pending Layout */}
                        <div className="absolute left-[20px] top-[9px] h-[30px] w-[80px]">
                            <span className="font-['Inter'] text-center text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#FFFFFF]">
                                Pending
                            </span>
                        </div>

                    </div>

                </div>

                {/* 2nd Layout */}
                <div className="absolute left-[150px] top-[787px] h-[150px] w-[1140px] bg-[#FFFFFF]">

                    {/* 1st Inner Layout - Image */}
                    <div className="absolute left-[69px] top-[0px] h-[150px] w-[150px] overflow-hidden rounded-[10px]">
                        <Image src="/Martha Knit Top 1.jpg" alt="Image" fill className="object-cover" />
                    </div>

                    {/* 2nd Inner Layout */}
                    <div className="absolute left-[249px] top-[27px] h-[95px] w-[155px]">

                        {/* 1st Layout */}
                        <div className="absolute left-[0px] top-[0px] h-[30px] w-[155px]">
                            <span className="font-['Inter'] text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#444444]">
                                Martha Knit Top
                            </span>
                        </div>

                        {/* 2nd Layout */}
                        <div className="absolute left-[0px] top-[62px] h-[60px] w-[107px]">
                            <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#A2A2A2]">
                                Color : Green<br />
                                Size: S
                            </span>
                        </div>

                    </div>

                    {/* 3rd Inner Layout */}
                    <div className="absolute left-[563px] top-[60px] h-[30px] w-[70px]">
                        <span className="font-['Inter'] text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#444444]">
                            $25.00
                        </span>
                    </div>

                    {/* 4th Inner Layout */}
                    <div className="absolute left-[795px] top-[60px] h-[30px] w-[115px]">
                        <span className="font-['Inter'] text-[20px] font-medium leading-[30px] tracking-[0%] text-[#2D2D2D]">
                            22-10-2022
                        </span>
                    </div>

                    {/* 5th Inner Layout */}
                    <div className="absolute left-[1020px] top-[51px] h-[48px] w-[120px] rounded-[10px] bg-[#FF3811]">

                        {/* Pending Layout */}
                        <div className="absolute left-[20px] top-[9px] h-[30px] w-[80px]">
                            <span className="font-['Inter'] text-center text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#FFFFFF]">
                                Pending
                            </span>
                        </div>

                    </div>

                </div>

                {/* 3rd Layout */}
                <div className="absolute left-[150px] top-[969px] h-[150px] w-[1140px] bg-[#FFFFFF]">

                    {/* 1st Inner Layout - Image */}
                    <div className="absolute left-[69px] top-[0px] h-[150px] w-[150px] overflow-hidden rounded-[10px]">
                        <Image src="/Martha Knit Top 2.jpg" alt="Image" fill className="object-cover" />
                    </div>

                    {/* 2nd Inner Layout */}
                    <div className="absolute left-[249px] top-[27px] h-[95px] w-[155px]">

                        {/* 1st Layout */}
                        <div className="absolute left-[0px] top-[0px] h-[30px] w-[155px]">
                            <span className="font-['Inter'] text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#444444]">
                                Martha Knit Top
                            </span>
                        </div>

                        {/* 2nd Layout */}
                        <div className="absolute left-[0px] top-[62px] h-[60px] w-[107px]">
                            <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#A2A2A2]">
                                Color : Green<br />
                                Size: S
                            </span>
                        </div>

                    </div>

                    {/* 3rd Inner Layout */}
                    <div className="absolute left-[563px] top-[60px] h-[30px] w-[70px]">
                        <span className="font-['Inter'] text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#444444]">
                            $25.00
                        </span>
                    </div>

                    {/* 4th Inner Layout */}
                    <div className="absolute left-[795px] top-[60px] h-[30px] w-[115px]">
                        <span className="font-['Inter'] text-[20px] font-medium leading-[30px] tracking-[0%] text-[#2D2D2D]">
                            22-10-2022
                        </span>
                    </div>

                    {/* 5th Inner Layout */}
                    <div className="absolute left-[1020px] top-[51px] h-[48px] w-[120px] rounded-[10px] bg-[#FF3811]">

                        {/* Pending Layout */}
                        <div className="absolute left-[20px] top-[9px] h-[30px] w-[80px]">
                            <span className="font-['Inter'] text-center text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#FFFFFF]">
                                Pending
                            </span>
                        </div>

                    </div>

                </div>

                {/* 4th Layout - Left Layout */}
                <div className="absolute left-[219px] top-[1169px] h-[30px] w-[219px] text-[#444444]">

                    {/* Left Inner Layout - Icon Image */}
                    <div className="absolute left-[0px] top-[7px] h-[16px] w-[18px]">
                        <Image src="/More.png" alt="Continue Shopping Icon" width={18} height={16} className="h-full w-full object-contain" />
                    </div>

                    {/* Right Inner Layout */}
                    <div className="absolute left-[38px] top-[0px] h-[30px] w-[181px]">
                        <span className="font-['Inter'] text-[20px] font-normal leading-[30px] tracking-[0%] text-[#444444]">
                            Continue Shopping
                        </span>
                    </div>

                </div>

                {/* 4th Layout - Right Layout */}
                <div className="absolute left-[1063px] top-[1169px] h-[30px] w-[228px]">

                    {/* Left Inner Layout - Icon Image */}
                    <div className="absolute left-[0px] top-[6px] h-[18px] w-[16px]">
                        <Image src="/Delete.png" alt="Clear Shopping Cart Icon" width={16} height={18} className="h-full w-full object-contain" />
                    </div>

                    {/* Right Inner Layout */}
                    <div className="absolute left-[36px] top-[0px] h-[30px] w-[192px]">
                        <span className="font-['Inter'] text-[20px] font-normal leading-[30px] tracking-[0%] text-[#444444]">
                            Clear Shopping Cart
                        </span>
                    </div>

                </div>

            </main>
            <Footer />
        </>
    )
}



import CartDetailsNavbar from "@/components/cartdetailsNavbar/page";
import Footer from "@/components/shared/Footer";
import Image from "next/image";

export default function ManageOrder() {
    return (
        <>
            <CartDetailsNavbar />

            {/* Main Content */}
            {/* Main Content */}
            <main className="relative mx-auto -mt-[136.7755px] h-[1250px] w-[1440px]">

                {/* Banner */}
                <div className="absolute left-[150px] top-[160px] h-[319px] w-[1140px] overflow-hidden rounded-[10px]">

                    {/* Banner Image */}
                    <Image src="/ManageOrder Banner.jpg" alt="Banner" fill className="object-cover" />

                    {/* Banner Gradient */}
                    <div className="absolute inset-0 rounded-[10px] bg-[linear-gradient(90deg,#151515_0%,rgba(21,21,21,0)_100%)]"></div>

                    {/* Banner Inner Layout */}
                    <div className="absolute left-[124px] top-[124px] h-[71px] w-[317px]">

                        {/* 1st Inner Layout */}
                        <div className="absolute left-[0px] top-[0px] h-[42px] w-[317px]">
                            <span className="font-['Inter'] text-[35px] font-bold leading-[100%] tracking-[0%] text-[#FFFFFF]">
                                Manage All Orders
                            </span>
                        </div>

                        {/* 2nd Inner Layout */}
                        <div className="absolute left-[0px] top-[52px] h-[19px] w-[203px]">
                            <span className="font-['Inter'] text-[16px] font-medium leading-[100%] tracking-[0%] text-[#FF3811]">
                                Home - Manage All Orders
                            </span>
                        </div>

                    </div>

                </div>

                {/* 1st Layout */}
                <div className="absolute left-[219px] top-[609px] h-[150px] w-[335px] rounded-[10px]">

                    {/* Left Inner Layout - Product Image */}
                    <div className="absolute left-[0px] top-[0px] h-[150px] w-[150px] overflow-hidden rounded-[10px]">
                        <Image src="/ManageOrder1.jpg" alt="Martha Knit Top" fill className="object-cover" />
                    </div>

                    {/* Right Inner Layout - Product Name */}
                    <div className="absolute left-[180px] top-[27px] h-[30px] w-[155px]">
                        <span className="font-['Inter'] text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#444444]">
                            Martha Knit Top
                        </span>
                    </div>

                    {/* Product Details Layout */}
                    <div className="absolute left-[180px] top-[62px] h-[60px] w-[107px]">
                        <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#A2A2A2]">
                            Color : Green
                            <br />
                            Size: S
                        </span>
                    </div>

                </div>

                {/* 1st Layout - Email */}
                <div className="absolute left-[657px] top-[669px] h-[30px] w-[154px]">
                    <span className="font-['Inter'] text-center text-[20px] font-medium leading-[30px] tracking-[0%] text-[#444444]">
                        info@gmail.com
                    </span>
                </div>

                {/* 1st Layout - Date */}
                <div className="absolute left-[914px] top-[669px] h-[30px] w-[115px]">
                    <span className="font-['Inter'] text-[20px] font-medium leading-[30px] tracking-[0%] text-[#2D2D2D]">
                        22-10-2022
                    </span>
                </div>

                {/* 1st Layout - Status */}
                <div className="absolute left-[1131px] top-[660px] h-[48px] w-[160px] rounded-[10px] border border-[#29B170]">

                    {/* Left Inner Layout - Approved */}
                    <div className="absolute left-[19px] top-[9px] h-[30px] w-[95px]">
                        <span className="font-['Inter'] text-center text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#29B170]">
                            Approved
                        </span>
                    </div>

                    {/* Right Inner Layout - Dropdown */}
                    <div className="absolute left-[125.5px] top-[20.25px] h-[7.5px] w-[15px]">
                        <div className="absolute left-[0px] top-[0px] h-[1.5px] w-[10px] origin-left rotate-[45deg] bg-[#29B170]"></div>
                        <div className="absolute right-[0px] top-[0px] h-[1.5px] w-[10px] origin-right rotate-[-45deg] bg-[#29B170]"></div>
                    </div>

                </div>

                {/* 2nd Layout */}
                <div className="absolute left-[219px] top-[787px] h-[150px] w-[335px] rounded-[10px]">

                    {/* Left Inner Layout - Product Image */}
                    <div className="absolute left-[0px] top-[0px] h-[150px] w-[150px] overflow-hidden rounded-[10px]">
                        <Image src="/ManageOrder2.jpg" alt="Martha Knit Top" fill className="object-cover" />
                    </div>

                    {/* Right Inner Layout - Product Name */}
                    <div className="absolute left-[180px] top-[27px] h-[30px] w-[155px]">
                        <span className="font-['Inter'] text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#444444]">
                            Martha Knit Top
                        </span>
                    </div>

                    {/* Product Details Layout */}
                    <div className="absolute left-[180px] top-[62px] h-[60px] w-[107px]">
                        <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#A2A2A2]">
                            Color : Green
                            <br />
                            Size: S
                        </span>
                    </div>

                </div>

                {/* 2nd Layout - Email */}
                <div className="absolute left-[657px] top-[847px] h-[30px] w-[154px]">
                    <span className="font-['Inter'] text-center text-[20px] font-medium leading-[30px] tracking-[0%] text-[#444444]">
                        info@gmail.com
                    </span>
                </div>

                {/* 2nd Layout - Date */}
                <div className="absolute left-[914px] top-[847px] h-[30px] w-[115px]">
                    <span className="font-['Inter'] text-[20px] font-medium leading-[30px] tracking-[0%] text-[#2D2D2D]">
                        22-10-2022
                    </span>
                </div>

                {/* 2nd Layout - Status */}
                <div className="absolute left-[1131px] top-[838px] h-[48px] w-[160px] rounded-[10px] border border-[#29B170]">

                    {/* Left Inner Layout - Approved */}
                    <div className="absolute left-[19px] top-[9px] h-[30px] w-[95px]">
                        <span className="font-['Inter'] text-center text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#29B170]">
                            Approved
                        </span>
                    </div>

                    {/* Right Inner Layout - Dropdown */}
                    <div className="absolute left-[125.5px] top-[20.25px] h-[7.5px] w-[15px]">
                        <div className="absolute left-[0px] top-[0px] h-[1.5px] w-[10px] origin-left rotate-[45deg] bg-[#29B170]"></div>
                        <div className="absolute right-[0px] top-[0px] h-[1.5px] w-[10px] origin-right rotate-[-45deg] bg-[#29B170]"></div>
                    </div>

                </div>

                {/* 3rd Layout */}
                <div className="absolute left-[219px] top-[969px] h-[150px] w-[335px] rounded-[10px]">

                    {/* Left Inner Layout - Product Image */}
                    <div className="absolute left-[0px] top-[0px] h-[150px] w-[150px] overflow-hidden rounded-[10px]">
                        <Image src="/ManageOrder3.jpg" alt="Martha Knit Top" fill className="object-cover" />
                    </div>

                    {/* Right Inner Layout - Product Name */}
                    <div className="absolute left-[180px] top-[27px] h-[30px] w-[155px]">
                        <span className="font-['Inter'] text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#444444]">
                            Martha Knit Top
                        </span>
                    </div>

                    {/* Product Details Layout */}
                    <div className="absolute left-[180px] top-[62px] h-[60px] w-[107px]">
                        <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#A2A2A2]">
                            Color : Green
                            <br />
                            Size: S
                        </span>
                    </div>

                </div>

                {/* 3rd Layout - Email */}
                <div className="absolute left-[657px] top-[1029px] h-[30px] w-[154px]">
                    <span className="font-['Inter'] text-center text-[20px] font-medium leading-[30px] tracking-[0%] text-[#444444]">
                        info@gmail.com
                    </span>
                </div>

                {/* 3rd Layout - Date */}
                <div className="absolute left-[914px] top-[1029px] h-[30px] w-[115px]">
                    <span className="font-['Inter'] text-[20px] font-medium leading-[30px] tracking-[0%] text-[#2D2D2D]">
                        22-10-2022
                    </span>
                </div>

                {/* 3rd Layout - Status */}
                <div className="absolute left-[1131px] top-[1020px] h-[48px] w-[160px] rounded-[10px] border border-[#29B170]">

                    {/* Left Inner Layout - Approved */}
                    <div className="absolute left-[19px] top-[9px] h-[30px] w-[95px]">
                        <span className="font-['Inter'] text-center text-[20px] font-semibold leading-[30px] tracking-[0%] text-[#29B170]">
                            Approved
                        </span>
                    </div>

                    {/* Right Inner Layout - Dropdown */}
                    <div className="absolute left-[125.5px] top-[20.25px] h-[7.5px] w-[15px]">
                        <div className="absolute left-[0px] top-[0px] h-[1.5px] w-[10px] origin-left rotate-[45deg] bg-[#29B170]"></div>
                        <div className="absolute right-[0px] top-[0px] h-[1.5px] w-[10px] origin-right rotate-[-45deg] bg-[#29B170]"></div>
                    </div>

                </div>

            </main>

            <Footer />
        </>
    )
}



import CartDetailsNavbar from "@/components/cartdetailsNavbar/page";
import Image from "next/image";

export default function CartDetails() {
    return (
        <>
            <CartDetailsNavbar />

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
        </>
    )
}

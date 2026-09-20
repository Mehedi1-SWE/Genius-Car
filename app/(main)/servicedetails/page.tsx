"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function ServiceDetails() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    return (

        <main className="relative mx-auto h-[2950px] w-[1440px]">
            {/* Banner */}
            <div className="absolute left-[153px] top-[187px] h-[300px] w-[1137px] overflow-hidden rounded-[10px]">
                <Image src="/SD Banner.jpg" alt="Service Details" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#151515_0%,rgba(21,21,21,0)_100%)]" />

                {/* 1st Layout - Service Details */}
                <div className="absolute left-[100px] top-[123px] h-[54px] w-[331px]"><h1 className="m-0 font-['Inter'] text-[45px] font-bold leading-[100%] tracking-[0%] text-white">Service Details</h1></div>

                {/* 2nd Layout - Breadcrumb */}
                <div className="absolute left-[421px] top-[251px] h-[49.3px] w-[296px] bg-[#FF3811]" style={{ clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)" }}><div className="absolute left-[45px] top-[13px] h-[24px] w-[207px]"><span className="font-['Inter'] text-[20px] font-medium leading-[100%] tracking-[0%] text-white">Home/Service Details</span></div></div>
            </div>

            {/* Left Image Layout */}
            <div className="absolute left-[150px] top-[617px] h-[400px] w-[752px] overflow-hidden rounded-[10px]"><Image src="/SDH.jpg" alt="Service Details" width={752} height={400} className="h-[400px] w-[752px] rounded-[10px] object-cover" /></div>

            {/* Right Service Layout */}
            <div className="absolute left-[926px] top-[617px] h-[490px] w-[364px] bg-[#F3F3F3]">

                {/* 1st Layout */}
                <div className="absolute left-[40px] top-[40px] h-[30px] w-[108px]"><h2 className="m-0 font-['Inter'] text-[25px] font-bold leading-[100%] tracking-[0%] text-[#151515]">Services</h2></div>

                {/* 2nd Layout - Full Car Repair */}
                <Link href="/services/full-car-repair" className="group absolute left-[40px] top-[90px] block h-[56px] w-[284px] cursor-pointer bg-[#FF3811] transition-colors duration-300 hover:bg-[#E83A16]">
                    <div className="absolute left-[18px] top-[18px] h-[19px] w-[112px]"><span className="font-['Inter'] text-[16px] font-semibold leading-[100%] tracking-[0%] text-[#FFFFFF]">Full Car Repair</span></div>
                    <div className="absolute left-[242px] top-[16px] h-[24px] w-[24px]"><Image src="/WRA.png" alt="Full Car Repair" width={24} height={24} className="h-[24px] w-[24px] object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-90" /></div>
                </Link>

                {/* 3rd Layout - Engine Repair */}
                <Link href="/services/engine-repair" className="group absolute left-[40px] top-[166px] block h-[56px] w-[284px] cursor-pointer rounded-[5px] bg-[#FFFFFF] transition-colors duration-300 hover:bg-[#FFF3EE]">
                    <div className="absolute left-[18px] top-[18px] h-[19px] w-[107px]"><span className="font-['Inter'] text-[16px] font-semibold leading-[100%] tracking-[0%] text-[#151515] transition-colors duration-300 group-hover:text-[#D93617]">Engine Repair</span></div>
                    <div className="absolute left-[242px] top-[16px] h-[24px] w-[24px]"><Image src="/right arrow.png" alt="Engine Repair" width={24} height={24} className="h-[24px] w-[24px] object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-80" /></div>
                </Link>

                {/* 4th Layout - Automatic Services */}
                <Link href="/services/automatic-services" className="group absolute left-[40px] top-[242px] block h-[56px] w-[284px] cursor-pointer rounded-[5px] bg-[#FFFFFF] transition-colors duration-300 hover:bg-[#FFF3EE]">
                    <div className="absolute left-[18px] top-[18px] h-[19px] w-[152px]"><span className="font-['Inter'] text-[16px] font-semibold leading-[100%] tracking-[0%] text-[#151515] transition-colors duration-300 group-hover:text-[#D93617]">Automatic Services</span></div>
                    <div className="absolute left-[242px] top-[16px] h-[24px] w-[24px]"><Image src="/right arrow.png" alt="Automatic Services" width={24} height={24} className="h-[24px] w-[24px] object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-80" /></div>
                </Link>

                {/* 5th Layout - Engine Oil Change */}
                <Link href="/services/engine-oil-change" className="group absolute left-[40px] top-[318px] block h-[56px] w-[284px] cursor-pointer rounded-[5px] bg-[#FFFFFF] transition-colors duration-300 hover:bg-[#FFE8E1]">
                    <div className="absolute left-[18px] top-[18px] h-[19px] w-[142px]"><span className="font-['Inter'] text-[16px] font-semibold leading-[100%] tracking-[0%] text-[#151515] transition-colors duration-300 group-hover:text-[#D93617]">Engine Oil Change</span></div>
                    <div className="absolute left-[242px] top-[16px] h-[24px] w-[24px]"><Image src="/right arrow.png" alt="Engine Oil Change" width={24} height={24} className="h-[24px] w-[24px] object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-80" /></div>
                </Link>

                {/* 6th Layout - Battery Charge */}
                <Link href="/services/battery-charge" className="group absolute left-[40px] top-[394px] block h-[56px] w-[284px] cursor-pointer rounded-[5px] bg-[#FFFFFF] transition-colors duration-300 hover:bg-[#FFE8E1]">
                    <div className="absolute left-[18px] top-[18px] h-[19px] w-[118px]"><span className="font-['Inter'] text-[16px] font-semibold leading-[100%] tracking-[0%] text-[#151515] transition-colors duration-300 group-hover:text-[#D93617]">Battery Charge</span></div>
                    <div className="absolute left-[242px] top-[16px] h-[24px] w-[24px]"><Image src="/right arrow.png" alt="Battery Charge" width={24} height={24} className="h-[24px] w-[24px] object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-80" /></div>
                </Link>

            </div>

            {/* Left Layout - Unique Car Engine Service */}
            <div className="absolute left-[150px] top-[1067px] h-[42px] w-[455px]"><h2 className="m-0 font-['Inter'] text-[35px] font-bold leading-[100%] tracking-[0%] text-[#151515]">Unique Car Engine Service</h2></div>

            {/* Left Layout - Description */}
            <div className="absolute left-[150px] top-[1139px] h-[120px] w-[752px]"><p className="m-0 font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#737373] capitalize">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p></div>

            {/* Left Layout - Main Content */}
            <div className="absolute left-[150px] top-[1289px] h-[1561px] w-[752px]">


                {/* 1st Layout - Left */}
                <div className="absolute left-[0px] top-[0px] h-[204px] w-[364px] rounded-[10px] border-t-[2px] border-t-[#FF3811] bg-[#F3F3F3]">

                    {/* Parent Layout */}
                    <div className="absolute left-[40px] top-[40px] h-[124px] w-[282px]">

                        {/* 1st Inner Layout */}
                        <div className="absolute left-[0px] top-[0px] h-[24px] w-[199px]">
                            <span className="font-['Inter'] text-[20px] font-bold leading-[100%] tracking-[0%] text-[#444444]">Instant Car Services</span>
                        </div>

                        {/* 2nd Inner Layout */}
                        <div className="absolute left-[0px] top-[34px] h-[90px] w-[282px]">
                            <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#737373] capitalize">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</span>
                        </div>

                    </div>

                </div>


                {/* 1st Layout - Right */}
                <div className="absolute left-[388px] top-[0px] h-[204px] w-[364px] rounded-[10px] border-t-[2px] border-t-[#FF3811] bg-[#F3F3F3]">

                    {/* Inner Layout */}
                    <div className="absolute left-[40px] top-[40px] h-[124px] w-[282px]">

                        {/* 1st Inner Layout */}
                        <div className="absolute left-[0px] top-[0px] h-[24px] w-[200px]">
                            <span className="font-['Inter'] text-[20px] font-bold leading-[100%] tracking-[0%] text-[#444444]">24/7 Quality Service</span>
                        </div>

                        {/* 2nd Inner Layout */}
                        <div className="absolute left-[0px] top-[34px] h-[90px] w-[282px]">
                            <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#737373] capitalize">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</span>
                        </div>

                    </div>

                </div>


                {/* 2nd Layout - Left */}

                {/* 2nd Layout - Left */}
                <div className="absolute left-[0px] top-[228px] h-[204px] w-[364px] rounded-[10px] border-t-[2px] border-t-[#FF3811] bg-[#F3F3F3]">

                    {/* Inner Layout */}
                    <div className="absolute left-[40px] top-[40px] h-[124px] w-[282px]">

                        {/* 1st Inner Layout */}
                        <div className="absolute left-[0px] top-[0px] h-[24px] w-[228px]">
                            <span className="font-['Inter'] text-[20px] font-bold leading-[100%] tracking-[0%] text-[#444444]">Easy Customer Service</span>
                        </div>

                        {/* 2nd Inner Layout */}
                        <div className="absolute left-[0px] top-[34px] h-[90px] w-[282px]">
                            <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#737373] capitalize">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</span>
                        </div>

                    </div>

                </div>

                {/* 2nd Layout - Right */}
                <div className="absolute left-[388px] top-[228px] h-[204px] w-[364px] rounded-[10px] border-t-[2px] border-t-[#FF3811] bg-[#F3F3F3]">
                    {/* Inner Layout */}
                    <div className="absolute left-[40px] top-[40px] h-[124px] w-[282px]">

                        {/* 1st Inner Layout */}
                        <div className="absolute left-[0px] top-[0px] h-[24px] w-[201px]">
                            <span className="font-['Inter'] text-[20px] font-bold leading-[100%] tracking-[0%] text-[#444444]">Quality Cost Service</span>
                        </div>

                        {/* 2nd Inner Layout */}
                        <div className="absolute left-[0px] top-[34px] h-[90px] w-[282px]">
                            <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#737373] capitalize">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</span>
                        </div>

                    </div>

                </div>



            </div>

            ```tsx
            {/* Right Layout - 1st Layout */}
            <div className="absolute left-[926px] top-[1137px] h-[262px] w-[364px] rounded-[10px] bg-[#151515]">
                {/* Inner Layout 1 - Download */}
                <div className="absolute left-[40px] top-[40px] h-[30px] w-[123px]">
                    <h2 className="m-0 font-['Inter'] text-[25px] font-bold leading-[100%] tracking-[0%] text-[#FFFFFF]">Download</h2>
                </div>

                {/* Inner Layout 2 */}
                <div className="absolute left-[40px] top-[90px] h-[56px] w-[284px]">
                    {/* Left Layout */}
                    <div className="absolute left-[0px] top-[5px] h-[46px] w-[156px]">
                        <div className="absolute left-[0px] top-[8px] h-[30px] w-[30px]">
                            <Image src="/Brochure.png" alt="Our Brochure" width={30} height={30} className="h-[30px] w-[30px] object-contain" />
                        </div>

                        <div className="absolute left-[40px] top-[0px] h-[46px] w-[116px]">
                            <div className="absolute left-[0px] top-[0px] h-[22px] w-[116px]">
                                <span className="font-['Inter'] text-[18px] font-semibold leading-[100%] tracking-[0%] text-[#FFFFFF]">Our Brochure</span>
                            </div>

                            <div className="absolute left-[0px] top-[27px] h-[19px] w-[76px]">
                                <span className="font-['Inter'] text-[16px] font-normal leading-[100%] tracking-[0%] text-[#A2A2A2]">Download</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Layout - Download Button */}
                    <a href="/our-brochure.pdf" download="Our-Brochure.pdf" aria-label="Download Our Brochure" className="group absolute left-[228px] top-[0px] h-[56px] w-[56px] bg-[#FF3811] transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-[0_8px_20px_rgba(255,56,17,0.35)] active:scale-95">
                        <div className="absolute left-[16px] top-[16px] h-[24px] w-[24px] transition-transform duration-300 ease-out group-hover:scale-110">
                            <Image src="/WRA.png" alt="Download" width={24} height={24} className="h-[24px] w-[24px] object-contain" />
                        </div>
                    </a>
                </div>

                {/* Inner Layout 3 */}
                <div className="absolute left-[40px] top-[166px] h-[56px] w-[284px]">
                    {/* Left Layout */}
                    <div className="absolute left-[0px] top-[5px] h-[46px] w-[188px]">
                        <div className="absolute left-[0px] top-[8px] h-[30px] w-[30px]">
                            <Image src="/Brochure.png" alt="Company Details" width={30} height={30} className="h-[30px] w-[30px] object-contain" />
                        </div>
                    </div>

                    {/* Right Layout */}
                    <div className="absolute left-[40px] top-[5px] h-[46px] w-[148px]">
                        <div className="absolute left-[0px] top-[0px] h-[22px] w-[148px]">
                            <span className="font-['Inter'] text-[18px] font-semibold leading-[100%] tracking-[0%] text-[#FFFFFF]">Company Details</span>
                        </div>

                        <div className="absolute left-[0px] top-[27px] h-[19px] w-[76px]">
                            <span className="font-['Inter'] text-[16px] font-normal leading-[100%] tracking-[0%] text-[#A2A2A2]">Download</span>
                        </div>
                    </div>

                    {/* Right Layout - Download Button */}
                    <a href="/company-details.pdf" download="Company-Details.pdf" aria-label="Download Company Details" className="group absolute left-[228px] top-[0px] h-[56px] w-[56px] bg-[#FF3811] transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-[0_8px_20px_rgba(255,56,17,0.35)] active:scale-95">
                        <div className="absolute left-[16px] top-[16px] h-[24px] w-[24px] transition-transform duration-300 ease-out group-hover:scale-110">
                            <Image src="/WRA.png" alt="Download Company Details" width={24} height={24} className="h-[24px] w-[24px] object-contain" />
                        </div>
                    </a>
                </div>
            </div>
            ```


            {/* Right Layout - 2nd Layout */}
            {/* Right Layout - 2nd Layout */}
            {/* Right Layout - 2nd Layout */}
            <div className="absolute left-[926px] top-[1429px] h-[489px] w-[364px] rounded-[10px] bg-[#151515]">
                <div className="absolute left-[47px] top-[50px] h-[389px] w-[270px]">

                    {/* 1st Layout */}
                    <div className="absolute left-[16px] top-[0px] h-[204.76959228515625px] w-[239px]">

                        {/* 1st Inner Layout - Image */}
                        <div className="absolute left-[52.95px] top-[0px] h-[72.18083953857422px] w-[133.0934600830078px]">
                            <Image src="/Service Logo.png" alt="Car Doctor" width={133} height={72} className="h-[72.18083953857422px] w-[133.0934600830078px] object-contain" />
                        </div>

                        {/* 2nd Inner Layout - Car Doctor */}
                        <div className="absolute left-[49px] top-[78.77px] h-[36px] w-[141px]">
                            <span className="font-['Open_Sans'] text-[26.36px] font-bold leading-[100%] tracking-[0%] text-center text-[#FFFFFF]">Car Doctor</span>
                        </div>

                        {/* 3rd Inner Layout - Need Help */}
                        <div className="absolute left-[0px] top-[134.77px] h-[70px] w-[239px]">
                            <span className="block w-full font-['Inter'] text-[20px] font-bold leading-[35px] tracking-[0%] text-center text-[#FFFFFF]">Need Help? We Are Here<br />To Help You</span>
                        </div>

                    </div>

                    {/* 2nd Layout */}
                    <div className="absolute left-[0px] top-[235px] h-[154px] w-[270px]">

                        {/* 1st Inner Layout */}
                        <div className="absolute left-[0px] top-[0px] h-[126px] w-[270px] rounded-[10px] bg-[#FFFFFF]">

                            {/* 1st Layout - Car Doctor Special */}
                            <div className="absolute left-[44px] top-[19px] h-[35px] w-[183px]">
                                <span className="font-['Inter'] text-[20px] font-bold leading-[35px] tracking-[0%] text-center text-[#FF3811]">Car Doctor <span className="text-[#151515]">Special</span></span>
                            </div>

                            {/* 2nd Layout - Save up to 60% off */}
                            <div className="absolute left-[62px] top-[54px] h-[35px] w-[147px]">
                                <span className="font-['Inter'] text-[16px] font-bold leading-[35px] tracking-[0%] text-center text-[#737373]">Save up to <span className="text-[#FF3811]">60% off</span></span>
                            </div>

                        </div>


                        {/* 2nd Inner Layout - Get A Quote */}
                        <Link href="/quote" aria-label="Get a Quote" className="group absolute left-[50px] top-[98px] h-[56px] w-[170px] rounded-[5px] bg-[#FF3811] shadow-[0_4px_12px_rgba(255,56,17,0.15)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-[#ff4a27] hover:shadow-[0_8px_20px_rgba(255,56,17,0.28)] active:translate-y-[0px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3811]">
                            <div className="absolute left-[32px] top-[17px] flex h-[22px] w-[107px] items-center justify-center">
                                <span className="whitespace-nowrap font-['Inter'] text-[18px] font-semibold leading-[100%] tracking-[0%] text-[#FFFFFF] transition-all duration-300 group-hover:tracking-[0.2px]">Get A Quote</span>
                            </div>
                        </Link>

                    </div>

                </div>
            </div>

            {/* Right Layout - Price */}
            <div className="absolute left-[926px] top-[1948px] h-[42px] w-[245px]"><span className="font-['Inter'] text-[35px] font-bold leading-[100%] tracking-[0%] text-[#151515]">Price $250.00</span></div>

            {/* Right Layout - Checkout Button */}
            <Link href="/checkout" aria-label="Proceed to Checkout" className="group absolute left-[926px] top-[2020px] h-[56px] w-[364px] rounded-[5px] bg-[#FF3811] shadow-[0_4px_12px_rgba(255,56,17,0.15)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-[#ff4a27] hover:shadow-[0_8px_20px_rgba(255,56,17,0.28)] active:translate-y-[0px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3811]">
                <div className="absolute left-[102px] top-[17px] h-[22px] w-[161px]">
                    <span className="whitespace-nowrap font-['Inter'] text-[18px] font-semibold leading-[100%] tracking-[0%] text-center text-[#FFFFFF] transition-all duration-300 group-hover:tracking-[0.2px]">Proceed Checkout</span>
                </div>
            </Link>

            {/* Left Layout */}
            <div className="absolute left-[150px] top-[1289px] h-[1561px] w-[752px]">

                {/* 1st Layout - Heading */}
                <div className="absolute left-[0px] top-[632px] h-[42px] w-[445px]">
                    <span className="font-['Inter'] text-[35px] font-bold leading-[100%] tracking-[0%] text-[#151515]">3 Simple Steps to Process</span>
                </div>

                {/* 2nd Layout - Description */}
                <div className="absolute left-[0px] top-[704px] h-[120px] w-[752px]">
                    <span className="font-['Inter'] text-[16px] font-normal leading-[30px] tracking-[0%] text-[#737373] capitalize">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</span>
                </div>




                {/* 3rd Layout - Dark 01 */}

                {/* 3rd Layout - Dark 01 */}
                <div className="absolute left-[0px] top-[854px] h-[277px] w-[751px] ">

                    {/* 1st Layout */}
                    <div className="absolute left-[0px] top-[0px] h-[277px] w-[235px] rounded-[10px] border-[1px] border-[#E8E8E8]">

                        {/* Inner Layout */}
                        <div className="absolute left-[36px] top-[39px] h-[199px] w-[163px]">

                            {/* 1st Inner Layout */}
                            <div className="absolute left-[40px] top-[0px] h-[83px] w-[83px]">
                                <Image src="/01.png" alt="01" width={83} height={83} className="h-[83px] w-[83px]" />
                            </div>

                            {/* 2nd Inner Layout */}
                            <div className="absolute left-[36px] top-[103px] h-[24px] w-[99px]">
                                <span className="font-['Inter'] text-[20px] font-bold leading-[100%] tracking-[0%] text-[#151515] uppercase">Step One</span>
                            </div>

                            {/* 3rd Inner Layout */}
                            <div className="absolute left-[0px] top-[147px] h-[52px] w-[163px]">
                                <span className="block w-[163px] text-center font-['Inter'] text-[16px] font-normal leading-[26px] tracking-[0%] text-[#737373] capitalize">It uses a dictionary of over 200 .</span>
                            </div>

                        </div>

                    </div>

                    {/* 2nd Layout */}
                    <div className="absolute left-[258px] top-[0px] h-[277px] w-[235px] rounded-[10px] border-[1px] border-[#E8E8E8]">

                        {/* Inner Layout */}
                        <div className="absolute left-[36px] top-[39px] h-[199px] w-[163px]">

                            {/* 1st Inner Layout */}
                            <div className="absolute left-[40px] top-[0px] h-[83px] w-[83px]">
                                <Image src="/02.png" alt="02" width={83} height={83} className="h-[83px] w-[83px]" />
                            </div>

                            {/* 2nd Inner Layout */}
                            <div className="absolute left-[32px] top-[103px] h-[24px] w-[106px]">
                                <span className="font-['Inter'] text-[20px] font-bold leading-[100%] tracking-[0%] text-center text-[#151515] uppercase">Step Two</span>
                            </div>

                            {/* 3rd Inner Layout */}
                            <div className="absolute left-[0px] top-[147px] h-[52px] w-[163px]">
                                <span className="block w-[163px] text-center font-['Inter'] text-[16px] font-normal leading-[26px] tracking-[0%] text-[#737373] capitalize">It uses a dictionary of over 200 .</span>
                            </div>

                        </div>

                    </div>

                    {/* 3rd Layout */}
                    <div className="absolute left-[516px] top-[0px] h-[277px] w-[235px] rounded-[10px] border-[1px] border-[#E8E8E8]">

                        {/* Inner Layout */}
                        <div className="absolute left-[36px] top-[39px] h-[199px] w-[163px]">

                            {/* 1st Inner Layout */}
                            <div className="absolute left-[40px] top-[0px] h-[83px] w-[83px]">
                                <Image src="/03.png" alt="03" width={83} height={83} className="h-[83px] w-[83px]" />
                            </div>

                            {/* 2nd Inner Layout */}
                            <div className="absolute left-[24px] top-[103px] h-[24px] w-[123px]">
                                <span className="block w-[123px] text-center font-['Inter'] text-[20px] font-bold leading-[100%] tracking-[0%] text-[#151515] uppercase">Step Three</span>
                            </div>

                            {/* 3rd Inner Layout */}
                            <div className="absolute left-[0px] top-[147px] h-[52px] w-[163px]">
                                <span className="block w-[163px] text-center font-['Inter'] text-[16px] font-normal leading-[26px] tracking-[0%] text-[#737373] capitalize">It uses a dictionary of over 200 .</span>
                            </div>

                        </div>

                    </div>

                </div>

                {/* 4th Layout - Image */}
                <div className="absolute left-[0px] top-[1161px] h-[400px] w-[752px] overflow-hidden rounded-[10px]">

                    {!isVideoPlaying ? (
                        <>
                            <Image src="/Engine Service.jpg" alt="Engine Service" width={752} height={400} className="h-[400px] w-[752px] object-cover" />

                            {/* 1st Inner Layout */}
                            <div className="absolute left-[313px] top-[137px] h-[126px] w-[126px]">

                                {/* 2nd Inner Layout */}
                                <div className="absolute left-[15.75px] top-[15.75px] h-[94.5px] w-[94.5px] rounded-full border-[5px] border-[#FF3811]">

                                    {/* 3rd Inner Layout - Play Button */}
                                    <button
                                        type="button"
                                        aria-label="Play service video"
                                        onClick={() => setIsVideoPlaying(true)}
                                        className="absolute left-[30.57px] top-[28.94px] flex h-[36.624px] w-[33.354px] cursor-pointer items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,56,17,0.5)] focus:outline-none active:scale-95"
                                    >
                                        <svg width="33.354" height="36.624" viewBox="0 0 33.354 36.624" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.5 3.5L29.854 18.312L3.5 33.124V3.5Z" stroke="#FF3811" strokeWidth="5" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                </div>

                            </div>
                        </>
                    ) : (
                        <video
                            className="h-[400px] w-[752px] rounded-[10px] object-cover"
                            src="/Car Service.mp4"
                            controls
                            autoPlay
                            playsInline
                        />
                    )}

                </div>




            </div>
        </main>
    );
}
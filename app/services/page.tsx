import Image from "next/image";
import Link from "next/link";

export default function Service() {
    return (
        <main className="relative mx-auto mt-[130px] h-[1096px] w-[1440px]">
            {/* Layout 1 */}
            <div className="absolute left-[532px] top-0 h-[98px] w-[376px]">
                {/* 1st Layout - Service */}
                <div className="absolute left-[150px] top-0 h-[24px] w-[75px]">
                    <span className="font-['Inter'] text-[20px] font-bold leading-[100%] tracking-[0%] text-[#FF3811]">
                        Service
                    </span>
                </div>

                {/* 2nd Layout - Our Service Area */}
                <div className="absolute left-0 top-[44px] h-[54px] w-[376px]">
                    <h2 className="m-0 font-['Inter'] text-[45px] font-bold leading-[100%] tracking-[0%] text-[#151515]">
                        Our Service Area
                    </h2>
                </div>
            </div>

            {/* Layout 2 - Description */}
            <div className="absolute left-[361px] top-[118px] h-[60px] w-[717px]">
                <p className="m-0 text-center font-['Inter'] text-[16px] font-normal capitalize leading-[30px] tracking-[0%] text-[#737373]">
                    The majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                </p>
            </div>

            {/* Layout 3 - Three Service Cards */}
            <div className="absolute left-[150px] top-[228px] h-[348px] w-[1140px]">
                {/* Card 1 */}
                <div className="absolute left-0 top-0 h-[348px] w-[364px] border border-solid border-[#E8E8E8]">
                    <div className="absolute left-[24px] top-[24px] h-[208.008px] w-[314px] overflow-hidden rounded-[9.72px]">
                        <Image src="/Electrical%20System.jpg" alt="Electrical System" width={314} height={208} className="h-[208.008px] w-[314px] rounded-[9.72px] object-cover" />
                    </div>

                    <div className="absolute left-[24px] top-[253px] h-[74px] w-[314px]">
                        <div className="absolute left-0 top-0 h-[30px] w-[213px]">
                            <h3 className="m-0 font-['Inter'] text-[25px] font-bold leading-[100%] tracking-[0%] text-[#444444]">
                                Electrical System
                            </h3>
                        </div>

                        <div className="absolute left-0 top-[50px] h-[24px] w-[136px]">
                            <span className="font-['Inter'] text-[20px] font-semibold leading-[100%] tracking-[0%] text-[#FF3811]">
                                Price : $20.00
                            </span>
                        </div>

                        <div className="absolute left-[290px] top-[50px] h-[24px] w-[24px]">
                            <Image src="/right arrow.png" alt="View service details" width={24} height={24} className="h-[24px] w-[24px]" />
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="absolute left-[388px] top-0 h-[348px] w-[364px] border border-solid border-[#E8E8E8]">
                    <div className="absolute left-[24px] top-[24px] h-[208.008px] w-[314px] overflow-hidden rounded-[9.72px]">
                        <Image src="/Electrical%20System.jpg" alt="Electrical System" width={314} height={208} className="h-[208.008px] w-[314px] rounded-[9.72px] object-cover" />
                    </div>

                    <div className="absolute left-[24px] top-[253px] h-[74px] w-[314px]">
                        <div className="absolute left-0 top-0 h-[30px] w-[213px]">
                            <h3 className="m-0 font-['Inter'] text-[25px] font-bold leading-[100%] tracking-[0%] text-[#444444]">
                                Electrical System
                            </h3>
                        </div>

                        <div className="absolute left-0 top-[50px] h-[24px] w-[136px]">
                            <span className="font-['Inter'] text-[20px] font-semibold leading-[100%] tracking-[0%] text-[#FF3811]">
                                Price : $20.00
                            </span>
                        </div>

                        <div className="absolute left-[290px] top-[50px] h-[24px] w-[24px]">
                            <Image src="/right arrow.png" alt="View service details" width={24} height={24} className="h-[24px] w-[24px]" />
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="absolute left-[776px] top-0 h-[348px] w-[364px] border border-solid border-[#E8E8E8]">
                    <div className="absolute left-[24px] top-[24px] h-[208.008px] w-[314px] overflow-hidden rounded-[9.72px]">
                        <Image src="/Electrical%20System.jpg" alt="Electrical System" width={314} height={208} className="h-[208.008px] w-[314px] rounded-[9.72px] object-cover" />
                    </div>

                    <div className="absolute left-[24px] top-[253px] h-[74px] w-[314px]">
                        <div className="absolute left-0 top-0 h-[30px] w-[213px]">
                            <h3 className="m-0 font-['Inter'] text-[25px] font-bold leading-[100%] tracking-[0%] text-[#444444]">
                                Electrical System
                            </h3>
                        </div>

                        <div className="absolute left-0 top-[50px] h-[24px] w-[136px]">
                            <span className="font-['Inter'] text-[20px] font-semibold leading-[100%] tracking-[0%] text-[#FF3811]">
                                Price : $20.00
                            </span>
                        </div>

                        <div className="absolute left-[290px] top-[50px] h-[24px] w-[24px]">
                            <Image src="/right arrow.png" alt="View service details" width={24} height={24} className="h-[24px] w-[24px]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Layout 4 - Three Service Cards */}
            <div className="absolute left-[150px] top-[600px] h-[348px] w-[1140px]">
                <div className="absolute left-0 top-0 h-[348px] w-[364px] border border-solid border-[#E8E8E8]"></div>
                <div className="absolute left-[388px] top-0 h-[348px] w-[364px] border border-solid border-[#E8E8E8]"></div>
                <div className="absolute left-[776px] top-0 h-[348px] w-[364px] border border-solid border-[#E8E8E8]"></div>
            </div>

            {/* Layout 5 - More Services */}
            <div className="absolute left-[635px] top-[998px] h-[56px] w-[170px]">
                <Link href="/servicedetails" aria-label="More Services" className="group flex h-[56px] w-[170px] items-center justify-center gap-2 rounded-[5px] border border-[#FF3811] bg-[#FF3811] font-['Inter'] text-[18px] font-semibold leading-[100%] tracking-[0%] text-white shadow-[0_4px_12px_rgba(255,56,17,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#e8320f] hover:shadow-[0_10px_25px_rgba(255,56,17,0.28)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3811]/60 focus-visible:ring-offset-2">
                    <span>More Services</span>
                    <svg className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </main>
    );
}
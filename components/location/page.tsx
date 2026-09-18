import Image from "next/image";
import Link from "next/link";

export default function Location() {
    return (
        <main className="relative mx-auto mt-[100px] h-[250px] w-[1440px]">
            {/* Location Layout */}
            <div className="absolute left-[150px] top-0 h-[250px] w-[1140px] rounded-[10px] bg-[#151515]">

                {/* Inner Layout */}
                <div className="absolute left-[73px] top-[96px] h-[59px] w-[994.2936px]">

                    {/* Layout 1 */}
                    <Link
                        href="/contact"
                        aria-label="View opening hours"
                        className="group absolute left-0 top-0 flex h-[59px] w-[286.8575px] cursor-pointer rounded-[8px]"
                    >
                        <div className="absolute left-0 top-[9px] flex h-[40.8575px] w-[40.8575px]">
                            <Image
                                src="/Calender.png"
                                alt="Opening hours"
                                width={41}
                                height={41}
                                className="h-[40.8575px] w-[40.8575px] object-contain"
                            />
                        </div>

                        <div className="absolute left-[60.8575px] top-0 h-[59px] w-[226px]">
                            <div className="absolute left-0 top-0 h-[19px] w-[213px]">
                                <span className="font-['Inter'] text-[16px] font-medium leading-[100%] text-white">
                                    We are open monday-friday
                                </span>
                            </div>

                            <div className="absolute left-0 top-[29px] h-[30px] w-[226px]">
                                <span className="font-['Inter'] text-[25px] font-bold leading-[100%] text-white">
                                    7:00 am - 9:00 pm
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Layout 2 */}
                    <Link
                        href="tel:+25462512658"
                        aria-label="Call us at +2546 251 2658"
                        className="group absolute left-[348px] top-0 flex h-[59px] w-[269.3441px] cursor-pointer rounded-[8px]"
                    >
                        <div className="absolute left-0 top-[9px] flex h-[40.8575px] w-[40.8575px]">
                            <Image
                                src="/Contact.png"
                                alt="Contact us"
                                width={41}
                                height={41}
                                className="h-[40.8575px] w-[40.8575px] object-contain"
                            />
                        </div>

                        <div className="absolute left-[60.8575px] top-0 h-[59px] w-[208.4866px]">
                            <div className="absolute left-0 top-0 h-[19px] w-[208px]">
                                <span className="font-['Inter'] text-[16px] font-medium leading-[100%] text-white">
                                    Have a question?
                                </span>
                            </div>

                            <div className="absolute left-0 top-[29px] h-[30px] w-[208px]">
                                <span className="font-['Inter'] text-[25px] font-bold leading-[100%] text-white">
                                    +2546 251 2658
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Layout 3 */}
                    <Link
                        href="/contact"
                        aria-label="View our address"
                        className="group absolute left-[678px] top-0 flex h-[59px] w-[316.2936px] cursor-pointer rounded-[8px]"
                    >
                        <div className="absolute left-0 top-[9px] flex h-[40.8575px] w-[40.8575px]">
                            <Image
                                src="/Location.png"
                                alt="Our address"
                                width={41}
                                height={41}
                                className="h-[40.8575px] w-[40.8575px] object-contain"
                            />
                        </div>

                        <div className="absolute left-[60.8575px] top-0 h-[59px] w-[260px]">
                            <div className="absolute left-0 top-0 h-[19px] w-[207px]">
                                <span className="font-['Inter'] text-[16px] font-medium leading-[100%] text-white">
                                    Need a repair? our address
                                </span>
                            </div>

                            <div className="absolute left-0 top-[29px] h-[30px] w-[260px]">
                                <span className="font-['Inter'] text-[25px] font-bold leading-[100%] text-white">
                                    Liza Street, New York
                                </span>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </main>
    );
}
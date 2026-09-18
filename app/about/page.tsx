import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <main className="relative mx-auto mt-[130.2245px] h-[557px] w-[1140px]">
            {/* Left Layout */}
            <div className="absolute left-0 top-0 h-[557px] w-[521px] rounded-[10px] border-[10px] border-solid border-white">
                {/* Main Image */}
                <Image src="/About.png" alt="Car Doctor Service" width={460} height={473} className="absolute left-0 top-0 h-[473px] w-[460px] rounded-[10px] object-cover" />

                {/* Second Image Layout */}
                <div className="absolute left-[194px] top-[225px] h-[332px] w-[327px] overflow-hidden rounded-[10px] border-[10px] border-solid border-white bg-[#00000033]">
                    <Image src="/About 1.jpg" alt="Car Parts" width={307} height={312} className="h-[312px] w-[307px] rounded-[10px] object-cover" />
                </div>
            </div>

            {/* Right Layout */}
            <div className="absolute left-[582px] top-[3px] h-[553px] w-[489px]">
                <div className="absolute left-0 top-0 h-[206px] w-[376px]">
                    <div className="absolute left-0 top-0 h-[24px] w-[91px]">
                        <span className="font-['Inter'] text-[20px] font-bold leading-[100%] tracking-[0%] text-[#FF3811]">
                            About Us
                        </span>
                    </div>

                    <div className="absolute left-0 top-[44px] h-[162px] w-[376px]">
                        <h2 className="m-0 font-['Inter'] text-[45px] font-bold leading-[100%] tracking-[0%] text-[#151515]">
                            We are qualified &amp; of experience in this field
                        </h2>
                    </div>
                </div>

                <div className="absolute left-0 top-[236px] h-[120px] w-[489px]">
                    <p className="m-0 font-['Inter'] text-[16px] font-normal capitalize leading-[30px] tracking-[0%] text-[#737373]">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                    </p>
                </div>

                <div className="absolute left-0 top-[376px] h-[90px] w-[489px]">
                    <p className="m-0 font-['Inter'] text-[16px] font-normal capitalize leading-[30px] tracking-[0%] text-[#737373]">
                        The majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                    </p>
                </div>

                <div className="absolute left-0 top-[496px] h-[56px] w-[170px]">
                    <Link href="/about" aria-label="Get More Info" className="group flex h-[56px] w-[170px] cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-[#FF3811] font-['Inter'] text-[18px] font-semibold text-white shadow-[0_4px_12px_rgba(255,56,17,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#e8320f] hover:shadow-[0_10px_25px_rgba(255,56,17,0.28)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3811]/60 focus-visible:ring-offset-2">
                        <span className="leading-[100%]">Get More Info</span>
                        <svg className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </main>
    );
}
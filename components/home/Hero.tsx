import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <main className="mx-auto w-[1140px]">
            {/* Hero Section */}
            <section className="relative mt-[50px] h-[600px] w-[1140px] overflow-hidden rounded-[10px]">
                {/* Hero Image */}
                <Image src="/Hero.png" alt="Car Doctor" fill priority className="object-cover" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#151515_0%,rgba(21,21,21,0)_100%)]" />

                {/* 1st Layout - Heading */}
                <div className="absolute left-[100px] top-[99px] h-[225px] w-[463px]">
                    <h1 className="m-0 font-['Inter'] text-[60px] font-bold leading-[75px] tracking-[0%] text-white">
                        Affordable Price For Car Servicing
                    </h1>
                </div>

                {/* 2nd Layout - Description */}
                <div className="absolute left-[100px] top-[354px] h-[60px] w-[522px]">
                    <p className="m-0 font-['Inter'] text-[18px] font-normal capitalize leading-[30px] tracking-[0%] text-white">
                        There are many variations of passages of available, but the majority have suffered alteration in some form
                    </p>
                </div>

                {/* 3rd Layout - Buttons */}
                <div className="absolute left-[100px] top-[444px] flex h-[56px] w-[360px] gap-5">
                    {/* Discover More */}
                    <Link href="/about" aria-label="Discover More" className="group flex h-[56px] w-[170px] cursor-pointer items-center justify-center rounded-[5px] bg-[#FF3811] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e8320f] hover:shadow-[0_8px_20px_rgba(255,56,17,0.25)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3811]/60">
                        <span className="font-['Inter'] text-center text-[18px] font-semibold leading-[100%] text-white">
                            Discover More
                        </span>
                    </Link>

                    {/* Latest Project */}
                    <Link href="/services" aria-label="Latest Project" className="group flex h-[56px] w-[170px] cursor-pointer items-center justify-center rounded-[5px] border border-white bg-white/0 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                        <span className="font-['Inter'] text-center text-[18px] font-semibold leading-[100%] text-white transition-colors duration-300 group-hover:text-[#151515]">
                            Latest Project
                        </span>
                    </Link>
                </div>

                {/* Bottom Right - Left Icon */}
                <div className="absolute left-[950px] top-[490px] h-[60px] w-[60px]">
                    <Image src="/Left.png" alt="Previous" width={60} height={60} className="h-[60px] w-[60px] object-contain" />
                </div>

                {/* Bottom Right - Right Icon */}
                <div className="absolute left-[1030px] top-[490px] h-[60px] w-[60px]">
                    <Image src="/Right.png" alt="Next" width={60} height={60} className="h-[60px] w-[60px] object-contain" />
                </div>
            </section>
        </main>
    );
}
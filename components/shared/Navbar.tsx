import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed inset-x-0 top-0 z-[9999] h-[136.7755px] w-full bg-white">
            <div className="relative mx-auto h-[86.7755px] w-[1140px] translate-y-[50px]">
                {/* Left Layout */}
                <div className="absolute left-0 top-0 h-[86.7755px] w-[107px]">
                    {/* Logo */}
                    <div className="absolute left-[3px] top-0 h-[54.7755px] w-[101px]">
                        <Image src="/Car Doctor Logo.png" alt="Car Doctor Logo" width={101} height={55} priority className="h-[54.7755px] w-[101px] object-contain" />
                    </div>

                    {/* Car Doctor */}
                    <div className="absolute left-0 top-[59.78px] flex h-[27px] w-[107px] items-center justify-center">
                        <span className="font-['Open_Sans'] text-center text-[20px] font-bold leading-[100%] text-[#444444]">
                            Car Doctor
                        </span>
                    </div>
                </div>

                {/* Middle Layout - Navigation */}
                <div className="absolute left-[255px] top-[31px] h-[22px] w-[468px]">
                    <div className="flex h-full w-full items-center justify-between">
                        <Link href="/" className="group relative cursor-pointer font-['Inter'] text-[18px] font-semibold leading-[100%] text-[#444444] transition-colors duration-300 hover:text-[#FF3811] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3811]/60">
                            Home
                            <span className="absolute bottom-[-7px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#FF3811] transition-all duration-300 group-hover:w-full" />
                        </Link>

                        <Link href="/about" className="group relative cursor-pointer font-['Inter'] text-[18px] font-semibold leading-[100%] text-[#444444] transition-colors duration-300 hover:text-[#FF3811] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3811]/60">
                            About
                            <span className="absolute bottom-[-7px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#FF3811] transition-all duration-300 group-hover:w-full" />
                        </Link>

                        <Link href="/services" className="group relative cursor-pointer font-['Inter'] text-[18px] font-semibold leading-[100%] text-[#444444] transition-colors duration-300 hover:text-[#FF3811] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3811]/60">
                            Services
                            <span className="absolute bottom-[-7px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#FF3811] transition-all duration-300 group-hover:w-full" />
                        </Link>

                        <Link href="/blog" className="group relative cursor-pointer font-['Inter'] text-[18px] font-semibold leading-[100%] text-[#444444] transition-colors duration-300 hover:text-[#FF3811] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3811]/60">
                            Blog
                            <span className="absolute bottom-[-7px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#FF3811] transition-colors duration-300 group-hover:w-full" />
                        </Link>

                        <Link href="/contact" className="group relative cursor-pointer font-['Inter'] text-[18px] font-semibold leading-[100%] text-[#444444] transition-colors duration-300 hover:text-[#FF3811] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3811]/60">
                            Contact
                            <span className="absolute bottom-[-7px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#FF3811] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </div>
                </div>

                {/* Right Layout */}
                <div className="absolute left-[872px] top-[15px] h-[56px] w-[268px]">
                    {/* Shopping + Search */}
                    <div className="absolute left-0 top-[20px] h-[24px] w-[68px]">
                        {/* Shopping */}
                        <Link href="/" aria-label="Shopping" className="group absolute left-0 top-0 flex h-[24px] w-[24px] cursor-pointer items-center justify-center active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/40">
                            <Image src="/Shopping.png" alt="Shopping" width={24} height={24} className="h-[24px] w-[24px] object-contain transition-all duration-300 ease-out group-hover:scale-105 group-hover:[filter:brightness(0)_saturate(100%)_invert(28%)_sepia(82%)_saturate(3400%)_hue-rotate(257deg)_brightness(91%)_contrast(94%)]" />
                        </Link>

                        {/* Search */}
                        <Link href="/" aria-label="Search" className="group absolute left-[44px] top-0 flex h-[24px] w-[24px] cursor-pointer items-center justify-center active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/50">
                            <Image src="/Search.png" alt="Search" width={24} height={24} className="h-[24px] w-[24px] object-contain transition-all duration-300 ease-out group-hover:scale-110 group-hover:[filter:drop-shadow(0_2px_5px_rgba(37,99,235,0.4))_brightness(0)_saturate(100%)_invert(39%)_sepia(95%)_saturate(2200%)_hue-rotate(208deg)_brightness(99%)_contrast(103%)]" />
                        </Link>
                    </div>

                    {/* Appointment */}
                    <div className="absolute left-[98px] top-0 h-[56px] w-[170px]">
                        <Link href="/appointment" aria-label="Book an appointment" className="group flex h-[56px] w-[170px] cursor-pointer items-center justify-center rounded-[5px] border border-[#FF3811] transition-all duration-300 hover:bg-[#FF3811] hover:shadow-[0_8px_20px_rgba(255,56,17,0.22)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3811]/60">
                            <span className="font-['Inter'] text-[18px] font-semibold leading-[100%] text-[#FF3811] transition-colors duration-300 group-hover:text-white">
                                Appointment
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
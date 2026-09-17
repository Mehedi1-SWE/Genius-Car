import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative h-[477px] w-[1440px] bg-[rgba(21,21,21,1)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            {/* 1st Layout */}
            <div className="absolute left-[150px] top-[130px] h-[216.7114px] w-[283px]">
                {/* 1st Child Layout */}
                <div className="absolute left-0 top-0 h-[64.0865px] w-[79px]">
                    {/* Logo Layout */}
                    <div className="absolute left-[2.21px] top-0 h-[40.3989px] w-[74.4911px] ">
                        <Image src="/Footer Logo.png" alt="Car Doctor Logo" width={75} height={40} className="h-[40.3989px] w-[74.4911px] object-contain" />
                    </div>

                    {/* Car Doctor Layout */}
                    <div className="absolute left-0 top-[44.09px] flex h-[20px] w-[79px] items-center justify-center">
                        <span className="font-['Open_Sans'] text-center text-[14.75px] font-bold leading-[100%] text-[rgba(255,255,255,1)]">Car Doctor</span>
                    </div>
                </div>

                {/* 2nd Child Layout */}
                <div className="absolute left-0 top-[84.09px] h-[132.625px] w-[283px]">
                    {/* Description */}
                    <div className="absolute left-0 top-0 h-[78px] w-[283px]">
                        <p className="m-0 font-['Inter'] text-[16px] font-normal leading-[26px] tracking-[0%] text-[rgba(232,232,232,1)]">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    </div>

                    {/* Social Icons */}
                    <div className="absolute left-0 top-[98px] h-[34.625px] w-[160.1406px]">
                        <div className="flex h-[34.625px] w-[160.1406px] items-center justify-between">

                            <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="group relative flex h-[34.625px] w-[36.3563px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-transparent bg-transparent transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-115 hover:border-[#4285F4]/60 hover:bg-[radial-gradient(circle_at_30%_30%,rgba(66,133,244,0.28),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(234,67,53,0.25),transparent_45%),radial-gradient(circle_at_50%_75%,rgba(251,188,5,0.22),transparent_45%)] hover:shadow-[0_0_8px_rgba(66,133,244,0.3),0_0_16px_rgba(234,67,53,0.25),0_0_28px_rgba(251,188,5,0.18)] active:scale-95">
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <Image src="/Google.png" alt="Google" width={36} height={35} className="relative z-10 h-[34.625px] w-[36.3563px] object-contain transition-all duration-500 ease-out group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.75)]" />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group relative flex h-[34.625px] w-[36.3563px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-transparent bg-transparent transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-115 hover:border-[#1DA1F2] hover:bg-gradient-to-br hover:from-[#1DA1F2] hover:to-[#0D8BD9] hover:shadow-[0_0_8px_rgba(29,161,242,0.55),0_0_20px_rgba(29,161,242,0.4),0_0_35px_rgba(29,161,242,0.2),inset_0_1px_2px_rgba(255,255,255,0.35)] active:scale-95">
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <Image src="/Twitter.png" alt="Twitter" width={36} height={35} className="relative z-10 h-[34.625px] w-[36.3563px] object-contain transition-all duration-500 ease-out group-hover:brightness-0 group-hover:invert group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                            </Link>
                            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group relative flex h-[34.625px] w-[36.3563px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-transparent bg-transparent transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-115 hover:border-[#E1306C] hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] hover:shadow-[0_0_8px_rgba(225,48,108,0.55),0_0_20px_rgba(225,48,108,0.4),0_0_35px_rgba(225,48,108,0.2),inset_0_1px_2px_rgba(255,255,255,0.35)] active:scale-95">
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <Image src="/Instagram.png" alt="Instagram" width={36} height={35} className="relative z-10 h-[34.625px] w-[36.3563px] object-contain transition-all duration-500 ease-out group-hover:brightness-0 group-hover:invert group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                            </Link>

                            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group relative flex h-[34.625px] w-[36.3563px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-transparent bg-transparent transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-115 hover:border-[#0A66C2] hover:bg-gradient-to-br hover:from-[#0A66C2] hover:to-[#004182] hover:shadow-[0_0_8px_rgba(10,102,194,0.55),0_0_20px_rgba(10,102,194,0.4),0_0_35px_rgba(10,102,194,0.2),inset_0_1px_2px_rgba(255,255,255,0.35)] active:scale-95">
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <Image src="/Linkedin.png" alt="LinkedIn" width={36} height={35} className="relative z-10 h-[34.625px] w-[36.3563px] object-contain transition-all duration-500 ease-out group-hover:brightness-0 group-hover:invert group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd Layout */}
            {/* 2nd Layout */}
            <div className="absolute left-[615px] top-[130px] h-[184px] w-[62px]">

                {/* About */}
                <div className="absolute left-0 top-0 h-[24px] w-[60px]">
                    <Link
                        href="/about"
                        aria-label="Go to About page"
                        className="group flex h-[24px] w-[60px] cursor-pointer items-center justify-center transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3811]"
                    >
                        <span className="font-['Inter'] text-center text-[20px] font-semibold leading-[100%] text-white transition-colors duration-300 group-hover:text-[#FF3811]">
                            About
                        </span>
                    </Link>
                </div>

                {/* Links */}
                <div className="absolute left-[1px] top-[64px] h-[120px] w-[61px]">
                    <div className="font-['Inter'] text-[16px] font-normal leading-[40px] tracking-[0%] text-[#F3F3F3]">

                        {/* Home */}
                        <Link
                            href="/"
                            aria-label="Go to Home page"
                            className="group flex h-[40px] w-[61px] cursor-pointer items-center transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3811]"
                        >
                            <span className="transition-colors duration-300 group-hover:text-[#FF3811]">
                                Home
                            </span>
                        </Link>

                        {/* Service */}
                        <Link
                            href="/services"
                            aria-label="Go to Services page"
                            className="group flex h-[40px] w-[61px] cursor-pointer items-center transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3811]"
                        >
                            <span className="transition-colors duration-300 group-hover:text-[#FF3811]">
                                Service
                            </span>
                        </Link>

                        {/* Contact */}
                        <Link
                            href="/contact"
                            aria-label="Go to Contact page"
                            className="group flex h-[40px] w-[61px] cursor-pointer items-center transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3811]"
                        >
                            <span className="transition-colors duration-300 group-hover:text-[#FF3811]">
                                Contact
                            </span>
                        </Link>

                    </div>
                </div>
            </div>

            {/* 3rd Layout */}
            <div className="absolute left-[869px] top-[130.41px] h-[144px] w-[122px]">

                {/* Company */}
                <div className="absolute left-0 top-0 h-[24px] w-[93px]">
                    <span className="font-['Inter'] text-center text-[20px] font-semibold leading-[100%] text-white">
                        Company
                    </span>
                </div>

                {/* Links */}
                <div className="absolute left-[1px] top-[64px] h-[80px] w-[121px]">
                    <div className="font-['Inter'] text-[16px] font-normal leading-[40px] tracking-[0%] text-[#F3F3F3]">

                        {/* Why Car Doctor */}
                        <Link
                            href="/about"
                            aria-label="Go to Why Car Doctor page"
                            className="group flex h-[40px] w-[121px] cursor-pointer items-center transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3811]"
                        >
                            <span className="transition-colors duration-300 group-hover:text-[#FF3811]">
                                Why Car Doctor
                            </span>
                        </Link>

                        {/* About */}
                        <Link
                            href="/about"
                            aria-label="Go to About page"
                            className="group flex h-[40px] w-[121px] cursor-pointer items-center transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3811]"
                        >
                            <span className="transition-colors duration-300 group-hover:text-[#FF3811]">
                                About
                            </span>
                        </Link>

                    </div>
                </div>
            </div>

            {/* 4th Layout */}
            <div className="absolute left-[1172px] top-[130.41px] h-[184px] w-[118px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">

                {/* Support */}
                <div className="absolute left-0 top-0 h-[24px] w-[79px]">
                    <span className="font-['Inter'] text-center text-[20px] font-semibold leading-[100%] text-white">
                        Support
                    </span>
                </div>

                {/* Links */}
                <div className="absolute left-[1px] top-[64px] h-[120px] w-[117px]">
                    <div className="font-['Inter'] text-[16px] font-normal leading-[40px] tracking-[0%] text-[#F3F3F3]">

                        {/* Support Center */}
                        <Link
                            href="/contact"
                            aria-label="Go to Support Center"
                            className="group flex h-[40px] w-[117px] cursor-pointer items-center transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3811]"
                        >
                            <span className="transition-colors duration-300 group-hover:text-[#FF3811]">
                                Support Center
                            </span>
                        </Link>

                        {/* Feedback */}
                        <Link
                            href="/contact"
                            aria-label="Go to Feedback"
                            className="group flex h-[40px] w-[117px] cursor-pointer items-center transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3811]"
                        >
                            <span className="transition-colors duration-300 group-hover:text-[#FF3811]">
                                Feedback
                            </span>
                        </Link>

                        {/* Accesbility */}
                        <Link
                            href="/contact"
                            aria-label="Go to Accessibility"
                            className="group flex h-[40px] w-[117px] cursor-pointer items-center transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3811]"
                        >
                            <span className="transition-colors duration-300 group-hover:text-[#FF3811]">
                                Accesbility
                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </footer>
    );
}
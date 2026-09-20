import Image from "next/image";
import Link from "next/link";

export default function FormNavbar() {
    return (
        <nav className="relative mx-auto h-[137px] w-[1440px]">

            {/* Logo */}
            <div className="absolute left-[150px] top-[50px] h-[86.7755px] w-[107px]">

                {/* Logo Image */}
                <div className="absolute left-[3px] top-[0px] h-[54.7755px] w-[101px]">
                    <Image src="/Form Logo.png" alt="Car Doctor Logo" width={101} height={54.7755} className="h-full w-full object-contain" />
                </div>

                {/* Car Doctor */}
                <div className="absolute left-[0px] top-[59.78px] h-[27px] w-[107px]">
                    <span className="font-['Open_Sans'] text-center text-[20px] font-bold leading-[100%] tracking-[0%] text-[#444444]">
                        Car Doctor
                    </span>
                </div>

            </div>

            {/* Navigation */}
            <div className="absolute left-[757px] top-[82px] h-[22px] w-[533px]">
                <div className="flex h-[22px] w-full items-center justify-between">

                    <Link href="/order" className="font-['Inter'] text-[18px] font-semibold leading-[100%] tracking-[0%] text-[#444444]">
                        Order
                    </Link>

                    <Link href="/order-review" className="font-['Inter'] text-[18px] font-semibold leading-[100%] tracking-[0%] text-[#444444]">
                        Order Review
                    </Link>

                    <Link href="/manage-inventory" className="font-['Inter'] text-[18px] font-semibold leading-[100%] tracking-[0%] text-[#444444]">
                        Manage Inventory
                    </Link>

                    <Link href="/login" className="font-['Inter'] text-[18px] font-semibold leading-[100%] tracking-[0%] text-[#444444]">
                        Login
                    </Link>

                </div>
            </div>

        </nav>
    );
}
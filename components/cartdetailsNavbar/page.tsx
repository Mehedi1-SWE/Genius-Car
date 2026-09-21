import Image from "next/image";
import Link from "next/link";

export default function CartDetailsNavbar() {
    return (
        <nav>
            {/* Left Logo Layout */}
            <div className="absolute left-[150px] top-[50px] h-[86.7755px] w-[107px]">

                {/* 1st Inner Layout - Logo Image */}
                <div className="absolute left-[3px] top-[0px] h-[54.7755px] w-[101px]">
                    <Image src="/Form Logo.png" alt="Car Doctor Logo" width={101} height={54.7755} className="h-full w-full object-contain" />
                </div>

                {/* 2nd Inner Layout - Car Doctor */}
                <div className="absolute left-[0px] top-[59.78px] h-[27px] w-[107px]">
                    <span className="font-['Open_Sans'] text-center text-[20px] font-bold leading-[100%] tracking-[0%] text-[#444444]">
                        Car Doctor
                    </span>
                </div>

            </div>

            {/* Right Layout */}
            <div className="absolute left-[652px] top-[82px] h-[22px] w-[638px] ">

                {/* Left Layout */}
                <div className="absolute left-[0px] top-[0px] h-[22px] w-[432px]">
                    <div className="flex h-[22px] w-full items-center justify-between">

                        <Link href="/order" className="cursor-pointer font-['Inter'] text-center text-[18px] font-semibold leading-[100%] tracking-[0%] text-[#444444]">
                            Order
                        </Link>

                        <Link href="/order-review" className="cursor-pointer font-['Inter'] text-center text-[18px] font-semibold leading-[100%] tracking-[0%] text-[#444444]">
                            Order Review
                        </Link>

                        <Link href="/manage-inventory" className="cursor-pointer font-['Inter'] text-center text-[18px] font-semibold leading-[100%] tracking-[0%] text-[#444444]">
                            Manage Inventory
                        </Link>

                    </div>
                </div>

                {/* Right Layout */}
                <div className="absolute left-[482px] top-[2px] h-[18px] w-[156px]">

                    {/* 1st Icon */}
                    <Link href="/cart">
                        <div className="absolute left-[0px] top-[0px] h-[18px] w-[14px]">
                            <Image src="/profile.png" alt="Cart" width={14} height={18} className="h-full w-full object-contain" />
                        </div>
                    </Link>

                    {/* 2nd Icon */}
                    <Link href="/order-review">
                        <div className="absolute left-[44px] top-[0px] h-[18px] w-[18px]">
                            <Image src="/searchs.png" alt="Order Review" width={18} height={18} className="h-full w-full object-contain" />
                        </div>
                    </Link>

                    {/* 3rd Icon */}
                    <Link href="/manage-inventory">
                        <div className="absolute left-[92px] top-[1px] h-[15.364px] w-[18px]">
                            <Image src="/Likes.png" alt="Manage Inventory" width={18} height={15.364} className="h-full w-full object-contain" />
                        </div>
                    </Link>

                    {/* 4th Icon */}
                    <Link href="/login">
                        <div className="absolute left-[140px] top-[0px] h-[18px] w-[16px]">
                            <Image src="/Security.png" alt="Login" width={16} height={18} className="h-full w-full object-contain" />
                        </div>
                    </Link>

                </div>

            </div>

        </nav>
    );
}
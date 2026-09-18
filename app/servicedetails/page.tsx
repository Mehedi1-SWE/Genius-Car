import Image from "next/image";

export default function ServiceDetails() {
    return (
        <main className="relative mx-auto h-[1090px] w-[1440px]">
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

            {/* Right Layout */}
            <div className="absolute left-[926px] top-[617px] h-[490px] w-[364px] bg-[#F3F3F3]">

                {/* 1st Layout */}
                <div className="absolute left-[40px] top-[40px] h-[30px] w-[108px]"><h2 className="m-0 font-['Inter'] text-[25px] font-bold leading-[100%] tracking-[0%] text-[#151515]">Services</h2></div>

                {/* 2nd Layout */}
                <div className="absolute left-[40px] top-[90px] h-[56px] w-[284px] bg-[#FF3811]">
                    <div className="absolute left-[18px] top-[18px] h-[19px] w-[112px]">
                        <span className="font-['Inter'] text-[16px] font-semibold leading-[100%] tracking-[0%] text-white">Full Car Repair</span>
                    </div>
                    <div className="absolute left-[242px] top-[16px] h-[24px] w-[24px]"><Image src="/WRA.png" alt="Full Car Repair" width={24} height={24} className="h-[24px] w-[24px] object-contain" />
                    </div>
                </div>

                {/* 3rd Layout */}
                <div className="absolute left-[40px] top-[90px] h-[56px] w-[284px]"><div className="absolute left-[18px] top-[18px] h-[19px] w-[112px]"><span className="font-['Inter'] text-[16px] font-semibold leading-[100%] tracking-[0%] ">Engine Repair</span></div><div className="absolute left-[242px] top-[16px] h-[24px] w-[24px]"><Image src="/WRA.png" alt="Full Car Repair" width={24} height={24} className="h-[24px] w-[24px] object-contain" /></div></div>

                {/* 4th Layout */}
                <div className="absolute left-[40px] top-[90px] h-[56px] w-[284px]"><div className="absolute left-[18px] top-[18px] h-[19px] w-[112px]"><span className="font-['Inter'] text-[16px] font-semibold leading-[100%] tracking-[0%] text-white">Automatic Services</span></div><div className="absolute left-[242px] top-[16px] h-[24px] w-[24px]"><Image src="/Right.png" alt="Full Car Repair" width={24} height={24} className="h-[24px] w-[24px] object-contain" /></div></div>

                {/* 5th Layout */}
                <div className="absolute left-[40px] top-[90px] h-[56px] w-[284px]"><div className="absolute left-[18px] top-[18px] h-[19px] w-[112px]"><span className="font-['Inter'] text-[16px] font-semibold leading-[100%] tracking-[0%] text-white">Engine Oil Change</span></div><div className="absolute left-[242px] top-[16px] h-[24px] w-[24px]"><Image src="/right arrow.png" alt="Full Car Repair" width={24} height={24} className="h-[24px] w-[24px] object-contain" /></div></div>

                {/* 6th Layout */}
                <div className="absolute left-[40px] top-[90px] h-[56px] w-[284px] bg-[#FFFFFF]"><div className="absolute left-[18px] top-[18px] h-[19px] w-[112px]"><span className="font-['Inter'] text-[16px] font-semibold leading-[100%] tracking-[0%] text-[#151515]">Battery Charge</span></div><div className="absolute left-[242px] top-[16px] h-[24px] w-[24px]"><Image src="/right arrow.png" alt="Battery Charge" width={24} height={24} className="h-[24px] w-[24px] object-contain" /></div></div>
            </div>
        </main>
    );
}
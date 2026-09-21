import Image from "next/image";
import FormNavbar from "@/components/formNavbar/page";

export default function Error() {
    return (
        <div className="flex min-h-screen justify-center overflow-x-auto">
            <div className="relative h-[1000px] w-[1440px] shrink-0">
                <FormNavbar />

                {/* Image Layout */}
                <div className="absolute left-[326px] top-[300px] h-[489.8773px] w-[788.6px]">
                    <Image src="/Error.png" alt="404 Error" fill className="object-fill" />
                </div>
            </div>
        </div>
    );
}
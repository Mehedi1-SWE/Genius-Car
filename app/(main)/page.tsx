import Hero from "@/components/home/Hero";
import AboutUs from "./about/page";
import Service from "./services/page";
import Location from "@/components/location/page";
import PopularProducts from "@/components/popularProducts/page";
import Team from "@/components/team/page";
import CoreFeatures from "@/components/coreFeatures/page";
import Testimonial from "@/components/testimonial/page";
export default function Home() {
    return (
        <main className="relative mx-auto h-[6400px] w-[1440px]">
            <Hero />
            <AboutUs />
            <Service />
            <Location />
            <PopularProducts />
            <Team />
            <CoreFeatures />
            <Testimonial />

            /</main>
    );
}
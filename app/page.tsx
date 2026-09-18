import Hero from "@/components/home/Hero";
import AboutUs from "./about/page";
import Service from "./services/page";
import Location from "@/components/location/page";
export default function Home() {
    return (
        <>
            <Hero />
            <AboutUs />
            <Service />
            <Location />
        </>
    );
}
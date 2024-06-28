import Header from "@/components/navigations/header/header";
import MagneticWrapper from "@/components/ui/magneticWrapper";
import FancyButton from "@/components/ui/fancy-button";
import {FaArrowRight} from "react-icons/fa";
import LiveClock from "@/components/ui/live-clock";
import Slogan from "@/components/navigations/header/slogan";
import ScrollDown from "@/components/ui/scroll-down";

export default function LandingSection() {
    return (
        <>
            <div className="relative h-screen overflow-hidden p-8">
                {/*HeaderCard*/}
                <Header/>

                {/* Show magnetic fancy button on smaller screen*/}
                <div className="absolute bottom-36 left-10 z-20 md:hidden">
                    <MagneticWrapper>
                        <FancyButton text={"Click Me!"} icon={<FaArrowRight/>}/>
                    </MagneticWrapper>
                </div>

                {/*Live Clock*/}
                <div className="absolute bottom-10 right-10">
                    <LiveClock timeZone={"Asia/Tokyo"}/>
                </div>
                
                {/*Slogan*/}
                <Slogan />
                
                {/*Scroll down*/}
                <MagneticWrapper className="absolute right-[5rem] -translate-x-1/2 bottom-[8rem] md:bottom-[8rem] lg:bottom-[8rem] 2xl:bottom-[8rem]">
                    <ScrollDown />
                </MagneticWrapper>
            </div>
        </>
    );
};
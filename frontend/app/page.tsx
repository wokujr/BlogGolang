"use client"

import LandingSection from "@/sections/landing";
import FeaturedSection from "@/sections/featured";
import About from "@/sections/about";
import dynamic from "next/dynamic";

const WaterWaveEffectWrapper = dynamic(
    () => import("@/components/visualEffects/water-wave-wrapper"), {ssr : false}
);

export default function Home() {
    return (
        <>
            <WaterWaveEffectWrapper
                imageUrl={""}
                dropRadius={"3"}
                perturbance={"3"}
                resolution={"2048"}
            >
                {() => (
                    <>
                        <LandingSection/>
                        <FeaturedSection/>
                        <About />
                    </>
                )}
            </WaterWaveEffectWrapper>
        </>
    );
}

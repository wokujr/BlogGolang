import AboutMeHeader from "./AboutMeHeader.tsx";
import AboutMeIntro from "./AboutMeIntro.tsx";
import SectionDivider from "../../components/SectionDivider.tsx";
import About from "./About.tsx";

export default function AboutmePage() {
    return (
        <main className="flex flex-col px-auto items-center justify-center">
            <AboutMeHeader />
            <AboutMeIntro />
            <SectionDivider/>
            <About />
        </main>
    );
}

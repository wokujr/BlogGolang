import {HeadingAnimatedSvg} from "@/components/heading/heading-animated-svg";
import Link from "next/link";


export default function MenuCard() {
    return (
        <>
            <div
                className="w-full h-full min-h-[427px] gap-[70px] bg-blue-600 rounded-[10px] flex-col justify-between items-center relative flex overflow-hidden pt-10 px-[25px] pb-5 shadow-md">
                {/*Header*/}
                <div className="w-full relative justify-between items-center">
                    <div className="uppercase font-bold text-2xl text-white ">
                        <HeadingAnimatedSvg
                            text={"Learn more about SiSum"}
                            animated
                        />
                    </div>
                </div>
                <div className="z-40 w-full flex flex-col gap-y-[5px] justify-center items-start relative">
                    {
                        myLinks.map( (link, i) => (
                            <Link key={i} href={link.href} className="text-yellow-400 uppercase text-[52px] font-bold leading-[85%] transition-colors duration-75 hover:text-white">
                                {link.title}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

const myLinks = [
    {
        title: "Me",
        href: "#me",
    },
    {
        title: "Projects",
        href: "#project",
    },
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Education",
        href: "#education",
    },
    {
        title: "Stack",
        href: "#stack",
    },
    {
        title: "Background",
        href: "#background",
    },
    {
        title: "Certification",
        href: "#certifaction",
    },
]
import {motion} from "framer-motion";
import {menuSlide} from "@/components/navigations/header/full_screen_menu/animation";
import Curve from "@/components/navigations/header/full_screen_menu/curve";
import Profile from "@/components/ui/profile";
import NavLink from "@/components/navigations/header/nav-link";
import Link from "next/link";
import MenuCard from "@/components/navigations/header/full_screen_menu/menu-card";
import {useState} from "react";

export default function FullScreenMenu() {
    const [menuOpen, setMenuOpen] = useState<boolean>(true);
    
    const handleNavLinkClick = (href: string) => {
        if (href.startsWith('/#')){
            const id = href.split("#")[1];
            const element = document.getElementById(id);
            if (element){
                element.scrollIntoView({behavior: "smooth"});
            }
        }
        setMenuOpen(false);
    }
    
    return (
        <>
            {menuOpen && (
                <motion.div
                    variants={menuSlide}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-oswald"
                >
                    {/*Profile*/}
                    <div className="relative w-full max-w-[95%] mx-auto">
                        <div className="absolute top-8">
                            <Profile/>
                        </div>
                    </div>

                    {/* Menu */}
                    <div className="absolute bottom-32 w-full lg:pl-[4rem]">
                        <div
                            className="grid relative"
                            style={{gridTemplateColumns: "1fr 5r00px"}}
                        >
                            <div className="pl-4 flex flex-col justify-end">
                                {
                                    navItems.map((item, index) => (
                                        <NavLink
                                            key={index}
                                            data={{...item, index}}
                                            onClick={() => handleNavLinkClick(item.href)}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/*Footer Link*/}
                    <div className="w-[95%] pl-[5%] absolute bottom-8 ">
                        <div className="flex flex-wrap items-center justify-between uppercase text-white">
                            {/*/!*Left side*!/*/}
                            {/*<div className="flex items-center gap-4">*/}
                            {/*    <Link href="/"> Github </Link>*/}
                            {/*    <Link href="/"> 404 </Link>*/}
                            {/*    <Link href="/">  </Link>*/}
                            {/*</div>*/}

                            {/*Middle*/}
                            <div className="flex items-center gap-4">
                                <Link href="https://github.com/wokujr" target="_blank"> Github </Link>
                                <Link href="https://www.youtube.com/@kuroyukifm" target="_blank"> YouTube </Link>
                                <Link href="https://www.artstation.com/sysum" target="_blank"> ArtStation </Link>
                            </div>

                            {/*Right side*/}
                            <div className="flex items-center gap-4">
                                <Link href="/"> ©2024 </Link>
                            </div>
                        </div>
                    </div>

                    {/*Curve svg effect*/}
                    <Curve/>
                </motion.div>
            )}

        </>
    );
}

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/#about",
    },
    {
        title: "Projects",
        href: "/projects",
    },
    {
        title: "Japanese",
        href: "/japanese",
    },
];

import Profile from "@/components/ui/profile";
import MagneticWrapper from "@/components/ui/magneticWrapper";
import FancyButton from "@/components/ui/fancy-button";
import { FaArrowRight } from "react-icons/fa";
import FullScreenMenu from "@/components/navigations/header/full_screen_menu/full-screen-menu";
import {useEffect, useState} from "react";
import ToggleButton from "@/components/navigations/header/full_screen_menu/toggle-button";
import {AnimatePresence} from "framer-motion";

export default function Header() {
    const [open, setOpen] = useState<boolean>(false);
    const [showToggle, setShowToggle] = useState<boolean>(false);
    
    useEffect(()=> {
        const handleScroll = () => {
            if (window.scrollY >= 0){
                setShowToggle(true);
            }
            else {
                setShowToggle(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <>
            <div className="w-full items-center flex justify-center md:justify-between">
                <Profile />
                {/*<div className="hidden md:inline">*/}
                {/*    <MagneticWrapper>*/}
                {/*        <FancyButton text={"Click Me!"} icon={<FaArrowRight />} />*/}
                {/*    </MagneticWrapper>*/}
                {/*</div>*/}

                {showToggle && <ToggleButton open={open} setOpen={setOpen} />}
                
                <AnimatePresence mode="wait">
                    {open && <FullScreenMenu />}
                </AnimatePresence>
            </div>
        </>
    );
}

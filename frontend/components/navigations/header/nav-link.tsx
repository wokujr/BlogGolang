import {motion} from 'framer-motion';
import {scale, slide} from "@/components/navigations/header/full_screen_menu/animation";
import Link from "next/link";
import {useState} from "react";

interface NavLinkProps {
    data: {
        title: string,
        href: string,
        index: number,
    }
    onClick?: () => void;
}

export default function NavLink({data}: NavLinkProps) {
    const {title, href, index} = data
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <>
            <motion.div
                className="relative flex items-center z-40"
                variants={slide}
                custom={index}
                initial="initial"
                animate="enterSlide"
                exit="exitSlide"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                
                <motion.div 
                    className="w-2.5 h-2.5 bg-white rounded-full absolute -left-[30px]"
                    variants={scale}
                    animate={hovered ? "open" : "closed"}
                >
                    
                </motion.div>
                
                <Link
                    href={href}
                    className="text-[6vw] uppercase leading-[96%] font-bold text-white"
                >
                    {title}
                </Link>
            </motion.div>
        </>
    );
};
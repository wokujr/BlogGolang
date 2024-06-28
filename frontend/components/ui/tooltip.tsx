import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {useState} from "react";

interface TooltipProps {
    image: string | StaticImport;
    title: string,
    bgColor?: string,
}

export default function Tooltip({image, title, bgColor}: TooltipProps) {
    const [active, setActive] = useState<boolean>(false);

    return (
        <>
            <div className={cn(
                "link relative bg-[#2d2c33] w-10 h-10 transform cursor-pointer grid place-items-center",
                "rounded-xl p-2",
                "hover:scale-110 transition-all duration-200",
            )}
                 style={{background: `${bgColor || "#2d2c33"}`}}
                 onMouseEnter={() => setActive(true)}
                 onMouseLeave={() => setActive(false)}
            >
                <div className="w-[27px] h-[27px] object-cover">
                    <Image src={image} alt={title} />
                </div>
                {/*    When active show title*/}
                {
                    active ?
                        (
                            <div
                                className="absolute -top-6 bg-black/[0.2] py-0.5 px-1.5 rounded-2xl backdrop-blur-[60px] transition-all duration-200">
                                <p className="font-pixel text-[10px] whitespace-nowrap">
                                    {title}
                                </p>
                            </div>
                        )
                        :
                        null
                }
            </div>
        </>
    );
};

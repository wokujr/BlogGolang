import {cn} from "@/lib/utils";
import anime_gif from "@/public/assets/gif/anime_code_1.gif";
import anime_gif2 from "@/public/assets/gif/oijigi.gif"
import Image from "next/image";
import FancyButton from "@/components/ui/fancy-button";
import {FaArrowLeft} from "react-icons/fa";


export default function JapanesePage() {
    return (
        <>
            <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ,t-8 font-medium h-[40rem] tracking-[-0.3rem]")}>
                <FancyButton text={"Home"} icon={<FaArrowLeft/> } link={"/"}/>
                <div
                    className="flex flex-col justify-center items-center text-primary-foreground text-[5vw] lg:text-[5vw] 2xl:text-[4rem] uppercase"
                >
                    <div className={`text-center`}>
                        <span>
                            The Page is Under Construction please comeback again later 
                        </span>
                    </div>

                    <div className={`text-center my-4`} >
                        {/*<Image className="relative mt-4 w-[30rem]" src={anime_gif} alt=""/>*/}
                        <Image src={anime_gif2} alt={""}></Image>
                    </div>
                </div>
            </div>
        </>
    );
};

//className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ,t-8 leading-[14vw] lg:leading-[10vw] 2xl:leading-9[rem] font-medium h-[40rem] tracking-[-0.3rem]")}> 
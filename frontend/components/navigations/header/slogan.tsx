import {cn} from "@/lib/utils";

export default function Slogan( {className}: SloganProps ) {
    return (
        <>
            <div
                className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ,t-8 leading-[14vw] lg:leading-[10vw] 2xl:leading-9[rem] font-medium h-[40rem] tracking-[-0.3rem]", className)}>
                <div
                    className="flex flex-col justify-center items-center text-primary-foreground text-[14vw] lg:text-[12vw] 2xl:text-[12rem] uppercase">
                    <div>
                        <span>
                            Code
                        </span>
                    </div>
                    <div>
                        <span>
                            Interpreter
                        </span>
                    </div>
                    <div className="relative">
                        <span>
                            Professional
                        </span>
                        <div
                            className="text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[14vw] lg:top-[10vw] 2xl:top-[9vw] left-0 2xl:left-[57rem] w-[30rem] uppercase font-normal"
                        >
                            <span> 
                                Bridging Cultures, One Word at a Time
                            </span>
                            <br/>
                            <span>
                                Precision in Every Phrase
                            </span>
                            <br/>
                            <span>
                                Navigating Languages, Connecting Worlds 
                            </span>
                            <br/>
                            <span>
                                Where Language Meets Understanding
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

interface SloganProps {
    className?: string;
}
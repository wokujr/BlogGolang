import Card from "@/components/ui/card";
import myImage from "@/public/gallery/bocchi-4.jpg"
import Image from "next/image";
import {cn} from "@/lib/utils";

export default function MeCard() {
    return (
        <>
            <Card className="2xl:h-full">
                <div className="w-full h-[400px] sm:h-[500px] overflow-hidden">
                    {/*    Background Image*/}
                    <Image
                        src={myImage}
                        alt={"bocchi"}
                        className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover rounded-2xl"
                    />
                    {/*    Tags about me*/}
                    <div className="absolute top-[65%] space-y-2 ">
                        <Tag text={"Hello There 🙌"} className="rounded-full border border-pink-400" />
                        <Tag text={"I'm SiSum."} className="rounded-full border border-pink-400" />
                        <Tag text={"Self-thought programmer"} className="rounded-full border border-pink-400" />
                        <Tag text={"Japanese, English, Bahasa Interpreter"} className="rounded-full border border-pink-400" />
                    </div>
                </div>
            </Card>
        </>
    );
};

const Tag = ({text, className}: { text: string, className: string }) => {
    return (
        <div className={cn("bg-black/[0.7] w-fit py-1.5 px-3", className)}>
            <p className="text-primary-foreground leading-[110%] font-bold">
                {text}
            </p>
        </div>
    )
} 
import Image from "next/image";
import MyImage from "@/public/assets/images/bocchi-2-modified.png"

interface ProfileProps {

}


export default function Profile() {
    return (
        <>
            <div className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
                {/*Picture*/}
                <div
                    className="relative w-[100px] h-[100px] flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-pink-500">
                    <Image
                        src={MyImage}
                        alt="me"
                        placeholder="empty"
                        className="h-[95px] w-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover"
                    />
                    {/*Online*/}
                    <div className="w-3 h-3 rounded-full bg-green-benzol border-blue-cosmos absolute right-0 bottom-5"></div>
                </div>
                {/*Name*/}
                <div className="text-3xl font-medium"> SiSum </div>
            </div>
        </>
    );
};
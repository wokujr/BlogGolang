import {ReactNode} from "react";
import HeaderCard from "@/components/cards/featured/header-card";
import VideoFeature from "@/components/cards/featured/video-feature";

interface FeaturedCardProps {
    logo?: ReactNode;
    title: string;
    tag?: string;
    video: string;
    active: boolean
}

export default function FeaturedCard({logo, title, tag, video, active}: FeaturedCardProps) {
    return (
        <>
            <div
                className="link w-full h-full bg-secondary-background border border-gray-600 shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2">
                
                {/* HeaderCard*/}
                <HeaderCard 
                    title={title} 
                    tag={tag}
                />
                
                {/*Body*/}
                <div
                    className="relative flex float-none flex-nowrap p-6 w-full items-center justify-between h-[550px] border border-border rounded-3xl">
                    {/*Video Component*/}
                    <VideoFeature 
                        video={video} 
                        active={active}
                    />
                    
                </div>
            </div>
        </>
    );
};
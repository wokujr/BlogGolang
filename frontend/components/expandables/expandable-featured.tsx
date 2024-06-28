import FeaturedCard from "@/components/cards/featured-card";
import {featureData} from "@/data";
import {cn} from "@/lib/utils";
import {useState} from "react";

export default function ExpandableFeatured() {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    
    function handleMouseIndex( index: number ): void {
        setHoverIndex(index);
    }
    function handleMouseLeave( ): void {
        setHoverIndex(null);
    }
    
    return (
        <>
            <div className="w-full grid lg:flex lg:justify-between lg:gap-4">
                {
                    featureData.slice(1).map((featured, i) => (
                        <div 
                            key={i} 
                            className=
                                {cn('relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out',
                                    i===hoverIndex ? "lg:w-[40%}" : "lg:w-[30%]"
                                )}
                            onMouseEnter={() => handleMouseIndex(i)}
                            onMouseLeave={() => handleMouseLeave}
                        >
                            <FeaturedCard
                                title={featured.title}
                                tag={featured.tag}
                                video={featured.video}
                                active={i === hoverIndex}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
};
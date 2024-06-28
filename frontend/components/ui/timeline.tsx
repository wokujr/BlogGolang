import React, {FC, ReactNode} from "react";
import Link from "next/link";
import {FaArrowUpRightFromSquare} from "react-icons/fa6";
import {cn} from "@/lib/utils";

interface TimeLineProps {
    className?: ReactNode;
    children?: ReactNode;
}

export default function Timeline({children, className}: TimeLineProps) {
    return (
        <>
            <div className={cn("flex flex-col gap-y-6", className)}>
                {children}
            </div>
        </>
    );
};

interface TimeLineItemsProps {
    date?: string;
    title?: string;
    subtitle?: string;
    link?: string;
    tag?: string;
    project?: boolean;
    className?: ReactNode;
}


export const TimelineItems: FC<TimeLineItemsProps> = ({
                                                          date,
                                                          title,
                                                          link, tag,
                                                          project,
                                                          subtitle,
                                                          className
                                                      }) => {
    return (
        <>
            <div className={cn("flex flex-nowrap gap-12 min-h justify-start relative", className)}>
                {/*Date*/}
                <div
                    className="h-auto flex-none break-words whitespace-pre"
                    style={{width: `${project ? "0" : ""}`}}
                >
                    <p className="text-secondary-foreground">
                        {date}
                    </p>
                </div>

                {/*Right side*/}
                <div
                    className="flex gap-x-2"
                    style={{transform: `${project ? "translateX(-45px)" : ""}`}}
                >
                    <div className="flex flex-col gap-0.5">
                        {/*Title*/}
                        <div className="text-primary-foreground break-words whitespace-pre">
                            <p className="leading-6 font-medium text-sm"> {title} </p>
                        </div>
                        {/*Subtitle*/}
                        <div className="flex items-center gap-2 w-min">
                            {
                                link ?
                                    (
                                        <Link href={link} target="_blank">
                                            <TimelineBody
                                                link={link}
                                                subtitle={subtitle}
                                                tag={tag}
                                            />
                                        </Link>
                                    )
                                    :
                                    <TimelineBody
                                        subtitle={subtitle}
                                        tag={tag}
                                    />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

//Timeline item body

interface BodyProps {
    subtitle?: string;
    tag?: string;
    link?: string;
}

const TimelineBody: FC<BodyProps> = ({subtitle, tag, link}) => {
    return (
        <div className="text-secondary-foreground flex items-center">
            <p className="text-sm font-normal leading-6 mt-1">
                {subtitle}
            </p>
            {
                link ?
                    <div className="px-1.5 hover:text-pink-500 ">
                        <FaArrowUpRightFromSquare/>
                    </div>
                    :
                    null
            }
            {tag ? (
                    <div className="ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5">
                        <p className="text-[10px] font-normal text-secondary-foreground">
                            {tag}
                        </p>
                    </div>
                )
                :
                null
            }
        </div>
    )
}
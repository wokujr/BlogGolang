"use client";

import {useEffect, useState} from "react";
import moment from "moment-timezone";

interface LiveClocProps {
    timeZone: string;
}

export default function LiveClock({timeZone}: LiveClocProps) {
    const [time, setTime] = useState<string>("");
    useEffect(() => {
        const updateClock = () => {
            const currentTime = moment().tz(timeZone).format("HH:mm")
            setTime(currentTime);
        }
        const intervalId = setInterval(updateClock, 1000);

        //Cleanup interval on component unmount
        return () => clearInterval(intervalId);

    }, [timeZone]);

    return (
        <div className="text-3xl text-secondary-foreground font-semibold">
            {
                time ? (
                        <div className="flex items-center justify-center gap-[0.5vw]">
                            <span> {timeZone.split("/")[1]}</span>
                            <span> {time} </span>
                        </div>
                    )
                    : 
                    (
                        <div>Loading... </div>
                    )
            }
        </div>
    );
};
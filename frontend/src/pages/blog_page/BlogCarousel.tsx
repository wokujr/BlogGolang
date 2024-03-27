import React from "react";
import { Carousel } from "@material-tailwind/react";
import {BiSolidLeftArrow, BiSolidRightArrow} from "react-icons/bi";

type CarouselProps = {
    children: React.ReactElement[];
    transition: {
        duration: number;
    };
    className?: string;
    placeholder?: string;
    autoplay?: boolean;
    loop?: boolean;
    prevArrow?: (props: { handlePrev: () => void }) => React.ReactElement | null;
    nextArrow?: (props: { handleNext: () => void }) => React.ReactElement | null;
};

export default function App() {

    const customPrevArrow = ({ handlePrev }: { handlePrev: () => void }) => (
        <div onClick={handlePrev} className="absolute flex items-center h-[27rem] w-28 top-1/2 left-0 transform -translate-y-1/2 z-10 text-black p-2 hover:cursor-pointer">
            <BiSolidLeftArrow className="mx-auto text-2xl text-black text-opacity-0 "/>
        </div>
    );

    const customNextArrow = ({ handleNext }: { handleNext: () => void }) => (
        <div onClick={handleNext} className="absolute flex items-center h-[27rem] w-28 top-1/2 right-0 transform -translate-y-1/2 z-10 text-black p-2 hover:cursor-pointer">
            <BiSolidRightArrow className="mx-auto text-2xl text-black text-opacity-0 "/>
        </div>
    );

    const carouselProps: CarouselProps = {
        children: [
            <img
                key="image1"
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
            />,
            <img
                key="image2"
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
            />,
            <img
                key="image3"
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
            />,
        ],
        transition: { duration: 2 },
        className: "rounded-xl mx-auto py-4 w-[50%] h-[28rem] relative",
        autoplay: true,
        loop: true,
        placeholder: "",
        prevArrow: customPrevArrow,
        nextArrow: customNextArrow,
    };

    return (
        <main>
            <Carousel {...carouselProps} placeholder=""/>
        </main>
    );
}

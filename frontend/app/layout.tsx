import type {Metadata} from "next";
import {Bricolage_Grotesque, Oswald, Pixelify_Sans} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import GrainEffects from "@/components/visualEffects/grain-effects";
import {Cursor} from "@/components/ui/cursor";
import {ReactNode} from "react";

const mainFont = Bricolage_Grotesque({subsets: ["latin"]});
const oswaldFont = Oswald({subsets: ["latin"], variable: "--font-oswald"});
const pixel = Pixelify_Sans({subsets: ["latin"], variable: "--font-pixel"});

//Metadata
export const metadata: Metadata = {
    title: "SiSum",
    description: "They usually called me CSum",
};


export default function RootLayout({children,}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={
            cn(
                mainFont.className,
                oswaldFont.variable,
                pixel.variable
            )}
        >
        <GrainEffects/>
        <Cursor color={"#ffffff"}/>
        {children}
        </body>
        </html>
    );
}

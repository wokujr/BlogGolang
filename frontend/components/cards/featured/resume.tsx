import Card from "@/components/ui/card";
import Image from "next/image";
import Button from "@/components/ui/button";
import {FaGithub} from "react-icons/fa";
import signature from "@/public/signature.png"
import Social from "@/components/cards/featured/social";

export default function ResumeCard(){
 return (
  <>
   <Card className="md:h-full">
       <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
           Hello! I&apos;m a Japanese Interpreter and Programmer, known in the tech realm as the Language Weaver
           With expertise in bridging communication between cultures and crafting precise code, 
           I navigate both linguistic landscapes and digital domains with ease. 
           Whether it&apos;s translating intricate dialogues or developing seamless software, 
           I excel at connecting people and technology. 
           Ready to embark on new quests and conquer challenges in the world of language and code!
       </p>
       <div className="">
           <Image src={signature} alt="sisum"/>
       </div>
       <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(1005-48px)]">
           <Social />
       </div>
   </Card>
  </>
 );
};


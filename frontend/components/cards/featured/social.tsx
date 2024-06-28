import Button from "@/components/ui/button";
import {FaArtstation, FaGithub, FaYoutube} from "react-icons/fa";

export default function Social(){
 return (
     <>
         <div className="flex items-center flex-wrap gap-5 ">
             {socials.map( (social, index) => (
                 <Button 
                     key={index} 
                     link={social.link}
                     className="border-white border hover:bg-pink-500 hover:text-black"
                 >
                   <span className="w-7 h-7 grid place-items-center">
                       {social.icon}
                   </span>  
                 </Button>
             ))}
         </div>
     </>
 );
};


const socials = [
    {
        icon: <FaGithub className="w-7 h-7"/>,
        link: "https://github.com/wokujr",
        username:"SiSum",
    },
    {
        icon: <FaYoutube className="w-7 h-7"/>,
        link: "https://youtube.com/@kuroyukifm?si=L-6NtdHpIYUAntw5",
        username:"KuroYuki",
    },
    {
        icon:<FaArtstation className="w-7 h-7"/>,
        link: "https://www.artstation.com/sysum",
        username:"sysum",
    }
]
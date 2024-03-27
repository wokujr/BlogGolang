import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {FaSquareGithub} from "react-icons/fa6";

export default function AboutMeIntro() {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className="flex items-center justify-center pt-32">
                <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{type:"tween", duration:0.3}}>
                    <img src="/bocchi.gif" alt="me" width="220" height="192"
                         className="h-24 w-24 rounded-full border-[0.25rem] border-pink-500 object-cover shadow-xl"
                    />
                </motion.div>
            </div>
            <motion.div className="mb-10 mt-4 px-4 text-xl font-medium leading-[1.5] sm:text-2xl"
                      initial={{opacity:0, y:100}}
                      animate={{opacity:1, y:0}}
            >
                <span className="font-bold"> Hello Iam SiSum </span> <br/>
                <span className="font-bold"> Iam NOT fullstack or software engineer, just a dude who like to code and hope for career change someday</span>
            </motion.div>
            <motion.div className={`flex flex-col sm:flex-row items-center justify-center font-medium text-lg px-4 gap-4`}
                        initial={{opacity:0, y:100}}
                        animate={{opacity:1, y:0}}
                        transition={{delay:0.1}}
            >
                <Link to="#contact" className="flex items-center bg-pink-500 py-3 rounded-full px-7 text-black outline-none
                focus:scale-110 hover:scale-110 hover:bg-pink-600 active:scale-105 hover:text-white transition">
                    Contact Me
                </Link>
                <a className={`flex p-2 rounded-full text-black bg-amber-50 text-4xl 
                outline-none
                focus:scale-110 hover:scale-110 hover:bg-pink-600 active:scale-105 hover:text-white transition`}
                   href=""> <FaSquareGithub />
                </a>
            </motion.div>
        </section>
    );
}

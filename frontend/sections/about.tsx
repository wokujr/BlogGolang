import Heading from "@/components/heading/heading";
import Card from "@/components/ui/card";
import MeCard from "@/components/cards/me-card";
import ResumeCard from "@/components/cards/featured/resume";
import BackgroundCard from "@/components/cards/background-card";
import GalleryCard from "@/components/cards/gallery-card";
import ProjectCard from "@/components/cards/project-card";
import EducationCard from "@/components/cards/education-card";
import CertificationCard from "@/components/cards/certification-card";
import StackCard from "@/components/cards/stack-card";

export default function About(){
 return (
  <>
   <div className="pt-24 px-3 lg:px-8" id={`about`}>
       <Heading 
           number={"01"}
           title_1={"About"}
           title_2={"Me"}
       />
       
       <div className="space-y-4 py-8" >
           <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
               
               {/*Me Card */}
               <MeCard />

               {/*Resume Card*/}
               <ResumeCard />
               
               {/*<Card title="Resume">Resume</Card>*/}
               <BackgroundCard />
               
               
               {/*<div className="2xl:hidden">*/}
               {/*    <GalleryCard />*/}
               {/*</div>*/}
               
           </div>
           <div className="space-y-4 md:grid ,d:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
               <div className="space-y-4">
                   <ProjectCard/>
               </div>
               
               <div className="space-y-4">
                   <StackCard/>
               </div>
               
               <div className="space-y-4">
                   <EducationCard/>
                   <CertificationCard/>
               </div>


               {/*<div className="hidden 2xl:flex">*/}
               {/*    <GalleryCard/>*/}
               {/*</div>*/}

           </div>
       </div>
   </div>
  </>
 );
};


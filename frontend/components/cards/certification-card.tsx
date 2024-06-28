import Card from "@/components/ui/card";
import Timeline, {TimelineItems} from "@/components/ui/timeline";

export default function CertificationCard(){
 return (
  <>
   <Card title="Certification">
       <Timeline>
           {certificationData.map( (education, i) => (
               <TimelineItems
                   key={i}
                   date={education.date}
                   title={education.title}
                   subtitle={education.subtitle}
                   className="cursor-pointer"
               />
           ))}
       </Timeline>
   </Card>
  </>
 ); 
};

const certificationData = [
    {
        date: "2018",
        title: "Japanese Language Proficiency Test N4",
        subtitle: "N4",
    },
    {
        date: "2018",
        title: "Japanese Language Proficiency Test N3",
        subtitle: "N3",
    },
    {
        date: "2019",
        title: "Japanese Language Proficiency Test N2",
        subtitle: "N2",
    },
    
]
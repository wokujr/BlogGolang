import Card from "@/components/ui/card";
import Timeline, {TimelineItems} from "@/components/ui/timeline";

export default function EducationCard(){
 return (
  <>
   <Card title="Education">
       <Timeline>
           {educationData.map( (education, i) => (
               <TimelineItems
                   key={i}
                   date={education.date}
                   title={education.title}
                   subtitle={education.subtitle}
                   link={education.link}
               />
           ))}
       </Timeline>
   </Card>
  </>
 );
};

const educationData = [
    {
        date: "2023 - Now",
        title: "Technology Information",
        subtitle: "STEKOM",
        link: "https://stekom.ac.id/"
    },
]
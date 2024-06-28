import Card from "@/components/ui/card";
import {stackData} from "@/data";
import Tooltip from "@/components/ui/tooltip";

export default function StackCard(){
 return (
  <>
   <Card title="Tech Stack">
    <div className="flex flex-col gap-6 mt-2">
     {
      stackData.map( (stack, index) => (
          <div
              key={index}
              className="grid items-center gap-[90px]"
              style={ {gridTemplateColumns: "50px 1fr"} }
          >
          {/*Stack group*/}
           <div className="h-auto flex-none break-words whitespace-pre">
            <p className="text-secondary-foreground">
             {stack.title}
            </p>
           </div>
           
          {/*Tooltip*/}
           <div className="flex gap-4">
            {stack.stack.map( (item) => (
                <Tooltip 
                key={item.id}
                title={item.title}
                image={item.image}
                />
            ))}
           </div>
          </div>
      ))
     }
    </div>
   </Card>
  </>
 );
};
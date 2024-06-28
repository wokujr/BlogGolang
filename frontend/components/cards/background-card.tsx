import Card from "@/components/ui/card";

export default function BackgroundCard(){
 return (
  <>
   <Card className="md:h-full">
       <div>
           <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
               From Indonesia with <span className="text-white underline">no bachelor&apos;s degree, no IT background, nothing</span>,
               <br/>
               I became addicted to <span className="text-white underline">anime, games, and coding </span>
               after being told that <span className="text-white underline">it&apos;s never too late to learn C++</span>.
               <br/>
               I have worked in Japan for over 6 years and have experience as a <span className="text-white underline">Bridge SE </span>,
               <br/>
               bridging communications between clients and developers to ensure everything runs smoothly.
               <br/>
               I found coding to be fun, especially in <span className="text-white underline">C++ and reverse engineering (mostly offline games).</span>
               <br/>
               Reversing games, changing values, and finding the correct addresses is just another level of fun.
               <br/>
               I&apos;am <span className="text-white underline">not</span> a cheater and do not break any DMA rules to ruin
               online games. 
               <br/>
               I don&apos;t want to disturb anyone&apos;s joy.
               <br/>
               I simply enjoy solving these kinds of puzzles for fun, that&apos;s all.
               <br/>
               To this day, I continue to hone my skills, aiming to reach higher levels and gather more experience. I
               never stop learning, striving to acquire ultimate skills that are useful for my life.
           </p>

       </div>
   </Card>
  </>
 );
};
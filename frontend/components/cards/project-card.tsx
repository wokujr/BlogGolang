import Card from "@/components/ui/card";
import Timeline, {TimelineItems} from "@/components/ui/timeline";

export default function ProjectCard() {
    return (
        <>
            <Card title="Project">
                <Timeline>
                    <TimelineItems
                        title="River rendering project"
                        subtitle="UE5"
                        link="/projects"
                    />
                    <TimelineItems
                        title="Kanojo Bullet Bullet Points"
                        subtitle="UE5"
                        link="/projects"
                    />
                    <TimelineItems
                        title="Japanese Lesson "
                        subtitle={`Japanese`}
                        link="/japanese"
                    />
                </Timeline>
            </Card>
        </>
    );
};
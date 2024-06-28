interface HeaderCardProps {
    title: string;
    tag?: string;
}

export default function HeaderCard({title, tag}: HeaderCardProps) {
    return (
        <>
            <div
                className="flex flex-none flex-nowrap relative p-6 w-full items-center justify-between h-16 bg-secondary-background border border-pink-500 rounded-3xl">
                <div className="">
                    <p className="text-lg font-medium leading-3 text-primary-foreground">
                        {title}
                    </p>
                </div>
                <div>
                    <p className="text-lg font-medium leading-3 font-pixel text-secondary-foreground">
                        {tag}
                    </p>
                </div>
            </div>
        </>
    );
};
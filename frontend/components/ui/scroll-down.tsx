export default function ScrollDown() {
    const handleScroll = () => {
        window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: "smooth",
        })
    }
    
    return (
        <div 
            className="w-[8rem] h-[8rem] grid place-items-center border-4 border-pink-500 rounded-full"
            onClick={handleScroll}
        >
            <div className="grid place-items-center w-[2.9rem] h-[3.6rem]">
                <svg
                    className="rounded-full p-2"
                    width="100%"
                    height="100%"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        transform: "translate3d(1.13422e-12px, -2.19519e-13px, 0px)",
                    }}
                >
                    <path
                        d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    );
}

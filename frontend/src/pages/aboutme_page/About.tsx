export default function About() {
    return (
        <section className="mb-28 max-2-[45rem] leading-8 sm:mb-40">
            <h2 className="text-center text-3xl"> About me</h2>
            <p className="px-4 sm:px-24 md:px-48 lg:px-96">
                <div className="flex items-center container mx-auto">
                        As an individual who initially didn't have a background in programming, I embarked on a journey into
                        the realm of software
                        development when a close friend imparted a timeless piece of wisdom: "It's never too late to learn."
                        With this encouragement
                        echoing in my mind, I delved into the world of C++, a language renowned for its versatility and
                        power.
                        <br/>
                        From the moment I typed my first lines of code, I was captivated by the elegant logic and limitless
                        possibilities that programming offered. As I honed my skills, I found myself drawn particularly to
                        the
                        intricacies of C++, mastering its syntax and exploring its depths to unlock its full potential.
                        <br/>
                        While my journey began with C++, it wasn't long before I discovered my passion for game development,
                        particularly within the dynamic environment of the Unreal Engine.
                        Guided by my enthusiasm and fueled by a desire to create immersive experiences,
                        I eagerly immersed myself in the intricacies of game design and development.
                </div>
                {/*<br/>*/}
                {/*<span>*/}
                {/*    Driven by a relentless passion for innovation and a steadfast commitment to continuous learning,*/}
                {/*    I am eager to contribute my skills and expertise to projects that push the boundaries of what is possible in the realm of game development and beyond.*/}
                {/*</span>*/}
                <div className="px-96 mt-8">
                    <h2 className="text-center text-3xl mb-4">Projects</h2>
                    <p>
                        <span>
                            <ul className="text-center flex items-center justify-center">
                                <li className="px-4 bg-cyan-300 rounded-full mx-2 ">
                                    <a className="text-black"
                                       href="https://github.com/wokujr?tab=repositories"> Github </a>
                                </li>
                                <li className="px-4 bg-cyan-300 rounded-full mx-2 focus:scale-110 hover:scale-110 hover:bg-pink-600 active:scale-105 hover:text-white transition">
                                    <a className="text-black" href="https://www.artstation.com/sysum"> Game </a>
                                </li>
                            </ul>
                        </span>
                    </p>
                </div>
            </p>
        </section>
    );
}

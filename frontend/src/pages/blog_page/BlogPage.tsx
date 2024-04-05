import {useEffect, useState} from "react";
import axios from "axios";
import {Card, CardBody, CardFooter, CardHeader} from "@material-tailwind/react";
import {FaCalendar} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";

type Category = {
    id: number;
    category: string;
    blogs: null;
}

type BlogPost = {
    id: number;
    title: string;
    post: string;
    image: string;
    create_at: string;
    update_at: string;
    deleted_at: null;
    categories: Category[];
}

type BlogResponse = {
    blogData: BlogPost[];
    meta: {
        last_page: number;
        page: number;
        total_post: number;
    }
}

export default function BlogPage() {
    const [blogData, setBlogData] = useState<BlogPost[]>([]);
    //const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const handleCardClick = (postId: number) => { navigate(`/blog/${postId}`); };

    useEffect(() => {
        axios.get<BlogResponse>("blog/posts")
            .then((response) => {
                // Access the 'blogData' property of the response
                return response.data.blogData;
            })
            .then((resData) => {
                setBlogData(resData);
            });
    }, []);

    // function toggleExpanded() {
    //     setExpanded(!expanded);
    // }

    return (
        <main>
            <div className="flex mt-8 mx-auto">
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-8 md:px-10 sm:px-5">
                    {blogData.map((post: BlogPost) => {
                        const date = new Date(post.create_at);
                        const formattedDate = date.toLocaleDateString('en-US', {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        });
                        return (
                            <Card
                                key={post.id}
                                className="w-full mb-4 mt-8"
                                placeholder={undefined}
                                onClick={() => handleCardClick(post.id)}
                            >
                                <CardHeader floated={false} className="" placeholder={undefined}>
                                    <img src={`http://localhost:8000${post.image}`} alt="post_image"
                                         className="h-[15rem] object-cover w-full"/>
                                </CardHeader>
                                <CardBody className="text-center" placeholder={undefined}>
                                    <div className="mb-2 text-2xl text-black">
                                        {post.title}
                                    </div>
                                    <div className="text-lg text-left">
                                        {post.post}
                                    </div>
                                </CardBody>
                                <CardFooter className="mt-8" placeholder={undefined}>
                                    <div >
                                        <p className="flex items-center">
                                            <FaCalendar className="mx-2" /> {formattedDate}
                                        </p>
                                    </div>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}


// <div className="border-white border-opacity-20 border mt-8 mx-[25rem] rounded-xl">
//     <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-4 my-8 max-w-2-[50%] px-20 md:px-10 sm:px-5">
//         {blogData.map((post: BlogPost) => {
//             // const date = new Date(post.create_at); q
//             // const formattedDate = date.toLocaleDateString('en-US', {
//             //     year: "numeric",
//             //     month: "long",
//             //     day: "numeric"
//             // });
//             return (
//                 <div className="relative flex flex-col mx-auto bg-" key={post.id}>
//                     <img
//                         className="rounded-xl lg:h-[10rem] lg:w-[15rem] object-cover object-center md:h-[8rem] md:w-auto sm:h-[4.5rem] sm:w-auto"
//                         src={`http://localhost:8000${post.image}`}
//                         alt={post.title}/>
//                     <Typography className="relative z-10 lg:text-xl md:text-sm sm:text-sm flex justify-center "
//                                 placeholder="">{post.title}</Typography>
//                     <Typography className="relative mx-1" placeholder="">{post.post}</Typography>
//                 </div>
//             );
//         })}
//         <div className="absolute right-[.7rem] ">
//             <div className="sticky">
//                 <div className="flex flex-col">
//                     <button
//                         className="px-3 py-1 rounded-full hover:bg-gray-300 hover:text-black transition duration-300 ease-in-out focus:outline-none"
//                         onClick={toggleExpanded}
//                     >
//                         {expanded ? "Categories" : "C"}
//                     </button>
//                     {expanded && (
//                         <div>
//                             {blogData.map((post: BlogPost) => (
//                                 <div className="flex flex-col space-y-2" key={post.id}>
//                                     {post.categories.map((category, index) => (
//                                         <button
//                                             key={index}
//                                             className="px-2 py-1 my-0.5 rounded-md hover:bg-gray-300 hover:text-black transition duration-300 ease-in-out focus:outline-none"
//                                         >
//                                             {category.category}
//                                         </button>
//                                     ))}
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
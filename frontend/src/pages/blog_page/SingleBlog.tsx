 import {useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";

export default function SingleBlog() {

    const {postId} = useParams<{postId: string}>();
    const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        axios.get<BlogResponse>(`/blog/post/${postId}`)
            .then((response) => {
                setBlogPost(response.data.blogData);
            })
    }, [postId]);

    if (!blogPost) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <div className="container mx-auto py-8">
                <h1 className="flex justify-center text-3xl font-bold mb-8">{blogPost.title}</h1>
                <img src={`http://localhost:8000${blogPost.image}`} alt="post_image"
                     className="h-[30rem] object-cover w-full mb-4"/>
                <div className="text-lg">{blogPost.post}</div>
            </div>
        </main>
    );
}

type BlogResponse = {
    blogData: BlogPost;
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
};

type Category = {
    id: number;
    category: string;
    blogs: null;
}
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, IconButton, List, ListItem, ListItemSuffix} from "@material-tailwind/react";
import {FaEdit, FaEye, FaTrash} from "react-icons/fa";

export default function BlogList() {

    const [blogList, setBlogList] = useState<BlogList[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [postPerPage] = useState<number>(8);

    useEffect(() => {
        axios.get<BlogListResponse>("blog/posts")
            fetchBlogPosts();
    }, [currentPage]);

    async function fetchBlogPosts () {
        axios.get<BlogListResponse>("blog/posts", {
            params:{
                page: currentPage,
                perPage: postPerPage
            }
        })
            .then((response)=> {
                const {blogData, meta} = response.data;
                setBlogList(blogData);
                setTotalPages(meta.last_page);
            })
            .catch((error) => {
                console.log("Error fetching blog", error);
            })
    }

    function handleNextPage () {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    }

    function handlePrevPage() {
        setCurrentPage( (prevPage) => prevPage - 1);
    }

    async function handleDeletePost(postId: number) {
        axios.delete(`admin/blog/post/${postId}`)
            .then( () => {
                fetchBlogPosts();
            })
            .catch( (err) => {
                console.error("Error deleting post", err)
            } )
    }

    return (
        <div className="flex flex-col mx-auto mt-8 w-[80rem]">
            {blogList.map((post: BlogList) => {
                return (
                    <div key={post.id} className="my-0.5">
                        <List placeholder={undefined} className={`p-0`}>
                            <ListItem ripple={false} className="text-center py-0 pr-1 pl-4 hover:bg-cyan-300" placeholder={undefined}>
                                <h2 className="text-lg font-semibold text-white">{post.title}</h2>
                                <ListItemSuffix className={`flex`} placeholder={undefined}>
                                    <IconButton placeholder={undefined} variant="text" color="blue-gray" className="text-lg text-white hover:bg-black" onClick={() => handleDeletePost(post.id)}>
                                        <FaTrash />
                                    </IconButton>
                                    <IconButton placeholder={undefined} variant="text" color="blue-gray" className="text-lg text-white hover:bg-black" onClick={() => handleEditPost(post.id)}>
                                        <FaEdit />
                                    </IconButton>
                                    <IconButton placeholder={undefined} variant="text" color="blue-gray" className="text-lg text-white hover:bg-black" onClick={() => handleViewPost(post.id)}>
                                        <FaEye />
                                    </IconButton>
                                </ListItemSuffix>
                            </ListItem>
                        </List>
                    </div>
                );
            })}
            <div className={`flex justify-center mt-4`}>
                <Button onClick={handlePrevPage} disabled={currentPage === 1} placeholder={``}> Prev Page </Button>
                <Button onClick={handleNextPage} disabled={currentPage === totalPages} placeholder={``}> Next Page</Button>
            </div>
        </div>
    );
}

type BlogList = {
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

type BlogListResponse = {
    blogData: BlogList[];
    meta: {
        last_page: number;
        page: number;
        total_post: number;
    }
}
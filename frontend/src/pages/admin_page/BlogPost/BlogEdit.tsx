import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function BlogEdit() {
    const { postId } = useParams<{ postId: string }>();
    const [blogEdit, setBlogEdit] = useState<BlogEdit | null>(null);
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                const response = await axios.get<BlogResponse>(`/blog/post/${postId}`);
                const blogData: BlogEdit = response.data.blogData; // Assuming you only get one blog post
                setBlogEdit(blogData);
                setTitle(blogData.title);
                setPost(blogData.post);
                setSelectedCategory(blogData.categories[0].category); // Assuming a blog post can have only one category
                // Fetch categories if needed
            } catch (error) {
                console.error('Error fetching blog post:', error);
            }
        };

        fetchBlogPost();
    }, [postId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('post', post);
            if (image) formData.append('image', image);
            formData.append('category', selectedCategory);

            const response = await axios.put(`/admin/blog/update/${postId}`, formData);
            console.log('Blog post updated successfully:', response.data);
            // Redirect to the updated blog post or to the blog post list page
        } catch (error) {
            console.error('Error updating blog post:', error);
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedImage = e.target.files[0];
            setImage(selectedImage);
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(selectedImage);
        }
    };

    return (
        <div className="mx-auto mt-8 p-6 bg-white rounded-md shadow-md xl:w-[90rem]">
            <h1 className="text-2xl font-bold mb-4">Edit Blog Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title || (blogEdit && blogEdit.title) || ''}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="post" className="block text-gray-700 font-semibold mb-1">
                        Post
                    </label>
                    <ReactQuill
                        value={post || (blogEdit && blogEdit.post) || ''}
                        onChange={setPost}
                        modules={{
                            toolbar: [
                                [{'header': '1'}, {'header': '2'}, {'font': []}],
                                [{size: []}],
                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                [{'list': 'ordered'}, {'list': 'bullet'},
                                    {'indent': '-1'}, {'indent': '+1'}],
                                ['link', 'image', 'video'],
                                ['clean']
                            ],
                        }}
                        formats={[
                            'header', 'font', 'size',
                            'bold', 'italic', 'underline', 'strike', 'blockquote',
                            'list', 'bullet', 'indent',
                            'link', 'image', 'video'
                        ]}
                        className="w-full border border-gray-300 rounded-md focus:border-blue-500 h-max text-black"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
                        Image Upload
                    </label>
                    <input
                        type="file"
                        id="image"
                        onChange={handleImageChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="Image Preview"
                            className="mt-2 w-full h-auto border border-gray-300 rounded-md"
                        />
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="category_ids" className="block text-gray-700 font-semibold mb-2">
                        Select Category
                    </label>
                    <select
                        id="category_ids"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select...</option>
                        {/*{categories.map((category, index) => (*/}
                        {/*    <option key={index} value={category}>*/}
                        {/*        {category}*/}
                        {/*    </option>*/}
                        {/*))}*/}
                    </select>
                </div>
                <button
                    type="submit"
                    className="w- bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Update Blog
                </button>
            </form>
        </div>
    );
}

type BlogResponse = {
    blogData: BlogEdit;
}

type BlogEdit = {
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
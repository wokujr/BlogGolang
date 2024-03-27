import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function BlogPost() {
    // State variables for form inputs
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/blog/posts'); // Replace 'admin/blog/all' with your actual API endpoint
                const blogData = response.data.blogData;
                const allCategories = blogData.reduce((acc: any[], blog: { categories: any[]; }) => {
                    blog.categories.forEach(category => {
                        if (!acc.includes(category.category)) {
                            acc.push(category.category);
                        }
                    });
                    return acc;
                }, []);
                setCategories(allCategories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('post', post);
            formData.append('image', image!);
            formData.append('category', selectedCategory);

            const response = await axios.post('admin/blog/create', formData);
            console.log('Blog posted successfully:', response.data);

            // Reset form inputs after successful submission
            setTitle('');
            setPost('');
            setImage(null);
            setImagePreview(null);
            setSelectedCategory('');
        } catch (error) {
            console.error('Error posting blog:', error);
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
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4">Post a Blog</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="post" className="block text-gray-700 font-semibold mb-1">
                        Post
                    </label>
                    <ReactQuill
                        value={post}
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
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Post Blog
                </button>
            </form>
        </div>
    );
}

import { SyntheticEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    async function submit(e: SyntheticEvent) {
        e.preventDefault();

        try {
            await axios.post('/admin/login', {
                email,
                password
            });

            setRedirect(true);

        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    if (redirect) {
        // Redirect to the desired page after successful login
        navigate("/admin");
        return null; // Return null since we're handling redirection outside JSX
    }

    return (
        <main>
            <div className="min-h-screen bg-gray-900 flex flex-col justify-center">
                <div className="max-w-md w-full mx-auto">
                    <div className="text-center font-medium text-xl"> Something</div>
                    <div className="text-3xl font-bold text-gray-200 mt-2 text-center">Another text</div>
                </div>
                <div className="max-w-md w-full mx-auto mt-4 bg-gray-700 p-8 border border-white rounded">
                    <form className="space-y-6" onSubmit={submit}>
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-white block"> Email </label>
                            <input type="text" className="w-full p-2 border border-gray-200 rounded mt-1" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-white block"> Password </label>
                            <input type="password" className="w-full p-2 border border-gray-200 rounded mt-1" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input type="checkbox" className="h-4 w-4 text-blue-500 rounded" />
                                <label htmlFor="" className="ml-2 text-sm text-white"> Remember me </label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="button w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

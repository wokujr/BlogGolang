import {useEffect, useState} from "react";
import axios from "axios";

export default function UserDashboard() {

    const [currentDay, setCurrentDay] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [userData, setUserData] = useState<User>();

    useEffect(() => {
        //Get Current Date
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = {day: 'numeric', month: 'long', year: 'numeric'};
        setCurrentDate(date.toLocaleDateString('ja-JP', options));

        //Get Current day
        setCurrentDay(date.toLocaleDateString('ja-JP', {weekday: 'long'}));

        axios.get("admin/user")
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => console.error("Error fetching data = ", error));

    }, [])

    return (
        <main>
            <div className="flex max-w-md mx-auto mt-4 text-2xl text-white flex-row">
                <div className="flex-col mx-2">
                    <div className="flex-row">
                        <div className="flex-col mb-2">
                            {userData ? (
                                <div key={userData.id}>
                                    <p>User Name: {userData.first_name}</p>
                                </div>
                            ) : 'Loading...'}
                        </div>
                        <div className="flex-col mb-2">
                            {currentDay}
                        </div>
                        <div className="flex-col mb-2 text-xl">
                            {currentDate}
                        </div>
                    </div>
                </div>
                <div className="flex-col ml-auto box-border border-gray-200 h-50 w-50">
                    <img className="w-52 h-52" src="/mashu.png" alt="Mashu"/>
                </div>
            </div>
        </main>
    )
}


interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

import {useEffect, useState} from "react";
import axios from "axios";

export default function UserPage() {

    const [currentDay, setCurrentDay] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [weather, setWeather] = useState('');
    const [temperature, setTemperature] = useState('');

    useEffect(() => {
        //Get Current Date
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = {day: 'numeric', month: 'long', year: 'numeric'};
        setCurrentDate(date.toLocaleDateString('ja-JP', options));

        //Get Current day
        setCurrentDay(date.toLocaleDateString('ja-JP', {weekday: 'long'}));

        //Fetch data from openwheater
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=fukuoka&appid=9b4b401ebe8c9a87967b2522f697767c&units=metric&lang=ja`)
            .then(response => {
                const weatherDescription = response.data.weather[0].description;
                const temperatureData = response.data.main.temp
                setWeather(weatherDescription)
                setTemperature(temperatureData);
            })
            .catch(error => {
                console.error('Error fetching weather data =', error)
            })
    })

    return (
        <main>
            <div className="flex max-w-md mx-auto mt-4 text-2xl text-white flex-row">
                <div className="flex-col mx-2">
                    <div className="flex-row">
                        <div className="flex-col mb-2">
                            Admin
                        </div>
                        <div className="flex-col mb-2">
                            {currentDay}
                        </div>
                        <div className="flex-col mb-2 text-xl">
                            {currentDate}
                        </div>
                        <div className="flex-col mb-2 text-xl">
                            {weather}
                        </div>
                        <div className="flex-col mb-2 text-xl">
                            {temperature} Celsius
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

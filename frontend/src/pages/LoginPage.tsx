
export default function LoginPage() {
    return (
        <main>
            <div className="min-h-screen bg-gray-900 flex flex-col justify-center">
                <div className="max-w-md w-full mx-auto">
                    <div className="text-center font-medium text-xl"> Something</div>
                    <div className="text-3xl font-bold text-gray-200 mt-2 text-center">Another text</div>
                </div>
                <div className="max-w-md w-full mx-auto mt-4 bg-gray-600 p-8 border border-white rounded">
                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-white block"> Email </label>
                            <input type="text" className="w-full p-2 border border-gray-200 rounded mt-1"/>
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-white block"> Password </label>
                            <input type="password" className="w-full p-2 border border-gray-200 rounded mt-1"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input type="checkbox" className="h-4 w-4 text-blue-500 rounded"/>
                                <label htmlFor="" className="ml-2 text-sm text-white"> Remeber me </label>
                            </div>
                        </div>
                        <div>
                            <div className="button w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"> Submit </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

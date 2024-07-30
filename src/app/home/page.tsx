const Home: React.FC = () => {
    return (
        <section className='h-full w-full flex flex-col justify-evenly items-center'>
            <div className="flex flex-col">
                <button className="bg-emerald-400 mt-8 px-10 py-3 rounded-md"><h1>학생 정보</h1></button>
                <button className="bg-emerald-400 mt-8 px-10 py-3 rounded-md"><h1>모티 정보</h1></button>
                <button className="bg-emerald-400 mt-8 px-10 py-3 rounded-md"><h1>미션 인증</h1></button>
            </div>
            <div>
                <button className="bg-gray-500 mt-5 px-5 py-2 rounded-md">Log out</button>
            </div>
        </section>
    )
}

export default Home
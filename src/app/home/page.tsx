'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

const Home: React.FC = () => {

    const router = useRouter()

    const logout = () => {
        router.push('/')
    }
    const moti = () => {
        router.push('/moti')
    }
    return (
        <section className='h-full w-full flex flex-col justify-evenly items-center'>
            <div className="flex flex-col">
                <Link href='/student'><button className="bg-emerald-400 mt-8 px-10 py-3 rounded-md"><h1>학생 정보</h1></button></Link>
                <Link href='/moti_list'><button className="bg-emerald-400 mt-8 px-10 py-3 rounded-md"><h1>모티 정보</h1></button></Link>
                <Link href='/mission'><button className="bg-emerald-400 mt-8 px-10 py-3 rounded-md"><h1>미션 인증</h1></button></Link>
            </div>
            <div>
                <button className="bg-gray-500 mt-5 px-5 py-2 rounded-md" onClick={logout}>Log out</button>
            </div>
        </section>
    )
}

export default Home
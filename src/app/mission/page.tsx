'use client'

import { useRouter, useSearchParams  } from "next/navigation"

const Mission: React.FC = () => {
    let moti = ['마철두', '010-8649-9856', 'complete']
    const router = useRouter()
    const searchParams = useSearchParams();
    const student_pk = searchParams.get('student_pk');

    const logout = () => {
        router.push('/')
    }
    return (
        <div>
            <div className="flex mt-7 justify-between items-center mx-7">
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>이름</h1>
                <h1 className="" style={{ fontSize: '12px' , fontWeight: '600' }}>{student_pk}</h1>
            </div>
            <div className="flex mx-7 mt-6 pb-6 items-center justify-between" style={{ borderBottom: '1px solid #d1d5db' }}>
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>이름</h1>
                <h1 className="" style={{ fontSize: '12px' , fontWeight: '600' }}>{student_pk}</h1>
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>연락처</h1>
                <h1 className="" style={{ fontSize: '12px', fontWeight: '600' }}>{moti[1]}</h1>
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>업무 상태</h1>
                <div className={moti[2]}></div>
            </div>
        </div>
    )
}

export default Mission
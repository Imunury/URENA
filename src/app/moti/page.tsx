'use client'


import { Suspense } from 'react';
import { useRouter, useSearchParams  } from "next/navigation";
import Modal from 'react-modal';
import ModalStudentAdd from './components/ModalStudentAdd';
import MotiList from './components/MotiList';
import StudentList from './components/StudentList';
    
const Moti: React.FC = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    if (!searchParams) {return null;}
    const moti_pk = searchParams.get('moti_pk');
    let moti = ['마철두', '010-8649-9856', 'complete']

    const moti_list = () => {
        router.push(`/moti`)
      }

    if (moti_pk === null) {return (
        <div>
            <MotiList/>
        </div>
    )}
    
    else {return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex mt-7 justify-between items-center mx-7">
                <h1 className="text-2xl font-bold" style={{ fontSize: '16px' , fontWeight: '600'}}>
                모티 정보
                </h1>
                <button className="text-gray-400 font-bold" style={{ fontSize: '12px' , fontWeight: '600'}}>
                수정
                </button>
            </div>
            <div className="flex mx-7 mt-6 pb-6 items-center justify-between" style={{ borderBottom: '1px solid #d1d5db' }}>
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>이름</h1>

                <h1 className="" style={{ fontSize: '12px' , fontWeight: '600' }}>{moti_pk}</h1>

                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>연락처</h1>
                <h1 className="" style={{ fontSize: '12px', fontWeight: '600' }}>{moti[1]}</h1>
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>업무 상태</h1>
                <div className={moti[2]}></div>
            </div>
            <div>
                <StudentList/>
            </div>
            <div className='flex' style={{justifyContent:'center'}}>
                <button className='m-3 px-3 py-1' style={{ borderRadius:'5px', backgroundColor:'#00C8A2', color:'white', fontSize:'12px', fontWeight:'800'}}>확인</button>
                <button className='m-3 px-3 py-1' style={{ borderRadius:'5px', backgroundColor:'#D9D9D9', color:'white', fontSize:'12px', fontWeight:'800'}} onClick={moti_list}>취소</button>
            </div>
        </Suspense>
    )}
}

export default Moti
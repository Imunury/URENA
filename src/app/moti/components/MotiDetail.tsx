'use client'

import useGetApi from '../../components/useGetApi';
import StudentList from '../../student/components/StudentList';
import type { MotiData, StudentData } from '../../index';

interface MotiDetailProps {
    moti_pk: string;
}

const MotiDetail: React.FC<MotiDetailProps> = ({ moti_pk }) => {
    const { data: moti} = useGetApi<MotiData>(`/api/moti_list?moti_pk=${moti_pk}`);
    const { data: students } = useGetApi<StudentData[]>(`/api/student_list?moti_pk=${moti_pk}`);

    if (!moti || !students || students.length === 0) {
        return <div>No data</div>;
    }

    return (
        <>
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

                <h1 className="" style={{ fontSize: '12px' , fontWeight: '600' }}>{moti?.name}</h1>

                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>연락처</h1>
                <h1 className="" style={{ fontSize: '12px', fontWeight: '600' }}>{moti?.phone}</h1>
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>업무 상태</h1>
                <div className={moti.work_state}></div>
            </div>
            <h1 className="mx-7 pb-4" style={{ color:"#34d399", fontSize: '10px' , textAlign:'right', fontWeight: '600', marginTop: '30px', marginBottom:'10px', borderBottom: '1px solid #d1d5db'}}>담당 학생 통계</h1>
            <div>
                {students ? <StudentList data={students} /> : <p>Loading...</p>}
            </div>
        </>
    )
}

export default MotiDetail
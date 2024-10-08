'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import type { StudentData } from '../../index';
import useGetApi from '../../components/useGetApi';

const Manage: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const student_pk = searchParams ? searchParams.get('student_pk') : null;

    const { data: studentData, error } = useGetApi<StudentData[]>(
        student_pk ? `/api/student_list?student_pk=${student_pk}` : ''
    );

    const student = studentData ? studentData[0] : null;

    if (!student_pk || !student) {
        return <div>No Data</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }


    let memo = ['메모1입니다', '메모2입니다'];
    let mission = [['미션1입니다', '월, 수, 금'], ['미션2입니다', '매일'], ['미션3입니다', '주말']];

    const stats = () => {
        router.push(`/manage/stats?student_pk=${student_pk}`);
    };

    return (
        <div>
            <div className="flex mt-7 justify-between items-center mx-7">
                <h1 className="text-2xl font-bold" style={{ fontSize: '16px', fontWeight: '600' }}>
                    학생 정보
                </h1>
                <h1 className="text-gray-400 font-bold" style={{ fontSize: '14px', fontWeight: '600' }}>
                    수정
                </h1>
            </div>
            <div className="flex px-7 mt-9 items-center justify-between">
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>이름</h1>
                <h1 className="" style={{ fontSize: '12px', fontWeight: '600' }}>{student?.name}</h1>
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>연락처</h1>
                <h1 className="" style={{ fontSize: '12px', fontWeight: '600' }}>{student?.phone}</h1>
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>부모님</h1>
                <h1 className="" style={{ fontSize: '12px', fontWeight: '600' }}>{student?.parent}</h1>
            </div>
            <div className="flex mx-7 mt-6 pb-6 items-center justify-between" style={{ borderBottom: '1px solid #d1d5db' }}>
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>학교</h1>
                <h1 className="" style={{ fontSize: '12px', fontWeight: '600' }}>{student?.school}</h1>
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>학년</h1>
                <h1 className="" style={{ fontSize: '12px', fontWeight: '600' }}>{student?.grade}</h1>
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>진행상황</h1>
                <div className={student?.service_state}></div>
            </div>
            <div className="flex mt-7 justify-between items-center mx-7">
                <h1 className="text-2xl font-bold" style={{ fontSize: '16px', fontWeight: '600' }}>
                    메모
                </h1>
                <h1 className="text-gray-400 font-bold" style={{ fontSize: '14px', fontWeight: '600' }}>
                    수정
                </h1>
            </div>
            <div className="flex px-7 mt-9 items-center">
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>담당</h1>
                <h1 className="ml-3" style={{ fontSize: '14px', fontWeight: '600' }}>{student?.moti_name}</h1>
            </div>
            <div className="flex mx-7 mt-6 pb-3">
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>메모</h1>
                <div>
                    {memo.map((memo, index) => (
                        <h1 className="ml-3" key={index} style={{ fontSize: '12px', fontWeight: '600' }}>{memo}</h1>
                    ))}
                </div>
            </div>
            <h1 className="text-gray-400 mx-7 pb-4" style={{ fontSize: '10px', textAlign: 'right', fontWeight: '600' }}>더보기</h1>
            <div className="flex mt-7 mb-9 justify-between items-center mx-7">
                <h1 className="text-2xl font-bold" style={{ fontSize: '16px', fontWeight: '600' }}>
                    미션 정보
                </h1>
                <h1 className="text-gray-400 font-bold" style={{ fontSize: '14px', fontWeight: '600' }}>
                    수정
                </h1>
            </div>
            {mission.map((mission, index) => (
                <div key={index} className="flex px-7 mb-2 items-center">
                    <h1 className="text-emerald" style={{ fontSize: '10px', color: '#34d399' }}>미션{index + 1}</h1>
                    <h1 className="ml-3" style={{ fontSize: '10px', fontWeight: '600' }}>({mission[1]}) {mission[0]}</h1>
                </div>
            ))}
            <div className="flex justify-center mx-7 pt-5 mt-5" style={{ borderTop: '1px solid #d1d5db' }}>
                <button className="bg-gray-400 text-black px-4 py-2 rounded-md" style={{ fontSize: '16px', fontWeight: '600' }} onClick={stats}>달성률 보기</button>
            </div>
            <div className="flex justify-center mt-5">
                <button className="bg-emerald-400 text-white px-3 py-1 rounded-md" style={{ fontSize: '12px', fontWeight: '400' }}>확인</button>
            </div>
        </div>
    );
};

export default Manage;

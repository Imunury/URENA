'use client'

import { useState, } from "react";
import { useRouter } from "next/navigation";
import type { MissionData } from '../../index';
import useGetApi from '../../components/useGetApi';

const StudentList: React.FC = () => {
    const { data: missions, error } = useGetApi<MissionData[]>('/api/mission_list');
    const router = useRouter();
    const [isEditMode, setIsEditMode] = useState(false);

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const mission_detail = (studentPk: string) => {
        router.push(`/mission?student_pk=${studentPk}`);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!missions || missions.length === 0) {
        return <div>No data</div>;
    }
    

    // 데이터 처리: 학생별 미션 개수와 체크 결과 비율 계산
    const studentStats = missions.reduce((acc, mission) => {
        const { student_pk, student_name, mission_pk, check_stats } = mission;

        if (!acc[student_pk]) {
            acc[student_pk] = {
                name: student_name,
                missionSet: new Set<number>(), // Set을 사용하여 중복된 mission_pk를 방지
                checkCount: 0,
                totalChecks: 0,
            };
        }

        acc[student_pk].missionSet.add(mission_pk); // Set에 mission_pk 추가
        if (check_stats === '1') {
            acc[student_pk].checkCount++;
        }
        acc[student_pk].totalChecks++;
        return acc;
    }, {} as { [key: string]: { name: string, missionSet: Set<number>, checkCount: number, totalChecks: number } });

    const studentList = Object.keys(studentStats).map(studentPk => {
        const { name, missionSet, checkCount, totalChecks } = studentStats[studentPk];
        return {
            student_pk: studentPk,
            name,
            missionCount: missionSet.size,
            checkRatio: totalChecks > 0 ? (checkCount / totalChecks) * 100 : 0,
        };
    });
    

    return (
        <div>
            <div className="flex justify-between items-center mx-7 pb-3" style={{ borderBottom: '1px solid #d1d5db' }}>
                <h1 className="font-bold" style={{ fontSize: '12px', fontWeight: '600' }}>
                    학생 미션 리스트
                </h1>
                {!isEditMode ? <button style={{ color: '#AFAFAF', fontSize: '10px', fontWeight: '600' }} onClick={toggleEditMode}>
                    수정
                </button> : <button style={{ color: '#00C8A2', fontSize: '10px', fontWeight: '600' }} onClick={toggleEditMode}>
                    완료
                </button>}
            </div>
            <div className="flex mx-7 mt-3" style={{ textAlign: 'center' }}>
                {isEditMode && <h1 style={{ flex: 1 }} />}
                <h1 style={{ flex: 3 }} />
                <h1 style={{ flex: 2, color: "#AFAFAF", fontSize: '8px', fontWeight: '400' }}>이름</h1>
                <h1 style={{ flex: 4, color: "#AFAFAF", fontSize: '8px', fontWeight: '400' }}>현재 미션 개수</h1>
                <h1 style={{ flex: 4, color: "#AFAFAF", fontSize: '8px', fontWeight: '400' }}>최근 인증률</h1>
            </div>
            {
                studentList.map((student, index) => (
                    <div key={index} className="flex mx-7 mb-2 mt-2 pb-2 items-center" style={{ textAlign: 'center', borderBottom: '1px solid #d1d5db' }}>
                        {isEditMode && <button style={{ flex: 1, color: '#00C8A2', fontSize: '8px' }}>편집</button>}
                        <h1 style={{ flex: 3, color: "black", fontSize: '10px', fontWeight: '400' }}>{index + 1}</h1>
                        <button onClick={() => mission_detail(student.student_pk)} style={{
                            color: "white", fontSize: '10px', fontWeight: '600', flex: 2, borderRadius: '5px', backgroundColor: '#00C8A2', padding: '3px',
                        }}>{student.name}</button>
                        <h1 style={{ flex: 4, color: "black", fontSize: '10px', fontWeight: '400' }}>{student.missionCount}</h1>
                        <h1 style={{ flex: 4, color: "black", fontSize: '10px', fontWeight: '400' }}>{student.checkRatio.toFixed(0)}%</h1>
                    </div>
                ))
            }
        </div>
    );
}

export default StudentList;

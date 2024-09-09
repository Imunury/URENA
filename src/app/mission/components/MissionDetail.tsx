'use client'; // 클라이언트 사이드 렌더링을 명시합니다.

import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import useGetApi from '../../components/useGetApi';
import type { MissionData, StudentData } from '../../index';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];


interface MissionDetailProps {
    student_pk: string;
}

const MissionDetail: React.FC<MissionDetailProps> = ({ student_pk }) => {
    const { data: missions, error : missionerror } = useGetApi<MissionData[]>(`/api/mission_list?student_pk=${student_pk}`);
    const { data: students, error : studenterror } = useGetApi<StudentData[]>(
        student_pk ? `/api/student_list?student_pk=${student_pk}` : ''
    );
    const student = students ? students[0] : null;
    const [value, onChange] = useState<Value>(new Date());
    
    if (missionerror || studenterror) {
        return <div>Error</div>;
    }
    
    if (!missions || !student || missions.length === 0) {
        return <div>No data</div>;
    }
    
    // 특정 날짜에 해당하는 미션들 필터링
    const filteredMissions = missions.filter((m) => {
        if (Array.isArray(value)) {
            const [startDate, endDate] = value;
            if (startDate && endDate) {
                return moment(m.mission_date).subtract(1, 'day').isBetween(moment(startDate).startOf('day'), moment(endDate).endOf('day'), undefined, '[]');
            } else if (startDate) {
                return moment(m.mission_date).subtract(1, 'day').isSame(moment(startDate).startOf('day'), 'day');
            }
            return false;
        } else if (value) {
            return moment(m.mission_date).subtract(1, 'day').isSame(moment(value).startOf('day'), 'day');
        }
        return false;
    });

    return (
        <div>
            <div className="flex mt-7 justify-center items-center mx-7">
                <h1 className="text-2xl font-bold" style={{ fontSize: '16px', fontWeight: '600' }}>
                    미션 인증
                </h1>
            </div>
            <div className="flex mx-7 py-6 items-center" style={{ borderBottom: '1px solid #d1d5db' }}>
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>이름</h1>
                <h1 className="ml-3" style={{ fontSize: '14px', fontWeight: '600' }}>{student.name}</h1>
            </div>
            <div className="flex justify-between items-center mx-7 py-7" style={{ borderBottom: '1px solid #d1d5db' }}>
            <Calendar
                onChange={onChange}
                value={value}
                formatDay={(locale, date) => moment(date).format("DD")}
                locale='ko'
                showNeighboringMonth={false}
                minDetail='month'
                maxDetail='month'
                tileContent={({ date, view }) => {
                    const formattedDate = moment(date).subtract(-1, 'day').format("YYYY-MM-DD");
                    // 해당 날짜의 미션들을 찾음
                    const missionsForDate = missions.filter(m => moment(m.mission_date).format("YYYY-MM-DD") === formattedDate);

                    let checkStats = new Set(missionsForDate.map(m => m.check_stats));

                    let html = [];

                    if (missionsForDate.length > 0) {
                        if (checkStats.size === 1) {
                            const onlyCheckStat = [...checkStats][0];
                            if (onlyCheckStat === '1') {
                                html.push(<div key="complete" className="complete"></div>);
                            } else if (onlyCheckStat === '2') {
                                html.push(<div key="failed" className="failed"></div>);
                            } else {
                                html.push(<div key="partly" className="partly"></div>);
                            }
                        } else {
                            html.push(<div key="partly" className="partly"></div>);
                        }
                    } else {
                        html.push(<div key="empty" className="empty"></div>);
                    }

                    return (
                        <div className="flex justify-center items-center absoluteDiv">
                            {html}
                        </div>
                    );
                }}
            />

            </div>
            <div>
            <div className="flex mx-7 mt-3 mb-4" style={{textAlign:'center'}}>
                <h1 style={{ flex: 3 }}/>
                <h1 style={{ flex: 10,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>미션 제목</h1>
                <h1 style={{ flex: 4,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>인증 요일</h1>
                <h1 style={{ flex: 3,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>인증 상태</h1>
            </div>
            {   
             filteredMissions.map((mission, index) => {
                let backgroundColor;
                let status
                if (mission.check_stats === '1') {
                    backgroundColor = "#00C8A2";
                    status = "성공";
                } else if (mission.check_stats === '2') {
                    backgroundColor = "#BF1E2E";
                    status = "실패"
                } else if (mission.check_stats === '3') {
                    backgroundColor = "#E1AB3E";
                    status = "부분 성공"
                } else if (mission.check_stats === '4') {
                    backgroundColor = "black";
                    status = "예정"
                } else if (mission.check_stats === '5') {
                    backgroundColor = "gray";
                    status = "미션 없음"
                }

                return (
                    <div key={index} className="flex mx-7 mb-2 mt-2 pb-2" style={{textAlign:'center'}}>
                        <h1 style={{ flex: 3,color:"#34d399", fontSize:'10px', fontWeight:'400'}}>미션{index+1}</h1>
                        <h1 style={{ flex: 10,color:"black", fontSize:'10px', fontWeight:'400', textAlign:'left'}}>{mission.title} </h1>
                        <h1 style={{ flex: 4,color:"black", fontSize:'10px', fontWeight:'400'}}>매일</h1>
                        <button style={{ 
                            color:"white", fontSize:'8px', fontWeight:'600', flex: 3, borderRadius: '5px', backgroundColor , padding:'3px',
                            }}>{status}</button>
                    </div>
                );
            })
            }
        </div>
            <div className='flex' style={{ justifyContent: 'center' }}>
                <button className='m-3 px-3 py-1' style={{ borderRadius: '5px', backgroundColor: '#00C8A2', color: 'white', fontSize: '12px', fontWeight: '800' }}>등록</button>
                <button className='m-3 px-3 py-1' style={{ borderRadius: '5px', backgroundColor: '#D9D9D9', color: 'white', fontSize: '12px', fontWeight: '800' }}>취소</button>
            </div>
        </div>
    );
}

export default MissionDetail;

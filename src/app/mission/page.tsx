'use client'

import { useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import Calendar from 'react-calendar';
import moment from "moment";
import MissionList from './components/MissionList';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Mission {
    date: string;
    details: [string, string];
    status: string;
}

const Mission: React.FC = () => {
    const router = useRouter();
    const [value, onChange] = useState<Value>(new Date());
    const searchParams = useSearchParams();
    if (!searchParams) return null;
    const student_pk = searchParams.get('student_pk');

    let failed = ["2024-08-01", "2024-08-05"];
    let complete = ["2024-08-02", "2024-08-06", "2024-08-04"];
    let partly = ["2024-08-03", "2024-08-07"];

    let mission_list: [string, string][] = [
        ['미션1입니다', '월, 수, 금'],
        ['미션2입니다', '매일'],
        ['미션3입니다', '주말'],
        ['미션4입니다', '주말'],
        ['미션5입니다', '주말']
    ];

    let missions: Mission[] = [
        { date: '2024-08-01', details: mission_list[0], status: '성공' },
        { date: '2024-08-01', details: mission_list[1], status: '실패' },
        { date: '2024-08-01', details: mission_list[2], status: '부분 성공' },
        { date: '2024-08-01', details: mission_list[3], status: '예정' },
        { date: '2024-08-01', details: mission_list[4], status: '미션 없음' },
        { date: '2024-08-02', details: mission_list[2], status: '부분 성공' },
        { date: '2024-08-02', details: mission_list[3], status: '예정' },
        { date: '2024-08-02', details: mission_list[4], status: '미션 없음' }
    ];

    // 특정 날짜에 해당하는 미션들 필터링
    const filteredMissions = missions.filter(
        (m) => moment(m.date).format("YYYY-MM-DD") === moment(value).format("YYYY-MM-DD")
    );

    return (
        <div>
            <div className="flex mt-7 justify-center items-center mx-7">
                <h1 className="text-2xl font-bold" style={{ fontSize: '16px', fontWeight: '600' }}>
                    미션 인증
                </h1>
            </div>
            <div className="flex mx-7 py-6 items-center" style={{ borderBottom: '1px solid #d1d5db' }}>
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>이름</h1>
                <h1 className="ml-3" style={{ fontSize: '14px', fontWeight: '600' }}>{student_pk}</h1>
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
                        let html = [];
                        if (failed.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                            html.push(<div className="failed"></div>);
                        } else if (complete.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                            html.push(<div className="complete"></div>);
                        } else if (partly.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                            html.push(<div className="partly"></div>);
                        } else {
                            html.push(<div className="empty"></div>);
                        }
                        return (
                            <div className="flex justify-center items-center absoluteDiv">
                                {html}
                            </div>
                        );
                    }}
                />
            </div>
            <MissionList missions={filteredMissions} />
            <div className='flex' style={{ justifyContent: 'center' }}>
                <button className='m-3 px-3 py-1' style={{ borderRadius: '5px', backgroundColor: '#00C8A2', color: 'white', fontSize: '12px', fontWeight: '800' }}>등록</button>
                <button className='m-3 px-3 py-1' style={{ borderRadius: '5px', backgroundColor: '#D9D9D9', color: 'white', fontSize: '12px', fontWeight: '800' }}>취소</button>
            </div>
        </div>
    );
}

export default Mission;

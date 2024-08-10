'use client'

import { useState } from 'react';
import { useRouter, useSearchParams  } from "next/navigation"
import Calendar from 'react-calendar';
import moment from "moment";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Mission: React.FC = () => {
    let student = ['마철두', '010-8649-9856', 'complete']
    const router = useRouter()
    const [value, onChange] = useState<Value>(new Date());
    const searchParams = useSearchParams();
    if (!searchParams) return null;
    const student_pk = searchParams.get('student_pk');

    let failed = ["2024-08-01", "2024-08-05"]
    let complete = ["2024-08-02", "2024-08-06", "2024-08-04"]
    let partly = ["2024-08-03", "2024-08-07"]
    // failed complete partly 부분은 추후 성공실패알아서 계산해서 조절

    
    let mission_list = [['미션1입니다','월, 수, 금'], ['미션2입니다','매일'], ['미션3입니다','주말'], ['미션4입니다','주말'], ['미션5입니다','주말']]
    let mission = [
        ['2024-08-01', mission_list[0], '성공'], 
        ['2024-08-01', mission_list[1], '실패'], 
        ['2024-08-01', mission_list[2], '부분 성공'], 
        ['2024-08-01', mission_list[3], '예정'], 
        ['2024-08-01', mission_list[4], '미션 없음'],
        ['2024-08-02', mission_list[2], '부분 성공'], 
        ['2024-08-02', mission_list[3], '예정'], 
        ['2024-08-02', mission_list[4], '미션 없음']]
    return (
        <div>
            <div className="flex mt-7 justify-center items-center mx-7">
                <h1 className="text-2xl font-bold" style={{ fontSize: '16px' , fontWeight: '600'}}>
                    미션 인증
                </h1>
            </div>
            <div className="flex mx-7 py-6 items-center" style={{ borderBottom: '1px solid #d1d5db' }}>
                <h1 className="text-gray-400" style={{ fontSize: '10px' }}>이름</h1>
                <h1 className="ml-3" style={{ fontSize: '14px' , fontWeight: '600'}}>{student_pk}</h1>
            </div>
            <div className="flex justify-between items-center mx-7 py-7" style={{ borderBottom: '1px solid #d1d5db' }}>
                <Calendar onChange={onChange} value={value} 
                formatDay={(locale, date) => moment(date).format("DD")}
                locale='ko'
                showNeighboringMonth={false}
                minDetail='month'
                maxDetail='month'
                tileContent={({ date, view }) => { 
                    let html = [];
                    if (failed.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                    html.push(<div className="failed"></div>);
                    }
                    else if(complete.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                    html.push(<div className="complete"></div>);
                    }
                    else if (partly.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                    html.push(<div className="partly"></div>);
                    }
                    else {
                    html.push(<div className="empty"></div>);
                    }
                    return (
                    <>
                        <div className="flex justify-center items-center absoluteDiv">
                        {html}
                        </div>
                    </>
                    );
                }}/>
            </div>
            
            {   

                mission.map((mission, index) => (
                    moment(mission[0]).format("YYYY-MM-DD") === moment(value).format("YYYY-MM-DD") && 
                    <div key={index} className="flex px-7 mb-2 items-center">
                        <h1 className="text-emerald" style={{ fontSize: '10px', color:'#34d399' }}>미션{index+1}</h1>
                        {/* 미션 인덱스는 데이터베이스 불러올때 한번 처리해보는걸로. */}
                        <h1 className="ml-3" style={{ fontSize: '10px' , fontWeight: '600'}}>({mission[1][1]}) {mission[1][0]} {mission[2]}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Mission
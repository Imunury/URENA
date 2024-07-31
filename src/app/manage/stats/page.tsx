'use client'

import { useState } from 'react';
import { useRouter } from "next/navigation"
import Calendar from 'react-calendar';
import moment from "moment";
import ProgressBar from "@ramonak/react-progress-bar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Stats: React.FC = () => {
  let student = '마철두'
  let failed = ["2024-07-01", "2024-07-05"]
  let complete = ["2024-07-02", "2024-07-06", "2024-07-04"]
  let partly = ["2024-07-03", "2024-07-07"]

  let month_rate = 54.6
  let first_half_rate = 42.4
  let latter_half_rate = 99.8

  const [value, onChange] = useState<Value>(new Date());
  const router = useRouter()
  const check = () => {
    router.push('/manage')
  }

    return (
      <div>
        <div className="flex mt-7 justify-center items-center mx-7">
          <h1 className="text-2xl font-bold" style={{ fontSize: '16px' , fontWeight: '600'}}>
            {student} 미션 통계
          </h1>
        </div>
        <div className="flex mx-7 py-6 items-center" style={{ borderBottom: '1px solid #d1d5db' }}>
          <h1 className="text-gray-400" style={{ fontSize: '10px' }}>이름</h1>
          <h1 className="ml-3" style={{ fontSize: '14px' , fontWeight: '600'}}>{student}</h1>
        </div>
        <div className="flex mt-7 justify-between items-center mx-7">
            <h1 className="text-2xl font-bold" style={{ fontSize: '16px' , fontWeight: '600'}}>
              달성률
            </h1>
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
        <div className="mx-7">
          <h1 className="text-gray-400 font-bold mt-8" style={{ fontSize: '10px' , fontWeight: '600'}}>
            월간 달성률
          </h1>
          <h1 className="text-2xl font-bold mb-1" style={{ fontSize: '16px' , fontWeight: '600'}}>
            {month_rate}%
          </h1>
          <ProgressBar completed={month_rate}
            maxCompleted={100}
            bgColor='#00c8a2'
            labelColor="#00000000"
            height='15px'/>
        </div>
        <div className="mx-7">
          <h1 className="text-gray-400 font-bold mt-8" style={{ fontSize: '10px' , fontWeight: '600'}}>
            상반기 달성률
          </h1>
          <h1 className="text-2xl font-bold mb-1" style={{ fontSize: '16px' , fontWeight: '600'}}>
            {first_half_rate}%
          </h1>
          <ProgressBar completed={first_half_rate}
            maxCompleted={100}
            bgColor='#00c8a2'
            labelColor="#00000000"
            height='15px'/>
        </div>
        <div className="mx-7 pb-10" style={{ borderBottom: '1px solid #d1d5db' }}>
          <h1 className="text-gray-400 font-bold mt-8 " style={{ fontSize: '10px' , fontWeight: '600'}}>
            하반기 달성률
          </h1>
          <h1 className="text-2xl font-bold mb-1" style={{ fontSize: '16px' , fontWeight: '600'}}>
            {latter_half_rate}%
          </h1>
          <ProgressBar completed={latter_half_rate}
            maxCompleted={100}
            bgColor='#00c8a2'
            labelColor="#00000000"
            height='15px'/>
        </div>
        <div className="flex px-7 mt-9 items-center justify-between">
          <h1 className="text-gray-400" style={{ flex:'1', fontSize: '9px', fontWeight: '600', textAlign:'center'}}>월간 미션 완료</h1>
          <h1 className="text-gray-400" style={{ flex:'1', fontSize: '9px', fontWeight: '600', textAlign:'center' }}>상반기 미션 완료</h1>
          <h1 className="text-gray-400" style={{ flex:'1', fontSize: '9px', fontWeight: '600', textAlign:'center' }}>하반기 미션 완료</h1>
        </div>
        <div className="flex px-7 mt-1 mb-9 items-center justify-between">
          <h1 className="" style={{ flex:'1', fontSize: '14px' , fontWeight: '600', textAlign:'center'}}>{complete.length}/30</h1>
          <h1 className="" style={{ flex:'1', fontSize: '14px' , fontWeight: '600', textAlign:'center'}}>143/160</h1>
          <h1 className="" style={{ flex:'1', fontSize: '14px' , fontWeight: '600', textAlign:'center'}}>120/160</h1>
        </div>
        <div className="flex m-auto" style={{ width:'50px', borderBottom: '1px solid #d1d5db' }}/>
        <div className="flex px-7 mt-9 items-center justify-between">
          <h1 className="text-gray-400" style={{ flex:'1', fontSize: '9px', fontWeight: '600', textAlign:'center'}}>월간 평균 달성률</h1>
          <h1 className="text-gray-400" style={{ flex:'1', fontSize: '9px', fontWeight: '600', textAlign:'center' }}>상반기 평균 달성률</h1>
          <h1 className="text-gray-400" style={{ flex:'1', fontSize: '9px', fontWeight: '600', textAlign:'center' }}>하반기 평균 달성률</h1>
        </div>
        <div className="flex px-7 mt-1 mb-9 items-center justify-between">
          <h1 className="" style={{ flex:'1', fontSize: '14px' , fontWeight: '600', textAlign:'center'}}>65.1%</h1>
          <h1 className="" style={{ flex:'1', fontSize: '14px' , fontWeight: '600', textAlign:'center'}}>70.8%</h1>
          <h1 className="" style={{ flex:'1', fontSize: '14px' , fontWeight: '600', textAlign:'center'}}>90.0%</h1>
        </div>
        <div className="flex m-auto" style={{ width:'50px', borderBottom: '1px solid #d1d5db' }}/>
        <div className="flex px-7 mt-9 items-center justify-between">
          <h1 className="text-gray-400" style={{ flex:'1', fontSize: '9px', fontWeight: '600', textAlign:'center'}}>주중 미션 완료</h1>
          <h1 className="text-gray-400" style={{ flex:'1', fontSize: '9px', fontWeight: '600', textAlign:'center' }}>주말 미션 완료</h1>
        </div>
        <div className="flex px-7 mt-1 mb-9 items-center justify-between">
          <h1 className="" style={{ flex:'1', fontSize: '14px' , fontWeight: '600', textAlign:'center'}}>39/60</h1>
          <h1 className="" style={{ flex:'1', fontSize: '14px' , fontWeight: '600', textAlign:'center'}}>5/15</h1>
        </div>
        <div className="flex justify-center mt-5">
            <button className="bg-emerald-400 text-white px-3 py-1 rounded-md" 
            style={{ fontSize: '12px', fontWeight: '400'}}
            onClick={check}>확인</button>
          </div>
      </div> 
    );
  };
  
  export default Stats;
  
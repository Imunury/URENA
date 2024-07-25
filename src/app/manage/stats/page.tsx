'use client'

import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from "moment";
import ProgressBar from "@ramonak/react-progress-bar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Home: React.FC = () => {
  let student = '마철두'
  let failed = ["2024-07-01", "2024-07-05"]
  let complete = ["2024-07-02", "2024-07-06", "2024-07-04"]
  let partly = ["2024-07-03", "2024-07-07"]

  let month_rate = 54.6
  let first_half_rate = 42.4
  let latter_half_rate = 99.8

  const [value, onChange] = useState<Value>(new Date());

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
      </div>
    );
  };
  
  export default Home;
  
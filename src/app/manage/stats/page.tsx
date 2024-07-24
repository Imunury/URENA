'use client'

import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from "moment";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Home: React.FC = () => {
  let student = '마철두'
  let month = 5
  let mark = ["2024-07-01", "2024-07-05"]

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
        <div className="flex justify-between items-center mx-7">
          <Calendar onChange={onChange} value={value} 
          formatDay={(locale, date) => moment(date).format("DD")}
          locale='ko'
          showNeighboringMonth={false}
          minDetail='month'
          maxDetail='month'
          tileContent={({ date, view }) => { 
            let html = [];
            if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
              html.push(<div className="dot"></div>);
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
      </div>
    );
  };
  
  export default Home;
  
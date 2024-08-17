'use client'

import React from "react"

const students = [
    {
        id: 1,
        name: '김석두',
        grade: '고1',
        parent: '박창식',
        phone: '010-1234-5678',
        moti: '마덕팔',
        state: '1',
    },
    {
        id: 3,
        name: '김춘삼',
        grade: '대3',
        parent: '황춘배',
        phone: '010-1234-5678',
        moti: '최현수',
        state: '2',
    },
    {
        id: 7,
        name: '김길규',
        grade: '초2',
        parent: '한석규',
        phone: '010-1234-5678',
        moti: '장덕배',
        state: '3',
    },
];

const StudentList: React.FC = () => {

    return (
        <div>
            <h1 className="mx-7 pb-4" style={{ color:"#34d399", fontSize: '10px' , textAlign:'right', fontWeight: '600', marginTop: '30px', marginBottom:'10px', borderBottom: '1px solid #d1d5db'}}>담당 학생 통계</h1>
            <div className="flex justify-between items-center mx-7 pb-3" style={{ borderBottom: '1px solid #d1d5db' }}>
                <h1 className="font-bold" style={{ fontSize: '12px' , fontWeight: '600'}}>
                    담당 학생 목록
                </h1>
                <button className="text-gray-400 font-bold" style={{ fontSize: '10px' , fontWeight: '600'}}>
                    수정
                </button>
            </div>
            <div className="flex mx-7 mt-3" style={{textAlign:'center'}}>
                <h1 style={{ flex: 2 }}/>
                <h1 style={{ flex: 3,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>이름</h1>
                <h1 style={{ flex: 4,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>학년</h1>
                <h1 style={{ flex: 4,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>부모님</h1>
                <h1 style={{ flex: 8,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>연락처</h1>
                <h1 style={{ flex: 4,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>담당</h1>
            </div>
            {   
            students.map((student, index) => {
                let backgroundColor;
                if (student.state === '1') {
                    backgroundColor = "#00C8A2";
                } else if (student.state === '2') {
                    backgroundColor = "#E1AB3E";
                } else if (student.state === '3') {
                    backgroundColor = "#BF1E2E";
                }

                return (
                    <div key={index} className="flex mx-7 mb-2 mt-2 pb-2 items-center" style={{textAlign:'center', borderBottom: '1px solid #d1d5db'}}>
                        <h1 style={{ flex: 2,color:"black", fontSize:'10px', fontWeight:'400'}}>{index+1}</h1>
                        <button style={{ 
                            color:"white", fontSize:'10px', fontWeight:'600', flex: 3, borderRadius: '5px', backgroundColor , padding:'3px',
                            }}>{student.name}</button>
                        <h1 style={{ flex: 4,color:"black", fontSize:'10px', fontWeight:'400'}}>{student.grade}</h1>
                        <h1 style={{ flex: 4,color:"black", fontSize:'10px', fontWeight:'400'}}>{student.parent}</h1>
                        <h1 style={{ flex: 8,color:"black", fontSize:'10px', fontWeight:'400'}}>{student.phone}</h1>
                        <h1 style={{ flex: 4,color:"black", fontSize:'10px', fontWeight:'400'}}>{student.moti}</h1>
                    </div>
                );
            })
            }
            <div className="flex" style={{justifyContent:'flex-end'}}>
                <button className="mx-7 pb-4" style={{ color:"#34d399", fontSize: '8px' , fontWeight: '400', marginBottom:'10px'}}>+ 학생 추가</button>
            </div>
        </div>
    )
}

export default StudentList

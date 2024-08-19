'use client'

import React from "react"

interface Mission {
    date: string;
    details: [string, string];
    status: string;
}

interface MissionListProps {
    missions: Mission[];
}

const MissionList: React.FC<MissionListProps> = ({ missions }) => {

    return (
        <div>
            <div className="flex mx-7 mt-3 mb-4" style={{textAlign:'center'}}>
                <h1 style={{ flex: 3 }}/>
                <h1 style={{ flex: 10,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>미션 제목</h1>
                <h1 style={{ flex: 4,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>인증 요일</h1>
                <h1 style={{ flex: 3,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>인증 상태</h1>
            </div>
            {   
             missions.map((mission, index) => {
                let backgroundColor;
                if (mission.status === '성공') {
                    backgroundColor = "#00C8A2";
                } else if (mission.status === '부분 성공') {
                    backgroundColor = "#E1AB3E";
                } else if (mission.status === '실패') {
                    backgroundColor = "#BF1E2E";
                } else if (mission.status === '예정') {
                    backgroundColor = "black";
                } else if (mission.status === '미션 없음') {
                    backgroundColor = "gray";
                }

                return (
                    <div key={index} className="flex mx-7 mb-2 mt-2 pb-2" style={{textAlign:'center'}}>
                        <h1 style={{ flex: 3,color:"#34d399", fontSize:'10px', fontWeight:'400'}}>미션{index+1}</h1>
                        <h1 style={{ flex: 10,color:"black", fontSize:'10px', fontWeight:'400', textAlign:'left'}}>({mission.details[1]}) {mission.details[0]} </h1>
                        <h1 style={{ flex: 4,color:"black", fontSize:'10px', fontWeight:'400'}}>매일</h1>
                        <button style={{ 
                            color:"white", fontSize:'8px', fontWeight:'600', flex: 3, borderRadius: '5px', backgroundColor , padding:'3px',
                            }}>{mission.status}</button>
                    </div>
                );
            })
            }
        </div>
    )
}

export default MissionList

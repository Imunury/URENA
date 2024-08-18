'use client'

import { useState } from "react";
import { useRouter } from "next/navigation"

const motis = [
    {
        id: 1,
        name: '김석두',
        phone: '010-1234-5678',
        student: ['마덕팔','김법장'],
        state: '수행 중',
    },
    {
        id: 3,
        name: '김춘삼',
        phone: '010-1234-5678',
        student: ['최길현'],
        state: '휴식 중',
    },
    {
        id: 7,
        name: '김길규',
        phone: '010-1234-5678',
        student: ['곽팔춘', '테리우스장'],
        state: '퇴사',
    },
    {
        id: 75,
        name: '한석우',
        phone: '010-1234-5678',
        student: ['곽팔춘', '테리우스장'],
        state: '모집됨',
    },
];

const MotiList: React.FC = () => {
    const router = useRouter()
    const moti_detail = (motiName: string) => {
        router.push(`/moti?moti_pk=${motiName}`);
    }
    const [isEditMode, setIsEditMode] = useState(false);

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    }
    return (
        <div>
            <div className="flex justify-between items-center mx-7 pb-3" style={{ borderBottom: '1px solid #d1d5db' }}>
                <h1 className="font-bold" style={{ fontSize: '12px' , fontWeight: '600'}}>
                    모티 목록
                </h1>
                {!isEditMode ? <button style={{ color: '#AFAFAF', fontSize: '10px' , fontWeight: '600'}} onClick={toggleEditMode}>
                    수정
                </button> : <button style={{ color:'#00C8A2', fontSize: '10px' , fontWeight: '600'}} onClick={toggleEditMode}>
                    완료
                </button>}
                
            </div>
            <div className="flex mx-7 mt-3" style={{textAlign:'center'}}>
                {isEditMode && <h1 style={{ flex: 1 }}/>}
                <h1 style={{ flex: 1 }}/>
                <h1 style={{ flex: 1,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>이름</h1>
                <h1 style={{ flex: 3,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>연락처</h1>
                <h1 style={{ flex: 2,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>관리 인원 수</h1>
                <h1 style={{ flex: 1,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>현재 상태</h1>
            </div>
            {   
            motis.map((moti, index) => {
                let backgroundColor;
                if (moti.state === '수행 중') {
                    backgroundColor = "#00C8A2";
                } else if (moti.state === '휴식 중') {
                    backgroundColor = "#E1AB3E";
                } else if (moti.state === '퇴사') {
                    backgroundColor = "#AFAFAF";
                } else if (moti.state === '모집됨') {
                    backgroundColor = "#254194";
                }

                return (
                    <div key={index} className="flex mx-7 mb-2 mt-2 pb-2 items-center" style={{textAlign:'center', borderBottom: '1px solid #d1d5db'}}>
                        {isEditMode && <button style={{ flex: 1, color: '#00C8A2', fontSize: '8px' }}>편집</button>}
                        <h1 style={{ flex: 1,color:"black", fontSize:'10px', fontWeight:'400'}}>{index+1}</h1>
                        <button style={{ flex: 1,color:"black", fontSize:'10px', fontWeight:'600'}} onClick={() => moti_detail(moti.name)}>{moti.name}</button>
                        <h1 style={{ flex: 3,color:"black", fontSize:'10px', fontWeight:'400'}}>{moti.phone}</h1>
                        <h1 style={{ flex: 2,color:"black", fontSize:'10px', fontWeight:'400'}}>{moti.student.length}명</h1>
                        <button style={{ 
                            color:"white", fontSize:'10px', fontWeight:'600', flex: 1, borderRadius: '5px', backgroundColor , padding:'3px',
                            }}>{moti.state}</button>
                    </div>
                );
            })
            }
            <div className="flex" style={{justifyContent:'flex-end'}}>
                <button className="mx-7 pb-4" style={{ color:"#34d399", fontSize: '8px' , fontWeight: '400', marginBottom:'10px'}}>+ 모티 추가</button>
            </div>
        </div>
    )
}

export default MotiList

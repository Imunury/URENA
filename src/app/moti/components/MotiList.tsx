'use client'

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import type { MotiData } from '../../index';
import useGetApi from '../../components/useGetApi';

const MotiList: React.FC = () => {
    const { data: motis, error } = useGetApi<MotiData[]>('/api/moti_list');

    const router = useRouter()
    const [isEditMode, setIsEditMode] = useState(false);

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    }

    const moti_detail = (motiName: string) => {
        router.push(`/moti?moti_pk=${motiName}`);
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!motis || motis.length === 0) {
        return <div>No data</div>;
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
                    let statusText;
                    switch(moti.work_state) {
                        case '1':
                            statusText = '수행 중';
                            backgroundColor = "#00C8A2";
                            break;
                        case '2':
                            statusText = '휴식 중';
                            backgroundColor = "#E1AB3E";
                            break;
                        case '3':
                            statusText = '퇴사';
                            backgroundColor = "#AFAFAF";
                            break;
                        case '4':
                            statusText = '모집됨';
                            backgroundColor = "#254194";
                            break;
                        default:
                            statusText = '';
                            backgroundColor = 'transparent';
                    }

                    return (
                        <div key={index} className="flex mx-7 mb-2 mt-2 pb-2 items-center" style={{textAlign:'center', borderBottom: '1px solid #d1d5db'}}>
                            {isEditMode && <button style={{ flex: 1, color: '#00C8A2', fontSize: '8px' }}>편집</button>}
                            <h1 style={{ flex: 1,color:"black", fontSize:'10px', fontWeight:'400'}}>{index+1}</h1>
                            <button style={{ flex: 1,color:"black", fontSize:'10px', fontWeight:'600'}} onClick={() => moti_detail(moti.name)}>{moti.name}</button>
                            <h1 style={{ flex: 3,color:"black", fontSize:'10px', fontWeight:'400'}}>{moti.phone}</h1>
                            <h1 style={{ flex: 2,color:"black", fontSize:'10px', fontWeight:'400'}}>{moti.student_count}</h1>
                            <button style={{ 
                                color:"white", fontSize:'10px', fontWeight:'600', flex: 1, borderRadius: '5px', backgroundColor , padding:'3px',
                                }}>{statusText}</button>
                </div>
                );
            })
            }
        </div>
    )
}

export default MotiList

import { useState } from "react";
import type { StudentData } from '../../index';
import { useRouter } from "next/navigation"

interface DataProps {
    data: StudentData[];
}

const StudentList: React.FC<DataProps> = ({ data }) => {

    console.log(data)
    const router = useRouter()
    const [isEditMode, setIsEditMode] = useState(false);

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    }

    const student_detail = (studentPk: string) => {
        router.push(`/manage?student_pk=${studentPk}`);
    }

    return (
        <div>
            <div className="flex justify-between items-center mx-7 pb-3" style={{ borderBottom: '1px solid #d1d5db' }}>
                <h1 className="font-bold" style={{ fontSize: '12px' , fontWeight: '600'}}>
                    학생 목록
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
                <h1 style={{ flex: 1,color:"#AFAFAF", fontSize:'8px', fontWeight:'400', paddingLeft:'3px', paddingRight:'3px'}}>이름</h1>
                <h1 style={{ flex: 1,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>학년</h1>
                <h1 style={{ flex: 1,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>부모님</h1>
                <h1 style={{ flex: 3,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>연락처</h1>
                <h1 style={{ flex: 1,color:"#AFAFAF", fontSize:'8px', fontWeight:'400'}}>담당</h1>
            </div>
            {   
                data.map((data, index) => {
                    let backgroundColor;
                    switch(data.service_state) {
                        case '1':
                            backgroundColor = "#00C8A2";
                            break;
                        case '2':
                            backgroundColor = "#E1AB3E";
                            break;
                        case '3':
                            backgroundColor = "#AFAFAF";
                            break;
                        case '4':
                            backgroundColor = "#254194";
                            break;
                        default:
                            backgroundColor = 'transparent';
                    }

                    return (
                        <>
                            <div key={index} className="flex mx-7 mb-2 mt-2 pb-2 items-center" style={{textAlign:'center', borderBottom: '1px solid #d1d5db'}}>
                                {isEditMode && <button style={{ flex: 1, color: '#00C8A2', fontSize: '8px' }}>편집</button>}
                                <h1 style={{ flex: 1,color:"black", fontSize:'10px', fontWeight:'400'}}>{index+1}</h1>
                                <button onClick={() => student_detail(data.student_pk)} style={{ 
                                    color:"white", fontSize:'10px', fontWeight:'600', flex: 1, borderRadius: '5px', backgroundColor , padding:'3px',
                                    }}>{data.name}</button>
                                <h1 style={{ flex: 1,color:"black", fontSize:'10px', fontWeight:'400'}}>{data.grade}</h1>
                                <h1 style={{ flex: 1,color:"black", fontSize:'10px', fontWeight:'400'}}>{data.parent}</h1>
                                <h1 style={{ flex: 3,color:"black", fontSize:'10px', fontWeight:'400'}}>{data.phone}</h1>
                                <h1 style={{ flex: 1,color:"black", fontSize:'10px', fontWeight:'400'}}>{data.moti_name}</h1>
                            </div>
                        </>
                );
            })
            }
        </div>
    )
}

export default StudentList
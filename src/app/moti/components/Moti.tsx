'use client'

import { useSearchParams  } from "next/navigation";
import MotiList from '../components/MotiList';
import MotiDetail from "./MotiDetail";

    
const Moti: React.FC = () => {
    const searchParams = useSearchParams();
    if (!searchParams) {return null;}
    const moti_pk = searchParams.get('moti_pk');

    if (moti_pk === null) {return (
        <>
            <MotiList/>
            <div className="flex" style={{justifyContent:'flex-end'}}>
                <button className="mx-7 pb-4" style={{ color:"#34d399", fontSize: '8px' , fontWeight: '400', marginBottom:'10px'}}>+ 모티 추가</button>
            </div>
            <div className='flex' style={{justifyContent:'center'}}>
                <button className='m-3 px-3 py-1' style={{ borderRadius:'5px', backgroundColor:'#00C8A2', color:'white', fontSize:'12px', fontWeight:'800'}}>확인</button>
                <button className='m-3 px-3 py-1' style={{ borderRadius:'5px', backgroundColor:'#D9D9D9', color:'white', fontSize:'12px', fontWeight:'800'}}>취소</button>
            </div>
        </>
    )}
    
    else {return (
        <>
            <MotiDetail moti_pk={moti_pk}/>
            <div className='flex' style={{justifyContent:'center'}}>
                <button className='m-3 px-3 py-1' style={{ borderRadius:'5px', backgroundColor:'#00C8A2', color:'white', fontSize:'12px', fontWeight:'800'}}>확인</button>
                <button className='m-3 px-3 py-1' style={{ borderRadius:'5px', backgroundColor:'#D9D9D9', color:'white', fontSize:'12px', fontWeight:'800'}}>취소</button>
            </div>
        </>
    )}
}

export default Moti
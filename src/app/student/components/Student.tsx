'use client'

import { useEffect, useState } from "react";
import Link from "next/link"
import StudentList from "./StudentList"
import type { StudentData } from '../../index';
import useGetApi from '../../components/useGetApi';

const Student: React.FC = () => {

    const { data: students, error} = useGetApi<StudentData[]>(`/api/student_list`);

    if (!students || students.length === 0) {
        return <div>No data</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <StudentList data={students} />
            <div className="flex" style={{justifyContent:'flex-end'}}>
                <button className="mx-7 pb-4" style={{ color:"#34d399", fontSize: '8px' , fontWeight: '400', marginBottom:'10px'}}>+ 모티 추가</button>
            </div>
            <div className='flex' style={{justifyContent:'center'}}>
                <Link href="/home"><button className='m-3 px-3 py-1' style={{ borderRadius:'5px', backgroundColor:'#D9D9D9', color:'white', fontSize:'12px', fontWeight:'800'}}>뒤로가기</button></Link>
            </div>
        </>
    )
}

export default Student
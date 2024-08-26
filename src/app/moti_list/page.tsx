'use client'


import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import type { Data } from '..';
import DataList from './components/DataList';

const Moti: React.FC = () => {
    let moti = ['마철두', '010-8649-9856', 'complete']
    const router = useRouter()
    const searchParams = useSearchParams();
    if (!searchParams) return null;

    const [motis, setMotis] = useState<Data[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function getMotiList() {
            try {
                const res = await fetch('/api/moti_list');
                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
                const data = await res.json();
                setMotis(data);
            } catch (error) {
                setError('Failed to load data');
                console.error('Fetching error:', error);
            }
        }
        getMotiList();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='flex flex-col mx-7'>
            <h1 className="text-emerald-400 text-4xl font-bold mt-5 mb-7 m-auto">
                URENA
            </h1>
            <div className="flex mt-7 justify-between items-center border-gray-300 border-solid border-y-2 py-1">
                <h1 className="text-2xl font-bold" style={{ fontSize: '16px', fontWeight: '600' }}>
                    모티 목록
                </h1>
                <h1 className="text-gray-400 font-bold" style={{ fontSize: '14px', fontWeight: '600' }}>
                    수정
                </h1>
            </div>
            {/* <DataList data={motis} /> */}
            <div className='flex justify-end pt-3'>
                <h1 className='text-emerald-400'>+ 모티 추가</h1>
            </div>
        </div>
    )
}

export default Moti
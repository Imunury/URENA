'use client'

import { useState, useEffect } from "react";
import DataList from './DataList'
import type { MotiData } from '../../index';

const MotiList: React.FC = () => {

    const [motis, setMotis] = useState<MotiData[]>([]);
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
        <div>
            
            <DataList data={motis} />
            <div className="flex" style={{justifyContent:'flex-end'}}>
                <button className="mx-7 pb-4" style={{ color:"#34d399", fontSize: '8px' , fontWeight: '400', marginBottom:'10px'}}>+ 모티 추가</button>
            </div>
        </div>
    )
}

export default MotiList

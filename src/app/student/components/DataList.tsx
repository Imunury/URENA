'use client'

import { useEffect, useState } from "react"

interface Moti {
    name: string,
    phone: string,
    work_state: string
}

const DataList: React.FC = () => {

    const [motis, setMotis] = useState<Moti[]>([]);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        async function getMotiList() {
            try {
                const res = await fetch('/api/moti_list');
                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
                const data = await res.json();
                if (!Array.isArray(data)) {
                    throw new Error('Data is not an array');
                }
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
            <ul>
                {motis.map((moti) => (
                    <li key={moti.name}>{moti.name}</li>
                ))}
            </ul>
            <ul>
                {motis.map((moti) => (
                    <li key={moti.phone}>{moti.phone}</li>
                ))}
            </ul>
            <ul>
                {motis.map((moti) => (
                    <li key={moti.work_state}>{moti.work_state}</li>
                ))}
            </ul>
        </div>
    )
}

export default DataList
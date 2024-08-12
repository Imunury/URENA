'use client'

import { useEffect, useState } from "react"

interface Moti {
    name: string,
    phone: string,
    work_state: string
}

const DataList: React.FC = () => {

    const [motis, setMotis] = useState<Moti[]>([]);
<<<<<<< HEAD
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
=======

    useEffect(() => {
        async function getMotiList() {
            const res = await fetch('/api/moti_list')
            const data = await res.json()
            setMotis(data);
>>>>>>> f40050a9c128065304969c5f12303fbffa746d30
        }
        getMotiList();
    }, []);

<<<<<<< HEAD
    if (error) {
        return <div>Error: {error}</div>;
    }
=======
>>>>>>> f40050a9c128065304969c5f12303fbffa746d30
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
<<<<<<< HEAD
            <ul>
                {motis.map((moti) => (
                    <li key={moti.work_state}>{moti.work_state}</li>
                ))}
            </ul>
=======
>>>>>>> f40050a9c128065304969c5f12303fbffa746d30
        </div>
    )
}

export default DataList
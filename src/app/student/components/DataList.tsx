'use client'

import { useEffect, useState } from "react"

interface Moti {
    name: string,
    phone: string,
    work_state: string
}

const DataList: React.FC = () => {

    const [motis, setMotis] = useState<Moti[]>([]);

    useEffect(() => {
        async function getMotiList() {
            const res = await fetch('/api/moti_list')
            const data = await res.json()
            setMotis(data);
        }
        getMotiList();
    }, []);

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
        </div>
    )
}

export default DataList
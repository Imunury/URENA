'use client'

import { useEffect, useState } from "react";
import DataList from "./components/DataList"
import type { StudentData } from '../index';

const Student: React.FC = () => {

    const [motis, setMotis] = useState<StudentData[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function getMotiList() {
            try {
                const res = await fetch('/api/student_list');
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
        <DataList data={motis} />
    )
}

export default Student
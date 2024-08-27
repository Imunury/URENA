import { Suspense } from 'react';
import Stats from '../components/Stats';

const Page: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Stats />
        </Suspense>
    );
};

export default Page;

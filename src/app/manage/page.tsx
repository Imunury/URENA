import { Suspense } from 'react';
import Manage from './components/Manage';

const Page: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Manage />
        </Suspense>
    );
};

export default Page;

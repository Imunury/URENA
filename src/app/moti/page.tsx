import { Suspense } from 'react';
import Moti from './components/Moti';

const Page: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Moti />
        </Suspense>
    );
};

export default Page;

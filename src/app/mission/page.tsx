import { Suspense } from 'react';
import Mission from './components/Mission';

const Page: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Mission />
        </Suspense>
    );
};

export default Page;

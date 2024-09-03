import { Suspense } from 'react';
import Student from './components/Student';

const Page: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Student />
        </Suspense>
    );
};

export default Page;

// page.tsx

import dynamic from 'next/dynamic';

const ClientManage = dynamic(() => import('./components/ManageList'), { ssr: false });

const ManagePage: React.FC = () => {
  return (
    <div>
      <ClientManage />
    </div>
  );
};

export default ManagePage;

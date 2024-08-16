import type { Data } from '../../index';

interface DataProps {
    data: Data[];
}

const DataList: React.FC<DataProps> = ({ data }) => {

    console.log(data)

    return (
        <div>
            <ul>
                <div className='flex justify-around text-gray-400 pb-2'>
                    <h1>&nbsp;</h1>
                    <h1>이름</h1>
                    <h1>연락처</h1>
                    <h1>관리 인원 수</h1>
                    <h1>현재 상태</h1>
                </div>

                {data.map((data) => (
                    <li className='border-b-2 py-2' key={data.moti_pk}>
                        <div className='flex justify-around'>
                            <h1>{data.moti_pk}</h1>
                            <h1 className='font-bold'>{data.name}</h1>
                            <h1>{data.phone}</h1>
                            <h1>2명</h1>
                            <h1>{data.work_state}</h1>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DataList
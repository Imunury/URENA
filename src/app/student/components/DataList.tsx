import type { Data } from '../../index';

interface DataProps {
    data: Data[]
}

const DataList: React.FC<DataProps> = ({ data }) => {

    return (
        <div>
            <ul>
                {/* <li key={data[0].name}>{data[0].name}</li> */}
            </ul>
            <ul>
                {/* <li key={data[0].phone}>{data[0].phone}</li> */}
            </ul>
            <ul>
                {/* <li key={data[0].work_state}>{data[0].work_state}</li> */}
            </ul>
        </div>
    )
}

export default DataList
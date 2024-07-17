const Home: React.FC = () => {

    return (
      <section className='h-full w-full flex justify-center'>
        <div className="border-solid border-2 border-gray-300 w-2/3 flex flex-col">
          <h1 className="text-emerald-400 text-4xl font-bold mt-5 mb-7 m-auto">
            URENA
          </h1>
          <div className="flex mt-7 justify-between items-center mx-7">
            <h1 className="text-2xl font-bold">
              학생 정보
            </h1>
            <h1 className="text-gray-400 font-bold">
              수정
            </h1>
          </div>
          <div className="flex px-7 mt-9 items-center justify-between">
            <h1 className="text-gray-400" style={{ fontSize: '12px' }}>이름</h1>
            <h1 className="" style={{ fontWeight: '600' }}>마철두</h1>
            <h1 className="text-gray-400" style={{ fontSize: '12px' }}>연락처</h1>
            <h1 className="" style={{ fontSize: '14px' , fontWeight: '600' }}>010-8649-9856</h1>
            <h1 className="text-gray-400" style={{ fontSize: '12px' }}>부모님</h1>
            <h1 className="" style={{ fontWeight: '600' }}>황대길</h1>
            </div>
          <div className="flex mx-7 mt-6 pb-6 items-center justify-between" style={{ borderBottom: '1px solid #d1d5db' }}>
            <h1 className="text-gray-400" style={{ fontSize: '12px' }}>학교</h1>
            <h1 className="" style={{ fontSize: '14px' , fontWeight: '600' }}>전남고등학교</h1>
            <h1 className="text-gray-400" style={{ fontSize: '12px' }}>학년</h1>
            <h1 className="" style={{ fontWeight: '600' }}>2학년</h1>
            <h1 className="text-gray-400" style={{ fontSize: '12px' }}>진행상황</h1>
            <h1 className="" style={{ fontWeight: '600' }}>ㅇ</h1>
          </div>
          <div className="flex mt-7 justify-between items-center mx-7">
            <h1 className="text-2xl font-bold">
              메모
            </h1>
            <h1 className="text-gray-400 font-bold">
              수정
            </h1>
          </div>
          <div className="flex px-7 mt-9 items-center">
            <h1 className="text-gray-400" style={{ fontSize: '12px' }}>담당</h1>
            <h1 className="ml-3" style={{ fontSize: '14px' , fontWeight: '600'}}>홍길동</h1>
          </div>
          <div className="flex mx-7 mt-6 pb-3" >
            <h1 className="text-gray-400" style={{ fontSize: '12px' }}>메모</h1>
            <div>
              {/* 이부분 반복, 메모가 길어지면 ... 로 표시기능 추가 필 */}
              <h1 className="ml-3" style={{ fontSize: '12px' , fontWeight: '600'}}>메모내용입니다.</h1>
              <h1 className="ml-3" style={{ fontSize: '12px' , fontWeight: '600'}}>메모내용입니다.</h1>
            </div>
          </div>
            <h1 className="text-gray-400 mx-7 pb-4" style={{ fontSize: '12px' , textAlign:'right' , borderBottom: '1px solid #d1d5db' }}>더보기</h1>
        </div>
      </section>
    );
  };
  
  export default Home;
  
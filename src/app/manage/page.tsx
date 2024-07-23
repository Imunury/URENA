const Home: React.FC = () => {

    return (
      <section className='h-full w-full flex justify-center'>
        <div className="border-solid border-2 border-gray-300 w-2/3 flex flex-col">
          <h1 className="text-emerald-400 text-4xl font-bold mt-5 mb-7 m-auto">
            URENA
          </h1>
          <div className="flex mt-7 justify-between items-center mx-7">
            <h1 className="text-2xl font-bold" style={{ fontSize: '16px' , fontWeight: '600'}}>
              학생 정보
            </h1>
            <h1 className="text-gray-400 font-bold" style={{ fontSize: '14px' , fontWeight: '600'}}>
              수정
            </h1>
          </div>
          <div className="flex px-7 mt-9 items-center justify-between">
            <h1 className="text-gray-400" style={{ fontSize: '10px' }}>이름</h1>
            <h1 className="" style={{ fontSize: '12px', fontWeight: '600' }}>마철두</h1>
            <h1 className="text-gray-400" style={{ fontSize: '10px' }}>연락처</h1>
            <h1 className="" style={{ fontSize: '12px' , fontWeight: '600' }}>010-8649-9856</h1>
            <h1 className="text-gray-400" style={{ fontSize: '10px' }}>부모님</h1>
            <h1 className="" style={{ fontSize: '12px', fontWeight: '600' }}>황대길</h1>
            </div>
          <div className="flex mx-7 mt-6 pb-6 items-center justify-between" style={{ borderBottom: '1px solid #d1d5db' }}>
            <h1 className="text-gray-400" style={{ fontSize: '10px' }}>학교</h1>
            <h1 className="" style={{ fontSize: '12px' , fontWeight: '600' }}>전남고등학교</h1>
            <h1 className="text-gray-400" style={{ fontSize: '10px' }}>학년</h1>
            <h1 className="" style={{ fontSize: '12px', fontWeight: '600' }}>2학년</h1>
            <h1 className="text-gray-400" style={{ fontSize: '10px' }}>진행상황</h1>
            <h1 className="" style={{ fontSize: '12px', fontWeight: '600' }}>ㅇ</h1>
          </div>
          <div className="flex mt-7 justify-between items-center mx-7">
            <h1 className="text-2xl font-bold" style={{ fontSize: '16px' , fontWeight: '600'}}>
              메모
            </h1>
            <h1 className="text-gray-400 font-bold" style={{ fontSize: '14px' , fontWeight: '600'}}>
              수정
            </h1>
          </div>
          <div className="flex px-7 mt-9 items-center">
            <h1 className="text-gray-400" style={{ fontSize: '10px' }}>담당</h1>
            <h1 className="ml-3" style={{ fontSize: '14px' , fontWeight: '600'}}>홍길동</h1>
          </div>
          <div className="flex mx-7 mt-6 pb-3" >
            <h1 className="text-gray-400" style={{ fontSize: '10px' }}>메모</h1>
            <div>
              {/* 이부분 반복, 메모가 길어지면 ... 로 표시기능 추가 필 */}
              <h1 className="ml-3" style={{ fontSize: '12px' , fontWeight: '600'}}>메모내용입니다.</h1>
              <h1 className="ml-3" style={{ fontSize: '12px' , fontWeight: '600'}}>메모내용입니다.</h1>
            </div>
          </div>
          <h1 className="text-gray-400 mx-7 pb-4" style={{ fontSize: '10px' , textAlign:'right', fontWeight: '600' }}>더보기</h1>
          <div className="flex mt-7 mb-9 justify-between items-center mx-7">
            <h1 className="text-2xl font-bold" style={{ fontSize: '16px' , fontWeight: '600'}}>
              미션 정보
            </h1>
            <h1 className="text-gray-400 font-bold" style={{ fontSize: '14px' , fontWeight: '600'}}>
              수정
            </h1>
          </div>
          {/* 이부분 반복 */}
          <div className="flex px-7 mb-2 items-center">
            <h1 className="text-emerald" style={{ fontSize: '10px', color:'#34d399' }}>미션 1</h1>
            <h1 className="ml-3" style={{ fontSize: '10px' , fontWeight: '600'}}>(매일) 미션1내용입니다.</h1>
          </div>
          <div className="flex px-7 mb-2 items-center">
            <h1 className="text-emerald" style={{ fontSize: '10px', color:'#34d399' }}>미션 2</h1>
            <h1 className="ml-3" style={{ fontSize: '10px' , fontWeight: '600'}}>(월, 수, 금) 미션2내용입니다.</h1>
          </div>
          <div className="flex px-7 mb-2 items-center">
            <h1 className="text-emerald" style={{ fontSize: '10px', color:'#34d399' }}>미션 3</h1>
            <h1 className="ml-3" style={{ fontSize: '10px' , fontWeight: '600'}}>(주말) 미션3내용입니다.</h1>
          </div>
          <div className="flex justify-center mx-7 pt-5 mt-5" style={{ borderTop: '1px solid #d1d5db' }}>
            <button className="bg-gray-400 text-black px-4 py-2 rounded-md" style={{ fontSize: '16px', fontWeight: '600'}}>달성률 보기</button>
          </div>
          <div className="flex justify-center mt-5">
            <button className="bg-emerald-400 text-white px-3 py-1 rounded-md" style={{ fontSize: '12px', fontWeight: '400'}}>확인</button>
          </div>
        </div>
        
      </section>
    );
  };
  
  export default Home;
  
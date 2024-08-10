'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const Login: React.FC = () => {

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();


  const handleSumbit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (id === 'urena' && pw === '0000') {
      alert('로그인 성공')
      router.push('/home')
    } else {
      setError('로그인 실패! 아이디 또는 비밀번호를 확인하세요.');
    }
  }

  return (
    <section className='h-full w-full flex justify-center items-center'>
      <div className="border-solid border-2 border-emerald-400 rounded-lg w-2/3 h-2/3 flex flex-col justify-center items-center">
        <h1 className="text-emerald-400 text-3xl font-bold">
          URENA
        </h1>
        <form className="flex flex-col" onSubmit={handleSumbit}>
          <input className="bg-gray-300 rounded-md mt-5 h-8 text-center" type="text" placeholder="ID" onChange={(e) => setId(e.target.value)} />
          <input className="bg-gray-300 rounded-md mt-3 h-8 text-center" type="password " placeholder="Password" onChange={(e) => setPw(e.target.value)} />
          <button type="submit" className="bg-emerald-400 mt-5 px-5 py-1 rounded-md">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
